import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '../ExpansionPanel';

const useStyles = makeStyles(theme => ({
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
}));

const Component = ({ title, subtitle, titleElement, content, actions = [], defaultExpanded, children, onClick }) => {
    const styles = useStyles();

    const handleClick = e => {
        if (typeof onClick === 'function') {
            e.stopPropagation();
            onClick();
        }
    }

    const listItem = (
        <Grid container spacing={3} onClick={handleClick}>
            <Grid item xs={12} sm={6}>
                {titleElement || (
                    <Fragment>
                        <Typography variant="h3" className={styles.title}>{title}</Typography>
                        <Typography variant="h5">{subtitle}</Typography>
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

    return (
        <ExpansionPanel element={listItem} defaultExpanded={defaultExpanded}>
            {children}
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
    onClick: PropTypes.func,
};

Component.defaultProps = {
    defaultExpanded: false,
}

export default Component;