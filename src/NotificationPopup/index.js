import React, { Fragment, useState, useEffect, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import CircularProgress from '@material-ui/core/CircularProgress';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import NotificationList from '../NotificationList';

const useStyles = makeStyles((theme) => ({
    notification_button: {
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.common.white,
    },
    notification_button_highlight: {
        backgroundColor: theme.palette.grey[200],
    },
    menu: {
        padding: 0,
    },
    popup: {
        width: '100%',
        maxWidth: 500,
        backgroundColor: theme.palette.background.paper,
    },
    loading: {
        minWidth: 200,
        textAlign: 'center',
    },
    listWrapper: {
        maxHeight: 480,
        overflowY: 'auto',
    },
    viewAll: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(1),
        backgroundColor: theme.palette.grey[100],
        borderTop: `1px solid ${theme.palette.grey[200]}`,
        boxShadow: theme.shadows[10],
    }
}));

const NotificationPopup = ({ linkComponent: Link, initialCount = 0, retrieveQuery, viewAllPath }) => {
    const classes = useStyles();

    const [loading, setLoading] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);
    const [alertCount, setAlertCount] = useState(initialCount);
    const [items, setItems] = useState([]);

    useEffect(() => {
        (async () => {
            const { items, count } = await retrieveQuery();
            setItems(items);
            setAlertCount(count);
            setLoading(false);
        })();
    }, []);

    const viewAllComponent = Link && forwardRef((props, ref) => <Link to={viewAllPath} {...props} ref={ref} />);

    return !!retrieveQuery && (
        <Fragment>
            <IconButton color="inherit" onClick={e => setAnchorEl(e.currentTarget)}
                className={clsx(classes.notification_button, { [classes.notification_button_highlight]: !!anchorEl })}
            >
                <Badge color="error" badgeContent={alertCount > 0 ? alertCount : null}>
                <NotificationsIcon />
                </Badge>
            </IconButton>
            
            <Menu
                anchorEl={anchorEl}
                open={!!anchorEl}
                onClose={() => setAnchorEl(null)}
                classes={{ list: classes.menu }}
                disableAutoFocusItem={true}
            >
                <Box className={classes.popup}>
                    {loading && (
                        <Box className={classes.loading}><CircularProgress size={20} /></Box>
                    )}
                    <Box className={classes.listWrapper}>
                        <NotificationList items={items} listItemComponent={Link} />
                    </Box>
                    {!loading && (
                        <Box className={classes.viewAll} component={viewAllComponent}>
                            <MenuIcon />
                        </Box>
                    )}
                </Box>
            </Menu>
        </Fragment>
    );
}

NotificationPopup.propTypes = {
    retrieveQuery: PropTypes.func.isRequired,
    viewAllPath: PropTypes.string.isRequired,
    listItemComponent: PropTypes.elementType,
}

export default NotificationPopup;