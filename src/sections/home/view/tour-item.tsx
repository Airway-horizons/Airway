import { Box, Button, Card, Stack, Typography, IconButton, alpha } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';

import { fCurrency } from 'src/utils/format-number';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';

import { ITourItem } from 'src/types/tour';

// ----------------------------------------------------------------------

type Props = {
  tour: ITourItem;
  onView: VoidFunction;
};

export default function TourItem({ tour, onView }: Props) {
  const {
    id,
    name,
    price,
    images,
    priceSale,
    destination,
    ratingNumber,
    durations,
  } = tour;

  const renderRating = (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        py: 0.5,
        px: 1,
        borderRadius: 1,
        typography: 'subtitle2',
        bgcolor: 'warning.lighter',
        color: 'warning.darker',
      }}
    >
      <Iconify icon="eva:star-fill" sx={{ width: 16, height: 16, mr: 0.5 }} />
      {ratingNumber}
    </Stack>
  );

  const renderPrice = (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        top: 12,
        left: 12,
        zIndex: 9,
        borderRadius: 1,
        position: 'absolute',
        p: '6px 12px',
        bgcolor: (theme) => alpha(theme.palette.common.black, 0.6),
        backdropFilter: 'blur(6px)',
        color: 'common.white',
        typography: 'subtitle2',
      }}
    >
      {!!priceSale && (
        <Box component="span" sx={{ color: 'grey.500', mr: 0.5, textDecoration: 'line-through' }}>
          {fCurrency(priceSale)}
        </Box>
      )}
      Starts at {fCurrency(price)}
    </Stack>
  );

  const renderImages = (
    <Stack
      spacing={0.5}
      direction="row"
      sx={{
        position: 'relative',
      }}
    >
      {renderPrice}

      <Stack flexGrow={1} sx={{ position: 'relative' }}>
        <Image
          alt={images[0]}
          src={images[0]}
          sx={{ height: 240, width: 1 }}
          objectFit="cover"
        />
      </Stack>
      <Stack spacing={0.5}>
        <Image alt={images[1]} src={images[1]} ratio="1/1" sx={{ width: 120, borderRadius: 0.5 }} />
        <Image alt={images[2]} src={images[2]} ratio="1/1" sx={{ width: 120, borderRadius: 0.5 }} />
      </Stack>
    </Stack>
  );

  const renderInfo = (
    <Stack spacing={2.5} sx={{ p: 2.5 }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h6" noWrap sx={{ flexGrow: 1, fontSize: '1.1rem' }}>
          <span
            onClick={onView}
            style={{ cursor: 'pointer' }}
          >
            {name}
          </span>
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          sx={{
            typography: 'subtitle2',
            color: 'warning.darker',
          }}
        >
          <Iconify icon="eva:star-fill" sx={{ width: 16, height: 16, color: 'warning.main', mr: 0.5 }} />
          {ratingNumber}
        </Stack>
      </Stack>

      <Stack spacing={1} direction="row" alignItems="center" sx={{ color: 'text.secondary', typography: 'body2' }}>
        <Iconify icon="mingcute:location-fill" width={18} sx={{ color: 'error.main' }} />
        {destination}
        <Box sx={{ width: 4, height: 4, bgcolor: 'text.disabled', borderRadius: '50%', mx: 1 }} />
        <Iconify icon="solar:clock-circle-bold" width={18} sx={{ color: 'info.main', mr: 0.5 }} />
        {durations}
      </Stack>

      <Stack spacing={1} direction="row" flexWrap="wrap" gap={1}>
        {[
          { icon: 'solar:bed-bold', label: tour.accommodation || 'Classic Stay', color: 'success.main' },
          { icon: 'solar:bus-bold', label: 'Transport', color: 'warning.main' },
        ].map((feature) => (
          <Stack
            key={feature.label}
            direction="row"
            alignItems="center"
            sx={{
              px: 1,
              py: 0.5,
              borderRadius: 1,
              typography: 'caption',
              bgcolor: (theme) => alpha(theme.palette.grey[500], 0.08),
              border: (theme) => `1px solid ${alpha(theme.palette.grey[500], 0.16)}`,
            }}
          >
            <Iconify icon={feature.icon} width={16} sx={{ color: feature.color, mr: 0.5 }} />
            {feature.label}
          </Stack>
        ))}
      </Stack>

      {/* Footer / Action Bar */}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          pt: 2,
          borderTop: (theme) => `1px dashed ${theme.palette.divider}`,
        }}
      >
        <Stack spacing={0.5}>
          <Typography variant="caption" sx={{ color: 'text.disabled' }}>Starts at</Typography>
          <Typography variant="h6" sx={{ color: 'primary.main' }}>
            {fCurrency(price)}
          </Typography>
        </Stack>

        <Stack direction="row" spacing={1}>
          <IconButton
            component="a"
            href={`https://wa.me/917902778775?text=Hi! I’m interested in this package: https://airwayhorizons.com/packages-details/${id}`}
            target="_blank"
            sx={{
              color: '#25D366',
              bgcolor: alpha('#25D366', 0.08),
              '&:hover': { bgcolor: alpha('#25D366', 0.16) },
              borderRadius: 1,
            }}
          >
            <Iconify icon="ic:baseline-whatsapp" width={24} />
          </IconButton>

          <Button
            variant="contained"
            onClick={onView}
            sx={{
              bgcolor: '#109384',
              color: 'white',
              '&:hover': { bgcolor: '#0c7b6f' },
              borderRadius: 1,
              px: 3
            }}
          >
            View Details
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );

  return (
    <Card
      sx={{
        borderRadius: 2,
        overflow: 'hidden',
        position: 'relative',
        transition: (theme) => theme.transitions.create(['box-shadow', 'transform']),
        '&:hover': {
          boxShadow: (theme) => theme.customShadows.z24,
          transform: 'translateY(-4px)',
        },
      }}
    >
      {renderImages}
      {renderInfo}
    </Card>
  );
}
