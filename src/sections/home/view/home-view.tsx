import { m, useScroll } from 'framer-motion';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Stack, Container, Typography } from '@mui/material';

import { _mock, _tours } from 'src/_mock';

import { varFade } from 'src/components/animate';
import ScrollProgress from 'src/components/scroll-progress';

import TourList from './tour-list';
import HomeHero from '../home-hero';
import HomeMinimal from '../home-minimal';
import HomePricing from '../home-pricing';
import CarouselCenterMode from './carousel-center-mode';

// ----------------------------------------------------------------------

type StyledPolygonProps = {
  anchor?: 'top' | 'bottom';
};

const _carouselsExample = [...Array(20)].map((_, index) => ({
  id: _mock.id(index),
  title: _mock.postTitle(index),
  coverUrl: '/assets/image.png',
  description: _mock.description(index),
}));

// ----------------------------------------------------------------------

export default function HomeView() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <HomeHero />

      <Box
        sx={{
          overflow: 'hidden',
          position: 'relative',
          bgcolor: 'background.default',
        }}
      >
        <HomeMinimal />

        <Container maxWidth="xl">
          <Box
            gap={1}
            display="grid"
            gridTemplateColumns={{
              xs: 'repeat(1, 1fr)',
              md: 'repeat(1, 1fr)',
            }}
            sx={{
              mb: 3,
              alignItems: 'flex-start',
            }}
          >
            <Card sx={{ border: 'none', boxShadow: 'none' }}>
              <Stack
                spacing={3}
                sx={{
                  textAlign: 'center',
                  mb: { xs: 5, md: 5 },
                  mt: 6,
                }}
              >
                <m.div variants={varFade().inDown}>
                  <Typography variant="h2">Our favorite destinations</Typography>
                </m.div>
                <m.div variants={varFade().inUp}>
                  <Typography component="div" variant="overline" sx={{ color: 'text.disabled' }}>
                    Since wire-frame renderings are relatively simple and fast to calculate, they
                    are often used in cases
                  </Typography>
                </m.div>
              </Stack>

              <CardContent>
                <CarouselCenterMode data={_carouselsExample.slice(8, 16)} />
              </CardContent>
            </Card>
          </Box>
        </Container>

        <Container maxWidth="xl">
          <Stack
            spacing={3}
            sx={{
              textAlign: 'center',
              mb: { xs: 5, md: 10 },
              mt: '102px',
            }}
          >
            <m.div variants={varFade().inDown}>
              <Typography variant="h2">Featured tours</Typography>
            </m.div>
            <m.div variants={varFade().inUp}>
              <Typography component="div" variant="overline" sx={{ color: 'text.disabled' }}>
                Our Featured Tours can help you find the trip thats perfect for you!
              </Typography>
            </m.div>
          </Stack>

          <TourList tours={_tours} />
        </Container>

        {/* <HomeHugePackElements /> */}

        {/* <Box sx={{ position: 'relative' }}>
          <StyledPolygon />
          <HomeForDesigner />
          <StyledPolygon anchor="bottom" />
        </Box> */}

        {/* <HomeDarkMode />

        <HomeColorPresets />

        <HomeCleanInterfaces /> */}

        <HomePricing />

        {/* <HomeLookingFor /> */}

        {/* <HomeAdvertisement /> */}
      </Box>
    </>
  );
}
