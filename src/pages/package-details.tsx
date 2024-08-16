import { Helmet } from 'react-helmet-async';

import { TourDetailsView } from 'src/sections/packages/view';

// ----------------------------------------------------------------------

export default function PackagesDetails() {
  return (
    <>
      <Helmet>
        <title>Air Way: Package Details</title>
      </Helmet>

      <TourDetailsView id="e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1" />
    </>
  );
}
