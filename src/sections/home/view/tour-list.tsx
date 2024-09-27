import { useCallback } from 'react';

import Box from '@mui/material/Box';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';


import TourItem from './tour-item';

// ----------------------------------------------------------------------

type Props = {
  tours: any
};

export default function TourList({ tours }: Props) {
  const router = useRouter();

  const handleView = useCallback(
    (id: string) => {
      router.push(paths.packageDetails(id));
    },
    [router]
  );


  return (
    <Box
      gap={3}
      display="grid"
      gridTemplateColumns={{
        xs: 'repeat(1, 1fr)',
        sm: 'repeat(2, 1fr)',
        md: 'repeat(3, 1fr)',
      }}
    >
      {tours?.map((tour:any) => (
        <TourItem
          key={tour.id}
          tour={tour}
          onView={() => handleView(tour.id)}
        />
      ))}
    </Box>
  );
}
