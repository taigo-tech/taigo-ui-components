import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuList from '@material-ui/core/MenuList';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
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
    profileMenuData: PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.arrayOf(PropTypes.object),
    ])),
    extraNavigations: PropTypes.array,
    linkComponent: function(props, propName) {
      if (typeof props.profileMenuData !== 'undefined' && typeof props[propName] === 'undefined') {
        return new Error(`Prop ${propName} is required if prop 'profileMenuData' is provided`);
      }
    },
    onProfileClicked: PropTypes.func,
  }

  handleProfileMenuClick = e => {
    const { onProfileClicked, profileMenuData =[] } = this.props;
    if (typeof onProfileClicked === 'function') {
      onProfileClicked(e);
    }

    if (profileMenuData.length > 0) {
      this.handleProfileMenuOpen(e);
    }
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
      linkComponent,
    } = this.props;

    const {
      profileMenuAnchorEl,
    } = this.state;

    const isProfileMenuOpen = Boolean(profileMenuAnchorEl);

    return (
      <div className={classes.main}>
        <Hidden smDown implementation="css">
          {extraNavigations && extraNavigations.map((nav, i) => <Box component="span" key={i}>{nav}</Box>)}
        </Hidden>
        <Button color="inherit" onClick={this.handleProfileMenuClick} className={classes.menu_button}>
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

        {profileMenuData.length > 0 && (
          <Menu
            anchorEl={profileMenuAnchorEl}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: -20, horizontal: 'left' }}
            getContentAnchorEl={null}
            open={isProfileMenuOpen}
            onClose={this.handleProfileMenuClose}
            className={classes.menu}
            disableAutoFocusItem={true}
          >
            {
              _.map(profileMenuData, (data, i) => {
                const renderMenuItem = item => {
                  const { label, to } = item;
    
                  return (
                    <ProfileMenuItem
                      key={to}
                      to={to}
                      label={label}
                      handleProfileMenuClose={this.handleProfileMenuClose}
                      linkComponent={linkComponent}
                    />
                  );
                }

                if (_.isArray(data)) {
                  return (
                    <div key={i}>
                      {_.map(data, renderMenuItem)}
                      {i < profileMenuData.length - 1 && <Divider />}
                    </div>
                  );
                } else {
                  return renderMenuItem(data);
                }
              })
            }
          </Menu>
        )}
      </div>
    )
  }
}

export default withStyles(styles)(PageHeader);
