import React from 'react';
import { EditableCard, TextInput, Checkbox, Card, RoundedButton, Avatar } from 'taigo-ui-components';
import Typography from '@material-ui/core/Typography';


export default () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <EditableCard title='EDITABLE CARD' onAccept={(done) => { done() }} editLabel='Edit' cancelLabel='Cancel' acceptLabel='label'>
                <div>
                    <Avatar src='https://www.gstatic.com/webp/gallery/4.jpg'
                        onDeletePress={() => { console.log('delete press') }}
                        onEditPress={() => { console.log('edit press') }} />
                </div>

                <TextInput id="input-name1" label="Name" />
                <TextInput id="input-name2" label="Name" />
                <Checkbox />
            </EditableCard>

            <div style={{ margin: '1em' }} />

            <Card title={<Typography variant="h4">Custom title</Typography>}>
                Normal Card
            </Card>

            <div style={{ margin: '1em' }} />

            <Card title='CARD WITH CUSTOM ACTIONS' actions={<div><RoundedButton>CUSTOM</RoundedButton></div>}>
                Card with custom actions
            </Card>
        </div>
    )
}