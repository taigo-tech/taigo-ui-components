import InboxIcon from '@material-ui/icons/MoveToInbox';
import React from 'react';
import { Link, Route, Switch, useLocation } from 'react-router-dom';
import { AppLayout, AuthLayout, PageHeader } from 'taigo-ui-components';
import GlobalComponents from './demo-views/GlobalComponents';
import CardComponents from './demo-views/CardComponents';
import logo from './assets/taigo_logo_white.png';
import logoPurple from './assets/taigo_logo_purple.png';
import signInBg from './assets/login_bg.jpg';

export default () => {
  const location = useLocation();

  if (location.pathname === '/signIn') {
    return (
      <AuthLayout
        logo={logoPurple}
        image={signInBg}
        imagePosition="right"
        title="Forwarder Login"
        subtitle="Login with your email and password"
      >
        <Link to="/">Home</Link>
      </AuthLayout>
    );
  }

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
          title: 'Card Components',
          icon: InboxIcon,
          path: '/card',
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
          title: 'Sign out',
          icon: InboxIcon,
          path: '/signIn',
        },
      ]}
      menuItemComponent={Link}
      location={location}
      username="John Smith"
    >
      <Switch>
        <Route path="/global">
          <GlobalComponents />
        </Route>
        <Route path="/signIn">
          <GlobalComponents />
        </Route>

        <Route path="/card">
          <CardComponents />
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
