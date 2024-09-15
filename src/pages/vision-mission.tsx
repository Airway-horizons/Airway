import { Helmet } from 'react-helmet-async';

import { VisionMissionView } from 'src/sections/vision-mission/view';

// ----------------------------------------------------------------------

export default function VisionMission() {
  return (
    <>
      <Helmet>
        <title>Vision Mission</title>
      </Helmet>

      <VisionMissionView />
    </>
  );
}
