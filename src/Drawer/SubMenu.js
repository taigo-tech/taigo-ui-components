import React, { Fragment, createElement, useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import styles from './styles.scss';

export default ({ item, children }) => {
    const [open, setOpen] = useState(!!item.defaultOpen);
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
                <ListItemText primary={item.name} inset={!item.icon} />
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