import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
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
    backgroundColor: theme.palette.common.white,
    fontSize: 14,
    lineHeight: 1.4,
    height: 'auto',
  },
  hidden: {
    display: 'none',
  },
  text: {
    padding: '10px 14px',
    backgroundColor: 'transparent',
    fontSize: 14,
    lineHeight: 1.4,
    overflow: 'hidden',
  },
  inputMultiline: {
    padding: 0,
    lineHeight: 1.43
  },
  disabled: {
    backgroundColor: theme.palette.grey[200],
  }
}));

const TextInput = props => {
  const contextEditable = useContext(EditableContext);
  const contextLoading = useContext(LoadingContext);

  var { textFieldProps, labelProps, textProps, InputProps, editable, disabled, error, label, renderText, ...inputProps } = props;
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
    <div className={clsx(!editable && styles.root)}>
      {label && (
        <div className={clsx(styles.label, (error && editable) && styles.error)} {...labelProps}>
          {label}
        </div>
      )}

      <TextField
        error={error}
        disabled={disabled}
        InputProps={{
          classes: { input: styles.input, multiline: styles.inputMultiline, disabled: styles.disabled },
          ...InputProps,
        }}
        {...inputProps}
        {...textFieldProps}
        variant="outlined"
        className={!editable ? styles.hidden : ''}
        fullWidth
      />

      <div className={clsx(styles.text, editable && styles.hidden)} {...textProps}>
        {props.select ? getSelectText(props.value) : (typeof renderText === 'function' ? renderText(props.value) : props.value)}
      </div>
    </div>
  );
}

TextInput.propTypes = {
  editable: PropTypes.bool,
  labelProps: PropTypes.object,
  textProps: PropTypes.object,
  textFieldProps: PropTypes.object,
  renderText: PropTypes.func,
};

export default TextInput;
