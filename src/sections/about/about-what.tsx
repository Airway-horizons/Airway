import { m } from 'framer-motion';

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import { useRouter } from 'src/routes/hooks';

import { useResponsive } from 'src/hooks/use-responsive';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';
import { paths } from 'src/routes/paths';

// ----------------------------------------------------------------------

export const SKILLS = [...Array(3)].map((_, index) => ({
  label: ['Development', 'Design', 'Marketing'][index],
  value: [20, 40, 60][index],
}));

// ----------------------------------------------------------------------

export default function AboutWhat() {
  const theme = useTheme();
  const router = useRouter();
  
  const mdUp = useResponsive('up', 'md');

  const lightMode = theme.palette.mode === 'light';

  const shadow = `-40px 40px 80px ${alpha(
    lightMode ? theme.palette.grey[500] : theme.palette.common.black,
    0.24
  )}`;

  return (
    <Container
      component={MotionViewport}
      sx={{
        py: { xs: 10, md: 15, },
        textAlign: { xs: 'center', md: 'unset' },
      }}
    >
      <Grid container columnSpacing={{ md: 3 }} alignItems="flex-start">
        {mdUp && (
          <Grid container xs={12} md={6} lg={7} alignItems="center" sx={{ pr: { md: 7 } }}>
            <Grid xs={6}>
              <m.div variants={varFade().inUp}>
                <Image
                  alt="our office 2"
                  src="/assets/images/about/what_2.png"
                  ratio="1/1"
                  sx={{ borderRadius: 3, boxShadow: shadow }}
                />
              </m.div>
            </Grid>

            <Grid xs={6}>
              <m.div variants={varFade().inUp}>
                <Image
                  alt="our office 1"
                  src="/assets/images/about/what_1.png"
                  ratio="3/4"
                  sx={{ borderRadius: 3, boxShadow: shadow }}
                />
              </m.div>
            </Grid>
          </Grid>
        )}

        <Grid xs={12} md={6} lg={5}>
          <m.div variants={varFade().inRight}>
            <Typography variant="h2" sx={{ mb: 3 }}>
              About Airway Horizons
            </Typography>
          </m.div>

          <m.div variants={varFade().inRight}>
            <Typography
              sx={{
                color: theme.palette.mode === 'light' ? 'text.secondary' : 'common.white',
              }}
            >
              At Airway Horizons, we believe that travel is more than just visiting new places—it's about transforming the way you see the world. With a passion for exploration and a commitment to excellence, we offer unique holiday packages and cultural expeditions tailored for both students and adults. Our programs span the globe, providing enriching experiences that blend adventure, education, and authentic cultural immersion.
Founded on the principle of exploring beyond limits, Airway Horizons is dedicated to creating unforgettable journeys that inspire and connect people across cultures. Whether you're seeking a serene escape, a thrilling adventure, or a deep dive into a new culture, we're here to turn your travel dreams into reality. Let us guide you on a journey where every destination becomes a story, and every experience leaves a lasting impression.
            </Typography>
          </m.div>


          <Button
            variant="outlined"
            color="inherit"
            size="large"
            endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
            sx={{ mt: 5 }}
            onClick={()=>{router.push(paths.packages)}}
          >
            View all packages
          </Button>
        </Grid>
      </Grid>
    </Container>
    // </Box>
  );
}
