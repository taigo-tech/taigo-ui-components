import MuiDialog from '@material-ui/core/Dialog';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import React from 'react';
import PropTypes from 'prop-types';
import colors from '../utils/colors';

const useStyles = makeStyles(theme => ({
  paper: {
    border: ({ color, type }) => `2px solid ${color ? color : (type === 'confirm' ? theme.palette.success.main : theme.palette.error.main)}`,
    padding: '40px',
    backgroundColor: colors.lightblue,
  }
}));

const Dialog = props => {
  const { children, type, color, ...inputProps } = props;
  const styles = useStyles({ color, type });

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
