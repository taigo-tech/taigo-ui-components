import React, { useState } from 'react';
import { InfiniteList } from 'taigo-ui-components';

const generateData = count => {
    const data = [];

    for (var i = 0; i < count; i++) {
        data.push({ message: `item${i}` });
    }

    return data;
}

export default () => {
    const [data, setData] = useState(generateData(20));
    const [loading, setLoading] = useState(false);

    const loadMore = () => {
        setLoading(true);
        setTimeout(() => {
            setData(data => data.concat(generateData(20)));
            setLoading(false); 
        }, 3000);
    }

    return <div>
        <InfiniteList onLoadMore={loadMore} count={data.length} loading={loading}>
            {data.map((item, index) => <div key={index}>{item.message}</div>)}
        </InfiniteList>
    </div>
}