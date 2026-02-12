import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'src/routes/hooks';
import { paths } from 'src/routes/paths';
import { SplashScreen } from 'src/components/loading-screen';
import { localStorageUtil, role } from 'src/utils/helper'; // Import your utils

type Props = {
  children: React.ReactNode;
};

export default function AuthGuard({ children }: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(true); // Loader state to wait while checking the auth
  const [isAuthorized, setIsAuthorized] = useState(false);

  const checkAuth = useCallback(() => {
    const local: any = localStorageUtil.getItem<string>('airWayData'); // Get token from localStorage

    if (!local?.data?.token || local?.data?.role !== role.admin) {
      // If no token or user is not an admin, redirect to the home page
      router.replace(paths?.home); // Or you could redirect to a login page
    } else {
      // If token exists and user is an admin, allow access
      setIsAuthorized(true);
    }

    setLoading(false); // Stop loading after auth check
  }, [router]);

  useEffect(() => {
    checkAuth(); // Run the check on mount
  }, [checkAuth]);

  if (loading) {
    return <SplashScreen />; // Show loading screen while checking
  }

  if (isAuthorized) {
    return <>{children}</>; // Render children if authorized
  }

  return null; // If not authorized, render nothing (since redirection happens)
}
