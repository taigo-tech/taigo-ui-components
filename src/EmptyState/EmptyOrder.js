import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import defaultImage from './images/icon_empty.svg';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    image: {
        maxWidth: '80%',
    },
    message: {
        margin: theme.spacing(2),
    },
    actions: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    action: {
        padding: theme.spacing(2),
        fontSize: '1.1em',
    }
}));

const Component = ({ image, message, actions = [] }) => {
    const styles = useStyles();

    return (
        <div className={styles.root}>
            <img src={image || defaultImage} alt="Empty" className={styles.image} />
            <div>
                <Typography variant="h4" className={styles.message}>{message}</Typography>

                <div className={styles.actions}>
                    {actions.map((action, i) => (
                        <div key={i} className={styles.action}>{action}</div>
                    ))}
                </div>
            </div>
        </div>
    );
}

Component.propTypes = {
    image: PropTypes.string,
    message: PropTypes.string,
    actions: PropTypes.arrayOf(PropTypes.element),
};

export default Component;