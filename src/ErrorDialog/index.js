import { useTheme, makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import colors from '../utils/colors';
import Dialog from '../Dialog';
import WarningIcon from '@material-ui/icons/WarningRounded';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

const ErrorDialog = props => {
  const { children, type, color, ...inputProps } = props;

  const useStyles = makeStyles(theme => ({
    close: {
      position: 'absolute',
      top: `${theme.spacing(1)}px`,
      right: `${theme.spacing(1)}px`,
      color: theme.palette.grey[300],
      padding: 0,
    },
    icon: {
      color: theme.palette.error.main,
      marginBottom: `${theme.spacing(2)}px`
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontWeight: '600',
      textAlign: 'center',
      color: theme.palette.grey[900]
    }
  }))

  const styles = useStyles();
  const theme = useTheme();

  return (
    <Dialog {...inputProps} color={theme.palette.error.main}>
      <IconButton className={styles.close} onClick={inputProps.onClose}>
        <CloseIcon />
      </IconButton>

      <div className={styles.content}>
        <WarningIcon className={styles.icon} fontSize='large' />
        {children}
      </div>
    </Dialog>
  );
}

export default ErrorDialog;
