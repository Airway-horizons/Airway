import { m, useScroll } from 'framer-motion';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Stack, Container, Typography, IconButton } from '@mui/material';
import { alpha, styled, useTheme } from '@mui/material/styles';
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
import { tourData } from './helper';
import InstagramGallery from './instagram-gallery';
import StatusRound from './status-round';
import HomeDarkMode from '../visa/home-dark-mode';
import { socials } from 'src/helper';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

type StyledPolygonProps = {
  anchor?: 'top' | 'bottom';
};

const carouselsData = [
  {
    id: 0,
    title: 'India tours and activities',
    coverUrl: '/home/des/0.jpg',
    destination: "India"
  },
  {
    id: 1,
    title: 'Nepal tours and activities',
    coverUrl: '/home/des/1.jpg',
    destination: "Nepal"
  },
  {
    id: 2,
    title: 'Canada tours and activities',
    coverUrl: '/home/des/2.jpg',
    destination: "Canada"
  },
  {
    id: 3,
    title: 'Spain tours and activities',
    coverUrl: '/home/des/3.jpg',
    destination: "Spain"
  },
  {
    id: 4,
    title: 'Iceland tours and activities',
    coverUrl: '/home/des/4.jpg',
    destination: "Iceland"
  },
  {
    id: 5,
    title: 'Thailand tours and activities',
    coverUrl: '/home/des/5.jpg',
    destination: "Thailand"
  },
  {
    id: 6,
    title: 'Srilanka tours and activities',
    coverUrl: '/home/des/6.jpg',
    destination: "Sri Lanka"
  },
  {
    id: 7,
    title: 'USA tours and activities',
    coverUrl: '/home/des/7.jpg',
    destination: "USA"
  },
  {
    id: 8,
    title: 'Maldives tours and activities',
    coverUrl: '/home/des/8.jpg',
    destination: "Maldives"
  },
  {
    id: 9,
    title: 'England tours and activities',
    coverUrl: '/home/des/9.jpg',
    destination: "England"
  },
  {
    id: 10,
    title: 'Indonesia tours and activities',
    coverUrl: '/home/des/10.jpg',
    destination: "Indonesia"
  },
];

export default function HomeView() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      {/* <HomeHero /> */}

      <Box sx={{
        height: "100vh", background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/banner.png) center/cover no-repeat',
        backgroundSize: 'cover', backgroundPosition: 'center', position: "relative"
      }}>

        <Box sx={{
          position: 'absolute',
          right: 0,
          bottom: 95,
          // background: ' #e6edf0',
          background: 'linear-gradient(90deg, rgb(230 237 240 / 43%) 0%, rgb(255 255 255 / 76%) 50%, rgba(255, 255, 255, 1) 100%);',
          padding: "10px",
          borderRadius: "10px 0px 0px 10px",
        }}>
          <Stack spacing={2} direction="row" justifyContent="center">
            {socials?.map((social: any) => (
              <a href={social?.path} target="_blank" rel="noopener noreferrer">
                <IconButton
                  key={social.name}
                  sx={{
                    '&:hover': {
                      bgcolor: alpha(social.color, 0.08),
                    },
                  }}
                >
                  <Iconify color={social.color} icon={social.icon} />
                </IconButton>
              </a>
            ))}
          </Stack>
        </Box>
        <Box sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
          <Typography variant="h1" sx={{ color: '#F6FF00', }}>Explore Beyond Limits</Typography>
          <Typography variant="h6" sx={{ color: '#fff', fontSize: '0.8rem !important', textAlign: 'center', fontWeight: 500, mt: 2 }}>We create transformative travel experiences through tailored adventures and cultural immersion,<br /> inspiring personal growth and lasting memories. Join us and travel with the Best Travel Company in Kerala, <br /> India and Top Tour Operators in Kochi for your next amazing trip.</Typography>

        </Box>

      </Box>

      <Box
        sx={{
          overflow: 'hidden',
          position: 'relative',
          bgcolor: 'background.default',
        }}
      >
        {/* <Container maxWidth="lg">

          <StatusRound />
        </Container> */}


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
              mt: 15,
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
                  <Typography sx={{ color: 'grey.500' }}>
                    We offer creativity, adventure, culture, and conservation in our trips, making us one of the Best tour operators in South India for budget holidays.

                  </Typography>
                </m.div>

              </Stack>

              <CardContent>
                <CarouselCenterMode data={carouselsData} />
              </CardContent>
            </Card>
          </Box>
        </Container>



        <Container maxWidth="lg" sx={{ mb: 10 }}>
          <Stack
            spacing={3}
            sx={{
              textAlign: 'center',
              mb: { xs: 5, md: 10 },
              mt: 8,
            }}
          >
            <m.div variants={varFade().inDown}>
              <Typography variant="h2">Featured Tours</Typography>
            </m.div>

            <m.div variants={varFade().inUp}>
              <Typography sx={{ color: 'grey.500' }}>
                Our Featured Tours can help you find the trip thats perfect for you!
              </Typography>
            </m.div>
          </Stack>

          <TourList tours={tourData?.slice(0, 9)} />
        </Container>


        <HomeDarkMode />


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
                  mt: 10,
                }}
              >
                <m.div variants={varFade().inDown}>
                  <Typography variant="h2">Programs We Provide</Typography>
                </m.div>

                <m.div variants={varFade().inUp}>
                  <Typography sx={{ color: 'grey.500' }}>
                    Join the Best Travel Agency in Kerala for guided tours, cultural experiences,
                    adventure activities, and personalized travel plans. Whether you're in Kochi,
                    Chennai, Bangalore, or Hyderabad, our strong presence across South India
                    ensures every trip is thoughtfully crafted just for you.
                  </Typography>
                </m.div>
              </Stack>

              <CardContent>
                <ProgramCarousel />
              </CardContent>
            </Card>
          </Box>
        </Container>

        <HomeMinimal />
        <AboutTestimonials />

        <HomePricing />

        {/* <InstagramGallery /> */}
        {/* <HomeLookingFor /> */}

        {/* <HomeAdvertisement /> */}
      </Box>
    </>
  );
}
