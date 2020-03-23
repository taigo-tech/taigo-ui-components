import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SideMenu from '../Drawer';
import PageHeader from '../PageHeader';
import { isBrowser } from '../utils/utils';
import colors from '../colors.scss';
import styles from './styles.scss';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    boxShadow: 'unset',
    borderBottom: `1px solid ${colors.grey}`,
    [theme.breakpoints.up('md')]: {
      width: ({ drawerWidth }) => `calc(100% - ${drawerWidth}px)`,
      marginLeft: ({ drawerWidth }) => drawerWidth,
    },
  },
  menuButton: {
    color: colors['dark-blue'],
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: {
    width: '100%',
    backgroundColor: colors.white,
    display: 'flex',
    flexDirection: 'row',
  },
  pageTitle: {
    fontWeight: 'bold',
    color: colors['dark-blue'],
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: ({ drawerWidth }) => drawerWidth,
      flexShrink: 0,
    },
  },
}));

function AppLayout(props) {
  const { logo, menuData, drawerWidth = 300, menuItemComponent, onMenuItemClick, footerMenu, children, location, getPageTitle } = props;
  const classes = useStyles({ drawerWidth });
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const onMobileMenuItemClick = item => {
    handleDrawerToggle();
    if (typeof onMenuItemClick === 'function') {
      onMenuItemClick(item);
    }
  }

  const sideMenuProps = {
    logo,
    menuData,
    footerMenu,
    width: drawerWidth,
    menuItemComponent,
    onMenuItemClick,
    location,
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <h2 className={classes.pageTitle}>{getPageTitle && getPageTitle(props.location.pathname)}</h2>
          <div style={{ flexGrow: 1 }} />
          <PageHeader name='John Smith' email='johnsmith@taigo.com.my' style={{ alignSelf: 'flex-end' }} />
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden mdUp implementation="css">
          <SideMenu
            {...sideMenuProps}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={drawerOpen}
            onClose={handleDrawerToggle}
            onMenuItemClick={onMobileMenuItemClick}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          />
        </Hidden>
        <Hidden smDown implementation="css">
          <SideMenu
            {...sideMenuProps}
            variant="permanent"
            open
          />
        </Hidden>
      </nav>
      <main className={classes.content}>
        {children}
      </main>
    </div>
  );
}

AppLayout.propTypes = {
  menuData: PropTypes.array.isRequired,
  footerMenu: PropTypes.array,
  drawerWidth: PropTypes.number,
  menuItemComponent: PropTypes.elementType,
  onMenuItemClick: PropTypes.func,
  getPageTitle: PropTypes.func,
};

AppLayout.defaultProps = {
  location: isBrowser() ? window.location : undefined,
};

export default AppLayout;
