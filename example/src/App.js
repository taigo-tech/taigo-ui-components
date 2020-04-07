import React, { useState, useEffect } from 'react';
import { Link, Route, Switch, useLocation } from 'react-router-dom';
import { AppLayout, AuthLayout, PageHeader, NotificationPopup } from 'taigo-ui-components';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import GlobalComponents from './demo-views/GlobalComponents';
import CardComponents from './demo-views/CardComponents';
import FormikExample from './demo-views/FormikExample';
import Notification from './demo-views/Notification';
import { getExampleNotifications } from './demo-views/Notification';
import logo from './assets/taigo_logo_white.png';
import logoPurple from './assets/taigo_logo_purple.png';
import signInBg from './assets/login_bg.jpg';

export default () => {
  const location = useLocation();

  const [loading, setLoading] = useState(true);
  const [notifications, setNotifications] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    (async () => {
      const { items, count } = await getExampleNotifications();
      setLoading(false);
      setNotifications(items);
      setCount(count);
    })();
  }, []);

  const header = <div>Notifications</div>;
  const footer = <Link to="/notification">View all notifications</Link>;

  const notificationPopup = <NotificationPopup loading={loading} items={notifications} count={count} linkComponent={Link} viewAllPath="/notification" footer={footer} header={header} />;

  const profileNavs = [
    [
      { label: 'Global', to: '/global' },
      { label: 'Card', to: '/card' },
      { label: 'Formik', to: '/formik' },
      { label: 'Notifications', to: '/notification' },
    ],
    [
      { label: 'Sign out', to: '/signIn' },
    ]
  ]
  const pageHeader = <PageHeader name="John Smith" extraNavigations={[notificationPopup]} profileMenuData={profileNavs} linkComponent={Link} onProfileClicked={() => console.log('onProfileClicked')} />;

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
          path: '/global',
          // hideInMenu: true,
        },
        {
          title: 'Card Components',
          path: '/card',
        },
        {
          title: 'Formik Use Example',
          path: '/formik',
        },
        {
          title: 'Notification',
          path: '/notification',
        },
      ]}
      footerMenu={[
        {
          title: 'Sign out',
          path: '/signIn',
          icon: ExitToAppIcon,
        },
      ]}
      menuItemComponent={Link}
      location={location}
      rightContent={pageHeader}
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

        <Route path="/formik">
          <FormikExample />
        </Route>

        <Route path="/notification">
          <Notification />
        </Route>
      </Switch>
    </AppLayout>
  );
}
