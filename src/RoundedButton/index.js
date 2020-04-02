import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import _ from 'lodash';
import clsx from 'clsx';

const RoundedButton = props => {
  const { isLoading, size, text, color, children, ...buttonProps } = props;
  const theme = useTheme();

  const useStyles = makeStyles(theme => ({
    root: {
      textTransform: 'none',
      borderRadius: '500px',
      fontWeight: 'bold',
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
      fontSize: '15px',
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
    },
    text: {      
      color: color || theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: color || theme.palette.secondary.main,
        color: theme.palette.common.white,
      }
    },
    contained: {
      backgroundColor: color || theme.palette.secondary.main,
      color: theme.palette.common.white,
      '&:hover': {
        backgroundColor: color || theme.palette.secondary.main,
      }
    },
    outlined: {
      color: color || theme.palette.secondary.main,
      borderColor: color || theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: color || theme.palette.secondary.main,
        color: theme.palette.common.white,
      }
    },
    progress: {
      color: props.variant === "contained" ?
        theme.palette.common.white :
        theme.palette.grey[500]
    }
  }));

  const styles = useStyles();

  if (isLoading) {
    buttonProps.disabled = true;
  }

  return (
    <Button
      classes={{
        root: clsx(styles.root, styles[size]),
        text: styles.text,
        contained: styles.contained,
        outlined: styles.outlined,
        disabled: styles.disabled,
      }}
      {...buttonProps}
    >
      <div className={isLoading ? styles.fadeout : styles.fadein}>
        {children}
      </div>

      <div className={clsx(styles.load, isLoading ? styles.fadein : styles.fadeout)}>
        <CircularProgress size={20} className={styles.progress} />
      </div>
    </Button >
  );
}

RoundedButton.propTypes = {
  isLoading: PropTypes.bool,
  text: PropTypes.string,
  color: PropTypes.string,
  textColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

RoundedButton.defaultProps = {
  size: 'small',
}

export default RoundedButton;
