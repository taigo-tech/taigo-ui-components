import React from 'react';
import Grid from '@material-ui/core/Grid';
import { StatusBar } from 'taigo-ui-components';

export default () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Grid container spacing={5}>
                <Grid container item spacing={3}>
                    <Grid item>
                        <StatusBar label='LIVE' color='yellow' fixedWidth />
                    </Grid>

                    <Grid item>
                        <StatusBar label='EXPIRED' color='grey' fixedWidth />
                    </Grid>

                    <Grid item>
                        <StatusBar label='CANCELLED' color='red' fixedWidth />
                    </Grid>

                    <Grid item>
                        <StatusBar label='ACTIVE' color='green' fixedWidth />
                    </Grid>

                    <Grid item>
                        <StatusBar label='AWAITING HAULIER' color='lightorange' fixedWidth />
                    </Grid>

                    <Grid item>
                        <StatusBar label='PAYMENT PENDING' color='purple' fixedWidth />
                    </Grid>

                    <Grid item>
                        <StatusBar label='IN-DISPUTE' color='red' fixedWidth />
                    </Grid>

                    <Grid item>
                        <StatusBar label='AWAITING DIVERT CONFIRMATION' color='pink' fixedWidth />
                    </Grid>

                    <Grid item>
                        <StatusBar label='DIVERT PAYMENT' color='pink' fixedWidth />
                    </Grid>

                    <Grid item>
                        <StatusBar label='REFUND PENDING' color='yellow' fixedWidth />
                    </Grid>

                    <Grid item>
                        <StatusBar label='COMPLETED' color='cyan' fixedWidth />
                    </Grid>

                    <Grid item>
                        <StatusBar label='RESOLVED' color='green' fixedWidth />
                    </Grid>
                </Grid>

                <Grid container item spacing={3}>
                    <Grid item>
                        <StatusBar label='LIVE' color='darkblue'
                            subLabels={[
                                {
                                    label: 'DIVERT',
                                    color: 'purple',
                                },
                                {
                                    label: 'PROJECT BASE',
                                    color: 'darkgrey',
                                },
                                {
                                    label: 'RESERVED',
                                    color: 'darkgrey',
                                },
                            ]}
                            fixedWidth
                        />
                    </Grid>

                    <Grid item>
                        <StatusBar label='EXPORT' color='lightpurple' fixedWidth />
                    </Grid>

                    <Grid item>
                        <StatusBar label='INLAND' color='brown'
                            subLabels={[
                                {
                                    label: 'DIVERT',
                                    color: 'purple',
                                }
                            ]}
                            fixedWidth
                        />
                    </Grid>
                </Grid>

                <Grid container item spacing={3}>
                    <Grid item>
                        <StatusBar label='COMPLETED' color='green' small rounded />
                    </Grid>

                    <Grid item>
                        <StatusBar label='IN-DISPUTE' color='red' small rounded />
                    </Grid>

                    <Grid item>
                        <StatusBar label='PENALTY' color='red' small rounded />
                    </Grid>

                    <Grid item>
                        <StatusBar label='GATE BLOCKED' color='red' small rounded />
                    </Grid>

                    <Grid item>
                        <StatusBar label='IN-DELIVERY' color='cyan' small rounded />
                    </Grid>

                    <Grid item>
                        <StatusBar label='DELIVERED TO CUSTOMER' color='cyan' small rounded />
                    </Grid>

                    <Grid item>
                        <StatusBar label='STAGE AT YARD' color='cyan' small rounded />
                    </Grid>

                    <Grid item>
                        <StatusBar label='STAGE AT YARD (DEPOT)' color='orange' small rounded />
                    </Grid>

                    <Grid item>
                        <StatusBar label='EXIT YARD (DEPOT)' color='orange' small rounded />
                    </Grid>

                    <Grid item>
                        <StatusBar label='TO DEPOT' color='orange' small rounded />
                    </Grid>

                    <Grid item>
                        <StatusBar label='DELIVERED TO DEPOT' color='orange' small rounded />
                    </Grid>
                </Grid>

                <Grid container item spacing={3}>
                    <Grid item>
                        <StatusBar label='FROM' color='darkblue' small rounded />
                    </Grid>

                    <Grid item>
                        <StatusBar label='DIVERT' color='orange' small rounded />
                    </Grid>

                    <Grid item>
                        <StatusBar label='TO' color='red' small rounded />
                    </Grid>

                    <Grid item>
                        <StatusBar label='D.OFF' color='green' small rounded />
                    </Grid>

                    <Grid item>
                        <StatusBar label='PICKUP' color='darkblue' small rounded />
                    </Grid>

                    <Grid item>
                        <StatusBar label='RETURN' color='green' small rounded />
                    </Grid>
                </Grid>

                <Grid container item spacing={3}>
                    <Grid item>
                        <StatusBar label='PAID' color='green' small rounded />
                    </Grid>

                    <Grid item>
                        <StatusBar label='UNPAID' color='red' small rounded />
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}