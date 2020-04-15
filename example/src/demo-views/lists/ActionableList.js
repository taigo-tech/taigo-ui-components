import React from 'react';
import { ActionableListItem } from 'taigo-ui-components';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export default () => {
    return [1,2,3].map(item =>
        <ActionableListItem
            key={item}
            title="INV2020-04-10090273"
            subtitle="03/04/2020"
            content={<Typography variant="h3">287.50</Typography>}
            actions={[
                <Button variant="outlined">Invoice</Button>,
                <Button variant="outlined">Receipt</Button>,
            ]}
        >
            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>Content</div>
            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>Content 1</div>
            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>Content 2</div>
            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>Content 3</div>
        </ActionableListItem>
    )
}