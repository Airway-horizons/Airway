import * as Yup from 'yup';
import { useMemo, useCallback, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import FormControlLabel from '@mui/material/FormControlLabel';
import Skeleton from '@mui/material/Skeleton';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';
import { useSnackbar } from 'src/components/snackbar';

import { fData } from 'src/utils/format-number';
import { countries } from 'src/assets/data';
import Label from 'src/components/label';
import FormProvider, { RHFTextField, RHFUploadAvatar, RHFAutocomplete } from 'src/components/hook-form';

import { IUserItem } from 'src/types/user';

import { useGetUserByIdQuery, useUpdateUserMutation } from 'src/store/usersApi';

// ----------------------------------------------------------------------

type Props = {
  currentUser?: IUserItem;
  id: any;
};

export default function ProfileForm({ currentUser, id }: Props) {
  console.log("🚀 ~ ProfileForm ~ id:", id)
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  // Step 1: Validation schema for the form
  const NewUserSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().required('Email is required').email('Email must be a valid email address'),
    phone: Yup.string().required('Phone number is required'),
    address: Yup.string().required('Address is required'),
    country: Yup.string().required('Country is required'),
    state: Yup.string().required('State is required'),
    city: Yup.string().required('City is required'),
    zipcode: Yup.string().required('Zip code is required'),
    profile: Yup.mixed<any>().nullable(),
  });

  // Step 2: Fetch user data with RTK Query
  const { data, isLoading, error } = useGetUserByIdQuery(id);
  const [updateUser, { isLoading: isUpdating }] = useUpdateUserMutation();

  const userData: any = data;

  // Step 3: Set default values when data is fetched and reset the form
  const defaultValues: any = useMemo(() => ({
    name: userData?.data?.name || '',
    city: userData?.data?.city || '',
    email: userData?.data?.email || '',
    state: userData?.data?.state || '',
    address: userData?.data?.address || '',
    country: userData?.data?.country || '',
    zipcode: userData?.data?.zipcode || '',
    profile: userData?.data?.profile || null,
    phone: userData?.data?.phone || '',
  }), [userData]);

  const methods = useForm({
    resolver: yupResolver(NewUserSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    control,
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const values = watch();

  // Use `useEffect` to reset the form data when `userData` changes
  useEffect(() => {
    if (userData) {
      reset(defaultValues);
    }
  }, [userData, reset, defaultValues]);

  // Step 4: Form submission handler
  const onSubmit = handleSubmit(async (data) => {
    try {
      // Create FormData for file upload
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('phone', data.phone);
      formData.append('address', data.address);
      formData.append('country', data.country);
      formData.append('state', data.state);
      formData.append('city', data.city);
      formData.append('zipcode', data.zipcode);

      if (data.profile) {
        formData.append('profile', data.avatarUrl[0]);
      }

      const res: any = await updateUser({ id, data: formData }).unwrap();
      if (res?.statusCode === 200) {
        enqueueSnackbar('Update success!');
      }
    } catch (error) {
      enqueueSnackbar(error?.message ? error?.message : 'Something went wrong. Please try again.', { variant: 'error' });
    }
  });

  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];

      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });

      if (file) {
        setValue('profile', newFile, { shouldValidate: true });
      }
    },
    [setValue]
  );

  if (isLoading) return (
    <Grid container spacing={3}>
      <Grid xs={12} md={4}>
        <Card sx={{ pt: 10, pb: 5, px: 3 }}>
          <Skeleton variant="rectangular" width="100%" height={250} />
        </Card>
      </Grid>

      <Grid xs={12} md={8}>
        <Card sx={{ p: 3 }}>
          <Box
            rowGap={3}
            columnGap={2}
            display="grid"
            gridTemplateColumns={{
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
            }}
          >
            <Skeleton variant="text" width="100%" height={66} />
            <Skeleton variant="text" width="100%" height={67} />
            <Skeleton variant="text" width="100%" height={67} />
            <Skeleton variant="text" width="100%" height={67} />
            <Skeleton variant="text" width="100%" height={67} />
            <Skeleton variant="text" width="100%" height={67} />
            <Skeleton variant="text" width="100%" height={67} />
            <Skeleton variant="text" width="100%" height={67} />
          </Box>
        </Card>
      </Grid>
    </Grid>
  );

  if (error) return <div>Error fetching user data.</div>;

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Grid container spacing={3}>
        <Grid xs={12} md={4}>
          <Card sx={{ pt: 10, pb: 5, px: 3 }}>
            <Box sx={{ mb: 5 }}>
              <RHFUploadAvatar
                name="profile"
                maxSize={3145728}
                onDrop={handleDrop}
                helperText={
                  <Typography
                    variant="caption"
                    sx={{
                      mt: 3,
                      mx: 'auto',
                      display: 'block',
                      textAlign: 'center',
                      color: 'text.disabled',
                    }}
                  >
                    Allowed *.jpeg, *.jpg, *.png, *.gif
                    <br /> max size of {fData(3145728)}
                  </Typography>
                }
              />
            </Box>
          </Card>
        </Grid>

        <Grid xs={12} md={8}>
          <Card sx={{ p: 3 }}>
            <Box
              rowGap={3}
              columnGap={2}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
              }}
            >
              <RHFTextField name="name" label="Full Name" />
              <RHFTextField name="email" label="Email Address" disabled />
              <RHFTextField name="phone" label="Phone Number" />

              <RHFAutocomplete
                name="country"
                label="Country"
                fullWidth
                options={countries.map((option) => option.label)}
                getOptionLabel={(option) => option}
              />

              <RHFTextField name="state" label="State/Region" />
              <RHFTextField name="city" label="City" />
              <RHFTextField name="address" label="Address" />
              <RHFTextField name="zipcode" label="Zip/Code" />
            </Box>

            <Stack alignItems="flex-end" sx={{ mt: 3 }}>
              <LoadingButton type="submit" variant="contained" color="primary" loading={isSubmitting || isUpdating}>
                Save Changes
              </LoadingButton>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
