import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        overflowY: 'hidden',
        overflowX: 'auto',
        msOverflowStyle: 'none',  // IE 10+
        overflow: '-moz-scrollbars-none',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
    },
    text: {
        fontWeight: 'bold',
        color: theme.palette.grey[300],
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        cursor: 'pointer',
        '&.selected': {
            color: theme.palette.primary.main,
        },
        [theme.breakpoints.down('sm')]: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
            paddingTop: 0,
            paddingBottom: 0,
        },
    },
}));

const Component = ({ tabs, selected, onTabSelected }) => {
    const styles = useStyles();

    return (
        <Box className={styles.root}>
            {tabs.map((tab, i) => (
                <Fragment key={tab.id}>
                    <Typography
                        variant="h3"
                        className={clsx(styles.text, { selected: selected === tab.id })}
                        onClick={() => onTabSelected(tab.id)}
                    >
                        {tab.label}
                    </Typography>
                    {i < tabs.length - 1 && (
                        <Divider orientation="vertical" flexItem className={styles.divider} />
                    )}
                </Fragment>
            ))}
        </Box>
    );
};

Component.propTypes = {
    tabs: PropTypes.arrayOf((propValue, key) => {
        if (!(propValue[key] && propValue[key].id && propValue[key].label)) return new Error('Tab object must have id and label as keys');
    }).isRequired,
    selected: PropTypes.string,
    onTabSelected: PropTypes.func,
};

export default Component;