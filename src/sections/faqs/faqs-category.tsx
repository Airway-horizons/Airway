import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import ListItemButton from '@mui/material/ListItemButton';

import { useBoolean } from 'src/hooks/use-boolean';
import { useResponsive } from 'src/hooks/use-responsive';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import TextMaxLine from 'src/components/text-max-line';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const CATEGORIES = [
  {
    label: 'Travel Insurance',
    icon: '/assets/icons/faqs/ic_assurances.svg',
    href: '#',
  },
  {
    label: 'Sustainability and Responsible Travel',
    icon: '/assets/icons/faqs/ic_delivery.svg',
    href: '#',
  },
  {
    label: 'Special Requirements and Accessibility',
    icon: '/assets/icons/faqs/ic_account.svg',
    href: '#',
  },
  {
    label: 'Visa and Travel Document Assistance',
    icon: '/assets/icons/faqs/ic_payment.svg',
    href: '#',
  },
  // {
  //   label: 'Problem with the Product',
  //   icon: '/assets/icons/faqs/ic_package.svg',
  //   href: '#',
  // },
  // {
  //   label: 'Return & Refund',
  //   icon: '/assets/icons/faqs/ic_refund.svg',
  //   href: '#',
  // },
];

// ----------------------------------------------------------------------

export default function FaqsCategory() {
  const mdUp = useResponsive('up', 'md');

  const nav = useBoolean();

  if (!mdUp) {
    return (
      <>
        <AppBar position="absolute">
          <Toolbar>
            <Button startIcon={<Iconify icon="solar:list-bold" />} onClick={nav.onTrue}>
              Categories
            </Button>
          </Toolbar>
          <Divider />
        </AppBar>

        <Drawer open={nav.value} onClose={nav.onFalse}>
          <Box gap={1} display="grid" gridTemplateColumns="repeat(2, 1fr)" sx={{ p: 1 }}>
            {CATEGORIES?.map((category) => <CardMobile key={category.label} category={category} />)}
          </Box>
        </Drawer>
      </>
    );
  }

  return (
    <Box
      component={MotionViewport}
      gap={3}
      display="grid"
      gridTemplateColumns={{
        md: 'repeat(3, 1fr)',
        lg: 'repeat(6, 1fr)',
      }}
    >
      {CATEGORIES?.map((category) => (
        <m.div key={category.label} variants={varFade().in}>
          <CardDesktop category={category} />
        </m.div>
      ))}
    </Box>
  );
}

// ----------------------------------------------------------------------

type CardDesktopProps = {
  category: {
    label: string;
    icon: string;
  };
};

function CardDesktop({ category }: CardDesktopProps) {
  const { label, icon } = category;

  return (
    <Paper
      variant="outlined"
      sx={{
        p: 3,
        borderRadius: 2,
        bgcolor: 'unset',
        cursor: 'pointer',
        textAlign: 'center',
        '&:hover': {
          bgcolor: 'background.paper',
          boxShadow: (theme) => theme.customShadows.z20,
        },
      }}
    >
      <Image
        disabledEffect
        alt={icon}
        src={icon}
        sx={{ mb: 2, width: 80, height: 80, mx: 'auto' }}
      />

      <TextMaxLine variant="subtitle2" persistent>
        {label}
      </TextMaxLine>
    </Paper>
  );
}

// ----------------------------------------------------------------------

function CardMobile({ category }: CardDesktopProps) {
  const { label, icon } = category;

  return (
    <ListItemButton
      key={label}
      sx={{
        py: 2,
        maxWidth: 140,
        borderRadius: 1,
        textAlign: 'center',
        alignItems: 'center',
        typography: 'subtitle2',
        flexDirection: 'column',
        justifyContent: 'center',
        bgcolor: 'background.neutral',
      }}
    >
      <Image alt={icon} src={icon} sx={{ width: 48, height: 48, mb: 1 }} />

      {category?.label}
    </ListItemButton>
  );
}
