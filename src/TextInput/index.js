import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import PropTypes from 'prop-types';

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
    color: theme.palette.grey[900],
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
          />
          :
          <div className={styles.input} style={{ display: 'flex', alignItems: 'center', fontSize: '16px' }}>
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
