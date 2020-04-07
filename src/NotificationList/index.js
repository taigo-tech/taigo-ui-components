import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import colors from '../utils/colors';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    title: {
        fontWeight: 'bold',
        color: theme.palette.primary.main,
    },
    content: {
        marginBottom: 8,
        color: theme.palette.text.primary,
    },
    ref: {
        fontWeight: 'bold',
        marginRight: 4,
    },
    datetime: {
        color: theme.palette.text.secondary,
    },
    notRead: {
        backgroundColor: colors.lightblue,
    }
}));

const NotificationList = ({ items = [], listItemComponent: Link, onItemClick }) => {
    const classes = useStyles();

    const itemComponent = path => Link && forwardRef((props, ref) => <Link to={path} {...props} ref={ref} />);

    return (
        <List disablePadding>
            {items.map((item, i) => (
                <ListItem
                    key={item.id}
                    button={!!item.path}
                    component={itemComponent(item.path)}
                    divider={i < items.length - 1}
                    className={clsx({ [classes.notRead]: !item.isRead }) }
                    onClick={() => {
                        if (onItemClick) onItemClick(item);
                        if (typeof item.onClick === 'function') item.onClick();
                    }}
                >
                    {item.icon && (
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                    )}
                    <Box>
                        <Typography display="block" variant="h5" className={classes.title}>{item.title}</Typography>
                        <Typography display="block" className={classes.content}>
                            {item.ref && (
                                <Typography component="span" variant="h6" className={classes.ref}>
                                    {item.ref}
                                </Typography>
                            )}
                            <Typography component="span" variant="h6">
                                {item.subtitle}
                            </Typography>
                        </Typography>
                        <Typography display="block" variant="h6" className={classes.datetime}>{item.createdAt}</Typography>
                    </Box>
                </ListItem>
            ))}
        </List>
    );
}

NotificationList.propTypes = {
    items: PropTypes.array,
    listItemComponent: PropTypes.elementType,
    onItemClick: PropTypes.func,
}

export default NotificationList;