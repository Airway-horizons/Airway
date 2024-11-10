import Container from '@mui/material/Container';

import ProfileForm from './profile-form';
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

export default function ProfileView(id: any) {

  return (
    <Container maxWidth={"lg"}>

      <Box sx={{ my: 6 }}>

        <ProfileForm id={id?.id} />
      </Box>
    </Container>
  );
}
