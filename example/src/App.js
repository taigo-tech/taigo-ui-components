import React, { useState, useEffect } from 'react';
import { Link, Route, Switch, useLocation } from 'react-router-dom';
import { AppLayout, AuthLayout, PageHeader, NotificationPopup } from 'taigo-ui-components';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PublicIcon from '@material-ui/icons/Public';
import CallToActionIcon from '@material-ui/icons/CallToAction';
import ListAltIcon from '@material-ui/icons/ListAlt';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import ListIcon from '@material-ui/icons/List';

import GlobalComponents from './demo-views/GlobalComponents';
import PageElements from './demo-views/PageElements';
import CardComponents from './demo-views/CardComponents';
import FormikExample from './demo-views/FormikExample';
import Notification, { getExampleNotifications } from './demo-views/Notification';
import EmptyOrder from './demo-views/EmptyOrder';
import EmptyChat from './demo-views/EmptyChat';
import TableList from './demo-views/lists/TableList';
import ActionableList from './demo-views/lists/ActionableList';
import InfiniteScrolling from './demo-views/lists/InfiniteScrolling';
import DeliveryStatusList from './demo-views/lists/DeliveryStatusList';

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
      { label: 'Global', to: '/', icon: PublicIcon },
      { label: 'Page Elements', to: '/page', icon: FindInPageIcon },
      { label: 'Card', to: '/card', icon: CallToActionIcon },
      { label: 'Formik', to: '/formik', icon: ListAltIcon },
      { label: 'Notifications', to: '/notification', icon: NotificationsNoneIcon },
    ],
    [
      { label: 'Sign out', to: '/signIn', icon: ExitToAppIcon },
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
          title: 'Global',
          path: '/',
          icon: PublicIcon,
          // hideInMenu: true,
        },
        {
          title: 'Page Elements',
          path: '/page',
          icon: FindInPageIcon,
        },
        {
          title: 'Card',
          path: '/card',
          icon: CallToActionIcon,
        },
        {
          title: 'Formik Use Example',
          path: '/formik',
          icon: ListAltIcon,
        },
        {
          title: 'Notification',
          path: '/notification',
          icon: NotificationsNoneIcon,
        },
        {
          title: 'Lists',
          path: '/lists',
          icon: ListIcon,
          routes: [
            {
              title: 'Infinite Scrolling',
              path: '/lists/infinite',
            },
            {
              title: 'Table List',
              path: '/lists/table',
            },
            {
              title: 'Actionable List Item',
              path: '/lists/actionable',
            },
            {
              title: 'Delivery Status List',
              path: '/lists/deliveryStatus',
            },
          ]
        },
        {
          title: 'Void',
          path: '/empty',
          icon: MoodBadIcon,
          routes: [
            {
              title: 'Empty Order',
              path: '/empty/order',
            },
            {
              title: 'Empty Chat',
              path: '/empty/chat',
            }
          ]
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
        <Route path="/" exact>
          <GlobalComponents />
        </Route>

        <Route path="/signIn">
          <GlobalComponents />
        </Route>

        <Route path="/page">
          <PageElements />
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

        <Route path="/empty/order">
          <EmptyOrder />
        </Route>

        <Route path="/empty/chat">
          <EmptyChat />
        </Route>

        <Route path="/lists/table">
          <TableList />
        </Route>
        
        <Route path="/lists/actionable">
          <ActionableList />
        </Route>

        <Route path="/lists/infinite">
          <InfiniteScrolling />
        </Route>

        <Route path="/lists/deliveryStatus">
          <DeliveryStatusList />
        </Route>
      </Switch>
    </AppLayout>
  );
}
