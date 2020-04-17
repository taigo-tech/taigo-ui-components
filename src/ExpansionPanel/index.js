import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        marginBottom: theme.spacing(2),
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

const Component = ({ element, children, defaultExpanded }) => {
    const styles = useStyles();

    // no children no expandable
    if (!children) {
        return (
            <Paper elevation={1} className={styles.paper}>{element}</Paper>
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
                {element}
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={styles.expandedPanel}>
                {children}
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
}

Component.propTypes = {
    element: PropTypes.element,
};

export default Component;