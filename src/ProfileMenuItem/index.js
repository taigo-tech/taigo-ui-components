import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({

}));

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
    const styles = useStyles();

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
