import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import MenuUtil from './utils';
import styles from './styles.scss';

const useStyles = makeStyles(theme => ({
  drawerPaper: {
    width: ({ width }) => width,
  },
}));

const SideMenu = props => {
  const { menuData, menuItemComponent, onMenuItemClick, ...restProps } = props;
  const classes = useStyles(props);
  const menuUtils = new MenuUtil(props);

  return (
    <Drawer
      classes={{
        root: styles.root,
        paper: clsx(styles.sideMenu, classes.drawerPaper),
      }}
      {...restProps}
    >
      <List
        component="nav"
        className={classes.root}
      >
        {menuUtils.getNavMenuItems(menuData)}
      </List>
    </Drawer>
  );
}

SideMenu.propTypes = {
  menuData: PropTypes.array,
  width: PropTypes.number,
  open: PropTypes.bool,
};

export default SideMenu;
