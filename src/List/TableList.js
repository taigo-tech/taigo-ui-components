import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TableListItem from './TableListItem';

const useStyles = makeStyles(theme => ({
    root: {
        overflowX: 'auto',
        msOverflowStyle: 'none',  // IE 10+
        overflow: '-moz-scrollbars-none',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
    },
}));

const Component = ({ children, collapsible, defaultExpanded, minWidth }) => {
    const styles = useStyles();

    return (
        <div className={styles.root}>
            {React.Children.map(children, child =>
                cloneElement(child, {
                    collapsible,
                    defaultExpanded,
                    minWidth,
                }),
            )}
        </div>
    );
}

Component.propTypes = {
    collapsible: PropTypes.bool,
    defaultExpanded: PropTypes.bool,
    minWidth: PropTypes.number,
};

Component.defaultProps = {
    collapsible: false,
    defaultExpanded: false,
}

Component.TableListItem = TableListItem;

export default Component;