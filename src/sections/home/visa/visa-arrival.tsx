import Box from '@mui/material/Box';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import CardContent from '@mui/material/CardContent';
import { alpha, useTheme } from '@mui/material/styles';

import { bgGradient } from 'src/theme/css';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import TextMaxLine from 'src/components/text-max-line';
import Carousel, { useCarousel, CarouselArrows } from 'src/components/carousel';
import { paths } from 'src/routes/paths';
import { Typography } from '@mui/material';

// ----------------------------------------------------------------------


const carouselsData = [
    {
        id: 0,
        title: 'India',
        coverUrl: '/home/des/0.jpg',
        destination: "India"
    },
    {
        id: 1,
        title: 'Nepal',
        coverUrl: '/home/des/1.jpg',
        destination: "Nepal"
    },
    {
        id: 2,
        title: 'Canada',
        coverUrl: '/home/des/2.jpg',
        destination: "Canada"
    },
    {
        id: 3,
        title: 'Spain',
        coverUrl: '/home/des/3.jpg',
        destination: "Spain"
    },
    {
        id: 4,
        title: 'Iceland',
        coverUrl: '/home/des/4.jpg',
        destination: "Iceland"
    },
    {
        id: 9,
        title: 'England',
        coverUrl: '/home/des/9.jpg',
        destination: "England"
    },
    {
        id: 10,
        title: 'Indonesia',
        coverUrl: '/home/des/10.jpg',
        destination: "Indonesia"
    },
];




export default function VisaArrival() {

    const carousel = useCarousel({
        slidesToShow: 6,
        centerMode: true,
        centerPadding: '60px',
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1, centerPadding: '0' },
            },
        ],
    });

    return (
        <Box
            sx={{
                overflow: 'hidden',
                position: 'relative',
            }}
        >
            <CarouselArrows
                filled
                onNext={carousel.onNext}
                onPrev={carousel.onPrev}
            >
                <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
                    {carouselsData?.map((item: any) => (
                        <Box key={item.id} sx={{ px: 1 }}>
                            <CarouselItem item={item} />
                            <Typography variant="h6" sx={{ mb: 2, mt: 3, color: "#fff" }}>
                                {item?.title}
                            </Typography>
                        </Box>
                    ))}
                </Carousel>
            </CarouselArrows>

        </Box>
    );
}

// ----------------------------------------------------------------------

type CarouselItemProps = {
    item: {
        title: string;
        coverUrl: string;
        destination: string;
    };
};

function CarouselItem({ item }: CarouselItemProps) {
    const theme = useTheme();

    const { coverUrl, title, destination } = item;

    return (
        <RouterLink to={`/packages?id=${destination}`} style={{ textDecoration: 'none', color: "#fff" }}>
            <Paper
                sx={{ overflow: "hidden" }}
            >
                <Image alt={title} src={coverUrl} ratio="3/4" />
            </Paper>
        </RouterLink>
    );
}
