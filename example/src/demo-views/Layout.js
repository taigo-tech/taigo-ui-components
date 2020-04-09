import React, { useState } from 'react';
import { PageTabs } from 'taigo-ui-components';

export default () => {
    const [selectedTab, setSelectedTab] = useState(null);

    return (
        <div>
            <PageTabs
                tabs={[
                    { id: 'tab1', label: 'All' },
                    { id: 'tab2', label: 'Import' },
                    { id: 'tab3', label: 'Export' },
                    { id: 'tab4', label: 'Inland Port' },
                ]}
                selected={selectedTab}
                onTabSelected={setSelectedTab}
            />
        </div>
    );
}