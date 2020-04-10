import React from 'react';
import EmptyOrder from './EmptyOrder';
import image from './images/chat_empty.svg';

export default props => (
    <EmptyOrder
        image={image}
        {...props}
    />
);