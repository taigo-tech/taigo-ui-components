import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Scrollbars } from 'react-custom-scrollbars';

const useStyles = makeStyles(theme => ({
    loadContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
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

const InfiniteList = (props) => {
    const muiStyles = useStyles();
    const { children, onLoadMore, loading, stopLoad, ...scrollProps } = props;

    const handleUpdate = (values) => {
        const { scrollTop, scrollHeight, clientHeight } = values;
        const pad = 100; // 100px of the bottom
        // t will be greater than 1 if we are about to reach the bottom
        const t = ((scrollTop + pad) / (scrollHeight - clientHeight));

        if (t > 1 && !loading && !stopLoad) {
            onLoadMore();
        };
    }

    return (
        <Scrollbars {...scrollProps} onUpdate={handleUpdate}>
            <div className={muiStyles.root}>
                {children}
                {
                    loading && <div className={muiStyles.loadContainer}><CircularProgress /></div>
                }
            </div>
        </Scrollbars>
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