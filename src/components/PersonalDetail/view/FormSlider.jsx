// components/StepperComponent.js
import React from 'react';
import { Stepper, Step, StepLabel, Box } from '@mui/material';

const FormSlider = ({ renderNo, maxSteps }) => {
  const steps = Array.from({ length: maxSteps }, (_, i) => `Step ${i + 1}`);

  return (
    <Box sx={{ width: '100%', marginTop: 2 }}>
      <Stepper activeStep={renderNo - 1} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default FormSlider;
