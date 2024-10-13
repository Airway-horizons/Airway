import { Box, Button } from '@mui/material';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { fDateTime } from 'src/utils/format-time';
import { fCurrency } from 'src/utils/format-number';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import { shortDateLabel } from 'src/components/custom-date-range-picker';
import CustomPopover, { usePopover } from 'src/components/custom-popover';

import { ITourItem } from 'src/types/tour';

// ----------------------------------------------------------------------

type Props = {
  tour: ITourItem;
  onView: VoidFunction;
};

export default function TourItem({ tour, onView }: any) {
  const popover = usePopover();

  const {
    id,
    name,
    price,
    images,
    bookers,
    createdAt,
    available,
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
        top: 8,
        right: 8,
        zIndex: 9,
        borderRadius: 1,
        position: 'absolute',
        p: '2px 6px 2px 4px',
        typography: 'subtitle2',
        bgcolor: 'warning.lighter',
      }}
    >
      <Iconify icon="eva:star-fill" sx={{ color: 'warning.main', mr: 0.25 }} /> {ratingNumber}
    </Stack>
  );

  const renderPrice = (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        top: 8,
        left: 8,
        zIndex: 9,
        borderRadius: 1,
        bgcolor: 'grey.800',
        position: 'absolute',
        p: '2px 6px 2px 4px',
        color: 'common.white',
        typography: 'subtitle2',
      }}
    >
      {!!priceSale && (
        <Box component="span" sx={{ color: 'grey.500', mr: 0.25, textDecoration: 'line-through' }}>
          {fCurrency(priceSale)}
        </Box>
      )}
      &nbsp; Starts at {fCurrency(price)}
    </Stack>
  );

  const renderImages = (
    <Stack
      spacing={0.5}
      direction="row"
      sx={{
        p: (theme) => theme.spacing(1, 1, 0, 1),
      }}
    >
      <Stack flexGrow={1} sx={{ position: 'relative' }}>
        {renderPrice}

        <Image
          alt={images[0]}
          src={images[0]}
          sx={{ borderRadius: 1, height: 164, width: 1 }}
          objectFit="fill"
        />
      </Stack>
      <Stack spacing={0.5}>
        <Image alt={images[1]} src={images[1]} ratio="1/1" sx={{ borderRadius: 1, width: 80 }} />
        <Image alt={images[2]} src={images[2]} ratio="1/1" sx={{ borderRadius: 1, width: 80 }} />
      </Stack>
    </Stack>
  );

  const renderTexts = (
    <ListItemText
      sx={{
        p: (theme) => theme.spacing(2.5, 2.5, 2, 2.5),
      }}
      // primary={`Posted date: ${fDateTime(createdAt)}`}
      secondary={
        <span
          onClick={() => onView()}
          style={{ cursor: 'pointer', textDecoration: 'none' }}
          onMouseOver={(e: any) => (e.target.style.textDecoration = 'underline')}
          onMouseOut={(e: any) => (e.target.style.textDecoration = 'none')}
        >
          {name}
        </span>
      }
      primaryTypographyProps={{
        typography: 'caption',
        color: 'text.disabled',
      }}
      secondaryTypographyProps={{
        mt: 1,
        noWrap: true,
        component: 'span',
        color: 'text.primary',
        typography: 'subtitle1',
      }}
    />
  );

  const renderInfo = (
    <Stack
      spacing={1.5}
      sx={{
        position: 'relative',
        p: (theme) => theme.spacing(0, 2.5, 2.5, 2.5),
      }}
    >
      {[
        {
          label: destination,
          icon: <Iconify icon="mingcute:location-fill" sx={{ color: 'error.main' }} />,
        },
        {
          label: durations,
          icon: <Iconify icon="solar:clock-circle-bold" sx={{ color: 'info.main' }} />,
        },
        {
          label: ratingNumber,
          icon: <Iconify icon="eva:star-fill" sx={{ color: 'warning.main', mr: 0.25 }} />,
        },
      ].map((item) => (
        <Stack
          key={item.label}
          spacing={1}
          direction="row"
          alignItems="center"
          sx={{ typography: 'body2' }}
        >
          {item.icon}
          {item.label}
        </Stack>
      ))}
      {/* {renderRating} */}

      <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          size="small"
          variant="contained"
          onClick={() => onView()}
          sx={{ height: 42, width: '50%', backgroundColor: '#FF5C37', boxShadow: "3px 7px 6px -4px rgba(255, 92, 55, 0.63)" }}
        >
          <Iconify icon="solar:eye-bold" style={{ marginRight: 10 }} />
          View Package
        </Button>
      </Box>
    </Stack>
  );

  return (
    <>
      <Card>
        {renderImages}

        {renderTexts}

        {renderInfo}
      </Card>
    </>
  );
}
