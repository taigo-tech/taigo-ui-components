import InboxIcon from '@material-ui/icons/MoveToInbox';
import React from 'react';
import { Link, Route, Switch, useLocation } from 'react-router-dom';
import { AppLayout } from 'taigo-ui-components';
import logo from './assets/taigo_logo_white.png';
import GlobalComponents from './demo-views/GlobalComponents';

export default () => {
  const location = useLocation();

  return (
    <AppLayout
      logo={logo}
      menuData={[
        {
          title: 'Global Components',
          icon: InboxIcon,
          path: '/global',
        },
        {
          title: 'Starred',
          icon: InboxIcon,
          path: '/starred',
        },
        {
          title: 'Others',
          path: '/others',
          routes: [
            {
              title: 'Trash',
              path: '/others/trash',
            },
            {
              title: 'Spam',
              icon: InboxIcon,
              path: '/others/spam',
            }
          ]
        },
      ]}
      footerMenu={[
        {
          title: 'Inbox',
          icon: InboxIcon,
          path: '/inbox',
        },
        {
          title: 'Starred',
          icon: InboxIcon,
          path: '/starred',
        },
      ]}
      menuItemComponent={Link}
      location={location}
      getPageTitle={path => {
        switch (path) {
          case '/starred':
            return 'Starred';
          case '/global':
            return 'Global Components';
          default:
            break;
        }
      }}
    >
      <Switch>
        <Route path="/global">
          <GlobalComponents />
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
