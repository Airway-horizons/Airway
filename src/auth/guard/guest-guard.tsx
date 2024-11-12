import { useState, useEffect, useCallback } from 'react';
import { useRouter, useSearchParams } from 'src/routes/hooks';
import { paths } from 'src/routes/paths';
import { SplashScreen } from 'src/components/loading-screen';
import { localStorageUtil } from 'src/utils/helper'; // Import your utils

type Props = {
  children: React.ReactNode;
};

export default function GuestGuard({ children }: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(true); // Loading state to wait while checking the auth
  const [isAuthorized, setIsAuthorized] = useState(true); // Initially assume user is authorized



  const checkAuth = useCallback(() => {
    const local: any = localStorageUtil.getItem<string>('airWayData'); // Get token from localStorage

    if (!local?.data?.token) {
      // If token exists, user is authenticated, redirect them
      router.replace("/");
      setIsAuthorized(false); // Mark as unauthorized to render children
    } else {
      setIsAuthorized(true); // If no token, render the children (guest page allowed)
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
    return <>{children}</>; // Render children if user is a guest (not authenticated)
  }

  return null; // If the user is authenticated, nothing will be rendered
}
