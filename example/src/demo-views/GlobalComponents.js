import React, { useState } from 'react';
import { RoundedButton, TextInput, Checkbox, Dialog, colors } from 'taigo-ui-components';
import { useTheme } from '@material-ui/core/styles';

export default () => {
    const theme = useTheme();
    const [isLoading, setIsLoading] = useState(false);
    const [isConfirmDialogOpen, setConfirmDialogOpen] = useState(false);
    const [isErrorDialogOpen, setErrorDialogOpen] = useState(false);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Checkbox onChange={(event) => { setIsLoading(event.target.checked); }} />

            <div style={{ margin: '1em' }} />

            <RoundedButton variant="text" onClick={() => { console.log('Clicked small'); }} size='small' isLoading={isLoading}>
                Small Button
            </RoundedButton>

            <div style={{ margin: '1em' }} />

            <RoundedButton variant="contained" onClick={() => { console.log('Clicked small'); }} size='small' isLoading={isLoading}>
                Small Button
            </RoundedButton>

            <div style={{ margin: '1em' }} />

            <RoundedButton variant="contained" onClick={() => { console.log('Clicked medium'); }} size='medium' isLoading={isLoading}>
                Medium Button
            </RoundedButton>

            <div style={{ margin: '1em' }} />

            <RoundedButton variant="contained" onClick={() => { console.log('Clicked large'); }} size='large' isLoading={isLoading}>
                Large Button
            </RoundedButton>

            <div style={{ margin: '1em' }} />

            <TextInput id="text-input" label="Label" defaultValue="DefaultValue" />

            <div style={{ margin: '1em' }} />

            <TextInput id="text-error-input" label="Error" defaultValue="Error" error helperText={"Error sample"} />

            <div style={{ margin: '1em' }} />

            <RoundedButton color={theme.palette.error.main} variant="outlined" onClick={() => { setErrorDialogOpen(true) }} isLoading={isLoading}>
                Open Error Dialog
            </RoundedButton>

            <Dialog type="alert" open={isErrorDialogOpen} onClose={() => { setErrorDialogOpen(false) }}>
                Error Dialog
            </Dialog>

            <div style={{ margin: '1em' }} />

            <RoundedButton color={theme.palette.success.main} variant="outlined" onClick={() => { setConfirmDialogOpen(true) }} isLoading={isLoading}>
                Open Confirmation Dialog
            </RoundedButton>

            <Dialog type="confirm" open={isConfirmDialogOpen} onClose={() => { setConfirmDialogOpen(false) }}>
                Confirmation Dialog
            </Dialog>
        </div>
    )
}