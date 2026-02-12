import Container from '@mui/material/Container';

import { Box } from '@mui/material';
import BookingDetails from './booking-view';
import EmptyContent from 'src/components/empty-content';

// ----------------------------------------------------------------------

export default function BookingView() {

  return (
    // <Container>

    <Box sx={{ my: 6, mx: 5 }}>


      <BookingDetails title="Booking Details"
        tableData={[]}
        tableLabels={[
          { id: 'destination', label: 'Destination' },
          { id: 'customer', label: 'Customer' },
          { id: 'checkIn', label: 'Check In' },
          { id: 'checkOut', label: 'Check Out' },
          { id: 'status', label: 'Status' },
          { id: '' },
        ]} />
    </Box>
    // </Container>
  );
}
