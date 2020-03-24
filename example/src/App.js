import React, { useState } from 'react';
import { Switch, Route, Link, useLocation } from 'react-router-dom';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { AppLayout, RoundedButton, TextInput } from 'taigo-ui-components';
import logo from './assets/taigo_logo_white.png';

export default () => {
  const location = useLocation();

  return (
    <AppLayout
      logo={logo}
      menuData={[
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
          case '/inbox':
            return 'Inbox';
          default:
            break;
        }
      }}
    >
      <Switch>
        <Route path="/inbox" component={() => {
          const [isLoading, setIsLoading] = useState(false);

          return <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div>Click to test Button Loading and Input Error</div>
            <RoundedButton onClick={() => { setIsLoading(!isLoading); }} size='small' isLoading={isLoading}>
              Test Button
            </RoundedButton>
            <div style={{ margin: '1em' }} />
            <TextInput id="text-input" label="Label" defaultValue="DefaultValue" error={isLoading} helperText={isLoading && "Error sample"} />
          </div>
        }} />

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
