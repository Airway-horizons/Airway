import { Helmet } from 'react-helmet-async';

import { Register } from 'src/sections/auth';

// ----------------------------------------------------------------------

export default function RegisterPage() {
  return (
    <>
      <Helmet>
        <title> Airway Horizons: Register</title>
      </Helmet>

      <Register />
    </>
  );
}
