import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import _ from 'lodash';
import { pathToRegexp } from 'path-to-regexp';
import SideMenu from '../Drawer';
import PageHeader from '../PageHeader';
import { isBrowser, getFlatMenus } from '../utils/utils';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '100vh',
  },
  contentWithAppbar: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    overflowX: 'hidden',
  },
  appBar: {
    boxShadow: 'unset',
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
  },
  menuButton: {
    color: theme.palette.primary.main,
    marginRight: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  backButton: {
    color: theme.palette.primary.main,
    marginRight: theme.spacing(1),
  },
  toolbar: {
    height: '100px',
    backgroundColor: theme.palette.common.white,
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      height: 'auto',
    },
  },
  pageInfo: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
  },
  pageTitle: {
    fontWeight: 'bold',
    color: theme.palette.primary.main,
    margin: 0,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
    },
  },
  content: {
    flex: 1,
    padding: theme.spacing(3),
    position: 'relative',
    backgroundColor: '#f9fafc',
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(2),
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1),
    },
  },
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: ({ drawerWidth }) => drawerWidth,
      flexShrink: 0,
    },
  },
}));

function AppLayout(props) {
  const { logo, menuData, drawerWidth = 300, menuItemComponent, onMenuItemClick, footerMenu, children, location, getPageTitle, rightContent, username, email, history } = props;
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

  const handleBack = () => {
    if (typeof history !== 'undefined') {
      history.back();
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

  const flatMenus = getFlatMenus(menuData);
  const titleMenu = _.findKey(flatMenus, item => pathToRegexp(item.path).test(location.pathname));
  const pageTitle = titleMenu ? flatMenus[titleMenu].title : '';
  const isBackable = history && titleMenu && !!flatMenus[titleMenu].backable;

  return (
    <div className={classes.root}>
      <CssBaseline />

      <nav className={classes.drawer} aria-label="navigations">
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
      <div id="scrollable-target" className={classes.contentWithAppbar}>
        <AppBar position="sticky" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Box className={classes.pageInfo}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
              {isBackable && (
                <IconButton
                  aria-label="Go back"
                  onClick={handleBack}
                  className={classes.backButton}
                >
                  <ArrowBackIcon />
                </IconButton>
              )}
              <Typography variant="h2" className={classes.pageTitle}>{getPageTitle ? getPageTitle(pageTitle) : pageTitle}</Typography>
            </Box>
            {rightContent || (username && (
              <PageHeader name={username} email={email} linkComponent={menuItemComponent} />
            ))}
          </Toolbar>
        </AppBar>
        <main className={classes.content}>
          {children}
        </main>
      </div>
    </div>
  );
}

AppLayout.propTypes = {
  logo: PropTypes.string,
  menuData: PropTypes.array.isRequired,
  footerMenu: PropTypes.array,
  drawerWidth: PropTypes.number,
  menuItemComponent: PropTypes.elementType,
  onMenuItemClick: PropTypes.func,
  getPageTitle: PropTypes.func,
  rightContent: PropTypes.element,
  username: PropTypes.string,
  email: PropTypes.string,
};

AppLayout.defaultProps = {
  location: isBrowser() ? window.location : undefined,
  history: isBrowser() ? window.history : undefined,
};

export default AppLayout;
