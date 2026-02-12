import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import { m, AnimatePresence } from 'framer-motion';

import { useOffSetTop } from 'src/hooks/use-off-set-top';
import { useResponsive } from 'src/hooks/use-responsive';
import Link from '@mui/material/Link';

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
import { Button, Switch, Typography, IconButton } from '@mui/material';
import Iconify from 'src/components/iconify';
import styled from '@emotion/styled';
import { paths } from 'src/routes/paths';
import { localStorageUtil } from 'src/utils/helper';
import AccountPopover from '../common/account-popover';
import { RouterLink } from 'src/routes/components';

// ----------------------------------------------------------------------






export default function Header() {
  const theme = useTheme();
  const router = useRouter();
  const settings = useSettingsContext();
  const token: any = localStorageUtil.getItem('airWayData');

  const mdUp = useResponsive('up', 'md');

  const offsetTop = useOffSetTop(HEADER.H_DESKTOP);


  const handleLogin = () => router.push(paths.auth.login);
  const handleRegister = () => router.push(paths.auth.register);


  return (
    <AppBar>
      <Toolbar
        disableGutters
        sx={{
          // height: {
          //   xs: HEADER.H_MOBILE,
          //   md: HEADER.H_DESKTOP,
          // },
          transition: theme.transitions.create(['height'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...bgBlur({
            color: theme.palette.background.default,
          }),
          height: {
            md: HEADER.H_DESKTOP_OFFSET,
          },
        }}
      >
        <Container maxWidth="xl" sx={{ height: 1, display: 'flex', alignItems: 'center' }}>
          <Logo />


          {mdUp && <NavDesktop data={navConfig} />}

          <Stack alignItems="center" direction={{ xs: 'row' }} sx={{ ml: 'auto' }}>


            <m.div variants={varFade().inUp}>
              <IconButton
                component={m.button}
                whileTap="tap"
                whileHover="hover"
                variants={{
                  hover: { scale: 1.05 },
                  tap: { scale: 0.95 },
                }}
                onClick={() =>
                  settings.onUpdate('themeMode', settings.themeMode === 'light' ? 'dark' : 'light')
                }
                sx={{
                  width: 40,
                  height: 40,
                }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <m.div
                    key={settings.themeMode}
                    initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                    transition={{
                      duration: 0.4,
                      ease: "backInOut",
                      type: "spring",
                      stiffness: 200,
                      damping: 15
                    }}
                  >
                    <Iconify
                      icon={settings.themeMode === 'dark' ? 'solar:moon-stars-bold-duotone' : 'solar:sun-fog-bold-duotone'}
                      width={24}
                      sx={{
                        color: settings.themeMode === 'dark' ? 'warning.main' : 'warning.dark',
                        filter: settings.themeMode === 'dark' ? 'drop-shadow(0 0 8px rgba(255,171,0,0.5))' : 'none'
                      }}
                    />
                  </m.div>
                </AnimatePresence>
              </IconButton>
            </m.div>
            {token && <AccountPopover id={token?.data?.id} />}




            {!mdUp && <NavMobile data={navConfig} handleLogin={handleLogin} handleRegister={handleRegister} token={!!token} />}
          </Stack>
        </Container>
      </Toolbar>

      {offsetTop && <HeaderShadow />}
    </AppBar>
  );
}
