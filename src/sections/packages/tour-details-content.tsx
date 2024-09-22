import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import CustomPopover, { usePopover } from 'src/components/custom-popover';
import {
  WhatsappShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  WhatsappIcon,
  FacebookIcon,
  LinkedinIcon,
} from 'react-share';

import { fDate } from 'src/utils/format-time';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import Markdown from 'src/components/markdown';
import { varTranHover } from 'src/components/animate';
import Lightbox, { useLightBox } from 'src/components/lightbox';
import { Button, MenuItem } from '@mui/material';
import { TOUR_SERVICE_OPTIONS } from 'src/helper';
import { fCurrency } from 'src/utils/format-number';
import { useState } from 'react';
import BookModal from './book-view/modal';

export default function TourDetailsContent({ tour }: any) {
  const popover = usePopover();
  const [modal, openModal] = useState(false);

  const {
    name,
    images,
    content,
    services,
    priceSale,
    durations,
    destination,
    ratingNumber,
    price,
    download,
    accommodation,
    id
  } = tour;

  const shareUrl =
    `https://airwayhorizons.com/packages-details/${id}`;

  const handleDownload = () => {
    const pdfUrl = download;
    window.open(pdfUrl, '_blank'); // Open the URL in a new tab
  };

  const slides = images.map((slide: any) => ({
    src: slide,
  }));

  const handleClose = () => openModal(false)
  const {
    selected: selectedImage,
    open: openLightbox,
    onOpen: handleOpenLightbox,
    onClose: handleCloseLightbox,
  } = useLightBox(slides);

  const renderGallery = (
    <>
      <Box
        gap={1}
        display="grid"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
        }}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      >
        <m.div
          key={slides[0].src}
          whileHover="hover"
          variants={{
            hover: { opacity: 0.8 },
          }}
          transition={varTranHover()}
        >
          <Image
            alt={slides[0].src}
            src={slides[0].src}
            ratio="1/1"
            onClick={() => handleOpenLightbox(slides[0].src)}
            sx={{ borderRadius: 2, cursor: 'pointer' }}
          />
        </m.div>

        <Box gap={1} display="grid" gridTemplateColumns="repeat(2, 1fr)">
          {slides.slice(1, 5).map((slide: any) => (
            <m.div
              key={slide.src}
              whileHover="hover"
              variants={{
                hover: { opacity: 0.8 },
              }}
              transition={varTranHover()}
            >
              <Image
                alt={slide.src}
                src={slide.src}
                ratio="1/1"
                onClick={() => handleOpenLightbox(slide.src)}
                sx={{ borderRadius: 2, cursor: 'pointer' }}
              />
            </m.div>
          ))}
        </Box>
      </Box>

      <Lightbox
        index={selectedImage}
        slides={slides}
        open={openLightbox}
        close={handleCloseLightbox}
      />
    </>
  );

  const renderHead = (
    <>
      <Stack direction="row" alignItems="center" sx={{ mb: 3 }}>
        <Typography variant="h4" sx={{ flexGrow: 1 }}>
          {name}
        </Typography>

        <IconButton onClick={popover.onOpen}>
          <Iconify icon="solar:share-bold" />
        </IconButton>

        <Button
          size="small"
          variant="outlined"
          startIcon={<Iconify icon="eva:download-outline" />}
          sx={{ ml: 1 }}
          onClick={handleDownload}
        >
          Download Brochure
        </Button>
      </Stack>

      <Stack spacing={3} direction="row" flexWrap="wrap" alignItems="center">
        <Stack direction="row" alignItems="center" justifyContent="center" spacing={0.5} sx={{ typography: 'body2', width: '100%' }}>
          {/* <Iconify icon="eva:star-fill" sx={{ color: 'warning.main' }} /> */}
          <Stack
            direction="row"
            alignItems="center"
            sx={{
              zIndex: 9,
              borderRadius: 1,
              bgcolor: '#08b0db',
              p: '5px 6px 5px 5px',
              color: 'common.white',
              typography: 'subtitle2',
            }}
          >
            {!!priceSale && (
              <Box
                component="span"
                sx={{ color: 'grey.500', mr: 0.75, textDecoration: 'line-through' }}
              >
                {fCurrency(priceSale)}
              </Box>
            )}
            {fCurrency(price)}/-
          </Stack>
          {/* <Link sx={{ color: 'text.secondary' }}>(234 reviews)</Link> */}
          <Stack direction="row" alignItems="center" spacing={0.5} sx={{ typography: 'body2', mx: 2 }}>
            <Iconify icon="eva:star-fill" sx={{ color: 'warning.main' }} />
            <Box component="span" sx={{ typography: 'subtitle2' }}>
              {ratingNumber}
            </Box>
            {/* <Link sx={{ color: 'text.secondary' }}>(234 reviews)</Link> */}
          </Stack>

          <Stack direction="row" alignItems="center" spacing={0.5} sx={{ typography: 'body2' }}>
            <Iconify icon="mingcute:location-fill" sx={{ color: 'error.main' }} />
            {destination}
          </Stack>


          <Button
            size="small"
            variant="contained"
            onClick={() => openModal(true)}
            sx={{ height: 42, backgroundColor: '#FF5C37', ml: "auto", px: 4 }}
          >
            Book Now
          </Button>

        </Stack>

      </Stack>
    </>
  );

  const renderOverview = (
    <Box
      gap={3}
      display="grid"
      gridTemplateColumns={{
        xs: 'repeat(1, 1fr)',
        md: 'repeat(2, 1fr)',
      }}
    >
      {[
        {
          label: 'Accommodation',
          value: accommodation,
          icon: <Iconify icon="solar:home-2-bold-duotone" />,
        },
        {
          label: 'Durations',
          value: durations,
          icon: <Iconify icon="solar:clock-circle-bold" />,
        },
      ].map((item) => (
        <Stack key={item.label} spacing={1.5} direction="row">
          {item.icon}
          <ListItemText
            primary={item.label}
            secondary={item.value}
            primaryTypographyProps={{
              typography: 'body2',
              color: 'text.secondary',
              mb: 0.5,
            }}
            secondaryTypographyProps={{
              typography: 'subtitle2',
              color: 'text.primary',
              component: 'span',
            }}
          />
        </Stack>
      ))}
    </Box>
  );

  const renderContent = (
    <>
      <Markdown children={content} />

      <Stack spacing={2}>
        <Typography variant="h6"> Services</Typography>

        <Box
          rowGap={2}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
        >
          {TOUR_SERVICE_OPTIONS.map((service) => (
            <Stack
              key={service.label}
              spacing={1}
              direction="row"
              alignItems="center"
              sx={{
                ...(services.includes(service.label) && {
                  color: 'text.disabled',
                }),
              }}
            >
              <Iconify
                icon="eva:checkmark-circle-2-outline"
                sx={{
                  color: 'primary.main',
                  ...(services.includes(service.label) && {
                    color: 'text.disabled',
                  }),
                }}
              />
              {service.label}
            </Stack>
          ))}
        </Box>
      </Stack>
    </>
  );

  return (
    <>
      {renderGallery}

      <Stack sx={{ maxWidth: '100%', mx: 'auto', mb: 8 }}>
        {renderHead}

        <Divider sx={{ borderStyle: 'dashed', my: 5 }} />

        {renderOverview}

        <Divider sx={{ borderStyle: 'dashed', my: 5 }} />

        {renderContent}
      </Stack>
      {modal &&
        <BookModal handleClose={handleClose} open={modal} name={name} />
      }

      <CustomPopover
        open={popover.open}
        onClose={popover.onClose}
        arrow="right-top"
        sx={{ width: 200 }}
      >
        <MenuItem
          onClick={() => {
            popover.onClose();
          }}
        >
          <WhatsappShareButton url={shareUrl}>
            <Box display="flex" alignItems="center">
              <WhatsappIcon size={22} round />
              Share on WhatsApp
            </Box>
          </WhatsappShareButton>
        </MenuItem>

        <MenuItem
          onClick={() => {
            popover.onClose();
          }}
        >
          <FacebookShareButton url={shareUrl}>
            <Box display="flex" alignItems="center">
              <FacebookIcon size={22} round />
              Share on Facebook
            </Box>
          </FacebookShareButton>
        </MenuItem>

        <MenuItem
          onClick={() => {
            popover.onClose();
          }}
        >
          <LinkedinShareButton url={shareUrl}>
            <Box display="flex" alignItems="center">
              <LinkedinIcon size={22} round />
              Share on LinkedIn
            </Box>
          </LinkedinShareButton>
        </MenuItem>

        {/* <MenuItem
          onClick={() => {
            popover.onClose();
          }}
        >
          <Iconify icon="solar:export-bold" />
          Share on Instagram
        </MenuItem> */}
      </CustomPopover>
    </>
  );
}
