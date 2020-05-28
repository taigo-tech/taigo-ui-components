import MenuItem from '@material-ui/core/MenuItem';
import { Field, Formik, Form } from 'formik';
import { fieldToTextField, fieldToCheckbox } from 'formik-material-ui';
import React from 'react';
import { TextInput, EditableCard, Switch, Checkbox } from 'taigo-ui-components';
export default () => {
    const textInput = props => <TextInput {...fieldToTextField(props)} />;
    const checkbox = props => <Checkbox {...fieldToCheckbox(props)} />;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Formik
                enableReinitialize={true}
                initialValues={{ select: 0, text: 'Text', number: 100, switch: false, check: true }}
                onSubmit={(values, { setSubmitting }) => {
                    console.log(values);
                    setTimeout(() => {
                        setSubmitting(false);
                    }, 1000);
                }}
            >
                {({ resetForm, isSubmitting, submitForm, values }) => {console.log(values); return (
                    <EditableCard
                        title="Formik"
                        isLoading={isSubmitting}
                        onAccept={done => { submitForm(); done(); }}
                        onCancel={done => { resetForm(); done(); }}
                        onFormToggle={canEdit => { console.log(`Form is ${canEdit ? 'ON' : 'OFF'}`) }}
                    >
                        <Form>
                            <Field name="select" label="Select" as="select" select component={textInput}>
                                <MenuItem value={0}>A</MenuItem>
                                <MenuItem value={1}>B</MenuItem>
                                <MenuItem value={2}>C</MenuItem>
                            </Field>
                            <br />
                            <Field name="text" label="Text" component={textInput} />
                            <br />
                            <Field name="check" label="Checkbox" type="checkbox" component={checkbox} />
                            <br />
                            <Field name="number" label="Number" component={textInput} renderText={value => value.toFixed(2)} />
                            <br />
                            <Field name="switch" component={({ field, form, ...props }) => <Switch {...field} {...props} />} />
                        </Form>
                    </EditableCard>
                )}}
            </Formik>
        </div>
    )
}