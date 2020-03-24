import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.scss';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import _ from 'lodash';
import clsx from 'clsx';
import colors from '../theme/colors.scss';
import transition from '../theme/transition.scss';

const RoundedButton = props => {
  const { isLoading, size, text, color, textColor, customComponent, ...buttonProps } = props;

  if (isLoading) {
    buttonProps.disabled = true;
  }
  console.log(isLoading);
  return (
    <Button
      classes={{
        root: clsx(styles.root, styles[size]),
        disabled: styles.disabled,
      }}
      {...buttonProps}
    >
      <div className={isLoading ? transition.fadeout : transition.fadein}>
        {
          customComponent ? customComponent : text
        }
      </div>

      <div className={clsx(styles.load, isLoading ? transition.fadein : transition.fadeout)}>
        <CircularProgress size={20} style={{ color: colors.white }} />
      </div>
    </Button>
  );
}

RoundedButton.propTypes = {
  isLoading: PropTypes.bool,
  text: PropTypes.string,
  color: PropTypes.string,
  textColor: PropTypes.string,
  customComponent: PropTypes.object,
  size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
};

export default RoundedButton;
