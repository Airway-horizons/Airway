import { Helmet } from 'react-helmet-async';

import { Verify } from 'src/sections/auth';

// ----------------------------------------------------------------------

export default function VerifyPage() {
  return (
    <>
      <Helmet>
        <title> Airway Horizons: Verify</title>
      </Helmet>

      <Verify />
    </>
  );
}
