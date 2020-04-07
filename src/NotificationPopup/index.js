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
        padding: theme.spacing(2),
        textAlign: 'center',
    },
    listWrapper: {
        maxHeight: 480,
        overflowY: 'auto',
    },
    header: {
        padding: theme.spacing(1),
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
    },
    footer: {
        padding: theme.spacing(1),
        borderTop: `1px solid ${theme.palette.grey[300]}`,
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

const NotificationPopup = ({ linkComponent: Link, loading = false, count = 0, items = [], viewAllPath, header, footer }) => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState(null);

    const viewAllComponent = Link && viewAllPath && forwardRef((props, ref) => <Link to={viewAllPath} {...props} ref={ref} />);

    return (
        <Fragment>
            <IconButton color="inherit" onClick={e => setAnchorEl(e.currentTarget)}
                className={clsx(classes.notification_button, { [classes.notification_button_highlight]: !!anchorEl })}
            >
                <Badge color="error" badgeContent={count > 0 ? count : null}>
                <NotificationsIcon />
                </Badge>
            </IconButton>
            
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: -20, horizontal: 'right' }}
                getContentAnchorEl={null}
                open={!!anchorEl}
                onClose={() => setAnchorEl(null)}
                classes={{ list: classes.menu }}
                disableAutoFocusItem={true}
            >
                <Box className={classes.popup}>
                    {header && (
                        <Box className={classes.header}>
                            {header}
                        </Box>
                    )}
                    {loading && (
                        <Box className={classes.loading}><CircularProgress size={20} /></Box>
                    )}
                    <Box className={classes.listWrapper}>
                        <NotificationList items={items} listItemComponent={Link} onItemClick={() => setAnchorEl(null)} />
                    </Box>
                    {!loading && footer && (
                        <Box className={classes.footer} onClick={() => setAnchorEl(null)}>
                            {footer}
                        </Box>
                    )}
                    {!loading && !footer && viewAllComponent && (
                        <Box className={classes.viewAll} component={viewAllComponent} onClick={() => setAnchorEl(null)}>
                            <MenuIcon />
                        </Box>
                    )}
                </Box>
            </Menu>
        </Fragment>
    );
}

NotificationPopup.propTypes = {
    items: PropTypes.array,
    loading: PropTypes.bool,
    count: PropTypes.number,
    viewAllPath: PropTypes.string,
    listItemComponent: PropTypes.elementType,
    header: PropTypes.element,
    footer: PropTypes.element,
}

export default NotificationPopup;