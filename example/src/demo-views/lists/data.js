import React from 'react';
import Chip from '@material-ui/core/Chip';

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
        size: 2,
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
        render: value => <Chip label={value} color="primary" />,
        size: 1,
        showLabel: false,
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
        size: 2,
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
        value: 'Active',
        render: value => <Chip label={value} color="secondary" />,
        size: 1,
        showLabel: false,
    },
];

export const data3 = [
    {
        id: 'container',
        label: 'Container No.',
        value: '1586866926379',
        size: 2,
    },
    {
        id: 'size',
        label: 'Size',
        value: '20',
        size: 1,
    },
    {
        id: 'type',
        label: 'Type',
        value: 'GP',
        size: 1,
    },
    {
        id: 'eta',
        label: 'ETA',
        value: '3 March 2020',
        size: 2,
    },
    {
        id: 'haulier',
        label: 'Haulier',
        value: 'N/A',
        size: 2,
    },
    {
        id: 'haulierCode',
        label: 'Haulier Code',
        value: 'N/A',
        size: 2,
    },
    {
        id: 'eGate',
        label: 'E-Gate Pass',
        value: 'N/A',
        size: 1,
    },
    {
        id: 'status',
        label: 'Status',
        value: 'Pending',
        render: value => <Chip label={value} />,
        size: 1,
        showLabel: false,
    },
];

export const data4 = [
    {
        id: 'container',
        label: 'Container No.',
        value: '1586863366966',
        size: 2,
    },
    {
        id: 'size',
        label: 'Size',
        value: '40',
        size: 1,
    },
    {
        id: 'type',
        label: 'Type',
        value: 'GP',
        size: 1,
    },
    {
        id: 'eta',
        label: 'ETA',
        value: '13 April 2020',
        size: 2,
    },
    {
        id: 'haulier',
        label: 'Haulier',
        value: 'Avicu Haulage Sdn Bhd',
        size: 2,
    },
    {
        id: 'haulierCode',
        label: 'Haulier Code',
        value: 'AVICUWEST',
        size: 2,
    },
    {
        id: 'eGate',
        label: 'E-Gate Pass',
        value: 'N/A',
        size: 1,
    },
    {
        id: 'status',
        label: 'Status',
        value: 'Active',
        render: value => <Chip label={value} color="primary" />,
        size: 1,
        showLabel: false,
    },
];

export default {};