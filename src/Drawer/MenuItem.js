import React, { createElement, forwardRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { isUrl } from '../utils/utils';

const useStyles = makeStyles(theme => ({
    icon: {
        color: theme.palette.common.white,
    },
    selected: {
        backgroundColor: '#344ba1 !important',
        '&:hover': {
            backgroundColor: '#344ba1 !important',
        },
    },
    text: {
        color: theme.palette.common.white,
    },
}));

export default ({ item, level, onClick, menuItemComponent: MenuLink, selected }) => {
    const styles = useStyles();

    const listItemComponent = isUrl(item.path) ? 'a' : MenuLink && forwardRef((props, ref) => <MenuLink to={item.navPath || item.path} {...props} ref={ref} />);

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
                selected: styles.selected,
            }}
            selected={selected}
            href={isUrl(item.path) && item.path}
            target={isUrl(item.path) && item.external ? '_blank' : '_self'}
        >
            {!!item.icon && !item.hideIcon && (
                <ListItemIcon className={styles.icon}>
                    {createElement(item.icon)}
                </ListItemIcon>
            )}
            <ListItemText inset={level > 0} primary={item.title} className={styles.text} />
        </ListItem>
    );
}