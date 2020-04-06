import React, { useContext, useRef, useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import EditableContext from '../context/EditableContext';
import clsx from 'clsx';
import _ from 'lodash';

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: '500%',
    padding: 0,
  },
  labelUnchecked: {
    border: ({ offColor }) => `5px solid ${offColor ? offColor : theme.palette.error.main}`,
    transition: 'border .2s',
  },
  labelChecked: {
    border: ({ onColor }) => `5px solid ${onColor ? onColor : theme.palette.success.main}`,
    transition: 'border .2s',
  },
  inner: {
    position: 'relative',
    borderRadius: '500px',
    width: '100%',
    padding: '0px 5px',
  },
  innerUnchecked: {
    backgroundColor: ({ offColor }) => offColor ? offColor : theme.palette.error.main,
    transition: 'background-color .2s',
  },
  innerChecked: {
    backgroundColor: ({ onColor }) => onColor ? onColor : theme.palette.success.main,
    transition: 'background-color .2s',
  },
  label: {
    borderRadius: '500px',
    display: 'flex',
    alignItems: 'stretch',
    textTransform: 'none',
    fontWeight: 'bold',
    padding: 1,
    color: ({ labelColor }) => labelColor ? labelColor : 'white'
  },
  fadeout: {
    visibility: 'hidden',
    opacity: 0,
    transition: 'visibility 0s .1s, opacity .1s linear',
  },
  fadein: {
    visibility: 'visible',
    opacity: 1,
    transition: 'opacity .2s .2s linear',
  },
  absolute: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  innerDisabled: {
    backgroundColor: theme.palette.grey[300]
  },
  labelDisabled: {
    border: `5px solid ${theme.palette.grey[300]}`
  }
}))

const Switch = props => {
  const contextEditable = useContext(EditableContext);

  var { onClick, value, onLabel, offLabel, onColor, offColor, labelColor, ...inputProps } = props;
  var { disabled } = props;
  const checkboxRef = useRef();
  const [checkState, setCheckState] = useState(false);
  const styles = useStyles({ onColor, offColor, labelColor });

  if (_.isNil(disabled)) {
    disabled = false;

    if (!_.isNil(contextEditable)) {
      disabled = !contextEditable;
    }
  }

  const checkboxClick = () => {
    if (checkboxRef.current) {
      checkboxRef.current.click();
    }
  }

  const onLonger = onLabel.length >= offLabel.length;

  if (!value && !inputProps.onChange) {
    inputProps.onChange = (e) => {
      setCheckState(e.target.checked);
    }
  }
  
  return (
    <div>
      <input ref={checkboxRef} id="checkbox" type="checkbox" hidden {...inputProps} checked={value ? value : checkState} />
      <Button onClick={() => { onClick ? onClick({ proceed: checkboxClick, current: checkboxRef.current.checked }) : checkboxClick() }} disabled={disabled}
        classes={{
          root: styles.root,
          label: clsx(styles.label, disabled ? styles.labelDisabled : ((_.isNil(value) ? checkState : value) ? styles.labelChecked : styles.labelUnchecked))
        }}>
        <div className={clsx(styles.inner, disabled ? styles.innerDisabled : ((_.isNil(value) ? checkState : value) ? styles.innerChecked : styles.innerUnchecked))}>
          <div className={clsx((_.isNil(value) ? checkState : value) ? styles.fadein : styles.fadeout, !onLonger && styles.absolute)}>{onLabel}</div>
          <div className={clsx((_.isNil(value) ? checkState : value) ? styles.fadeout : styles.fadein, onLonger && styles.absolute)}>{offLabel}</div>
        </div>
      </Button>
    </div>
  );
}

Switch.defaultProps = {
  onLabel: 'On',
  offLabel: 'Off',
};

Switch.propTypes = {
};

export default Switch;
