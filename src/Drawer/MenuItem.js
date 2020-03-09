import React, { createElement, forwardRef } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import styles from './styles.scss';

const useStyles = makeStyles(theme => ({
    nested: {
        paddingLeft: level => theme.spacing(8 * level),
    },
}));

export default ({ item, level }) => {
    const classes = useStyles(level);

    return (
        <ListItem
            button
            onClick={item.onClick}
            component={forwardRef((props, ref) => <Link to={item.path} {...props} ref={ref} />)}
            classes={{
                root: clsx(styles.listItem, { [classes.nested]: level > 0 }),
                selected: styles.selected,
            }}
        >
            <ListItemIcon className={styles.icon}>
                {createElement(item.icon)}
            </ListItemIcon>
            <ListItemText primary={item.name} />
        </ListItem>
    );
}