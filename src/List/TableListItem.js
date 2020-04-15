import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import _ from 'lodash';

const useStyles = makeStyles(theme => ({
    header: {
        padding: theme.spacing(2),
        paddingBottom: theme.spacing(1),
        color: theme.palette.text.hint,
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }
    },
    table: {
        [theme.breakpoints.up('md')]: {
            minWidth: 1200,
        }
    },
    paper: {
        padding: theme.spacing(2),
        marginBottom: theme.spacing(1),
    },
    label: {
        color: theme.palette.text.hint,
        [theme.breakpoints.up('md')]: {
            display: 'none',
        }
    }
}));

const Component = ({ data = [], header, defaultExpanded, children }) => {
    const styles = useStyles();

    const totalSize = _.sumBy(data, item => item.size || 0, 0);

    const headerElement = (
        <Grid container
            spacing={1}
            alignItems="flex-start"
        >
            {data.map(item => (
                <Grid item container
                    md={Math.floor(item.size / totalSize * 12)} 
                    key={item.id}
                >
                    <Grid item md={12} xs={6}>
                        <Typography noWrap
                            variant="body2"
                        >
                            {item.label}
                        </Typography>
                    </Grid>
                </Grid>
            ))}
        </Grid>
    );
    
    const element = (
        <Grid container
            spacing={1}
            alignItems="flex-start"
        >
            {data.map(item => (
                <Grid item container
                    md={Math.floor(item.size / totalSize * 12)} 
                    key={item.id}
                >
                    <Grid item md={12} xs={6} className={styles.label}>
                        <Typography noWrap
                            variant="body2"
                        >
                            {item.label}
                        </Typography>
                    </Grid>
                    <Grid item md={12} xs={6}>
                        {typeof item.render === 'function' ? item.render(item.value, item) : (
                            <Typography
                                variant="body2"
                            >
                                {item.value}
                            </Typography>
                        )}
                    </Grid>
                </Grid>
            ))}
        </Grid>
    );

    return (
        <div className={styles.table}>
            {header && (
                <div className={styles.header}>{headerElement}</div>
            )}
            <Paper elevation={1} className={styles.paper}>
                {element}
            </Paper>
        </div>
    );
}

Component.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        value: PropTypes.string,
        size: PropTypes.number,
        render: PropTypes.func,
    })).isRequired,
    header: PropTypes.bool,
    defaultExpanded: PropTypes.bool,
};

Component.defaultProps = {
    header: false,
    defaultExpanded: false,
}

export default Component;