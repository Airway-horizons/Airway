import { Helmet } from 'react-helmet-async';

import { ToleranceView } from 'src/sections/zero-tolerance/view';

// ----------------------------------------------------------------------

export default function ZeroTolerancePage() {
  return (
    <>
      <Helmet>
        <title>Zero Tolerance</title>
      </Helmet>

      <ToleranceView />
    </>
  );
}
