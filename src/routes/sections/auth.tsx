import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { GuestGuard } from 'src/auth/guard';
import CompactLayout from 'src/layouts/compact';
import AuthClassicLayout from 'src/layouts/auth/classic';

import { SplashScreen } from 'src/components/loading-screen';

const LoginPage = lazy(() => import('src/pages/auth/login'));
const VerifyPage = lazy(() => import('src/pages/auth/verify'));
const RegisterPage = lazy(() => import('src/pages/auth/register'));
const NewPasswordPage = lazy(() => import('src/pages/auth/new-password'));
const ForgotPasswordPage = lazy(() => import('src/pages/auth/forgot-password'));

export const authRoutes = [
  {
    path: 'auth',
    element: (
      <Suspense fallback={<SplashScreen />}>
        <Outlet />
      </Suspense>
    ),
    children: [
      {
        path: 'login',
        element: (
          <AuthClassicLayout>
            <LoginPage />
          </AuthClassicLayout>
        ),
      },
      {
        path: 'register',
        element: (
          <AuthClassicLayout title={`Don't have an account ?`}>
            <RegisterPage />
          </AuthClassicLayout>
        ),
      },
      {
        path: 'reset-password',
        element: (
          <AuthClassicLayout>
            <NewPasswordPage />
          </AuthClassicLayout>
        ),
      },
      {
        path: 'forgot-password',
        element: (
          <AuthClassicLayout>
            <ForgotPasswordPage />
          </AuthClassicLayout>
        ),
      },
      {
        path: 'verify',
        element: (
          <CompactLayout>
            <VerifyPage />
          </CompactLayout>
        ),
      },
    ],
  },
];
