import React, { Fragment, createElement, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';

const useStyles = makeStyles(theme => ({
    icon: {
        color: theme.palette.common.white,
    },
}));

export default ({ item, defaultOpen, children }) => {
    const styles = useStyles();
    const [open, setOpen] = useState(!!item.defaultOpen || defaultOpen);
    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Fragment>
            <ListItem button onClick={handleClick}>
                {item.icon && (
                    <ListItemIcon className={styles.icon}>
                        {createElement(item.icon)}
                    </ListItemIcon>
                )}
                <ListItemText primary={item.title} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {children}
                </List>
            </Collapse>
        </Fragment>
    );
}