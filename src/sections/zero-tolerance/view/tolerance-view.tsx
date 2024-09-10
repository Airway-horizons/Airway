import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

export default function TermsView() {
  return (
    <Container maxWidth="lg">
      <Box padding={2}>
        <Typography variant="h4" gutterBottom>
          Zero Tolerance for Abuse Policy
        </Typography>
        <Typography variant="body1" paragraph>
          At Airway Horizons, we are committed to maintaining a safe and respectful environment for
          all. Our policy on abuse is as follows:
        </Typography>

        <Typography variant="body1" paragraph>
          <strong style={{ marginLeft: '20px' }}>• Zero Tolerance:</strong> We have a strict
          zero-tolerance policy for any form of abuse, including verbal, physical, emotional, or
          psychological abuse.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong style={{ marginLeft: '20px' }}>• Inclusive Safety:</strong> This policy applies to
          all clients, including school groups, families, individual travelers, staff, and service
          providers.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong style={{ marginLeft: '20px' }}>• Professional Conduct:</strong> We expect all
          participants, staff, and partners to adhere to the highest standards of professional
          behavior and respect.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong style={{ marginLeft: '20px' }}>• Immediate Action:</strong> Any violation of this
          policy will result in immediate action, which may include removal from the trip,
          contacting the authorities, and legal action if necessary.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong style={{ marginLeft: '20px' }}>• Priority on Well-being:</strong> The safety and
          well-being of our clients is our top priority, and we strive to ensure all experiences are
          safe, positive, and respectful.
        </Typography>
      </Box>
    </Container>
  );
}
