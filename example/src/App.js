import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import { AppLayout, ProfileHeader } from 'taigo-ui-components';
import logo from './assets/taigo_logo_white.png';

export default () => {
  return (
    <AppLayout
      logo={logo}
      menuData={[
        {
          name: 'Inbox',
          icon: InboxIcon,
          path: '/inbox',
        },
        {
          name: 'Starred',
          icon: InboxIcon,
          path: '/starred',
        },
        {
          name: 'Others',
          icon: DraftsIcon,
          path: '/others',
          defaultOpen: true,
          routes: [
            {
              name: 'Trash',
              icon: InboxIcon,
              path: '/others/trash',
            },
            {
              name: 'Spam',
              icon: InboxIcon,
              path: '/others/Spam',
            }
          ]
        }
      ]}
      menuItemComponent={Link}
    >
      <ProfileHeader name='Profile Header' email='profileheader@example.com'
        profileMenuData={[
          { to: '/profile', label: 'Profile Settings' }
        ]} />
        
      <Switch>
        <Route path="/inbox">
          <div>Inbox</div>
        </Route>
        <Route path="/starred">
          <div>Starred</div>
        </Route>
        <Route path="/others/trash">
          <div>Trash</div>
        </Route>
        <Route path="/others/Spam">
          <div>Spam</div>
        </Route>
      </Switch>
    </AppLayout>
  );
}
