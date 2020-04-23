import React, { useState, useEffect } from 'react';
import { InfiniteList } from 'taigo-ui-components';

const generateData = (count, max = 100) => {
    const data = [];

    for (var i = 0; i < Math.min(count, max); i++) {
        data.push({ message: `item${i}` });
    }

    return data;
}

export default () => {
    const [numToLoad, setNumberToLoad] = useState(0);
    const [data, setData] = useState([]);

    useEffect(() => {
        if (numToLoad > 0) setData(generateData(numToLoad));
    }, [numToLoad]);

    const loadMore = () => {
        setTimeout(() => {
            setNumberToLoad(num => num + 10);
        }, 2000);
    }

    return <div>
        <InfiniteList onLoadMore={loadMore} count={data.length} disabled={data.length < numToLoad}>
            {data.map((item, index) => <div key={index}>{item.message}</div>)}
        </InfiniteList>
    </div>
}