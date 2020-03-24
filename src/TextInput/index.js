import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import React from 'react';
import styles from './styles.scss';

const TextInput = props => {
  const { error, label, ...inputProps } = props;
  return (
    <div>
      <div className={clsx(styles.label, error && styles.error)}>
        {label}
      </div>
      <TextField
        error={error}
        {...inputProps}
        variant="outlined"
      />
    </div>
  );
}

TextInput.propTypes = {
};

export default TextInput;
