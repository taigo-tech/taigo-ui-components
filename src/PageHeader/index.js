import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import Box from '@material-ui/core/Box';
import _ from 'lodash';
import ProfileMenuItem from '../ProfileMenuItem';
import colors from '../utils/colors';

const styles = theme => ({
  main: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: `${theme.spacing(1)}px 0`,
    borderColor: theme.palette.grey[500],
    borderBottom: '1px',
  },
  text_avatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    color: theme.palette.common.white,
    backgroundColor: theme.palette.secondary.main,
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '1em',
  },
  menu_button: {
    marginLeft: theme.spacing(1),
    borderRadius: '50px',
    '&:hover': {
      backgroundColor: `${colors.lightblue} !important`,
    },
  },
  button_inner: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: '320px',
  },
  name_container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    margin: `0 ${theme.spacing(1)}px`,
  },
  text_name: {
    color: theme.palette.grey[900],
    fontWeight: 'bold',
  },
  text_email: {
    color: theme.palette.grey[500],
  },
  menu: {
    padding: theme.spacing(1),
  },
});

class PageHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profileMenuAnchorEl: null,
    }
  }

  static propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    profilePic: PropTypes.string,
    profileMenuData: PropTypes.arrayOf(PropTypes.object),
    extraNavigations: PropTypes.array,
  }

  handleProfileMenuOpen = (e) => {
    this.setState({ profileMenuAnchorEl: e.currentTarget });
  }

  handleProfileMenuClose = () => {
    this.setState({ profileMenuAnchorEl: null });
  }

  render() {
    const {
      classes,
      name,
      email,
      profilePic,
      profileMenuData = [],
      extraNavigations = [],
    } = this.props;

    const {
      profileMenuAnchorEl,
    } = this.state;

    const isProfileMenuOpen = Boolean(profileMenuAnchorEl);

    const renderProfileMenu = () => {
      return <Menu
        anchorEl={profileMenuAnchorEl}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        getContentAnchorEl={null}
        open={isProfileMenuOpen}
        onClose={this.handleProfileMenuClose}
        className={classes.menu}
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
      <div className={classes.main}>
        <Hidden smDown implementation="css">
          {extraNavigations && extraNavigations.map((nav, i) => <Box component="span" key={i}>{nav}</Box>)}
        </Hidden>
        <Button color="inherit" onClick={this.handleProfileMenuOpen} className={classes.menu_button}>
          <div className={classes.button_inner}>
            <div className={classes.avatar_container}>
              {
                profilePic && profilePic !== 'null' ?
                  <img className="avatar" src={profilePic} />
                  :
                  <div className={classes.text_avatar}>
                    {name && name[0].toUpperCase()}
                  </div>
              }
            </div>

            <Hidden smDown implementation="css">
              <div className={classes.name_container}>
                <div className={classes.text_name}>
                  {name}
                </div>
                {email && (
                  <div className={classes.text_email}>
                    {email}
                  </div>
                )}
              </div>
            </Hidden>

          </div>
        </Button>

        {renderProfileMenu()}
      </div>
    )
  }
}

export default withStyles(styles)(PageHeader);
