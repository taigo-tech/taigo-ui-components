import React from 'react';
import { TableList } from 'taigo-ui-components';
import { data1, data2 } from './data';

const { TableListItem } = TableList;

export default () => {

    return (
        <TableList>
            <TableListItem data={data1} header />
            <TableListItem data={data2} />
        </TableList>
    )
}