import { Helmet } from 'react-helmet-async';

import { NewPassword } from 'src/sections/auth';

// ----------------------------------------------------------------------

export default function NewPasswordPage() {
  return (
    <>
      <Helmet>
        <title> Airway Horizons: New Password</title>
      </Helmet>

      <NewPassword />
    </>
  );
}
