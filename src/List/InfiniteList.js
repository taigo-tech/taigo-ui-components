import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import _ from 'lodash';

const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative',
        height: 'auto',
    },
    loadContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: `${theme.spacing()}px`,
    },
}));

let actionTriggered = false;

const InfiniteList = ({ children, onLoadMore, count, scrollThreshold, disabled, scrollableTarget }) => {
    const muiStyles = useStyles();
    const [loading, setLoading] = useState(false);

    const getScrollableTarget = () => {
        let target = null;
        if (scrollableTarget instanceof HTMLElement)
            target = scrollableTarget;
        if (typeof scrollableTarget === 'string') {
            target = document.getElementById(scrollableTarget);
        }

        if (!target) {
            console.error('Error! You must pass scrollableTarget if there is not HTMLElement with id \'scrollable-target\'.');
        }

        return target;
    };

    const _scrollHandler = _.throttle(() => {
        if (actionTriggered) return;

        const target = getScrollableTarget();
        if ((target.scrollTop + target.clientHeight >= scrollThreshold * target.scrollHeight) && !disabled) {
            actionTriggered = true;
            setLoading(true);
            onLoadMore();
        }
    }, 500);

    useEffect(() => {
        const target = getScrollableTarget();
        target.addEventListener('scroll', _scrollHandler);

        return () => target.removeEventListener('scroll', _scrollHandler);
    }, []);

    useEffect(() => {
        actionTriggered = false;
        setLoading(false);

        const target = getScrollableTarget();
        if (target.scrollTop === 0) {
            _scrollHandler();
        }
    }, [count]);

    return (
        <div className={muiStyles.root}>
            {children}
            <div className={muiStyles.loadContainer} style={{ visibility: loading ? 'visible' : 'hidden' }}>
                <CircularProgress size={20} />
            </div>
        </div>
    );
}

InfiniteList.propTypes = {
    onLoadMore: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired,
    scrollableTarget: PropTypes.node,
    scrollThreshold: PropTypes.number,
    disabled: PropTypes.bool,
};

InfiniteList.defaultProps = {
    scrollThreshold: 0.8,
    scrollableTarget: 'scrollable-target',
}

export default InfiniteList;