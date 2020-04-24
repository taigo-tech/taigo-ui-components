import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import CircularProgress from '@material-ui/core/CircularProgress';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import RoundedButton from '../RoundedButton';
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        borderRadius: 500,
    },
    button: {
        marginLeft: theme.spacing(1),
    },
    clear: {
        color: theme.palette.text.hint,
    },
    iconButton: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        marginLeft: theme.spacing(1),
        padding: 8,
    },
    loading: {
        marginLeft: theme.spacing(1.3),
        padding: 8,
    }
}));

const Component = ({ label, onSearch, onClear, placeholder, loading, defaultValue }) => {
    const styles = useStyles();
    const theme = useTheme();

    const [value, setValue] = useState(defaultValue);

    const handleChange = e => {
        setValue(e.target.value);
    }

    const resetField = () => {
        if (loading) return;
        setValue('');
        if (typeof onClear === 'function') onClear();
    }

    const handleSearch = () => {
        if (loading) return;
        onSearch(value);
    }

    const showRoundedButton = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box className={styles.root}>
            <TextField
                variant="outlined"
                fullWidth
                margin="dense"
                placeholder={placeholder}
                disabled={loading}
                value={value}
                onChange={handleChange}
                InputProps={{
                    classes: {
                        root: styles.input,
                    },
                    startAdornment: showRoundedButton && (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                    endAdornment: value.length > 0 && (
                        <InputAdornment position="end">
                            <IconButton onClick={resetField} edge="end" className={styles.clear} disabled={loading}>
                                <CloseIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
            {showRoundedButton ? (
                <RoundedButton
                    variant="contained"
                    isLoading={loading}
                    className={styles.button}
                    onClick={handleSearch}
                    color={theme.palette.primary.main}
                    disableElevation
                >
                    {label}
                </RoundedButton>
            ) : (loading ? (
                <CircularProgress size={38} className={styles.loading} />
            ) : (
                <IconButton
                    size="medium"
                    onClick={handleSearch}
                    classes={{
                        root: styles.iconButton,
                    }}
                >
                    <SearchIcon />
                </IconButton>
            ))}
        </Box>
    );
};

Component.propTypes = {
    label: PropTypes.string.isRequired,
    onSearch: PropTypes.func.isRequired,
    onClear: PropTypes.func,
    defaultValue: PropTypes.string,
    placeholder: PropTypes.string,
    loading: PropTypes.bool,
};

Component.defaultProps = {
    loading: true,
    defaultValue: '',
}

export default Component;