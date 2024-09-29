import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { useResponsive } from 'src/hooks/use-responsive';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import Logo from 'src/components/logo';

// ----------------------------------------------------------------------

const LINKS = [
  {
    headline: 'POPULAR ATTRACTIONS',
    children: [
      { name: 'Uttarakhand', href: paths.packageDetails('b4b5d48e-0d8e-4f28-8c30-cf7a1e5390d6') },
      { name: 'Manali', href: paths.packageDetails('d7d8f9a0-3d4e-4b12-9e34-8a9b1c2d3e45') },
      { name: 'Lakshadweep', href: paths.packageDetails('j5k6l7m8-9n0o-1p23-q4r5-s6t7u8v9w0x1') },
      { name: 'Kashmir', href: paths.packageDetails('c5c6e7e8-2f4e-40d5-92b1-9a7c8e8d5a91') },
      { name: 'Malaysia', href: paths.packageDetails('i4j5k6l7-8m9n-0o12-p3q4-r5s6t7u8v9w0') },
      { name: 'Thailand', href: paths.packageDetails('e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1') },
      { name: 'Indonesia', href: paths.packageDetails('f1f2a3b4-5c6d-7e89-0f12-3a4b5c6d7e89') },
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
  const mdUp = useResponsive('up', 'md');

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
                pr: mdUp ? 6 : 0,
                mb: 6,
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
