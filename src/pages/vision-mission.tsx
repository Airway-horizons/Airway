import { Helmet } from 'react-helmet-async';

import { VisionMissionView } from 'src/sections/vision-mission/view';

// ----------------------------------------------------------------------

export default function VisionMission() {
  return (
    <>
      <Helmet>
        <title>Our Vision & Mission | Airway Horizons Travel Company</title>
        <meta
          name="description"
          content="Explore the vision and mission behind Airway Horizons, the best travel company in Kerala offering meaningful, affordable tour packages in India and abroad."
        />
        <meta
          name="keywords"
          content="Airway Horizons vision, mission statement, travel company Kerala, affordable India tours, global travel packages"
        />
        <meta property="og:title" content="Our Vision & Mission | Airway Horizons" />
        <meta
          property="og:description"
          content="Discover the values and goals that guide Airway Horizons – a top travel company in Kerala known for impactful and budget-friendly travel experiences."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://airwayhorizons.com/vision-mission" />
        <meta property="og:url" content="https://airwayhorizons.com/vision-mission" />
        <meta property="og:image" content="https://airwayhorizons.com/logo/airwaylogo.png" />
        <meta name="twitter:card" content="Our Vision & Mission | Airway Horizons Travel Company" />
        <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
      </Helmet>

      <VisionMissionView />
    </>
  );
}
