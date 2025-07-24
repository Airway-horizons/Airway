import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import { alpha, useTheme } from '@mui/material/styles';
import Stack, { StackProps } from '@mui/material/Stack';

import { useResponsive } from 'src/hooks/use-responsive';

import { fDate } from 'src/utils/format-time';

import { bgBlur, bgGradient, hideScroll } from 'src/theme/css';

import Iconify from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';
import { testimonialsView } from './helper';

// ----------------------------------------------------------------------

export default function AboutTestimonials() {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  const renderDescription = (
    <Box
      sx={{
        maxWidth: { md: 360 },
        textAlign: { xs: 'center', md: 'unset' },
      }}
    >
      <m.div variants={varFade().inUp}>
        <Typography variant="overline" sx={{ color: 'common.white', opacity: 0.48 }}>
          Testimonials
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography variant="h2" sx={{ my: 3, color: 'common.white' }}>
          Travel Beyond <br /> Your Limits!
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography sx={{ color: 'common.white' }}>
          We transform travel into a life-changing adventure!
          As the best travel company in India, we specialize in
          creating unforgettable experiences that go beyond the
          ordinary. Our tailored trips—from thrilling adventure holidays to enriching cultural
          immersion programs—resonate long after the journey ends. Whether you're looking for well-organized group tours,
          fun-filled family tours, or meaningful student tours, we’ve got you covered. Each trip is thoughtfully planned by our expert
          travel planner team to reflect real-life lessons, inspire personal growth, and
          build a deeper understanding of the world. If you're seeking something truly extraordinary,
          Airway Horizons is your perfect travel partner!
        </Typography>
      </m.div>
    </Box>
  );

  const renderContent = (
    <Box
      sx={{
        py: { md: 10 },
        height: { md: 1 },
        ...(mdUp && {
          ...hideScroll.y,
        }),
      }}
    >
      <Masonry spacing={3} columns={{ xs: 1, md: 2 }} sx={{ ml: 0 }}>
        {testimonialsView.map((testimonial: any) => (
          <m.div key={testimonial.name} variants={varFade().inUp}>
            <TestimonialCard testimonial={testimonial} />
          </m.div>
        ))}
      </Masonry>
    </Box>
  );

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.grey[900], 0.9),
          imgUrl: '/assets/images/about/testimonials.jpg',
        }),
        overflow: 'hidden',
        height: { md: 840 },
        py: { xs: 10, md: 0 },
      }}
    >
      <Container component={MotionViewport} sx={{ position: 'relative', height: 1 }}>
        <Grid
          container
          spacing={3}
          alignItems="center"
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{ height: 1 }}
        >
          <Grid xs={10} md={4}>
            {renderDescription}
          </Grid>

          <Grid
            xs={12}
            md={7}
            lg={6}
            alignItems="center"
            sx={{
              height: 1,
            }}
          >
            {renderContent}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

type TestimonialCardProps = StackProps & {
  testimonial: {
    name: string;
    content: string;
    postedDate: Date;
    avatarUrl: string;
    ratingNumber: number;
  };
};

function TestimonialCard({ testimonial, sx, ...other }: TestimonialCardProps) {
  const theme = useTheme();

  const { name, ratingNumber, postedDate, content, avatarUrl } = testimonial;

  return (
    <Stack
      spacing={3}
      sx={{
        ...bgBlur({
          color: theme.palette.common.white,
          opacity: 0.08,
        }),
        p: 3,
        borderRadius: 2,
        color: 'common.white',
        ...sx,
        mt: 5,
      }}
      {...other}
    >
      <Iconify icon="mingcute:quote-left-fill" width={40} sx={{ opacity: 0.48 }} />

      <Typography variant="body2">{content}</Typography>

      <Rating value={ratingNumber} readOnly size="small" />

      <Stack direction="row">
        <Avatar alt={name} src={avatarUrl} sx={{ mr: 2 }} />

        <ListItemText
          primary={name}
          // secondary={postedDate}
          primaryTypographyProps={{
            typography: 'subtitle2',
            mb: 0.5,
          }}
          secondaryTypographyProps={{
            typography: 'caption',
            color: 'inherit',
            sx: { opacity: 0.64 },
          }}
        />
      </Stack>
    </Stack>
  );
}
