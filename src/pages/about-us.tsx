import { Helmet } from 'react-helmet-async';

import { AboutView } from 'src/sections/about/view';

// ----------------------------------------------------------------------

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us | Airway Horizons – Best Travel Company in Hyderabad</title>
        <meta
          name="description"
          content="Meet the team behind Airway Horizons. We offer affordable domestic and international tour packages that inspire adventure, growth, and cultural connection."
        />
        <meta
          name="keywords"
          content="About Airway Horizons, travel company Hyderabad, tour operator team, international travel experts, domestic tour specialists"
        />
        <meta property="og:title" content="About Us | Airway Horizons – Trusted Travel Experts in Hyderabad" />
        <meta
          property="og:description"
          content="Learn about the passionate travel experts at Airway Horizons, a top-rated travel company based in Hyderabad offering tours that create lasting memories."
        />
        <link rel="canonical" href="https://airwayhorizons.com/about-us" />
        <meta property="og:url" content="https://airwayhorizons.com/about-us" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://airwayhorizons.com/logo/airwaylogo.png" />
        <meta name="twitter:card" content="About Us | Airway Horizons – Best Travel Company in Hyderabad" />
        <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
      </Helmet>


      <AboutView />
    </>
  );
}
