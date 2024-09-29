// src/components/InstagramGallery.js
import { m } from 'framer-motion';
import { Box, Container, Typography, useMediaQuery } from '@mui/material';
import { varFade } from 'src/components/animate';

const InstagramGallery = () => {
  // Define media query breakpoints
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.up('sm') && theme.breakpoints.down('md'));
  const isLaptop = useMediaQuery((theme) => theme.breakpoints.up('md') && theme.breakpoints.down('lg'));
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  // Set height based on the current screen size
  const iframeHeight = isMobile ? '530px' : isTablet ? '800px' : isLaptop ? '1000px' : '1200px';

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <m.div variants={varFade().inDown}>
        <Typography variant="h2" align='center' sx={{ mb: 5 }}>Gallery</Typography>
      </m.div>

      <Box sx={{ textAlign: 'center' }}>
        <iframe
          src="https://snapwidget.com/embed/1080471"
          width="100%"
          height={iframeHeight} // Use the calculated height
          frameBorder="0"
          scrolling="no"
          allowTransparency="true"
          title="Instagram Gallery"
          className="snapwidget-widget"
          style={{ pointerEvents: 'none' }}
        />
      </Box>
    </Container>
  );
};

export default InstagramGallery;
