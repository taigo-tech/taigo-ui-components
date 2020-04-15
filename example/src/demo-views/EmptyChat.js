import React from 'react';
import { EmptyState } from 'taigo-ui-components';

const { EmptyChat } = EmptyState;

export default () => {
    const content = (
        <div>
            <p>It is a React Element. Pass it as <i>`content`</i> prop.</p>
        </div>
    );

    return (
        <EmptyChat content={content} style={{ marginTop: 48 }} />
    );
}