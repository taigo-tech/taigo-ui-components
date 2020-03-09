import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import MenuUtil from './utils';

const useStyles = makeStyles(theme => ({
  
}));

const Drawer = props => {
  const { routes } = props;
  const classes = useStyles();

  const menuUtils = new MenuUtil(props);

  return (
    <List
      component="nav"
      className={classes.root}
    >
      {menuUtils.getNavMenuItems(routes)}
    </List>
  );
}

Drawer.propTypes = {
  routes: PropTypes.array,
};

export default Drawer;
