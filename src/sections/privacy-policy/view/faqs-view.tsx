import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import FaqsHero from '../faqs-hero';
import FaqsList from '../faqs-list';
import FaqsForm from '../faqs-form';
import FaqsCategory from '../faqs-category';

// ----------------------------------------------------------------------

export default function FaqsView() {
  return (
    <>
      <FaqsHero />

      <Container
        sx={{
          pb: 10,
          pt: { xs: 10, md: 15 },
          position: 'relative',
        }}
      >
        <FaqsCategory />

        <Typography
          variant="h3"
          sx={{
            my: { xs: 5, md: 10 },
          }}
        >
          Frequently Asked Questions (FAQ)
        </Typography>

        <Box
          gap={10}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
        >
          <FaqsList />

          <FaqsForm />
        </Box>
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
            <Typography variant="h6" sx={{ ml: 0.4 }}>
              info@airwayhorizons.com
            </Typography>
          </Typography>
        </Box>
      </Container>
    </>
  );
}
