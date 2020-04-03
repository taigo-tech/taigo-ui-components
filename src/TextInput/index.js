import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
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
    height: '100%',
    color: theme.palette.grey[900],
    fontSize: 14,
  },
  visible: {
    visibility: 'visible'
  },
  hidden: {
    visibility: 'hidden'
  },
  text: {
    position: 'absolute',
    top: 0,
    height: '100%',
    width: '100%',
    wordWrap: 'break-word',
    wordBreak: ({ multiline }) => multiline ? 'break-all' : 'unset',
    overflowY: ({ multiline }) => multiline ? 'auto' : 'hidden',
    overflowX: ({ multiline }) => !multiline ? 'auto' : 'hidden',
    display: 'flex',
    alignItems: ({ multiline }) => multiline ? 'flex-start' : 'center'
  },
  inputMultiline: {
    padding: 0,
    lineHeight: 1.43
  }
}));

const TextInput = props => {
  const contextEditable = useContext(EditableContext);
  const contextLoading = useContext(LoadingContext);

  var { editable, disabled, error, label, ...inputProps } = props;
  const styles = useStyles({ multiline: props.multiline });

  const getSelectText = (value) => {
    if (inputProps.select) {
      if (_.isArray(inputProps.children)) {
        const selectChildren = inputProps.children;
        const selected = _.find(selectChildren, (c) => { return c.props.value === value });

        if (selected && selected.props) {
          return selected.props.children;
        }
      }
    }
    return '';
  }

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
          error={error}
          disabled={disabled}
          InputProps={{ classes: { input: styles.input, multiline: styles.inputMultiline } }}
          {...inputProps}
          variant="outlined"
          className={!editable ? styles.hidden : ''}
          fullWidth
        />

        <div className={clsx(styles.input, styles.text, editable && styles.hidden)}>
          {props.select ? getSelectText(props.value) : props.value}
        </div>
      </div>
    </div >
  );
}

TextInput.propTypes = {
  editable: PropTypes.bool
};

export default TextInput;
