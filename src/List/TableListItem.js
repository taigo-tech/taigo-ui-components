import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import _ from 'lodash';
import clsx from 'clsx';
import Colors from '../utils/colors';

const useStyles = makeStyles(theme => ({
    root: {
        [theme.breakpoints.up('md')]: {
            minWidth: ({ transparent }) => transparent ? 'fit-content' : 960,
        }
    },
    wrapper: {
        position: 'relative',
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
    },
    paper: {
        marginBottom: theme.spacing(1),
    },
    tableHead: {
        padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
        backgroundColor: 'rgba(0, 0, 0, 0.03)',
    },
    tableRow: {
        marginTop: 0,
        padding: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            paddingRight: ({ collapsible }) => collapsible ? theme.spacing(8) : theme.spacing(2),
        },
    },
    header: {
        paddingBottom: theme.spacing(1),
        color: theme.palette.text.hint,
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }
    },
    content: {
        borderTop: `1px solid ${theme.palette.grey[300]}`,
        padding: `0 ${theme.spacing(2)}px ${theme.spacing(2)}px`,
    },
    contentWrapper: {
        backgroundColor: Colors.lightblue,
    },
    label: {
        color: theme.palette.text.hint,
        marginBottom: theme.spacing(0.5),
        [theme.breakpoints.up('md')]: {
            display: ({ showLabel }) => showLabel ? 'inherit' : 'none',
            '&.hide': {
                display: 'none',
            },
        },
    },
    expandButtonContainer: {
        padding: `0 ${theme.spacing(2)}px 0`,
    },
    expandButton: {
        '&.expanded': {
            transform: 'rotate(180deg)',
        },
        [theme.breakpoints.up('md')]: {
            position: 'absolute',
            top: theme.spacing(1),
            right: theme.spacing(2),
        },
        [theme.breakpoints.down('sm')]: {
            margin: `${theme.spacing(1)}px 0`,
        },
    },
}));

const Component = ({ data = [], showHeader, showLabel, transparent, tableHead, children, collapsible, defaultExpanded }) => {
    const styles = useStyles({ showLabel, collapsible, transparent });
    const theme = useTheme();

    const [expanded, setExpanded] = useState(defaultExpanded);

    const totalSize = _.sumBy(data, item => item.size || 0, 0);

    const headerElement = (
        <Grid container
            spacing={1}
            alignItems="flex-start"
            className={clsx(styles.tableRow, styles.header)}
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
            className={styles.tableRow}
        >
            {data.map(item => (
                <Grid item container
                    md={Math.floor(item.size / totalSize * 12)} 
                    key={item.id}
                >
                    <Grid item md={12} xs={6} className={clsx(styles.label, {
                        hide: {}.hasOwnProperty.call(item, 'showLabel') && !item.showLabel,
                    })}>
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

    const ExpandButton = props => useMediaQuery(theme.breakpoints.up('md')) ? (
        <IconButton edge="end" {...props}>
            <ExpandMoreIcon />
        </IconButton>
    ) : (
        <div className={styles.expandButtonContainer}>
            <Button variant="contained" color="primary" size="small" fullWidth {...props}>
                <ExpandMoreIcon />
            </Button>
        </div>
    );

    const TableRowWrapper = props => transparent ? (
        <div {...props} className={styles.wrapper} />
    ) : (
        <Paper {...props} className={clsx(styles.wrapper, styles.paper)} />
    );

    return (
        <div className={styles.root}>
            {showHeader && headerElement}
            <TableRowWrapper>
                {tableHead && <div className={styles.tableHead}>{tableHead}</div>}
                {element}
                {collapsible && children && (
                    <ExpandButton
                        onClick={() => setExpanded(prev => !prev)}
                        className={clsx(styles.expandButton, { expanded })}
                    />
                )}
                {expanded && children && (
                    <div className={styles.content}>
                        <div className={styles.contentWrapper}>
                            {children}
                        </div>
                    </div>
                )}
            </TableRowWrapper>
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
        showLabel: PropTypes.bool,
    })).isRequired,
    tableHead: PropTypes.element,
    showHeader: PropTypes.bool,
    showLabel: PropTypes.bool,
    transparent: PropTypes.bool,
};

Component.defaultProps = {
    showHeader: false,
    showLabel: false,
    transparent: false,
}

export default Component;