import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { alpha } from '@mui/material/styles';

import Carousel, { useCarousel, CarouselArrowIndex } from 'src/components/carousel';
import Iconify from 'src/components/iconify';

export default function HeroCarousel({ data, socials }: any) {
  const carousel = useCarousel({
    autoplay: true,
    speed: 800,
  });

  return (
    <Card sx={{ position: 'relative', height: '100vh', borderRadius: 0 }}>
      {/* Carousel Slides */}
      <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
        {data.map((item: any) => (
          <Box
            key={item.id}
            sx={{
              height: '100vh',
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${item.coverUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              textAlign: 'center',
            }}
          >
            <Box sx={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
              <Typography variant="h1" sx={{ color: '#F6FF00', width: '90%' }}>{item.title}</Typography>
              <Typography variant="h6" sx={{
                color: '#fff', fontSize: '1rem !important', textAlign: {
                  xs: 'justify',
                  md: 'center',
                }, fontWeight: 500, mt: 2, width: '90%', mx: 'auto'
              }}>{item.description}</Typography>

            </Box>
          </Box>
        ))}
      </Carousel>

      {/* Socials Box */}
      <Box
        sx={{
          position: 'absolute',
          right: 0,
          bottom: 95,
          background:
            'linear-gradient(90deg, rgb(230 237 240 / 43%) 0%, rgb(255 255 255 / 76%) 50%, rgba(255, 255, 255, 1) 100%)',
          p: 1.5,
          borderRadius: '10px 0 0 10px',
        }}
      >
        <Stack spacing={1} direction="row" justifyContent="center">
          {socials?.map((social: any) => (
            <a
              key={social.name}
              href={social.path}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton
                sx={{
                  '&:hover': { bgcolor: alpha(social.color, 0.08) },
                }}
              >
                <Iconify color={social.color} icon={social.icon} />
              </IconButton>
            </a>
          ))}
        </Stack>
      </Box>

      {/* Carousel Arrows + Index */}
      <CarouselArrowIndex
        index={carousel.currentIndex}
        total={data.length}
        onNext={carousel.onNext}
        onPrev={carousel.onPrev}
      />
    </Card>
  );
}
