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
          <GuestGuard>
            <AuthClassicLayout>
              <LoginPage />
            </AuthClassicLayout>
          </GuestGuard>
        ),
      },
      {
        path: 'register',
        element: (
          <GuestGuard>
            <AuthClassicLayout title={`Don't have an account ?`}>
              <RegisterPage />
            </AuthClassicLayout>
          </GuestGuard>
        ),
      },
      {
        path: 'reset-password', element: <GuestGuard>
          <AuthClassicLayout><NewPasswordPage /></AuthClassicLayout>
        </GuestGuard>
      },
      {
        path: 'forgot-password',
        element: (
          <GuestGuard>
            <AuthClassicLayout>
              <ForgotPasswordPage />
            </AuthClassicLayout>
          </GuestGuard>
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
