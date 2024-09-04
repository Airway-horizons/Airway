import React from 'react';
import Carousel, { useCarousel, CarouselArrows } from 'src/components/carousel';
import ProgramCard from './program-card';
import Box from '@mui/material/Box';

// Sample data
const dataPrograms = [
  { id: 0, title: "CAS - Creativity Activity and Service", coverUrl: '/home/slider/0.jpeg' },
  { id: 1, title: "Adventure Expeditions", coverUrl: '/home/slider/1.jpeg' },
  { id: 2, title: "Culture And History", coverUrl: '/home/slider/2.jpeg' },
  { id: 3, title: "Wildlife and Marine Conservation", coverUrl: '/home/slider/3.jpeg' },
  { id: 4, title: "Study Tours (For students 15-22)", coverUrl: '/home/slider/4.jpeg' },
  { id: 5, title: "Holidays (Adventure & Normal)", coverUrl: '/home/slider/5.jpeg' },
  { id: 6, title: "Honeymoon Trips", coverUrl: '/home/slider/6.jpeg' },
];


// Carousel settings
const settings = {
  slidesToShow: 5,
  slidesToScroll: 1,
  infinite: true,
  centerMode: true,
  centerPadding: '20px',
  speed: 700,
  dots: true, 
   fade: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const ProgramCarousel = () => {
  const carousel = useCarousel({
    slidesToShow: settings.slidesToShow,
    centerMode: settings.centerMode,
    centerPadding: settings.centerPadding,
    infinite: settings.infinite,
    speed: settings.speed,
    dots: settings.dots,
    responsive: settings.responsive,
  });

  return (
    <Box sx={{ overflow: 'hidden', position: 'relative', }}>
      <CarouselArrows
        filled
        // icon="noto:rightwards-hand"
        onNext={carousel.onNext}
        onPrev={carousel.onPrev}
      >
        <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
          {dataPrograms?.map((program,i) => (
            <Box key={i} sx={{
              px: 1,
              transition: 'transform 0.3s ease',
              transform: `scale(${carousel.currentIndex === i ? 1.0 : 0.9})`, // Zoom effect
              // zIndex: carousel.currentIndex === i ? 2 : 1, // Bring center item to front
              height: "100px"
            }}>
              <ProgramCard
                coverUrl={program.coverUrl}
                title={program.title}
              />
            </Box>
          ))}
        </Carousel>
      </CarouselArrows>
    </Box>
  );
};

export default ProgramCarousel;
