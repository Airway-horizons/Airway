import { Navigate, useRoutes } from 'react-router-dom';
import MainLayout from 'src/layouts/main';
import Sitemap from 'src/Sitemap'; // Import the Sitemap component
import { authRoutes } from './auth';

import { HomePage, mainRoutes } from './main';
import { dashboardRoutes } from './dashboard';
import ProfilePage from 'src/pages/users/profile/profile-page';
import BookingPage from 'src/pages/booking';
import { GuestGuard } from 'src/auth/guard';
import { Suspense } from 'react';
import { SplashScreen } from 'src/components/loading-screen';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    // Set index page with home page
    {
      path: '/',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout>
            <HomePage />
          </MainLayout>
        </Suspense>
      ),
    },

    ...mainRoutes,
    ...authRoutes,
    ...dashboardRoutes,
    // Add the sitemap route
    {
      path: '/profile/:id',
      element: (
        <GuestGuard>
          <MainLayout>
            <ProfilePage />
          </MainLayout>
        </GuestGuard>
      ),
    },
    {
      path: '/booking/:id',
      element: (
        <GuestGuard>
          <MainLayout>
            <BookingPage />
          </MainLayout>
        </GuestGuard>
      ),
    },
    {
      path: '/sitemap.xml',
      element: <Sitemap />,
    },

    // No match 404
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
