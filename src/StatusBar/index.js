import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Colors from '../utils/colors';
import clsx from 'clsx';
import _ from 'lodash';

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.common.white,
    fontWeight: 'bold',
    fontSize: '12px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'stretch',
    width: ({ fixedWidth }) => fixedWidth ? '140px' : 'unset',
    textAlign: 'center',
  },
  main: {
    padding: ({ small }) => `${small ? 1.5 : 11.5}px 10px`,
  },
  sub: {
    padding: '1.5px 10px',

  },
  bar: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: ({ rounded }) => rounded ? '500px' : 'unset',
  }
}))

const colors = [
  'darkblue',
  'lightblue',
  'cyan',
  'red',
  'green',
  'yellow',
  'orange',
  'lightorange',
  'pink',
  'purple',
  'lightpurple',
  'teal',
  'brown',
  'darkgrey',
  'grey',
];

const StatusBar = props => {
  const { label, fixedWidth, color, rounded, small, subLabels, rootProps, labelProps, subLabelProps } = props;
  const styles = useStyles({ fixedWidth, rounded, small });

  return (
    <div className={styles.root} {...rootProps}>
      <div className={clsx(styles.bar, styles.main)} style={{ backgroundColor: Colors[color] }} {...labelProps}>{label}</div>
      {
        subLabels.map((sub, index) => {
          return <div key={index} className={clsx(styles.bar, styles.sub)} style={{ backgroundColor: Colors[sub.color] }} {...subLabelProps}>{sub.label}</div>
        })
      }
    </div>
  );
}

StatusBar.defaultProps = {
  fixedWidth: false,
  subLabels: [],
  rounded: false,
  small: false,
}

StatusBar.propTypes = {
  label: PropTypes.string,
  color: PropTypes.oneOf(colors),
  small: PropTypes.bool,
  rounded: PropTypes.bool,
  fixedWidth: PropTypes.bool,
  subLabels: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      color: PropTypes.oneOf(colors),
    })
  )
};

export default StatusBar;
