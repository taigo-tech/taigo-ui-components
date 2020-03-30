import React, { useState } from 'react';
import { EditableCard, TextInput, Checkbox, Card, RoundedButton } from 'taigo-ui-components';
import { useTheme } from '@material-ui/core/styles';

export default () => {
    const theme = useTheme();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <EditableCard title='EDITABLE CARD' onAccept={(done) => { done() }} editLabel='Edit' cancelLabel='Cancel' acceptLabel='label'>
                <TextInput id="input-name" label="Name" />
                <TextInput id="input-name" label="Name" />
                <Checkbox />
            </EditableCard>

            <div style={{ margin: '1em' }} />

            <Card title='NORMAL CARD'>
                Normal Card
            </Card>

            <div style={{ margin: '1em' }} />

            <Card title='CARD WITH CUSTOM ACTIONS' actions={<div><RoundedButton>CUSTOM</RoundedButton></div>}>
                Card with custom actions
            </Card>
        </div>
    )
}