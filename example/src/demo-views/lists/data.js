import React from 'react';
import Button from '@material-ui/core/Button';

export const data1 = [
    {
        id: 'orderNo',
        label: 'Order No.',
        value: 'ORD20200410090281',
        size: 2,
    },
    {
        id: 'date',
        label: 'Date',
        value: '20 Jan 2020',
        size: 1,
    },
    {
        id: 'createdAt',
        label: 'Created By',
        value: 'Cas Chan',
        size: 1,
    },
    {
        id: 'address',
        label: 'Delivery Address',
        value: 'SUITE NO. A-9-5, NORTHPOINT OFFICE, MIDVALLEY CITY, NO. 1, MEDAN SYED PUTRA UTARA',
        size: 3,
    },
    {
        id: 'remarks',
        label: 'Remarks',
        value: 'Contact Mr.Yong. Tel: 016-2331222',
        size: 3,
    },
    {
        id: 'status',
        label: 'Status',
        value: 'Completed',
        render: value => <Button variant="outlined">{value}</Button>,
        size: 2,
    },
];

export const data2 = [
    {
        id: 'orderNo',
        label: 'Order No.',
        value: 'ORD20200410090277',
        size: 2,
    },
    {
        id: 'date',
        label: 'Date',
        value: '11 Feb 2020',
        size: 1,
    },
    {
        id: 'createdAt',
        label: 'Created By',
        value: 'Cas Chan',
        size: 1,
    },
    {
        id: 'address',
        label: 'Delivery Address',
        value: 'MIDVALLEY CITY, MEDAN SYED PUTRA UTARA',
        size: 3,
    },
    {
        id: 'remarks',
        label: 'Remarks',
        value: 'Tel: 016-2331222',
        size: 3,
    },
    {
        id: 'status',
        label: 'Status',
        value: 'Cancelled',
        render: value => <Button variant="outlined">{value}</Button>,
        size: 2,
    },
];

export default {};