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

let target;
let actionTriggered = false;

const InfiniteList = ({ children, onLoadMore, count, scrollThreshold, disabled, scrollableTarget, listProps }) => {
    const muiStyles = useStyles();
    // const [actionTriggered, setActionTriggered] = useState(false);
    const [loading, setLoading] = useState(false);

    // set scrollTarget
    useEffect(() => {
        target = (() => {
            if (scrollableTarget instanceof HTMLElement)
                return scrollableTarget;
            if (typeof scrollableTarget === 'string') {
                return document.getElementById(scrollableTarget);
            }
    
            console.error('Error! You must pass scrollableTarget if there is not HTMLElement with id \'scrollable-target\'.');
            return document.body;
        })();
    }, []);

    useEffect(() => {
        actionTriggered = false;
        setLoading(false);

        const handleLoadMore = _.throttle(() => {
            if (actionTriggered) return;
    
            if ((target.scrollTop + target.clientHeight >= scrollThreshold * target.scrollHeight) && !disabled) {
                actionTriggered = true;
                setLoading(true);
                onLoadMore();
            }
        }, 500);

        // auto load more if less than a page
        if (target.scrollTop === 0) {
            handleLoadMore();
        }

        // scrolling event
        target.addEventListener('scroll', handleLoadMore);
        return () => target.removeEventListener('scroll', handleLoadMore);
    }, [count, disabled]);

    return (
        <div className={muiStyles.root} {...listProps}>
            {children}
            {!disabled && (
                <div className={muiStyles.loadContainer} style={{ visibility: loading ? 'visible' : 'hidden' }}>
                    <CircularProgress size={20} />
                </div>
            )}
        </div>
    );
}

InfiniteList.propTypes = {
    listProps: PropTypes.object,
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