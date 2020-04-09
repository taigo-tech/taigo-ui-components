import React, { useState } from 'react';
import { PageTabs, Snackbar, RoundedButton, Colors } from 'taigo-ui-components';

const { useSnackbar } = Snackbar;

export default () => {
    const [selectedTab, setSelectedTab] = useState(null);
    const snackbar = useSnackbar();

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

            <br/><br/><br/><br/><br/>

            <RoundedButton variant="contained" color={Colors.green} onClick={() => snackbar.success({ message: 'It\'s a success!' })} size="small">
                Success snackbar
            </RoundedButton>
            <RoundedButton variant="contained" color={Colors.red} onClick={() => snackbar.error({ message: 'It\'s an error!' })} size="small">
                Error snackbar
            </RoundedButton>
            <RoundedButton variant="contained" color={Colors.cyan} onClick={() => snackbar.info({ message: 'It\'s an info!' })} size="small">
                Info snackbar
            </RoundedButton>
            <RoundedButton variant="contained" color={Colors.orange} onClick={() => snackbar.warning({ message: 'It\'s a warning!' })} size="small">
                Warning snackbar
            </RoundedButton>
        </div>
    );
}