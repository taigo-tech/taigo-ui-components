import React, { useState } from 'react';
import { RoundedButton, TextInput, Checkbox } from 'taigo-ui-components';

export default () => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Checkbox onChange={(event) => { setIsLoading(event.target.checked); }} />

            <div style={{ margin: '1em' }} />

            <RoundedButton onClick={() => { console.log('Clicked small'); }} size='small' isLoading={isLoading}>
                Small Button
            </RoundedButton>

            <div style={{ margin: '1em' }} />

            <RoundedButton onClick={() => { console.log('Clicked medium'); }} size='medium' isLoading={isLoading}>
                Medium Button
            </RoundedButton>

            <div style={{ margin: '1em' }} />

            <RoundedButton onClick={() => { console.log('Clicked large'); }} size='large' isLoading={isLoading}>
                Large Button
            </RoundedButton>

            <div style={{ margin: '1em' }} />

            <TextInput id="text-input" label="Label" defaultValue="DefaultValue" />

            <div style={{ margin: '1em' }} />

            <TextInput id="text-input-error" label="Error" defaultValue="Error" error helperText={"Error sample"} />
        </div>
    )
}