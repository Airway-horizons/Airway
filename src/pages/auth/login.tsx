import { Helmet } from 'react-helmet-async';

import { Login } from 'src/sections/auth';

// ----------------------------------------------------------------------

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title> Airway Horizons: Login</title>
      </Helmet>

      <Login />
    </>
  );
}
