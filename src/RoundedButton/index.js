import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import _ from 'lodash';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
    borderRadius: '500px',
    fontWeight: 'bold',
  },
  disabled: {
    backgroundColor: theme.palette.grey[500],
  },
  load: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  small: {
    height: '40px',
    fontSize: '16px',
    padding: `0 ${theme.spacing(3)}px`,
  },
  medium: {
    height: '48px',
    fontSize: '18px',
    padding: `0 ${theme.spacing(5)}px`,
  },
  large: {
    height: '80px',
    fontSize: '22px',
    padding: `0 ${theme.spacing(9)}px`,
  },
  fadeout: {
    visibility: 'hidden',
    opacity: 0,
    transition: 'visibility 0s .5s, opacity .5s linear',
  },
  fadeIn: {
    visibility: 'visible',
    opacity: 1,
    transition: 'opacity .5s linear',
  }
}));

const RoundedButton = props => {
  const { isLoading, size, text, color, textColor, children, ...buttonProps } = props;
  const styles = useStyles();
  const theme = useTheme();

  if (isLoading) {
    buttonProps.disabled = true;
  }
  
  return (
    <Button
      classes={{
        root: clsx(styles.root, styles[size]),
        disabled: styles.disabled,
      }}
      {...buttonProps}
    >
      <div className={isLoading ? styles.fadeout : styles.fadein}>
        {children}
      </div>

      <div className={clsx(styles.load, isLoading ? styles.fadein : styles.fadeout)}>
        <CircularProgress size={20} style={{ color: theme.palette.common.white }} />
      </div>
    </Button>
  );
}

RoundedButton.propTypes = {
  isLoading: PropTypes.bool,
  text: PropTypes.string,
  color: PropTypes.string,
  textColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
};

export default RoundedButton;
