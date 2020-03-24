import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.scss';
import Button from '@material-ui/core/Button';
import _ from 'lodash';

const RoundedButton = props => {
  const { onClick, text, color, textColor, customComponent } = props;
  console.log(styles);
  return (
    <Button onClick={_.isNil(onClick) ? onClick : () => { }}
      classes={{
        root: styles.root
      }}>
      {customComponent ? customComponent : text}
    </Button>
  );
}

RoundedButton.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  textColor: PropTypes.string,
  customComponent: PropTypes.object,
};

export default RoundedButton;
