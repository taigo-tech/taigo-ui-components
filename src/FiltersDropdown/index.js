import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import { Typography } from '@material-ui/core';
import _ from 'lodash';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
    },
    formControlLabel: {
        display: 'block',
        width: 200,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    }
}));

const Component = ({ label, data = [], multiple, onSubmit, buttonProps, defaultValue }) => {
    const styles = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [values, setValues] = useState(() => {
        if (_.isArray(defaultValue)) {
            return { none: multiple ? defaultValue : _.take(defaultValue) }
        } else {
            return _.forIn(defaultValue, (value, key) => {
                if (!multiple) defaultValue[key] = _.take(value);
            })
        }
    });

    const handleClick = e => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const isCategorized = {}.hasOwnProperty.call(data[0], 'selections');
    const categories = isCategorized ? data : [{ id: 'none', selections: data }];

    const onItemClick = (value, id, isChecked) => {
        if (multiple) {
            const newValues = { ...values };
            if (!{}.hasOwnProperty.call(newValues, id)) newValues[id] = [];
            newValues[id] = isChecked ? newValues[id].concat([value]) : newValues[id].filter(item => item !== value);
            setValues(newValues);
        } else {
            const newValues = { ...values };
            newValues[id] = [value];
            setValues(newValues);
        }
    }

    const handleExited = () => {
        onSubmit(isCategorized ? values : values.none);
    }

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleClick} {...buttonProps}>
                {label}
            </Button>
            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: -10,
                    horizontal: 'left',
                }}
                classes={{
                    paper: styles.paper,
                }}
                onExited={handleExited}
            >
                <Grid container spacing={3}>
                    {categories.map(category => (
                        <Grid item key={category.id} xs={12} sm={Math.max(6, 12 / categories.length)}>
                            {category.label && <Typography>{category.label}</Typography>}
                            <div>
                                {category.selections && category.selections.map(item => (
                                    <FormControlLabel
                                        key={item.id}
                                        checked={!!values[category.id] &&  values[category.id].includes(item.id)}
                                        onChange={e => onItemClick(item.id, category.id, e.target.checked)}
                                        name={category.id}
                                        control={multiple ? <Checkbox color="primary" /> : <Radio color="primary" />}
                                        label={item.label}
                                        classes={{
                                            root: styles.formControlLabel
                                        }}
                                    />
                                ))}
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Popover>
        </div>
    );
};

Component.propTypes = {
    label: PropTypes.node.isRequired,
    onSubmit: PropTypes.func.isRequired,
    data: PropTypes.arrayOf((propValue, key) => {
        if ({}.hasOwnProperty.call(propValue[key], 'selections') && !propValue[key].id) {
            return new Error('Categorized selections must have an ID!');
        }
    }).isRequired,
    defaultValue: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    multiple: PropTypes.bool,
    buttonProps: PropTypes.object,
};

Component.defaultProps = {
    multiple: false,
    defaultValue: {},
};

export default Component;