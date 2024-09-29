import { Navigate, useRoutes } from 'react-router-dom';
import MainLayout from 'src/layouts/main';
import Sitemap from 'src/Sitemap'; // Import the Sitemap component

import { HomePage, mainRoutes } from './main';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    // Set index page with home page
    {
      path: '/',
      element: (
        <MainLayout>
          <HomePage />
        </MainLayout>
      ),
    },

    ...mainRoutes,

    // Add the sitemap route
    {
      path: '/sitemap.xml',
      element: <Sitemap />,
    },

    // No match 404
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
