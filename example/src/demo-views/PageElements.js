import React, { useState } from 'react';
import { useTheme } from '@material-ui/core/styles';
import { RoundedButton, PageTabs, Snackbar, Colors, FiltersDropdown, Searchbar, Steps } from 'taigo-ui-components';

const { useSnackbar } = Snackbar;

export default () => {
    const theme = useTheme();

    // PageTabs
    const [selectedTab, setSelectedTab] = useState(null);

    // FiltersDropdown
    const [filter1, setFilter1] = useState(null);
    const [filter2, setFilter2] = useState(null);

    // Searchbar
    const [searchLoading, setSearchLoading] = useState(false);
    const onSearch = value => {
        setSearchLoading(true);
        console.log('search:', value);
        setTimeout(() => {
            setSearchLoading(false);
        }, 2000);
    }

    // Steps
    const [activeStep, setActiveStep] = useState(0);

    // Snackbar
    const snackbar = useSnackbar();

    return (
        <div>

            <div style={{ paddingBottom: 60, borderBottom: '1px solid #CCC' }}>
                <h2>PageTabs</h2>

                <PageTabs
                    tabs={[
                        { id: 'tab1', label: 'All' },
                        { id: 'tab2', label: 'Import' },
                        { id: 'tab3', label: 'Export' },
                        { id: 'tab4', label: 'Inland Port' },
                        { id: 'tab5', label: 'Temp Staging' },
                    ]}
                    selected={selectedTab}
                    onTabSelected={setSelectedTab}
                />
            </div>
            
            <div style={{ paddingTop: 60, paddingBottom: 60, borderBottom: '1px solid #CCC' }}>
                <h2>Snackbar</h2>

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

            <div style={{ paddingTop: 60, paddingBottom: 60, borderBottom: '1px solid #CCC' }}>
                <h2>FiltersDropdown</h2>

                <FiltersDropdown
                    label="Filter"
                    onSubmit={values => { setFilter1(JSON.stringify(values))}}
                    data={[
                        { id: 'Paid', label: 'Paid' },
                        { id: 'Pending', label: 'Pending' },
                        { id: 'Failed', label: 'Failed' },
                        { id: 'Pending_for_settlement', label: 'Pending for settlement' },
                        { id: 'Cancelled', label: 'Cancelled' },
                    ]}
                />
                <p>{filter1}</p>

                <br/>

                <FiltersDropdown
                    multiple
                    label="Filters (multiple)"
                    onSubmit={values => { setFilter2(JSON.stringify(values))}}
                    data={[
                        {
                            id: 'deliver',
                            label: 'Deliver',
                            selections: [
                                { id: 'await', label: 'Await Driver' },
                                { id: 'picked', label: 'Container Pickup' },
                                { id: 'block', label: 'Gate Blocked' },
                                { id: 'delivery', label: 'In Delivery' },
                                { id: 'yard', label: 'Staging at Yard' },
                            ],
                        },
                        {
                            id: 'collection',
                            label: 'Collection',
                            selections: [
                                { id: 'ready', label: 'Ready for Collection' },
                                { id: 'delivered', label: 'Delivered to Customer' },
                                { id: 'collection', label: 'Collection (Empty)' },
                            ],
                        },
                    ]}
                />
                <p>{filter2}</p>
            </div>

            <div style={{ paddingTop: 60, paddingBottom: 60, borderBottom: '1px solid #CCC' }}>
                <h2>Searchbar</h2>

                <Searchbar onSearch={onSearch} label="Search" loading={searchLoading} defaultValue="" onClear={() => console.log('search onClear')} />
            </div>

            <div style={{ paddingTop: 60, paddingBottom: 60, borderBottom: '1px solid #CCC' }}>
                <h2>Steps</h2>

                <Steps
                    activeStep={activeStep}
                    steps={[
                        { label: 'Enter general information about the order.' },
                        { label: 'Enter your container information. Add more containers if needed.' },
                        { label: 'Error Message', errorMsg: 'Error!!!' },
                        { label: 'Confirm the pricing of each container in the order. Click the button to verify, complete and publish.' },
                    ]}
                />

                <RoundedButton color={theme.palette.primary.main} onClick={() => setActiveStep(prev => prev - 1)}>Back</RoundedButton>
                <RoundedButton variant="contained" color={theme.palette.primary.main} onClick={() => setActiveStep(prev => prev + 1)}>Next</RoundedButton>
            </div>
        </div>
    );
}