import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      
    },
}));

const NotificationList = ({ notifications, listItemComponent: Link }) => {
    const classes = useStyles();

    notifications = [

    ];

    const itemComponent = Link && forwardRef(({ path, ...restProps }, ref) => <Link to={path} {...restProps} ref={ref} />);

    return (
        <List className={classes.root}>
            {notifications.map(item => (
                <ListItem button={!!item.path} component={itemComponent}>
                    {item.icon && (
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                    )}
                    <Box>
                        <Typography display="block">{item.title}</Typography>
                        <Typography display="block">
                            {item.ref}
                            <Typography component="span">
                                {item.subtitle}
                            </Typography>
                        </Typography>
                        <Typography display="block" component="small">item.createdAt</Typography>
                    </Box>
                </ListItem>
            ))}
        </List>
    );
}

NotificationList.propTypes = {

}

export default NotificationList;