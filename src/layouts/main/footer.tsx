import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { _socials } from 'src/_mock';

import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const LINKS = [
  {
    headline: 'POPULAR ATTRACTIONS',
    children: [
      { name: 'Golden Triangie', href: '#' },
      { name: 'Chitwannational Pork', href: '#' },
      { name: 'Muktashwal', href: '#' },
      { name: 'Andaman and Nicobar Islands', href: '#' },
    ],
  },
  {
    headline: 'Quick Access',
    children: [
      { name: 'About us', href: paths.about },
      { name: 'Contact us', href: paths.contact },
      { name: 'FAQs', href: paths.faqs },
    ],
  },
  {
    headline: 'Legal',
    children: [
      { name: 'Terms and Condition', href: paths.terms },
      { name: 'Zero Tolerance Policy', href: paths.zero },
      { name: 'Privacy Policy', href: paths.privacy },
    ],
  },
  {
    headline: 'Contact',
    children: [
      { name: 'Email: info@airwayhorizons.com', href: '#' },
      { name: 'Call us on : +91-7902778773', href: '#' },
    ],
  },
];

// ----------------------------------------------------------------------

export default function Footer() {
  const mainFooter = (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        bgcolor: 'background.default',
      }}
    >
      <Divider />

      <Container
        sx={{
          pt: 10,
          pb: 5,
          textAlign: { xs: 'center', md: 'unset' },
        }}
        maxWidth="xl"
      >
        <Grid
          container
          justifyContent={{
            xs: 'center',
            md: 'space-between',
          }}
        >
          <Grid xs={12} md={4}>
            <Logo sx={{ mb: 3 }} />
            <Typography
              variant="body2"
              sx={{
                pr: 6,
              }}
            >
              Discover the World with Airway Horizons Explore beyond limits with our meticulously
              crafted holiday packages and cultural expeditions designed for both students and
              adults. Whether you&#39;re seeking a relaxing getaway or an immersive cultural
              experience, our global programs cater to all your travel dreams. Join us as we take
              you on unforgettable journeys that combine adventure, education, and the joy of
              discovery.
            </Typography>
          </Grid>

          <Grid xs={12} md={8}>
            <Stack spacing={5} direction={{ xs: 'column', md: 'row' }}>
              {LINKS.map((list) => (
                <Stack
                  key={list.headline}
                  spacing={2}
                  alignItems={{ xs: 'center', md: 'flex-start' }}
                  sx={{ width: 1 }}
                >
                  <Typography component="div" variant="overline">
                    {list.headline}
                  </Typography>

                  {list.children.map((link) => (
                    <Link
                      key={link.name}
                      component={RouterLink}
                      href={link.href}
                      color="inherit"
                      variant="body2"
                    >
                      {link.name}
                    </Link>
                  ))}
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Typography variant="body2" sx={{ mt: 10 }}>
          © 2024. All rights reserved Airway Horizons
        </Typography>
      </Container>
    </Box>
  );

  return mainFooter;
}
