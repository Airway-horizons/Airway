import { Helmet } from 'react-helmet-async';

import { useParams } from 'src/routes/hooks';

import ProfileView from 'src/sections/users/profile';

// ----------------------------------------------------------------------

export default function ProfilePage() {
  const params = useParams();

  const { id } = params;

  return (
    <>
      <Helmet>
        <title> Dashboard: Profile</title>
      </Helmet>

      <ProfileView id={id} />
    </>
  );
}
