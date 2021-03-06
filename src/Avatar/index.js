import MuiAvatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/CropOriginal';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import clsx from 'clsx';
import _ from 'lodash';
import EditableContext from '../context/EditableContext';
import LoadingContext from '../context/LoadingContext';

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
  },
  avatar: {
    backgroundColor: ({ color }) => color,
    height: '98px',
    width: '98px',
  },
  edit: {
    backgroundColor: theme.palette.grey[300],
    color: theme.palette.secondary.main,
    bottom: 0,
    right: 0,
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.grey[300],
    }
  },
  cancel: {
    backgroundColor: theme.palette.grey[300],
    color: theme.palette.error.main,
    top: 0,
    left: 0,
    '&:hover': {
      backgroundColor: theme.palette.error.main,
      color: theme.palette.grey[300],
    }
  },
  iconButton: {
    padding: 5,
    position: 'absolute',
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
  const contextEditable = useContext(EditableContext);
  const contextLoading = useContext(LoadingContext);

  var { isLoading, onDeletePress, onEditPress, editable, children, name, ...inputProps } = props;
  const theme = useTheme();
  const color = name ? stringToHslColor(name, 60, 50) : theme.palette.secondary.main;
  const styles = useStyles({ color });

  if (_.isNil(editable)) {
    editable = false;

    if (!_.isNil(contextEditable)) {
      editable = contextEditable;
    }
  }

  if (_.isNil(isLoading)) {
    isLoading = false;

    if (!_.isNil(contextLoading)) {
      isLoading = contextLoading;
    }
  }

  return (
    <div className={styles.main}>
      <MuiAvatar alt={name} {...inputProps} className={clsx(styles.avatar)} src={!isLoading ? props.src : ''}>
        {(!isLoading && name) && name.substring(0, 2).toUpperCase()}
        <div className={clsx(styles.load, isLoading ? styles.fadein : styles.fadeout)}>
          <CircularProgress size={20} className={styles.progress} />
        </div>
      </MuiAvatar>
      <IconButton onClick={onDeletePress} className={clsx(styles.iconButton, styles.cancel, editable && !isLoading ? styles.fadein : styles.fadeout)}>
        <CloseIcon />
      </IconButton>

      <IconButton onClick={onEditPress} className={clsx(styles.iconButton, styles.edit, editable && !isLoading ? styles.fadein : styles.fadeout)}>
        <EditIcon />
      </IconButton>
    </div>
  );
}

Avatar.defaultProps = {
}

Avatar.propTypes = {
  editable: PropTypes.bool,
  src: PropTypes.string,
  name: PropTypes.string
};

export default Avatar;
