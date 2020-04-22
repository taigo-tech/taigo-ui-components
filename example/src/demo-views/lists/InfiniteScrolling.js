import React, { useState, useEffect } from 'react';
import { InfiniteList } from 'taigo-ui-components';

const generateData = count => {
    const data = [];

    for (var i = 0; i < count; i++) {
        data.push({ message: `item${i}` });
    }

    return data;
}

export default () => {
    const [numToLoad, setNumberToLoad] = useState(10);
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(generateData(numToLoad));
    }, [numToLoad]);
    

    const loadMore = () => {
        setTimeout(() => {
            setNumberToLoad(num => num + 10);
        }, 3000);
    }

    return <div>
        <InfiniteList onLoadMore={loadMore} count={data.length} disabled={numToLoad > 100}>
            {data.map((item, index) => <div key={index}>{item.message}</div>)}
        </InfiniteList>
    </div>
}