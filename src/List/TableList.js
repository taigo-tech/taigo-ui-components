import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TableListItem from './TableListItem';

const useStyles = makeStyles(theme => ({
    root: {
        overflowX: 'auto',
        paddingBottom: theme.spacing(1),
        paddingRight: theme.spacing(0.5),
        msOverflowStyle: 'none',  // IE 10+
        overflow: '-moz-scrollbars-none',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
    },
}));

const Component = ({ children }) => {
    const styles = useStyles();

    return (
        <div className={styles.root}>
            {children}
        </div>
    );
}

Component.propTypes = {
    
};

Component.defaultProps = {
    
}

Component.TableListItem = TableListItem;

export default Component;