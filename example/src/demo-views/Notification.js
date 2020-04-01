import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { NotificationList } from 'taigo-ui-components';

const exampleData = [
    {
        id: 'CON1',
        path: '/global',
        title: 'Upload Documents',
        ref: 'CONTAINER NO. 1585714816080',
        subtitle: 'is now active. \nPlease update the e-Gate Pass and other relevant documents.',
        createdAt: '01/04/2020 12:28:52',
    },
    {
        id: 'CON2',
        path: '/global',
        title: 'Make Payment',
        ref: 'CONTAINER NO. 3212333212332',
        subtitle: 'has been accepted. Please make payment(s) right away.',
        createdAt: '01/04/2020 12:28:52',
    },
    {
        id: 'CON3',
        path: '/global',
        title: 'Make Payment',
        ref: 'CONTAINER NO. 3123323360801',
        subtitle: 'has been accepted. Please make payment(s) right away.',
        createdAt: '01/04/2020 12:28:52',
    },
    {
        id: 'CON4',
        path: '/global',
        title: 'Upload Documents',
        ref: 'CONTAINER NO. 9238848233311',
        subtitle: 'is now active. Please update the e-Gate Pass and other relevant documents.',
        createdAt: '01/04/2020 12:28:52',
    },
    {
        id: 'CON5',
        path: '/global',
        title: 'Upload Documents',
        ref: 'CONTAINER NO. 2387723766534',
        subtitle: 'is now active. Please update the e-Gate Pass and other relevant documents.',
        createdAt: '01/04/2020 12:28:52',
    },
    {
        id: 'CON6',
        path: '/global',
        title: 'Upload Documents',
        ref: 'CONTAINER NO. 7028466623773',
        subtitle: 'is now active. Please update the e-Gate Pass and other relevant documents.',
        createdAt: '01/04/2020 12:28:52',
    },
];

export const getExampleNotifications = () => {
    return new Promise((resolve) => setTimeout(() => resolve({ items: exampleData, count: 2 }), 3000));
}

export default () => {
    

    return (
        <Fragment>
            <div style={{ marginBottom: 48 }}>
                <NotificationList items={exampleData} listItemComponent={Link} />
            </div>
            <div style={{ marginBottom: 48 }}>
                
            </div>
        </Fragment>
    );
}