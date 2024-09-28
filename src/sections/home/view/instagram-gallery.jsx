// src/components/InstagramGallery.js
import { m } from 'framer-motion';
import { Box, Container, Typography } from '@mui/material';
import { varFade } from 'src/components/animate';

const InstagramGallery = () => {
  return (
    <Container maxWidth="lg" sx={{ mb: 5, mt:4 }}>
      <m.div variants={varFade().inDown}>
        <Typography variant="h2" align='center' sx={{mb:3}}>Gallery</Typography>
      </m.div>

      <Box sx={{ textAlign: 'center' }}>
        <iframe
          src="https://snapwidget.com/embed/1080471"
          width="100%"
          height="600"
          frameBorder="0"
          scrolling="no"
          allowTransparency="true"
          title="Instagram Gallery"
          class="snapwidget-widget"
        />
      </Box>
    </Container>
  );
};

export default InstagramGallery;
