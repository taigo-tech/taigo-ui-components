import MenuItem from '@material-ui/core/MenuItem';
import { Field, Formik, Form } from 'formik';
import { fieldToTextField } from 'formik-material-ui';
import React from 'react';
import { TextInput, EditableCard, RoundedButton, Switch } from 'taigo-ui-components';
export default () => {
    const textInput = props => <TextInput {...fieldToTextField(props)} />;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Formik
                enableReinitialize={true}
                initialValues={{ select: 0, text: 'Text', switch: false }}
                onSubmit={(values) => { console.log(values) }}
            >
                {({ resetForm, isSubmitting, submitForm }) => (
                    <EditableCard>
                        <Form>
                            <Field name="select" label="Select" as="select" select
                                component={textInput}>
                                <MenuItem value={0}>A</MenuItem>
                                <MenuItem value={1}>B</MenuItem>
                                <MenuItem value={2}>C</MenuItem>
                            </Field>

                            <Field name="text" label="Text" component={textInput} />

                            <Field name="switch" component={({ field, form, ...props }) => <Switch {...field} {...props} />} />

                            <RoundedButton onClick={() => { submitForm() }}>Submit</RoundedButton>
                        </Form>
                    </EditableCard>
                )}
            </Formik>
        </div>
    )
}