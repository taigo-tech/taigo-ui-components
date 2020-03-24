import React from 'react';
import MuiCheckbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.grey[500],
  },
  checked: {
    color: theme.palette.secondary.main,
  },
}))

const Checkbox = props => {
  const { ...inputProps } = props;
  const styles = useStyles();

  return (
    <MuiCheckbox {...inputProps} classes={{ root: styles.root, checked: styles.checked }} />
  );
}

Checkbox.propTypes = {
};

export default Checkbox;
