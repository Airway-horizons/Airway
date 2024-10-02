import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const CARDS = [
  {
    icon: '/home/traveller.png',
    title: 'Professional tour guides',
    description: 'Professional guides offering in-depth knowledge and commentary on attractions.',
  },
  {
    icon: '/home/customer-satisfaction.png',
    title: 'Customer satisfaction',
    description: 'Meeting or exceeding customer expectations for a positive and fulfilling experience.',
  },
  {
    icon: '/home/secure-payment.png',
    title: 'Secure payment',
    description: 'A system ensuring safe and protected transactions for financial data.',
  },
];

// ----------------------------------------------------------------------

export default function HomeMinimal() {
  return (
    <Container
      component={MotionViewport}
      sx={{
        pb: { xs: 10, md: 15 },
        pt: { xs: 7 },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          textAlign: 'center',
          mb: { xs: 5, md: 10 },
        }}
      >


        <m.div variants={varFade().inDown}>
          <Typography variant="h2">
            Benefits of Booking With Us
          </Typography>
        </m.div>

        <m.div variants={varFade().inUp}>
          <Typography sx={{ color: 'grey.500' }}>
            Discover the unrivalled benefits that promise memorable journeys all along.
          </Typography>
        </m.div>

      </Stack>

      <Box
        gap={{ xs: 3, lg: 10 }}
        display="grid"
        alignItems="center"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          md: 'repeat(3, 1fr)',
        }}
      >
        {CARDS.map((card, index) => (
          <m.div variants={varFade().inUp} key={card.title}>
            <Card
              sx={{
                textAlign: 'center',
                boxShadow: { md: 'none' },
                bgcolor: 'background.default',
                p: (theme) => theme.spacing(10, 5),
                ...(index === 1 && {
                  boxShadow: (theme) => ({
                    md: `-40px 40px 80px ${theme.palette.mode === 'light'
                      ? alpha(theme.palette.grey[500], 0.16)
                      : alpha(theme.palette.common.black, 0.4)
                      }`,
                  }),
                }),
              }}
            >
              <Box
                component="img"
                src={card.icon}
                alt={card.title}
                sx={{ mx: 'auto', width: 64, height: 64 }}
              />

              <Typography variant="h5" sx={{ mt: 2, mb: 2 }}>
                {card.title}
              </Typography>

              <Typography sx={{ color: 'text.secondary' }}>{card.description}</Typography>
            </Card>
          </m.div>
        ))}
      </Box>
    </Container>
  );
}
