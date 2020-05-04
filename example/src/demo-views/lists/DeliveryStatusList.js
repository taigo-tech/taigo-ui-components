import React from 'react';
import { DeliveryStatusList } from 'taigo-ui-components';

const data = [
    {
        index: 1,
        status: 'Await Delivery to Customer',
        address: 'NORTHPOINT OFFICE,\nLINGKARAN SYED PUTRA\nMDI VALLEY CITY\nKUALA LUMPUR',
        dateTime: new Date(),
    },
    {
        index: 2,
        status: 'Delivered to Customer',
        address: '39, Jalan Boginvila, Taman Bukit Belimbing, 43300 Seri Kembangan, Selangor, Malaysia',
        dateTime: new Date(),
    },
    {
        index: 3,
        status: 'Delivered to Customer',
        address: 'NORTHPOINT OFFICE,\nLINGKARAN SYED PUTRA\nMDI VALLEY CITY\nKUALA LUMPUR',
        dateTime: new Date(),
        selected: true,
    }
]

export default () => {
    return <div style={{ width: '300px' }}>
        <DeliveryStatusList data={data} />
    </div>
}