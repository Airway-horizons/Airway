import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router';

import { tourData } from 'src/sections/home/view/helper';
import { TourDetailsView } from 'src/sections/packages/view';
// ----------------------------------------------------------------------

export default function PackagesDetails() {
  const { id } = useParams();
  const currentTour = tourData?.filter((tour) => tour?.id === id)[0];
  return (
    <>
      <Helmet>
        <title>{currentTour?.seoTitle}</title>
        <meta
          name="description"
          content={currentTour?.seoDes}
        />
        <meta property="og:title" content={currentTour?.seoTitle} />
        <meta
          property="og:description"
          content={currentTour?.seoDes}
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`https://airwayhorizons.com/packages-details/${id}`} />
        <meta property="og:url" content={`https://airwayhorizons.com/packages-details/${id}`} />
        <meta property="og:image" content={`https://airwayhorizons.com${currentTour?.images[0]}`} />
        <meta name="twitter:card" content={currentTour?.seoTitle} />
        <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
      </Helmet>

      <TourDetailsView id={id} />
    </>
  );
}
