import { Helmet } from 'react-helmet-async';

import { HomeView } from 'src/sections/home/view';

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Best Travel Company In Bangalore | Explore with Airway Horizons</title>
        <meta name="description" content="Looking for the best travel company in Bangalore? Airway Horizons brings you handpicked tour packages, adventure trips, and educational journeys across the globe." />
        <meta name="keywords" content="Travel Company Bangalore, Airway Horizons, tour packages, adventure trips, educational travel, best travel agency" />
        <meta property="og:title" content="Best Travel Company In Bangalore | Airway Horizons" />
        <meta property="og:description" content="Explore the world with Airway Horizons – offering top travel experiences, customized tours, and global adventures." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://airwayhorizons.com/" />
        <link rel="canonical" href="https://airwayhorizons.com/" />
        <meta property="og:image" content="https://airwayhorizons.com/logo/airwaylogo.png" />
        <meta name="twitter:card" content="Best Travel Company In Bangalore | Explore with Airway Horizons" />
        <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
      </Helmet>

      <HomeView />
    </>
  );
}
