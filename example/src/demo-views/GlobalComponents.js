import React, { useState } from 'react';
import { RoundedButton, TextInput } from 'taigo-ui-components';

export default () => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div>Click to test Button Loading and Input Error</div>
            <RoundedButton onClick={() => { setIsLoading(!isLoading); }} size='small' isLoading={isLoading}>
                Test Button
            </RoundedButton>
            <div style={{ margin: '1em' }} />
            <TextInput id="text-input" label="Label" defaultValue="DefaultValue" error={isLoading} helperText={isLoading && "Error sample"} />
        </div>
    )
}