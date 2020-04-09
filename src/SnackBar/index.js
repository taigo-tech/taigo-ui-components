import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { SnackbarProvider, useSnackbar } from 'notistack';
import colors from '../utils/colors';

const useStyles = makeStyles((theme) => ({
    success: {
        backgroundColor: theme.palette.success.main,
    },
    error: {
        backgroundColor: theme.palette.error.main,
    },
    info: {
        backgroundColor: theme.palette.info.main,
    },
    warning: {
        backgroundColor: theme.palette.warning.main,
    },
}));

const provider = ({ children, ...restProps }) => {
    const styles = useStyles();

    return (
        <SnackbarProvider
            autoHideDuration={6000}
            maxSnack={3}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            classes={{
                variantSuccess: styles.success,
                variantError: styles.error,
                variantWarning: styles.warning,
                variantInfo: styles.info,
            }}
            {...restProps}
        >
            {children}
        </SnackbarProvider>
    );
};

const hook = () => {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const api = {
        open: ({ message, type, ...restArgs }) => enqueueSnackbar(message, {
            variant: type,
            ...restArgs,
        }),
        close: key => {
            closeSnackbar(key);
        },
    };
    
    ['success', 'info', 'warning', 'error'].forEach(type => {
        api[type] = args =>
            api.open({
                ...args,
                type,
            });
    });

    return api;
};

export default {
    SnackbarProvider: provider,
    useSnackbar: hook,
};