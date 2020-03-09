import React, { createElement } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
    nested: {
        paddingLeft: level => theme.spacing(4 * level),
    },
}));

export default ({ item, level }) => {
    const classes = useStyles(level);

    return (
        <ListItem
            button
            onClick={item.onClick}
            className={clsx({ [classes.nested]: level > 0 })}
        >
            <ListItemIcon>
                {createElement(item.icon)}
            </ListItemIcon>
            <ListItemText primary={item.name} />
        </ListItem>
    );
}