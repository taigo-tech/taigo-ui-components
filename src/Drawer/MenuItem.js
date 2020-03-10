import React, { createElement, forwardRef } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import styles from './styles.scss';

const useStyles = makeStyles(theme => ({
    nested: {
        paddingLeft: level => theme.spacing(8 * level),
    },
}));

export default ({ item, level, onClick, menuItemComponent: MenuLink }) => {
    const classes = useStyles(level);

    const listItemComponent = MenuLink && forwardRef((props, ref) => <MenuLink to={item.path} {...props} ref={ref} />);

    const onItemClick = () => {
        if (typeof item.onClick === 'function') {
            item.onClick(item);
        } else if (typeof onClick === 'function') {
            onClick(item);
        }
    }

    return (
        <ListItem
            button
            onClick={onItemClick}
            component={listItemComponent}
            classes={{
                root: clsx(styles.listItem, { [classes.nested]: level > 0 }),
                selected: styles.selected,
            }}
        >
            {item.icon && (
                <ListItemIcon className={styles.icon}>
                    {createElement(item.icon)}
                </ListItemIcon>
            )}
            <ListItemText primary={item.name} inset={!item.icon} />
        </ListItem>
    );
}