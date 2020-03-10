import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
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
  const { logo, menuData, menuItemComponent, onMenuItemClick, footerMenu, ...restProps } = props;
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
      {logo && (
        <div className={styles.drawerHeader}>
          <img src={logo} alt="logo" className={styles.logo} />
          <Divider className={styles.divider} />
        </div>
      )}
      <List
        component="nav"
        className={styles.navList}
      >
        {menuUtils.getNavMenuItems(menuData)}
      </List>
      {footerMenu && footerMenu.length > 0 && (
        <Fragment>
          <Divider className={styles.divider} />
          <List
            component="nav"
            className={styles.footerList}
          >
            {menuUtils.getNavMenuItems(footerMenu)}
          </List>
        </Fragment>
      )}
    </Drawer>
  );
}

SideMenu.propTypes = {
  menuData: PropTypes.array,
  width: PropTypes.number,
  open: PropTypes.bool,
};

export default SideMenu;
