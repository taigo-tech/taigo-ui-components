import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import MenuUtil from './utils';

const useStyles = makeStyles(theme => ({
  drawerPaper: {
    width: ({ width }) => width,
  },
  sideMenu: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    borderRight: 0,
  },
  divider: {
    backgroundColor: theme.palette.grey[300],
  },
  drawerHeader: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '100px',
  },
  logo: {
    objectFit: 'contain',
    height: '100%',
  },
  navList: {
    flex: 1,
    overflowY: 'auto',
    msOverflowStyle: 'none',  // IE 10+
    overflow: '-moz-scrollbars-none',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
}));

const SideMenu = props => {
  const { logo, menuData, menuItemComponent: MenuLink, onMenuItemClick, footerMenu, ...restProps } = props;
  const styles = useStyles(props);
  const menuUtils = new MenuUtil(props);

  const LogoLink = ({ children, ...restProps }) => MenuLink ? <MenuLink to="/" {...restProps}>{children}</MenuLink> : <a href="/" {...restProps}>{children}</a>;

  return (
    <Drawer
      classes={{
        paper: clsx(styles.sideMenu, styles.drawerPaper),
      }}
      {...restProps}
    >
      {logo && (
        <LogoLink className={styles.drawerHeader}>
          <img src={logo} alt="logo" className={styles.logo} />
          <Divider className={styles.divider} />
        </LogoLink>
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
          <List component="nav">
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
