import * as Yup from 'yup';
import { useCallback, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import Alert from '@mui/material/Alert'; // Import Alert for displaying error/success messages

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';
import { useRouter, useSearchParams } from 'src/routes/hooks';

import { useCountdownSeconds } from 'src/hooks/use-countdown';

import { useAuthContext } from 'src/auth/hooks';
import { EmailInboxIcon } from 'src/assets/icons';

import Iconify from 'src/components/iconify';
import FormProvider, { RHFCode } from 'src/components/hook-form';

// Import the mutation hook
import { useVerifyMutation, useForgetUserMutation } from 'src/store/usersApi';

// ----------------------------------------------------------------------

export default function Verify() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get('email');

  useEffect(() => {
    if (!email) {
      router.push(paths.auth.login);
    }
  }, [email, router]);


  const [errorMsg, setErrorMsg] = useState<string>('');

  const { countdown, counting, startCountdown } = useCountdownSeconds(60);

  const [verifyUser, { isLoading: isVerifying, isError: verifyError }] = useVerifyMutation();
  const [resendCode] = useForgetUserMutation();

  const VerifySchemaSchema = Yup.object().shape({
    otp: Yup.string().min(6, 'Code must be at least 6 characters').required('Code is required'),
    email: Yup.string().required('Email is required').email('Email must be a valid email address'),
  });

  const defaultValues = {
    otp: '',
    email: email || '',
  };

  const methods = useForm({
    mode: 'onChange',
    resolver: yupResolver(VerifySchemaSchema),
    defaultValues,
  });

  const {
    watch,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const values = watch();

  // Handle form submission to verify the code
  const onSubmit = handleSubmit(async (data) => {
    setErrorMsg("")
    try {
      const response: any = await verifyUser(data).unwrap();

      if (response?.statusCode === 200) {
        const searchParams = new URLSearchParams({
          email: data.email,
          otp: data.otp
        }).toString();
        const href = `${paths.auth.reset}?${searchParams}`;
        router.push(href);
      }
    } catch (error: any) {
      console.error('Verification failed:', error);
      setErrorMsg(error?.message || 'Verification failed. Please try again.');
    }
  });

  // Handle the resend code button
  const handleResendCode = useCallback(async () => {
    try {
      startCountdown();
      await resendCode(values?.email).unwrap();
    } catch (error) {
      console.error('Resend failed:', error);
      setErrorMsg('Failed to resend the verification code.');
    }
  }, [startCountdown, resendCode, values.email]);

  const renderForm = (
    <Stack spacing={3} alignItems="center">
      <RHFCode name="otp" />

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        color="primary"
        variant="contained"
        loading={isSubmitting || isVerifying}
      >
        Verify
      </LoadingButton>

      <Typography variant="body2">
        {`Don’t have a code? `}
        <Link
          variant="subtitle2"
          onClick={handleResendCode}
          sx={{
            cursor: 'pointer',
            ...(counting && {
              color: 'text.disabled',
              pointerEvents: 'none',
            }),
          }}
        >
          Resend code {counting && `(${countdown}s)`}
        </Link>
      </Typography>

      <Link
        component={RouterLink}
        href={paths.auth.login}
        color="inherit"
        variant="subtitle2"
        sx={{
          alignItems: 'center',
          display: 'inline-flex',
        }}
      >
        <Iconify icon="eva:arrow-ios-back-fill" width={16} />
        Return to sign in
      </Link>
    </Stack>
  );

  const renderHead = (
    <>
      <EmailInboxIcon sx={{ height: 96 }} />

      <Stack spacing={1} sx={{ mt: 3, mb: !!errorMsg ? 2 : 5 }}>
        <Typography variant="h3">Please check your email!</Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          We have emailed a 6-digit confirmation code to {email}, please enter the code in the box below to verify your email.
        </Typography>
      </Stack>
    </>
  );

  return (
    <>
      {renderHead}

      {/* Show error message if there is an error */}
      {!!errorMsg && (
        <Alert severity="error" sx={{ mb: 4 }}>
          {errorMsg}
        </Alert>
      )}

      {/* Show success message when reset is successful */}
      {verifyError && (
        <Alert severity="error" sx={{ mb: 4 }}>
          There was an issue verifying the code. Please try again.
        </Alert>
      )}

      <FormProvider methods={methods} onSubmit={onSubmit}>
        {renderForm}
      </FormProvider>
    </>
  );
}
