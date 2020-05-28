import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import MuiCheckbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import EditableContext from '../context/EditableContext';
import _ from 'lodash';

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.grey[500],
  },
  checked: {
    color: theme.palette.secondary.main,
  },
}))

const Checkbox = props => {
  const styles = useStyles();
  const contextEditable = useContext(EditableContext);

  const { label, ...inputProps } = props;
  let { disabled } = props;

  if (!_.isNil(contextEditable)) {
    disabled = !contextEditable;
  }

  const checkboxComponent = (
    <MuiCheckbox {...inputProps} classes={{ root: styles.root, checked: styles.checked }} disabled={disabled} />
  );

  if (label) {
    return (
      <FormControlLabel
        control={checkboxComponent}
        label={label}
      />
    );
  }

  return checkboxComponent;
}

Checkbox.propTypes = {
  label: PropTypes.string,
};

export default Checkbox;
