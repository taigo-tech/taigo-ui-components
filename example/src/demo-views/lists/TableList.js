import React from 'react';
import { TableList, Colors } from 'taigo-ui-components';
import { data1, data2, data3, data4 } from './data';
import { makeStyles } from '@material-ui/core/styles';

const { TableListItem } = TableList;

const useStyles = makeStyles(theme => ({
    title: {
        padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
        backgroundColor: Colors.lightblue,
    },
}));

export default () => {
    const styles = useStyles();

    return (
        <TableList collapsible defaultExpanded minWidth={1200}>
            <TableListItem data={data1} showHeader onClick={() => console.log('onClick')} />
            <TableListItem data={data2}>
                <TableListItem
                    data={data3}
                    transparent
                    showLabel
                    title="Job No: CG202004100902771"
                />
                <TableListItem
                    data={data3}
                    transparent
                    showLabel
                />
                <TableListItem
                    data={data4}
                    transparent
                    showLabel
                    titleElement={<div className={styles.title}>Job No: CG202004100902771</div>}
                />
            </TableListItem>
        </TableList>
    )
}