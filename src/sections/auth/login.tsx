import * as Yup from 'yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';
import { useRouter, useSearchParams } from 'src/routes/hooks';

import { useBoolean } from 'src/hooks/use-boolean';
import { useLoginMutation } from 'src/store/usersApi'; // Import useLoginMutation hook

import Iconify from 'src/components/iconify';
import FormProvider, { RHFTextField } from 'src/components/hook-form';
import { Alert } from '@mui/material';

// ----------------------------------------------------------------------

export default function Login() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const returnTo = searchParams.get('returnTo'); // If user is redirected here after trying to access a protected page
  const [errorMsg, setErrorMsg] = useState('');
  const password = useBoolean();

  // Validation schema using Yup
  const LoginSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email must be a valid email address'),
    password: Yup.string().required('Password is required')
      .min(8, 'Password must be at least 8 characters long')
      .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .matches(/[0-9]/, 'Password must contain at least one number')
  });

  const defaultValues = {
    email: '',
    password: '',
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const { reset, handleSubmit, formState: { isSubmitting } } = methods;

  // Using RTK Query hook for login mutation
  const [login, { isLoading, error }] = useLoginMutation();

  const onSubmit = handleSubmit(async (data) => {
    setErrorMsg("")
    try {
      const response: any = await login(data).unwrap();
      if (response?.statusCode === 200) {
        localStorage.setItem('userData', response);
      }

      // router.push(returnTo || paths.dashboard);

    } catch (err: any) {
      setErrorMsg(err?.message || 'Failed to login. Please check your credentials.');
      // reset();
    }
  });

  const renderHead = (
    <Stack spacing={2} sx={{ mb: !!errorMsg ? 3 : 7 }}>
      <Typography variant="h4">Sign in to Airway Horizons</Typography>
      <Stack direction="row" spacing={0.5}>
        <Typography variant="body2">New user?</Typography>
        <Link component={RouterLink} href={paths.auth.register} variant="subtitle2">
          Create an account
        </Link>
      </Stack>
    </Stack>
  );

  const renderForm = (
    <Stack spacing={2.5}>
      <RHFTextField name="email" label="Email address" />

      <RHFTextField
        name="password"
        label="Password"
        type={password.value ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={password.onToggle} edge="end">
                <Iconify icon={password.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Link
        component={RouterLink}
        href={paths.auth.forgot}
        variant="body2"
        color="inherit"
        underline="always"
        sx={{ alignSelf: 'flex-end', cursor: 'pointer' }}
      >
        Forgot password?
      </Link>

      <LoadingButton
        fullWidth
        color="inherit"
        size="large"
        type="submit"
        variant="contained"
        loading={isSubmitting || isLoading} // Show loading while submitting or waiting for API response
        sx={{ backgroundColor: '#0d5d54' }}
      >
        Login
      </LoadingButton>
    </Stack>
  );

  return (
    <>
      {renderHead}

      {!!errorMsg && (
        <Alert severity="error" sx={{ mb: 4 }}>
          {errorMsg}
        </Alert>
      )}

      <FormProvider methods={methods} onSubmit={onSubmit}>
        {renderForm}
      </FormProvider>
    </>
  );
}
