import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

export default function PrivacyView() {
  return (
    <>
      <Container
        sx={{
          pb: 10,
          pt: { xs: 10, md: 15 },
          position: 'relative',
        }}
      >
        <Box
          gap={10}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
        >
          <Typography
            variant="body1"
            sx={{
              my: { xs: 5, md: 10 },
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Having more questions contact us at
          </Typography>
        </Box>
      </Container>
    </>
  );
}
