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
    const { children, onLoadMore, loadMoreStates, loading, stopLoad, ...scrollProps } = props;

    const scrollHandle = (states) => {
        const pad = 100;
        const t = ((window.pageYOffset + pad) / (document.body.offsetHeight - window.innerHeight));

        if (t > 1) {
            if (!loading && !stopLoad && !isBottom) {
                onLoadMore(states);
                isBottom = true;
            }
        } else {
            isBottom = false;
        };
    }

    useEffect(() => {
        const _handler = () => { scrollHandle(loadMoreStates); }
        window.addEventListener('scroll', _handler);

        return () => window.removeEventListener('scroll', _handler)
    }, [loadMoreStates])

    useEffect(() => {
        if (window.pageYOffset === 0 && window.innerHeight > document.body.offsetHeight) {
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
    stopLoad: PropTypes.bool,
};

InfiniteList.defaultProps = {

}

export default InfiniteList;