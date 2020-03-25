import MuiDialog from '@material-ui/core/Dialog';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import React from 'react';
import styles from './styles.scss';
import PropTypes from 'prop-types';
import colors from '../utils/colors.scss';

const Dialog = props => {
  const { children, type, color, ...inputProps } = props;

  const useStyles = makeStyles(theme => ({
    paper: {
      border: `2px solid ${color ? color : (type === 'confirm' ? theme.palette.success.main : theme.palette.error.main)}`,
      padding: '40px',
      backgroundColor: colors.lightblue,
    }
  }));

  const styles = useStyles();

  return (
    <MuiDialog {...inputProps} PaperProps={{ classes: { root: styles.paper } }}>
      {children}
    </MuiDialog>
  );
}

Dialog.defaultProps = {
  type: 'confirm'
}

Dialog.propTypes = {
  type: PropTypes.oneOf(['alert', 'confirm'])
};

export default Dialog;
