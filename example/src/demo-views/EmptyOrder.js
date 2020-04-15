import React from 'react';
import { Link } from 'react-router-dom';
import { EmptyState } from 'taigo-ui-components';

const { EmptyOrder } = EmptyState;

export default () => (
    <EmptyOrder
        message="You have not created any orders yet!"
        actions={[
            <Link to ="/">Home</Link>,
            <Link to ="/formik">Formik example</Link>,
        ]}
        style={{ marginTop: 48 }}
    />
);