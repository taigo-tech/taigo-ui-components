import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    title: {
        fontWeight: 'bold',
        marginBottom: theme.spacing(1),
    },
    rightContent: {
        [theme.breakpoints.up('sm')]: {
            textAlign: 'right',
        }
    },
    actions: {
        marginTop: theme.spacing(2),
    },
    action: {
        display: 'inline-block',
        marginRight: theme.spacing(1),
        [theme.breakpoints.up('sm')]: {
            marginBottom: theme.spacing(1),
            marginLeft: theme.spacing(1),
            marginRight: 0,
        }
    },
    expandIcon: {
        marginLeft: theme.spacing(2),
    },
    expansionPanel: {
        marginBottom: theme.spacing(2),
    },
    expandedPanel: {
        borderTop: `1px solid ${theme.palette.grey[300]}`,
        paddingTop: 0,
        display: 'block',
    }
}));

const Component = ({ title, subtitle, titleElement, content, actions = [], defaultExpanded, children }) => {
    const styles = useStyles();

    const listItem = (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                {titleElement || (
                    <Fragment>
                        <Typography variant="h3" className={styles.title}>{title}</Typography>
                        <Typography variant="h4">{subtitle}</Typography>
                    </Fragment>
                )}
            </Grid>
            <Grid item xs={12} sm={6} className={styles.rightContent}>
                {content}
                <div className={styles.actions}>
                    {actions.map((item, i) => (
                        <div key={item.key || i} className={styles.action}>{item}</div>
                    ))}
                </div>
            </Grid>
        </Grid>
    );

    // no children no expandable
    if (!children) {
        return (
            <Paper elevation={1} className={styles.paper}>{listItem}</Paper>
        );
    }

    return (
        <ExpansionPanel defaultExpanded={defaultExpanded} className={styles.expansionPanel}>
            <ExpansionPanelSummary
                expandIcon={children && <ExpandMoreIcon />}
                classes={{
                    expandIcon: styles.expandIcon,
                }}
            >
                {listItem}
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={styles.expandedPanel}>
                {children}
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
}

Component.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    titleElement: PropTypes.element,
    content: PropTypes.element,
    actions: PropTypes.arrayOf(PropTypes.element),
    defaultExpanded: PropTypes.bool,
};

Component.defaultProps = {
    defaultExpanded: false,
}

export default Component;