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
import AboutTestimonials from 'src/sections/about/about-testimonials';
import ProgramCard from './program-card';
import ProgramCarousel from './program-carousel';

// ----------------------------------------------------------------------

type StyledPolygonProps = {
  anchor?: 'top' | 'bottom';
};

const carouselsData=[{
  id: 0,
  title: "India 15+ tours and activities",
  coverUrl: '/home/des/0.jpg',
},
{
  id: 1,
  title: "Nepal 2+tours activities",
  coverUrl: '/home/des/1.jpg',
},
{
  id: 2,
  title: "Canada 1 tours",
  coverUrl: '/home/des/2.jpg',
},
{
  id: 3,
  title: "Spain 1 tours",
  coverUrl: '/home/des/3.jpg',
},
{
  id: 4,
  title: "Iceland 1 tours",
  coverUrl: '/home/des/4.jpg',
},
{
  id: 5,
  title: "Thailand 3 tours",
  coverUrl: '/home/des/5.jpg',
},
{
  id: 6,
  title: "Srilanka tours",
  coverUrl: '/home/des/6.jpg',
},
{
  id: 7,
  title: "USA 2 tours",
  coverUrl: '/home/des/7.jpg',
},
{
  id: 8,
  title: "Maldives 2+ tours",
  coverUrl: '/home/des/8.jpg',
},
{
  id: 9,
  title: "England 1 tours",
  coverUrl: '/home/des/9.jpg',
},
{
  id: 10,
  title: "Indonesia 2 tours",
  coverUrl: '/home/des/10.jpg',
}]

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
                  mt: 0,
                }}
              >
                <m.div variants={varFade().inDown}>
                  <Typography variant="h2">Our Top Destinations</Typography>
                </m.div>
                <m.div variants={varFade().inUp}>
                  <Typography component="div" variant="overline" sx={{ color: 'text.disabled', textTransform:"capitalize",fontWeight:"normal" }}>
                  We offer creativity, adventure, culture, conservation in our trips.
                  </Typography>
                </m.div>
              </Stack>

              <CardContent>
                <CarouselCenterMode data={carouselsData} />
              </CardContent>
            </Card>
          </Box>
        </Container>

        <Container maxWidth="xl" sx={{mb:10}}>
          <Stack
            spacing={3}
            sx={{
              textAlign: 'center',
              mb: { xs: 5, md: 10 },
              mt: '102px',
            }}
          >
            <m.div variants={varFade().inDown}>
              <Typography variant="h2">Featured Tours</Typography>
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


        <AboutTestimonials />

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
                  mt: 5,
                }}
              >
                <m.div variants={varFade().inDown}>
                  <Typography variant="h2">Programs We Provide</Typography>
                </m.div>
                {/* <m.div variants={varFade().inUp}>
                  <Typography component="div" variant="overline" sx={{ color: 'text.disabled', textTransform:"capitalize",fontWeight:"normal" }}>
                  We offer creativity, adventure, culture, conservation in our trips.
                  </Typography>
                </m.div> */}
              </Stack>

              <CardContent>
                <ProgramCarousel />
              </CardContent>
            </Card>
          </Box>
        </Container>

        <HomePricing />
        {/* <HomeLookingFor /> */}

        {/* <HomeAdvertisement /> */}
      </Box>
    </>
  );
}
