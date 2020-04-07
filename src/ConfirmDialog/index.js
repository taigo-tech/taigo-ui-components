import { useTheme, makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import colors from '../utils/colors';
import Dialog from '../Dialog';
import RoundedButton from '../RoundedButton';
import CheckIcon from '@material-ui/icons/Check';

const ConfirmDialog = props => {
  const { children, icon, type, color, onConfirm, onCancel, ...inputProps } = props;

  const useStyles = makeStyles(theme => ({
    icon: {
      color: theme.palette.success.main,
      border: `2px solid ${theme.palette.success.main}`,
      borderRadius: '50%',
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontWeight: '600',
      textAlign: 'center',
      color: theme.palette.grey[900]
    },
    row: {
      display: 'flex',
      flexDirection: 'row'
    },
    spacing: {
      margin: `${theme.spacing()}px`,
    }
  }))

  const styles = useStyles();
  const theme = useTheme();

  return (
    <Dialog {...inputProps} color={color ? color : theme.palette.success.main}>
      <div className={styles.content}>
        {
          icon ? icon : <CheckIcon className={styles.icon} fontSize='large' />
        }

        <div className={styles.spacing} />
        {children}
      </div>
      <div className={styles.spacing} />
      <div className={styles.row}>
        <RoundedButton variant="outlined" color={color ? color : theme.palette.success.main} onClick={onCancel}>Cancel</RoundedButton>
        <div className={styles.spacing} />
        <RoundedButton variant="contained" color={color ? color : theme.palette.success.main} onClick={onConfirm}>Confirm</RoundedButton>
      </div>
    </Dialog>
  );
}

export default ConfirmDialog;
