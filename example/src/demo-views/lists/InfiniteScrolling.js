import React, { useState } from 'react';
import { InfiniteList } from 'taigo-ui-components';

const generateData = () => {
    const data = [];

    for (var i = 0; i < 300; i++) {
        data.push({ message: `item${i}` });
    }

    return data;
}

const data = generateData();

const getData = (start, count) => {
    return data.slice(start, start + count);
}

const itemPerLoad = 90;

export default () => {
    const [scrollIndex, setScrollIndex] = useState(0);
    const [loading, setLoading] = useState(false);
    const listData = getData(0, scrollIndex + itemPerLoad - 1);

    const loadMore = () => {
        if (listData.length < data.length) {
            setLoading(true);
            setTimeout(() => { setScrollIndex(scrollIndex + itemPerLoad); setLoading(false); }, 3000);
        }
    }

    return <InfiniteList onLoadMore={loadMore} loading={loading}>
        {
            listData.map((data, index) => {
                return <div key={index}>{data.message}</div>
            })
        }
    </InfiniteList>
}