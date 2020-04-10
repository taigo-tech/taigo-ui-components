import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    tabsIndicator: {
        backgroundColor: 'transparent',
    },
    text: {
        fontWeight: 'bold',
        fontSize: theme.typography.h3.fontSize,
        color: theme.palette.grey[400],
        textTransform: 'none',
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
        minWidth: 'auto',
        '&.selected': {
            color: theme.palette.primary.main,
        },
        '&.divided': {
            borderRight: `1px solid ${theme.palette.grey[300]}`,
        },
        [theme.breakpoints.down('sm')]: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
            '&.divided': {
                borderRight: 0,
            },
        },
    },
}));

const Component = ({ tabs = [], selected, onTabSelected }) => {
    const styles = useStyles();

    return (
        <Tabs
            classes={{ indicator: styles.tabsIndicator }}
            onChange={(e, value) => onTabSelected(value)}
            value={selected || false}
            variant="scrollable"
            scrollButtons="desktop"
        >
            {tabs.map((tab, i) => (
                <Tab
                    key={tab.id}
                    value={tab.id}
                    label={tab.label}
                    classes={{
                        root: clsx(styles.text, { selected: tab.id === selected, divided: i < tabs.length - 1 }),
                    }}
                    disableRipple
                />
            ))}
        </Tabs>
    );
};

Component.propTypes = {
    tabs: PropTypes.arrayOf((propValue, key) => {
        if (!(propValue[key] && propValue[key].id && propValue[key].label)) return new Error('Tab object must have id and label as keys');
    }).isRequired,
    onTabSelected: PropTypes.func.isRequired,
    selected: PropTypes.string,
};

export default Component;