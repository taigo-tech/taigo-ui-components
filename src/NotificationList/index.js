import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    title: {
        fontWeight: 'bold',
        color: theme.palette.primary.main,
    },
    content: {
        marginBottom: 8,
    },
    ref: {
        fontWeight: 'bold',
        marginRight: 4,
    },
    datetime: {
        color: theme.palette.text.secondary,

    }
}));

const NotificationList = ({ items = [], listItemComponent: Link }) => {
    const classes = useStyles();

    const itemComponent = path => Link && forwardRef((props, ref) => <Link to={path} {...props} ref={ref} />);

    return (
        <List disablePadding>
            {items.map((item, i) => (
                <ListItem key={item.id} button={!!item.path} component={itemComponent(item.path)} divider={i < items.length - 1}>
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
}

export default NotificationList;