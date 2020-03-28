import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  label: {
    color: theme.palette.grey[900],
    fontWeight: 'bold',
    fontSize: 12,
    marginBottom: theme.spacing(0.5),
  },
  error: {
    color: theme.palette.error.main,
  },
  input: {
    height: '36px',
    padding: '0px 14px',
    color: theme.palette.grey[900],
    fontSize: 14,
  },
  text: {
    display: 'flex',
    alignItems: 'center',
  }
}));

const TextInput = props => {
  const { value, editable, error, label, ...inputProps } = props;
  const styles = useStyles();

  return (
    <div>
      <div className={clsx(styles.label, (error && editable) && styles.error)}>
        {label}
      </div>
      {
        editable ?
          <TextField
            value={value}
            error={error}
            InputProps={{ classes: { input: styles.input } }}
            {...inputProps}
            variant="outlined"
            fullWidth
          />
          :
          <div className={clsx(styles.input, styles.text)}>
            <span>{value}</span>
          </div>
      }
    </div>
  );
}

TextInput.defaultProps = {
  editable: true
}

TextInput.propTypes = {
  editable: PropTypes.bool
};

export default TextInput;
