import { Helmet } from 'react-helmet-async';

import { TourListView } from 'src/sections/packages/view';

// ----------------------------------------------------------------------

export default function PackagesList() {
  return (
    <>
      <Helmet>
        <title>Affordable Tour Packages for Every Budget | Airway Horizons</title>
        <meta
          name="description"
          content="Plan your dream vacation with Airway Horizons, a top travel company in Chennai. Explore affordable domestic & international tour packages at great prices!"
        />
        <meta
          name="keywords"
          content="affordable tour packages, budget travel, domestic tours, international packages, Airway Horizons Chennai"
        />
        <meta property="og:title" content="Affordable Tour Packages | Airway Horizons" />
        <meta
          property="og:description"
          content="Book affordable domestic and international tour packages with Airway Horizons, your trusted travel partner in Chennai."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://airwayhorizons.com/packages" />
        <meta property="og:url" content="https://airwayhorizons.com/packages" />
        <meta property="og:image" content="https://airwayhorizons.com/logo/airwaylogo.png" />
        <meta name="twitter:card" content="Affordable Tour Packages for Every Budget | Airway Horizons" />
        <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
      </Helmet>

      <TourListView />
    </>
  );
}
