import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import _ from 'lodash';
import EditableContext from '../context/EditableContext';
import LoadingContext from '../context/LoadingContext';

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
    padding: '10px 14px',
    color: theme.palette.grey[900],
    fontSize: 14
  },
  visible: {
    visibility: 'visible'
  },
  hidden: {
    visibility: 'hidden'
  },
  text: {
    fontSize: 14,
    position: 'absolute',
    top: 0,
    height: '100%',
    wordWrap: 'break-word',
    wordBreak: 'break-all',
    overflow: 'auto'
  }
}));

const TextInput = props => {
  const contextEditable = useContext(EditableContext);
  const contextLoading = useContext(LoadingContext);

  var { editable, disabled, onChange, value, error, label, ...inputProps } = props;
  const styles = useStyles();

  const [stateValue, setValue] = useState('');

  if (_.isNil(editable)) {
    editable = true;

    if (!_.isNil(contextEditable)) {
      editable = contextEditable;
    }
  }

  if (_.isNil(disabled)) {
    disabled = false;

    if (!_.isNil(contextLoading)) {
      disabled = contextLoading;
    }
  }

  return (
    <div>
      <div className={clsx(styles.label, (error && editable) && styles.error)}>
        {label}
      </div>

      <div style={{ position: 'relative' }}>
        <TextField
          value={value ? value : stateValue}
          onChange={onChange ? onChange : (e) => { setValue(e.target.value) }}
          error={error}
          disabled={disabled}
          InputProps={{ classes: { input: styles.input } }}
          {...inputProps}
          variant="outlined"
          className={!editable ? styles.hidden : ''}
          fullWidth
        />

        <div className={clsx(styles.input, styles.text, editable && styles.hidden)}>
          {value ? value : stateValue}
        </div>
      </div>
    </div >
  );
}

TextInput.propTypes = {
  editable: PropTypes.bool
};

export default TextInput;
