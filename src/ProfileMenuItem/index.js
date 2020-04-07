import React, { forwardRef } from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
  item: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
  }
}));

const ProfileMenuItem = forwardRef(({ to, label, handleProfileMenuClose, linkComponent: Link }, ref) => {
  const styles = useStyles();

  return (
    <Link to={to} ref={ref} className={styles.item}>
      <MenuItem onClick={handleProfileMenuClose}>
        {label}
      </MenuItem>
    </Link>
  );
});

ProfileMenuItem.propTypes = {
  to: PropTypes.string,
  label: PropTypes.string,
  handleProfileMenuClose: PropTypes.func,
  linkComponent: PropTypes.elementType,
}

export default ProfileMenuItem;
