import React, { createElement, forwardRef } from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  item: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
  },
  label: {
    maxWidth: 150,
  },
}));

const ProfileMenuItem = forwardRef(({ to, label, icon, handleProfileMenuClose, linkComponent: Link }, ref) => {
  const styles = useStyles();

  return (
    <Link to={to} ref={ref} className={styles.item}>
      <MenuItem onClick={handleProfileMenuClose}>
        {!!icon && (
          <ListItemIcon>
            {createElement(icon)}
          </ListItemIcon>
        )}
        <Typography variant="inherit" className={styles.label} noWrap>{label}</Typography>
      </MenuItem>
    </Link>
  );
});

ProfileMenuItem.propTypes = {
  to: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.elementType,
  handleProfileMenuClose: PropTypes.func,
  linkComponent: PropTypes.elementType,
}

export default ProfileMenuItem;
