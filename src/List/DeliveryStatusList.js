import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import clsx from 'clsx';
import moment from 'moment';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    itemRoot: {
        justifyContent: 'stretch',
    },
    index: {
        display: 'flex',
        height: `${theme.spacing(2)}px`,
        width: `${theme.spacing(2)}px`,
        backgroundColor: ({ selected }) => selected ? theme.palette.common.white : theme.palette.success.main,
        border: ({ selected }) => selected ? `1px solid ${theme.palette.success.main}` : 'unset',
        borderRadius: '50%',
        color: theme.palette.common.white,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: `${theme.spacing()}px`
    },
    greenDot: {
        height: `${theme.spacing(.6)}px`,
        width: `${theme.spacing(.6)}px`,
        borderRadius: '50%',
        backgroundColor: theme.palette.success.main,
    },
    indexSpacing: {
        flexGrow: 1,
        width: `${theme.spacing(2)}px`,
        marginRight: `${theme.spacing()}px`,
        display: 'flex',
        justifyContent: 'center',
    },
    indexLine: {
        width: 1,
        backgroundColor: ({ isLast }) => !isLast ? theme.palette.success.main : 'unset',
    },
    status: {
        fontWeight: 900,
        height: `${theme.spacing(2)}px`,
        display: 'flex',
        alignItems: 'center',
        marginBottom: `${theme.spacing()}px`,
        wordBreak: 'break-word',
    },
    address: {
        color: theme.palette.grey[500],
        marginRight: `${theme.spacing()}px`,
        whiteSpace: 'pre-line',
        wordBreak: 'break-word',
    },
    dateTimeSpacing: {
        marginBottom: `${theme.spacing(3)}px`,
    },
    date: {
        color: theme.palette.grey[500],
        textAlign: 'right',
    },
    time: {
        color: theme.palette.grey[500],
        textAlign: 'right',
        fontWeight: 'bold',
    },
    divider: {
        margin: `${theme.spacing(2)}px 0px`,
        backgroundColor: theme.palette.grey[500],
        height: 1,
        width: '100%',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
    },
    grow: {
        flexGrow: 1,
    }
}));

const StatusItem = ({ data }) => {
    const { index, address, status, dateTime, isLast, selected } = data;

    const styles = useStyles({ selected, isLast });
    const theme = useTheme();

    const date = moment(dateTime).format('DD MMM YYYY');
    const time = moment(dateTime).format('H:mm A');

    return <div className={clsx(styles.itemRoot, styles.row)} style={{ alignItems: 'stretch' }}>
        <div className={styles.column}>
            <div className={styles.index}>
                {
                    selected ? <div className={styles.greenDot} /> : index
                }
            </div>
            <div className={styles.indexSpacing}>
                <div className={styles.indexLine} />
            </div>
        </div>

        <div className={clsx(styles.column, styles.grow)}>
            <div className={styles.row}>
                <div className={clsx(styles.column, styles.grow)} style={{ marginRight: `${theme.spacing(2)}px` }}>
                    <div className={styles.status}>
                        {status}
                    </div>

                    <div className={styles.address}>
                        {address}
                    </div>
                </div>

                <div className={styles.column} style={{ flexShrink: 0 }}>
                    <div className={styles.dateTimeSpacing} />
                    <div className={styles.column} style={{ alignItems: 'flex-end' }}>
                        <div className={styles.date}>
                            {date}
                        </div>
                        <div className={styles.time}>
                            {time}
                        </div>
                    </div>
                </div>
            </div>

            {
                !isLast && <div className={styles.divider} />
            }
        </div>


    </div>
}

const DeliveryStatusList = (props) => {
    const { data } = props;

    const styles = useStyles();

    return (
        <div className={styles.root}>
            {
                data.map((d, index) => {
                    if (index === data.length - 1) {
                        d.isLast = true;
                    }

                    return <StatusItem data={d} key={d.index} />
                })
            }
        </div>
    );
}

DeliveryStatusList.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            index: PropTypes.number.isRequired,
            status: PropTypes.string.isRequired,
            address: PropTypes.string,
            dateTime: PropTypes.dateTime,
            selected: PropTypes.bool,
            user: PropTypes.shape({
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                phoneNumber: PropTypes.string,
            })
        })
    )
};

DeliveryStatusList.defaultProps = {

}

export default DeliveryStatusList;