import React, { useState } from 'react';
import { m } from 'framer-motion';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { varFade, MotionViewport } from 'src/components/animate';
import Button from '@mui/material/Button';
import VisaFree from './visa-free';
import VisaArrival from './visa-arrival';

// ----------------------------------------------------------------------

export default function HomeDarkMode() {
  const [currentTab, setCurrentTab] = useState(0);

  const handleChange = (tabIndex: any) => {
    setCurrentTab(tabIndex);
  };

  const renderDescription = (
    <Stack alignItems="center" spacing={3}>
      <m.div variants={varFade().inUp}>
        <Typography variant="h2" sx={{ color: 'common.white' }}>
          Quick Visa Getaways
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography sx={{ color: 'grey.500' }}>
          Unfold top visa-free getaways for smooth journeys.
        </Typography>
      </m.div>

    </Stack >
  );

  return (
    <Box
      sx={{
        textAlign: 'center',
        bgcolor: 'grey.900',
        pt: { xs: 6 },
        pb: { xs: 6 },
      }}
    >
      <Container component={MotionViewport} maxWidth="xl">
        {renderDescription}

        {/* Buttons for switching between views */}
        <Box sx={{ mb: 4, mt: 3 }}>
          <Button
            variant={currentTab === 0 ? 'contained' : 'outlined'}
            color="primary"
            onClick={() => handleChange(0)}
            sx={{ mr: 2 }}
          >
            Visa Free
          </Button>
          <Button
            variant={currentTab === 1 ? 'contained' : 'outlined'}
            color="primary"
            onClick={() => handleChange(1)}
          >
            Visa on Arrival
          </Button>
        </Box>

        {/* Tab Content */}
        {currentTab === 0 && <VisaFree />} {/* Visa Free Tab Content */}
        {currentTab === 1 && <VisaArrival />} {/* Arrival Visa Tab Content */}
      </Container>
    </Box>
  );
}
