import { Helmet } from 'react-helmet-async';

import { PrivacyView } from 'src/sections/privacy-policy/view';

// ----------------------------------------------------------------------

export default function PrivacyPolicyPage() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy</title>
      </Helmet>

      <PrivacyView />
    </>
  );
}
