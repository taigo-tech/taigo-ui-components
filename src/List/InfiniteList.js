import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Scrollbars } from 'react-custom-scrollbars';

const useStyles = makeStyles(theme => ({
    loadContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: `${theme.spacing()}px`,
    },
    root: {
        position: 'relative',
        height: 'auto',
    }
}));

var isBottom = false;

const InfiniteList = (props) => {
    const muiStyles = useStyles();
    const { children, onLoadMore, loadMoreStates, loading, disabled, ...scrollProps } = props;

    const scrollHandle = (states, scrollContainer) => {
        const pad = 100;
        const t = ((scrollContainer.scrollTop + pad) / (scrollContainer.scrollHeight - scrollContainer.clientHeight));
        
        if (t > 1) {
            if (!loading && !disabled && !isBottom) {
                onLoadMore(states);
                isBottom = true;
            }
        } else {
            isBottom = false;
        };
    }

    useEffect(() => {
        const scrollContainer = document.getElementById('content-with-appbar');

        const _handler = () => { scrollHandle(loadMoreStates, scrollContainer); }
        scrollContainer.addEventListener('scroll', _handler);

        return () => scrollContainer.removeEventListener('scroll', _handler)
    }, [loadMoreStates])

    useEffect(() => {
        const scrollContainer = document.getElementById('content-with-appbar');
        
        if (scrollContainer.scrollTop === 0 && scrollContainer.clientHeight >= scrollContainer.scrollHeight) {
            onLoadMore(loadMoreStates);
        }
    }, [loadMoreStates])

    return (
        <div className={muiStyles.root}>
            {children}
            {
                loading && <div className={muiStyles.loadContainer}><CircularProgress /></div>
            }
        </div>
    );
}

InfiniteList.propTypes = {
    onLoadMore: PropTypes.func.isRequired,
    data: PropTypes.arrayOf(PropTypes.element),
    loading: PropTypes.bool,
    //Used to force stop infinite loading if required
    disabled: PropTypes.bool,
};

InfiniteList.defaultProps = {

}

export default InfiniteList;