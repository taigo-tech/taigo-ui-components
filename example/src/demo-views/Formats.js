import React, { useState } from 'react';
import { Formats, TextInput } from 'taigo-ui-components';
import moment from 'moment';

const { formatDateTime, formatMonetary } = Formats;

export default () => {
    const [amount, setAmount] = useState(1000000);

    return (
        <div>
            <div style={{ paddingBottom: 60, borderBottom: '1px solid #CCC' }}>
                <code style={{ fontSize: 18 }}>formatDateTime(moment, format = 'D MMM YYYY H:mmA', uppercase = true)</code>

                <h3>{formatDateTime(moment())}</h3>
            </div>

            <div style={{ paddingTop: 60, paddingBottom: 60, borderBottom: '1px solid #CCC' }}>
                <code style={{ fontSize: 18 }}>formatDateTime(moment, decimals, currency)</code>
                
                <br />
                <br />
    
                <TextInput value={amount} onChange={e => { setAmount(e.target.value) }} />

                <h3>{formatMonetary(amount)}</h3>
            </div>

        </div>
    );
}