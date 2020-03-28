import React, { useContext } from 'react';
import MuiCheckbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
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
  const contextEditable = useContext(EditableContext);

  const { ...inputProps } = props;
  var { disabled } = props;
  const styles = useStyles();

  if (_.isNil(disabled)) {
    disabled = false;

    if (!_.isNil(contextEditable)) {
      disabled = !contextEditable;
    }
  }

  return (
    <MuiCheckbox {...inputProps} classes={{ root: styles.root, checked: styles.checked }} disabled={disabled} />
  );
}

Checkbox.propTypes = {
};

export default Checkbox;
