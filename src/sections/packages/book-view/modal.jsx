import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import BookingForm from './book-form';
import { Box } from '@mui/material';



export default function BookModal({ handleClose, open, name }) {

  return (
    <div>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Book Now</DialogTitle>
        <Box sx={{ p: 3, pt: 0 }}>

          <BookingForm handleClose={handleClose} name={name} />
        </Box>
      </Dialog>
    </div>
  );
}