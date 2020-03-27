import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  label: {
    color: theme.palette.grey[900],
    fontWeight: 'bold',
    fontSize: '14px',
    marginBottom: theme.spacing(1),
  },
  error: {
    color: theme.palette.error.main,
  },
  input: {
    height: '48px',
    padding: '0px 14px',
  }
}));

const TextInput = props => {
  const { error, label, ...inputProps } = props;
  const styles = useStyles();

  return (
    <div>
      <div className={clsx(styles.label, error && styles.error)}>
        {label}
      </div>
      <TextField
        error={error}
        InputProps={{ classes: { input: styles.input } }}
        {...inputProps}
        variant="outlined"
      />
    </div>
  );
}

TextInput.propTypes = {
};

export default TextInput;
