import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import NotificationList from './List';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
    },
}));

const Notification = ({  }) => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <NotificationList />
        </Box>
    );
}

Notification.propTypes = {

}

export default Notification;