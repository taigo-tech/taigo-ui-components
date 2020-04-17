import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    label: {
        textAlign: 'center',
        maxWidth: 220,
    },
}));

const Component = ({ activeStep, steps, orientation }) => {
    const styles = useStyles();

    return (
        <Stepper alternativeLabel activeStep={activeStep} orientation={orientation}>
            {steps.map(step => {
                const labelProps = {};
                if (step.errorMsg) {
                    labelProps.error = true;
                    labelProps.optional = (
                        <Typography variant="caption" color="error">
                            {step.errorMsg}
                        </Typography>
                    );

                }

                return (
                    <Step key={step.label}>
                        <StepLabel
                            classes={{
                                labelContainer: styles.label,
                            }}
                            {...labelProps}
                        >
                            {step.label}
                        </StepLabel>
                    </Step>
                );
            })}
        </Stepper>
    );
}

Component.propTypes = {
    steps: PropTypes.arrayOf(PropTypes.exact({
        label: PropTypes.string.isRequired,
        errorMsg: PropTypes.string,
    })).isRequired,
    activeStep: PropTypes.number.isRequired,
    orientation: PropTypes.oneOf(['horizontal', 'vertical'])
};

Component.defaultProps = {
    orientation: 'horizontal',
}

export default Component;