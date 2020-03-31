import MuiAvatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';
import React from 'react';
import PropTypes from 'prop-types';
import colors from '../utils/colors';
import { Icon } from '@material-ui/core';
import EditableCard from '../Card';
import CircularProgress from '@material-ui/core/CircularProgress';
import clsx from 'clsx';

const stringToHslColor = (str, s, l) => {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  var h = hash % 360;
  return 'hsl(' + h + ', ' + s + '%, ' + l + '%)';
}

const useStyles = makeStyles(theme => ({
  main: {
    position: 'relative',
    backgroundColor: ({ color }) => color,
    borderRadius: '50%'
  },
  avatar: {
    backgroundColor: ({ color }) => color,
    height: '98px',
    width: '98px',
  },
  edit: {
    backgroundColor: theme.palette.secondary.main,
    bottom: 0,
    right: 0,
    '&:hover': {
      backgroundColor: theme.palette.secondary.main
    }
  },
  cancel: {
    backgroundColor: theme.palette.error.main,
    top: 0,
    right: 0,
    '&:hover': {
      backgroundColor: theme.palette.error.main
    }
  },
  iconButton: {
    padding: 5,
    position: 'absolute',
    color: theme.palette.common.white,
    border: '1px solid white'
  },
  fadeout: {
    visibility: 'hidden',
    opacity: 0,
    transition: 'visibility 0s .1s, opacity .1s linear',
  },
  fadein: {
    visibility: 'visible',
    opacity: 1,
    transition: 'opacity .2s .2s linear',
  },
  load: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progress: {
    color: theme.palette.common.white
  }
}));

const Avatar = props => {
  const { isLoading, onDeletePress, onEditPress, editable, children, name, ...inputProps } = props;
  const theme = useTheme();
  const color = name ? stringToHslColor(name, 60, 50) : theme.palette.secondary.main;
  const styles = useStyles({ color });

  return (
    <div className={styles.main}>
      <MuiAvatar alt={name} {...inputProps} className={clsx(styles.avatar, isLoading ? styles.fadeout : styles.fadein)}>
        {name.substring(0, 2).toUpperCase()}
      </MuiAvatar>
      <IconButton onClick={onDeletePress} className={clsx(styles.iconButton, styles.cancel, editable && !isLoading ? styles.fadein : styles.fadeout)}>
        <CloseIcon />
      </IconButton>

      <IconButton onClick={onEditPress} className={clsx(styles.iconButton, styles.edit, editable && !isLoading ? styles.fadein : styles.fadeout)}>
        <EditIcon />
      </IconButton>

      <div className={clsx(styles.load, isLoading ? styles.fadein : styles.fadeout)}>
        <CircularProgress size={20} className={styles.progress} />
      </div>
    </div>
  );
}

Avatar.defaultProps = {
  editable: false,
  size: 'large'
}

Avatar.propTypes = {
  editable: PropTypes.bool,
  src: PropTypes.string,
  name: PropTypes.string
};

export default Avatar;
