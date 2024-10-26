import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import { m } from 'framer-motion';

import { useOffSetTop } from 'src/hooks/use-off-set-top';
import { useResponsive } from 'src/hooks/use-responsive';

import { bgBlur } from 'src/theme/css';
import { useRouter } from 'src/routes/hooks';

import Logo from 'src/components/logo';

import NavMobile from './nav/mobile';
import NavDesktop from './nav/desktop';
import { HEADER } from '../config-layout';
import { navConfig } from './config-navigation';
import HeaderShadow from '../common/header-shadow';
import SettingsButton from '../common/settings-button';
import { useSettingsContext } from 'src/components/settings';
import { varFade, MotionViewport } from 'src/components/animate';
import { Button, Switch, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { paths } from 'src/routes/paths';

// ----------------------------------------------------------------------


const CustomSwitch = styled(Switch)(({ theme }: any) => ({
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.common.white,
  },
  '&.Mui-checked .MuiSwitch-thumb': {
    backgroundColor: theme.palette.primary.main,
  },
  '&.Mui-checked': {
    '& .MuiSwitch-track': {
      backgroundColor: theme.palette.primary.light,
    },
  },
}));



export default function Header() {
  const theme = useTheme();
  const router = useRouter();
  const settings = useSettingsContext();

  const mdUp = useResponsive('up', 'md');

  const offsetTop = useOffSetTop(HEADER.H_DESKTOP);


  const handleLogin = () => router.push(paths.auth.login);


  return (
    <AppBar>
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
          transition: theme.transitions.create(['height'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(offsetTop && {
            ...bgBlur({
              color: theme.palette.background.default,
            }),
            height: {
              md: HEADER.H_DESKTOP_OFFSET,
            },
          }),
        }}
      >
        <Container maxWidth="xl" sx={{ height: 1, display: 'flex', alignItems: 'center' }}>
          <Logo />

          <Box sx={{ flexGrow: 1 }} />

          {mdUp && <NavDesktop data={navConfig} />}

          <Stack alignItems="center" direction={{ xs: 'row', md: 'row-reverse' }}>

            <m.div variants={varFade().inUp}>
              <CustomSwitch
                checked={settings.themeMode === 'dark'}
                onChange={() =>
                  settings.onUpdate('themeMode', settings.themeMode === 'light' ? 'dark' : 'light')
                }
                color="primary"
              />
            </m.div>
            <Button variant="contained" color="primary" sx={{ mr: 2, ml: 1 }} onClick={handleLogin}>Login</Button>

            {!mdUp && <NavMobile data={navConfig} />}
          </Stack>
        </Container>
      </Toolbar>

      {offsetTop && <HeaderShadow />}
    </AppBar>
  );
}
