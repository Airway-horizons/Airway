import { Helmet } from 'react-helmet-async';

import { TermsView } from 'src/sections/terms-and-condition/view';

// ----------------------------------------------------------------------

export default function TermsAndConditionPage() {
  return (
    <>
      <Helmet>
        <title>Terms And Condition</title>
      </Helmet>

      <TermsView />
    </>
  );
}
