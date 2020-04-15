import React from 'react';
import { TableList } from 'taigo-ui-components';
import { data1, data2, data3, data4 } from './data';

const { TableListItem } = TableList;

export default () => {

    return (
        <TableList collapsible defaultExpanded>
            <TableListItem data={data1} showHeader />
            <TableListItem data={data2}>
                <TableListItem data={data3} transparent showLabel />
                <TableListItem data={data4} transparent showLabel />
            </TableListItem>
        </TableList>
    )
}