import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextField, Button, Stack, Typography } from '@mui/material';
import emailjs from '@emailjs/browser';
import { useSnackbar } from 'src/components/snackbar';
import { useState } from 'react';
import { useRouter } from 'src/routes/hooks';
import { paths } from 'src/routes/paths';

// Validation schema
const schema = yup.object().shape({
  fullName: yup.string().required('Full Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  message: yup.string().required('Message is required'),
  phone: yup
  .string()
  .matches(/^[0-9]+$/, 'Phone number must be numeric')
  .required('Phone number is required'),
});

const ContactForm = () => {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const [submit, setSubmit] = useState(false);

  const { control, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data:any) => {
    setSubmit(true);
    
    emailjs.send('service_ux6b5f3', 'template_w0mctsq', {
      from_name: data.fullName,
      to_name: 'contact team', // Replace with your team's name
      email: data.email,
      message: data.message,
      phone: data.phone,
    }, "mWncohf02USVfhaAd") // Replace with your EmailJS user ID
      .then((response:any) => {
        enqueueSnackbar('Mail sent successfully!', {
          anchorOrigin: { vertical: 'top', horizontal: 'center' },
        });

        reset(); // Reset the form after submission

        router.push(paths.packages);
      }, (err:any) => {
        console.log('FAILED...', err);
        enqueueSnackbar('Mail send failed!', {
          variant: 'error',
          anchorOrigin: { vertical: 'top', horizontal: 'center' },
        });
      })
      .finally(() => {
        setSubmit(false);
      });
  };

  return (
    <Stack spacing={5}>
      <Typography variant="h3">
        Feel free to contact us. <br />
        We&apos;ll be glad to hear from you, nomad.
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <Controller
            name="fullName"
            control={control}
            render={({ field }) => (
              <TextField {...field} label="Full Name" fullWidth error={!!errors.fullName} helperText={errors.fullName?.message} />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField {...field} label="Email" type="email" fullWidth error={!!errors.email} helperText={errors.email?.message} />
            )}
          />
            <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <TextField {...field} label="Phone Number" fullWidth error={!!errors.phone} helperText={errors.phone?.message} />
            )}
          />
          <Controller
            name="message"
            control={control}
            render={({ field }) => (
              <TextField {...field} label="Enter your message here." multiline rows={4} fullWidth error={!!errors.message} helperText={errors.message?.message} />
            )}
          />
        </Stack>
        <Button type="submit" variant="contained" color="primary" disabled={submit || isSubmitting} sx={{ mt: 2 }}>
          {submit || isSubmitting ? 'Submitting...' : 'Submit Now'}
        </Button>
      </form>
    </Stack>
  );
};

export default ContactForm;
