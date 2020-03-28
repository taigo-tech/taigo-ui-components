import React, { useState } from 'react';
import { EditableCard, TextInput, RoundedButton } from 'taigo-ui-components';
import { useTheme } from '@material-ui/core/styles';

export default () => {
    const theme = useTheme();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <EditableCard title='EDITABLE CARD' onAccept={(done) => { done() }}>
                <TextInput id="input-name" label="Name" />
                <TextInput id="input-name" label="Name" />
            </EditableCard>
        </div>
    )
}