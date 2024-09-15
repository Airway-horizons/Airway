import Container from '@mui/material/Container';

import TourDetailsContent from '../tour-details-content';
import { tourData } from 'src/sections/home/view/helper';

// ----------------------------------------------------------------------

type Props = {
  id: string;
};

export default function TourDetailsView({ id }: any) {
  const currentTour = tourData?.filter((tour) => tour?.id === id)[0];

  return (
    <Container>
      <TourDetailsContent tour={currentTour} />
    </Container>
  );
}
