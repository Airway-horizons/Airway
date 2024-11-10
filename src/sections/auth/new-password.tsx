import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';

import { paths } from 'src/routes/paths';
import { useRouter, useSearchParams } from 'src/routes/hooks';

import { useBoolean } from 'src/hooks/use-boolean';

import { NewPasswordIcon } from 'src/assets/icons';

import Iconify from 'src/components/iconify';
import FormProvider, { RHFTextField } from 'src/components/hook-form';

// Import the mutation hook
import { useUpdateUserMutation, useVerifyMutation } from 'src/store/usersApi';

// ----------------------------------------------------------------------

export default function NewPassword() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  const otp = searchParams.get('otp');

  const [errorMsg, setErrorMsg] = useState<string>('');

  const [updatePassword] = useUpdateUserMutation();

  const password = useBoolean();

  // Password validation schema with custom rules
  const NewPasswordSchema = Yup.object().shape({
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters long')
      .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .matches(/[0-9]/, 'Password must contain at least one number')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .required('Confirm password is required')
      .oneOf([Yup.ref('password')], 'Passwords must match'),
  });

  useEffect(() => {
    if (!email && !otp) {
      router.push(paths.auth.login);
    }
  }, [email, otp, router]);


  const defaultValues = {
    password: '',
    confirmPassword: '',
  };

  const methods = useForm({
    mode: 'onChange',
    resolver: yupResolver(NewPasswordSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    setErrorMsg("")
    const body = {
      email,
      password: data.password,
      otp,
    }
    try {
      const response: any = await updatePassword?.(body).unwrap();
      if (response?.statusCode === 200) {
        router.push(paths.auth.login);
      } else {
        setErrorMsg('Failed to update password. Please try again.');
      }
    } catch (error: any) {
      reset();
      setErrorMsg(typeof error === 'string' ? error : error.message);
    }
  });

  const renderHead = (
    <>
      <NewPasswordIcon sx={{ height: 96 }} />

      <Stack spacing={1} sx={{ mt: 3, mb: !!errorMsg ? 2 : 5 }}>
        <Typography variant="h3">New Password</Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Successful updates enable access using the new password
        </Typography>
      </Stack>
    </>
  );

  const renderForm = (
    <Stack spacing={3}>
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

      <RHFTextField
        name="confirmPassword"
        label="Confirm Password"
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

      <LoadingButton
        fullWidth
        type="submit"
        size="large"
        variant="contained"
        color="primary"
        loading={isSubmitting}
      >
        Update Password
      </LoadingButton>
    </Stack>
  );

  return (
    <>
      {renderHead}

      {/* Show error message if there is an error */}
      {!!errorMsg && (
        <Alert severity="error" sx={{ textAlign: 'left', mb: 3 }}>
          {errorMsg}
        </Alert>
      )}

      <FormProvider methods={methods} onSubmit={onSubmit}>
        {renderForm}
      </FormProvider>
    </>
  );
}
