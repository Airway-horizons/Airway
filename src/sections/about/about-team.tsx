import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { _socials,  } from 'src/_mock';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';
import Carousel, { useCarousel, CarouselArrows } from 'src/components/carousel';

// ----------------------------------------------------------------------

const _carouselsMembers  = [{
  id: 1,
  name: "Mr. Ameer Ali Thangal",
  role: "Managing Partner",
  avatarUrl: "/about/ameer.jpeg",
  content:"One of the three visionaries behind Airway Horizons, Mr. Ameer is fueled by his passion for travel and making a difference. A true travel enthusiast, he’s committed to crafting impactful journeys that inspire and connect. When he's not exploring new destinations, Mr. Ameer loves spending time with his kids. His adventurous spirit and personal touch ensure every trip with Airway Horizons is unforgettable, reflecting our mission to explore beyond limits."
},
{
  id: 2,
  name: " Mr. Sakeer Ahmed",
  role: "Advisor & Managing Partner",
  avatarUrl: "/about/sakeer.jpeg",
  content:"As an advisor and managing partner at Airway Horizons, Mr. Sakeer Ahmed brings invaluable expertise and a deep passion for travel to our team. His insights and dedication help us craft exceptional experiences. Outside of work, Mr. Sakeer enjoys reading and exploring different cultures, constantly expanding his knowledge to enrich our offerings. His commitment to excellence plays a vital role in our mission to deliver unforgettable journeys."
},
{
  id: 3,
  name: "Shafeer Abdul Azeez",
  role: "Advisor & Managing Partner",
  avatarUrl: "/about/shafeer.jpeg",
  content:"Shafeer Abdul Azeez is renowned for his kindness and humility. A true traveler and culture explorer, he has a deep passion for discovering the world’s wonders. His love for birds and nature enriches our travel experiences, bringing a unique and heartfelt perspective. Shafeer’s genuine warmth and dedication are integral to crafting memorable journeys for our clients."
},
{
  id: 4,
  name: "Abin Joseph",
  role: "Operations Chief & Manager",
  avatarUrl: "/about/abin.jpeg",
  content:"Abin Joseph is a cornerstone of Airway Horizons, bringing his vibrant energy and strategic vision to the company. Hailing from Kerala, this young professional has garnered exceptional experience with a world-renowned travel company, traveling extensively and immersing himself in diverse cultures. As the operations chief and manager, Abin orchestrates our journeys with precision and passion. In his free time, he indulges his curiosity by learning about cars, reflecting his drive for continuous growth and discovery."
}]

export default function AboutTeam() {
  const theme = useTheme();

  const carousel = useCarousel({
    infinite: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1279,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 959,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  });

  return (
    <Container component={MotionViewport} sx={{ textAlign: 'center',pb:5}}>
      <m.div variants={varFade().inDown}>
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          Dream team
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography variant="h2" sx={{ my: 3 }}>
          Great team is the key
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography
          sx={{
            mx: 'auto',
            maxWidth: 640,
            color: 'text.secondary',
          }}
        >
          Airway Horizons will provide you support if you have any problems, our support team will reply
          within a day and we also have detailed documentation.
        </Typography>
      </m.div>

      <Box sx={{ position: 'relative' }}>
        <CarouselArrows
          filled
          // shape="rounded"
          icon="noto:rightwards-hand"
          onNext={carousel.onNext}
          onPrev={carousel.onPrev}
          // leftButtonProps={{
          //   sx: {
          //     left: 24,
          //     ...(_carouselsMembers.length < 5 && { display: 'none' }),
          //   },
          // }}
          // rightButtonProps={{
          //   sx: {
          //     right: 24,
          //     ...(_carouselsMembers.length < 5 && { display: 'none' }),
          //   },
          // }}
        >
          <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
            {_carouselsMembers.map((member) => (
              <Box
                key={member.id}
                component={m.div}
                variants={varFade().in}
                sx={{
                  px: 1.5,
                  py: { xs: 8, md: 10 },
                }}
              >
                <MemberCard member={member} theme={theme} />
              </Box>
            ))}
          </Carousel>
        </CarouselArrows>
      </Box>
    </Container>
  );
}

// ----------------------------------------------------------------------

type MemberCardProps = {
  member: {
    name: string;
    role: string | undefined;
    avatarUrl: string;
    content:string;
  };
  theme:any
};

function MemberCard({ member, theme }: MemberCardProps) {
  const { name, role, avatarUrl,content } = member;
  return (
    <Card key={name}>
      <Typography variant="subtitle1" sx={{ mt: 2.5, mb: 0.5 }}>
        {name}
      </Typography>

      <Typography variant="body2" sx={{ mb: 2.5, color: 'text.secondary' }}>
        {role}
      </Typography>

      <Box sx={{ px: 1 }}>
        <Image alt={name} src={avatarUrl} ratio="1/1" sx={{ borderRadius: 2 }} />
      </Box>

      <m.div variants={varFade().inRight}>
            <Typography
              sx={{
                color: theme.palette.mode === 'light' ? 'text.secondary' : 'common.white',
                mt:2,
                p:2,
                textAlign:'left',
                minHeight:350
              }}
            >
              {content}
            </Typography>
          </m.div>
    </Card>
  );
}
