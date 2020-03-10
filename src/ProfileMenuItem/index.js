import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Link from '@material-ui/core/Link';
import MenuItem from '@material-ui/core/MenuItem';

import NotificationsIcon from '@material-ui/icons/Notifications';

import styles from './styles.scss'

export default class ProfileMenuItem extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  static propTypes = {
    to: PropTypes.string,
    label: PropTypes.string,
    handleProfileMenuClose: PropTypes.func,
  }

  render() {
    const { to, label, handleProfileMenuClose } = this.props;

    return (
      <Link to={to}>
        <MenuItem onClick={handleProfileMenuClose}>
          <div>
            {label}
          </div>
        </MenuItem>
      </Link>
    )
  }
}
