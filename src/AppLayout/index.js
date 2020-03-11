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
import { isBrowser } from '../utils/utils';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    [theme.breakpoints.up('md')]: {
      width: ({ drawerWidth }) => `calc(100% - ${drawerWidth}px)`,
      marginLeft: ({ drawerWidth }) => drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
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
  const { logo, menuData, drawerWidth = 300, menuItemComponent, onMenuItemClick, footerMenu, children, location } = props;
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
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            App Layout
          </Typography>
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
        <div className={classes.toolbar} />
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
};

AppLayout.defaultProps = {
  location: isBrowser() ? window.location : undefined,
};

export default AppLayout;
