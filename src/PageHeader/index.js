import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import Menu from '@material-ui/core/Menu';
import ProfileMenuItem from '../ProfileMenuItem';
import _ from 'lodash';
import NotificationsIcon from '@material-ui/icons/Notifications';

import styles from './styles.scss'

export default class PageHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notificationAnchorEl: undefined,
      notificationCount: 0,
    }
  }

  static propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    profilePic: PropTypes.string,
    profileMenuData: PropTypes.arrayOf(PropTypes.object),
  }

  handleNotificationMenuOpen = (e) => {
    this.setState({ notificationMenuAnchorEl: e.currentTarget });
  }

  handleNotificationMenuClose = () => {
    this.setState({ notificationMenuAnchorEl: null });
  }

  handleProfileMenuOpen = (e) => {
    this.setState({ profileMenuAnchorEl: e.currentTarget });
  }

  handleProfileMenuClose = () => {
    this.setState({ profileMenuAnchorEl: null });
  }

  render() {
    const {
      name,
      email,
      profilePic,
      profileMenuData
    } = this.props;

    const {
      profileMenuAnchorEl,
      notificationMenuAnchorEl,
      notificationCount
    } = this.state;

    const isProfileMenuOpen = Boolean(profileMenuAnchorEl);
    const isNotificationMenuOpen = Boolean(notificationMenuAnchorEl);

    const renderNotificationMenu = (children) => {
      return <Menu
        anchorEl={notificationMenuAnchorEl}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        getContentAnchorEl={null}
        open={isNotificationMenuOpen}
        onClose={this.handleNotificationMenuClose}
        className={styles.menu}
        disableAutoFocusItem={true}
      >
        {children}
      </Menu>
    }

    const renderProfileMenu = () => {
      return <Menu
        anchorEl={profileMenuAnchorEl}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        getContentAnchorEl={null}
        open={isProfileMenuOpen}
        onClose={this.handleProfileMenuClose}
        className={styles.menu}
        disableAutoFocusItem={true}
      >
        {
          _.map(profileMenuData, (data, index) => {
            const { label, to } = data;

            return <ProfileMenuItem key={index} label={label} to={to} handleProfileMenuClose={this.handleProfileMenuClose} />
          })
        }
      </Menu>
    }

    return (
      <div className={styles.main}>
        <Hidden smDown implementation="css">
          <IconButton color="inherit" onClick={this.handleNotificationMenuOpen}
            className={isNotificationMenuOpen ? styles.notification_button_highlight : styles.notification_button}
          >
            <Badge className="badge" color="secondary" badgeContent={notificationCount > 0 ? notificationCount : ''}>
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Hidden>

        <Button color="inherit" onClick={this.handleProfileMenuOpen} className={styles.menu_button}>
          <div className={styles.button_inner}>
            <div className={styles.avatar_container}>
              {
                profilePic && profilePic !== 'null' ?
                  <img className="avatar" src={profilePic} />
                  :
                  <div className={styles.text_avatar}>
                    {name && name[0].toUpperCase()}
                  </div>
              }
            </div>

            <Hidden smDown implementation="css">
              <div className={styles.name_container}>
                <div className={styles.text_name}>
                  {name}
                </div>
                <div className={styles.text_email}>
                  Profile Menu
                </div>
              </div>
            </Hidden>

          </div>
        </Button>

        {renderProfileMenu()}
        {renderNotificationMenu()}
      </div>
    )
  }
}
