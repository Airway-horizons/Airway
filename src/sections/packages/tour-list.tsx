import { useCallback } from 'react';

import Box from '@mui/material/Box';
import Pagination, { paginationClasses } from '@mui/material/Pagination';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { ITourItem } from 'src/types/tour';
import TourItem from '../home/view/tour-item';


// ----------------------------------------------------------------------

type Props = {
  tours: ITourItem[];
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
    <>
      <Box
        gap={3}
        display="grid"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
        }}
        sx={{ mb: 8 }}
      >
        {tours?.map((tour) => (
          <TourItem
            key={tour.id}
            tour={tour}
            onView={() => handleView(tour.id)}
          />
        ))}
      </Box>

      {/* {tours.length > 8 && (
        <Pagination
          count={8}
          sx={{
            mt: 8,
            mb: 8,
            [`& .${paginationClasses.ul}`]: {
              justifyContent: 'center',
            },
          }}
        />
      )} */}
    </>
  );
}
