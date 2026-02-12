import { Helmet } from 'react-helmet-async';

import { ForgotPassword } from 'src/sections/auth';

// ----------------------------------------------------------------------

export default function ForgotPasswordPage() {
  return (
    <>
      <Helmet>
        <title> Airway Horizons: Forgot Password</title>
      </Helmet>

      <ForgotPassword />
    </>
  );
}
