import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        height: '100vh',
    },
    imageWrapper: {
        flex: 1,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: '70% 0%',
    },
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    wrapper: {
        textAlign: 'center',
        padding: theme.spacing(2),
    },
    topContent: {
        maxWidth: '300px',
        margin: '0 auto 40px',
    },
    logo: {
        maxHeight: '80px',
        marginBottom: '40px',
    },
    title: {
        fontSize: '18px',
        color: theme.palette.primary.main,
        lineHeight: 2,
    },
    subtitle: {
        fontSize: '15px',
        color: theme.palette.grey[500],
    }
}));

const AuthLayout = ({ children, image, imagePosition, logo, title, subtitle }) => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <div className={classes.root} style={{ flexDirection: imagePosition === 'right' ? 'row' : 'row-reverse' }}>
            <div className={classes.container}>
                <div className={classes.wrapper}>
                    <div className={classes.topContent}>
                        {logo && (
                            <img src={logo} className={classes.logo} />
                        )}
                        {title && (
                            <div className={classes.title}>{title}</div>
                        )}
                        {subtitle && (
                            <div className={classes.subtitle}>{subtitle}</div>
                        )}
                    </div>
                    <div>{children}</div>
                </div>
            </div>
            <Hidden smDown>
                <div className={classes.imageWrapper} style={{ backgroundImage: `url(${image})` }} />
            </Hidden>
        </div>
    );
}

AuthLayout.propTypes = {
    image: PropTypes.string.isRequired,
    imagePosition: PropTypes.oneOf(['left', 'right']),
    logo: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
}

AuthLayout.defaultProps = {
    imagePosition: 'right',
    title: 'Login',
}

export default AuthLayout;