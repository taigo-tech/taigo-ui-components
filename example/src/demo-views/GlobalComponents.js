import React, { useState } from 'react';
import { RoundedButton, TextInput, Checkbox, ConfirmDialog, ErrorDialog, Avatar, Switch } from 'taigo-ui-components';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import { useTheme } from '@material-ui/core/styles';

export default () => {
    const theme = useTheme();
    const [isLoading, setIsLoading] = useState(false);
    const [isConfirmDialogOpen, setConfirmDialogOpen] = useState(false);
    const [isErrorDialogOpen, setErrorDialogOpen] = useState(false);
    const [isEditable, setEditable] = useState(false);
    const [inputValue, setInputValue] = useState('Value');
    const [selectValue, setSelectValue] = useState(0);

    return (
        <div>

            <div style={{ paddingBottom: 60, borderBottom: '1px solid #CCC' }}>
                <h2>Switch</h2>

                <Switch onClick={({ proceed, current }) => { proceed(); console.log('c', current) }} onLabel="Activated" />
            </div>

            <div style={{ paddingTop: 60, paddingBottom: 60, borderBottom: '1px solid #CCC' }}>
                <h2>Checkbox</h2>

                <Checkbox onChange={(event) => { setIsLoading(event.target.checked); }} label="Try this checkbox!" />
            </div>

            <div style={{ paddingTop: 60, paddingBottom: 60, borderBottom: '1px solid #CCC' }}>
                <h2>Avatar</h2>

                <Avatar name="J" src='https://www.gstatic.com/webp/gallery/4.jpg' editable={isEditable} isLoading={isLoading}
                    onDeletePress={() => { console.log('delete press') }}
                    onEditPress={() => { console.log('edit press') }} />
            </div>

            <div style={{ paddingTop: 60, paddingBottom: 60, borderBottom: '1px solid #CCC' }}>
                <h2>RoundedButton</h2>

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
            </div>

            <div style={{ paddingTop: 60, paddingBottom: 60, borderBottom: '1px solid #CCC' }}>
                <h2>TextInput</h2>

                <Checkbox onChange={(event) => { setEditable(event.target.checked); }} />

                <TextInput multiline rows={4} rowsMax={4} id="text-input" label="Label" value={inputValue} onChange={(event) => { setInputValue(event.target.value) }} editable={isEditable} />

                <div style={{ margin: '1em' }} />

                <TextInput id="text-error-input" label="Error" error helperText={"Error sample"} InputProps={{ startAdornment: <InputAdornment position="start">RM</InputAdornment> }} />

                <div style={{ margin: '1em' }} />

                <TextInput id="text-select-input" label="Select" helperText={"Select sample"} select editable={isEditable} value={selectValue}
                    onChange={(e) => { setSelectValue(e.target.value) }}>
                    <MenuItem value={0}>1</MenuItem>
                    <MenuItem value={1}>2</MenuItem>
                    <MenuItem value={2}>3</MenuItem>
                </TextInput>

                <div style={{ margin: '1em' }} />

                <TextInput label="Disabled" value="Not editabled" disabled />
            </div>

            <div style={{ paddingTop: 60, paddingBottom: 60, borderBottom: '1px solid #CCC' }}>
                <h2>ErrorDialog</h2>

                <RoundedButton color={theme.palette.error.main} variant="outlined" onClick={() => { setErrorDialogOpen(true) }} isLoading={isLoading}>
                    Open Error Dialog
                </RoundedButton>

                <ErrorDialog open={isErrorDialogOpen} onClose={() => { setErrorDialogOpen(false) }}>
                    Error Dialog
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </ErrorDialog>
            </div>

            <div style={{ paddingTop: 60, paddingBottom: 60, borderBottom: '1px solid #CCC' }}>
                <h2>ConfirmDialog</h2>

                <RoundedButton color={theme.palette.success.main} variant="outlined" onClick={() => { setConfirmDialogOpen(true) }} isLoading={isLoading}>
                    Open Confirmation Dialog
                </RoundedButton>

                <ConfirmDialog open={isConfirmDialogOpen} onClose={() => { setConfirmDialogOpen(false) }}
                    onCancel={() => { setConfirmDialogOpen(false); }}
                    onConfirm={() => { setConfirmDialogOpen(false); console.log("confirmed"); }}>
                    Confirmation Dialog
                </ConfirmDialog>
            </div>
        </div>
    )
}