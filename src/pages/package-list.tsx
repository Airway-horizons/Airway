import { Helmet } from 'react-helmet-async';

import { TourListView } from 'src/sections/packages/view';

// ----------------------------------------------------------------------

export default function PackagesList() {
  return (
    <>
      <Helmet>
        <title>Air Way: Package List</title>
      </Helmet>

      <TourListView />
    </>
  );
}
