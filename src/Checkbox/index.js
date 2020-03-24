import MuiCheckbox from '@material-ui/core/Checkbox';
import clsx from 'clsx';
import React from 'react';
import styles from './styles.scss';

const Checkbox = props => {
  const { ...inputProps } = props;

  return (
    <MuiCheckbox {...inputProps} classes={{ root: styles.root, checked: styles.checked }} />
  );
}

Checkbox.propTypes = {
};

export default Checkbox;
