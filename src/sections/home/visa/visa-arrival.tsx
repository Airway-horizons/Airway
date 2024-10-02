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
        title: 'Thailand',
        coverUrl: '/visa/k5.jpg',
        destination: "Thailand"
    },
    {
        id: 1,
        title: 'Bali',
        coverUrl: '/visa/k6.jpg',
        destination: "Indonesia"
    },
    {
        id: 2,
        title: 'Cambodia',
        coverUrl: '/visa/k7.jpg',
        destination: "Cambodia"
    },
    {
        id: 3,
        title: 'Vitenam',
        coverUrl: '/visa/k8.jpg',
        destination: "Vitenam"
    }, {
        id: 4,
        title: 'Jordan',
        coverUrl: '/visa/k12.jpg',
        destination: "Jordan"
    },
    {
        id: 5,
        title: 'Fiji',
        coverUrl: '/visa/k13.jpg',
        destination: "Fiji"
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
