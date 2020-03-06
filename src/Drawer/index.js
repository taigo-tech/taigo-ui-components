import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  
}));

const Drawer = props => {
  const { children } = props;
  const classes = useStyles();

  return (
    <div>{children}</div>
  );
}

Drawer.propTypes = {
  navigations: PropTypes.object,
};

export default Drawer;
