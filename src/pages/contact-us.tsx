import { Helmet } from 'react-helmet-async';

import { ContactView } from 'src/sections/contact/view';

// ----------------------------------------------------------------------

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Airway Horizons | Best Tour Operators in Kerala</title>
        <meta
          name="description"
          content="Connect with Airway Horizons, your trusted tour operators in Kerala, for affordable domestic & international packages, student tours, and customized experiences."
        />
        <meta
          name="keywords"
          content="contact Airway Horizons, tour operators Kerala, travel agency contact, student tours, custom travel packages"
        />
        <meta property="og:title" content="Contact Airway Horizons | Trusted Tour Operators in Kerala" />
        <meta
          property="og:description"
          content="Reach out to Airway Horizons for travel assistance, custom tour planning, student group tours, and the best travel deals from Kerala."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://airwayhorizons.com/contact-us" />
        <meta property="og:url" content="https://airwayhorizons.com/contact-us" />
        <meta property="og:image" content="https://airwayhorizons.com/logo/airwaylogo.png" />
        <meta name="twitter:card" content="Contact Airway Horizons | Best Tour Operators in Kerala" />
        <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
      </Helmet>

      <ContactView />
    </>
  );
}
