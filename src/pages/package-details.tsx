import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router';

import { TourDetailsView } from 'src/sections/packages/view';

// ----------------------------------------------------------------------

export default function PackagesDetails() {
  const { id } = useParams();

  return (
    <>
      <Helmet>
        <title>Airway Horizons: Package Details</title>
      </Helmet>

      <TourDetailsView id={id} />
    </>
  );
}
