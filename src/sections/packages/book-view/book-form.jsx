import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextField, Select, MenuItem, Button, Grid, FormControl, InputLabel, FormHelperText, Box } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import emailjs from '@emailjs/browser';
import { useSnackbar } from 'src/components/snackbar';
import { tourData } from 'src/sections/home/view/helper';

const schema = yup.object().shape({
  fullName: yup.string().required('Full Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup
    .string()
    .matches(/^[0-9]+$/, 'Phone number must be numeric')
    .required('Phone number is required'),
  adultCount: yup.number().min(0).required('Adult count is required'),
  ladiesCount: yup.number().min(0).required('Ladies count is required'),
  kidsCount: yup.number().min(0).required('Kids count is required'),
  destination: yup.string().required('Destination is required'),
  dateFrom: yup.date().required('Start date is required'),
  dateTo: yup.date().required('End date is required').min(yup.ref('dateFrom'), 'End date must be later than start date'),
});

const destinations = tourData?.map((el) => {
  return {
    value: el.name,
    label: el.name
  }
})

const BookingForm = ({ handleClose, name }) => {

  const { enqueueSnackbar } = useSnackbar();


  const { control, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      adultCount: '',
      ladiesCount: '',
      kidsCount: '',
      destination: name ?? "",
      dateFrom: '',
      dateTo: '',
    },
    resolver: yupResolver(schema),
  });


  const onSubmit = (data) => {

    emailjs.send('service_ux6b5f3', 'template_5bjk083', {
      from_name: "airway booking",
      to_name: "booking team",
      full_name: data.fullName,
      email: data.email,
      phone: data.phone,
      adult_count: data.adultCount,
      ladies_count: data.ladiesCount,
      kids_count: data.kidsCount,
      destination: data.destination,
      date_from: data.dateFrom.toISOString(),
      date_to: data.dateTo.toISOString(),
      reply_to: data.email,
    }, "mWncohf02USVfhaAd")
      .then((response) => {
        // console.log('SUCCESS!', response.status, response.text);
        enqueueSnackbar('Mail send success!', {
          anchorOrigin: { vertical: 'top', horizontal: 'center' },
        });

        reset(); // Reset the form after submission
        handleClose()

      }, (err) => {
        console.log('FAILED...', err);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Controller
            name="fullName"
            control={control}
            render={({ field }) => (
              <TextField {...field} label="Full Name" fullWidth error={!!errors.fullName} helperText={errors.fullName?.message} />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField {...field} label="Email" type="email" fullWidth error={!!errors.email} helperText={errors.email?.message} />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <TextField {...field} label="Phone" fullWidth error={!!errors.phone} helperText={errors.phone?.message} />
            )}
          />
        </Grid>
        <Grid item xs={4}>
          <Controller
            name="adultCount"
            control={control}
            render={({ field }) => (
              <TextField {...field} label="Adults" type="number" fullWidth error={!!errors.adultCount} helperText={errors.adultCount?.message} />
            )}
          />
        </Grid>
        <Grid item xs={4}>
          <Controller
            name="ladiesCount"
            control={control}
            render={({ field }) => (
              <TextField {...field} label="Ladies" type="number" fullWidth error={!!errors.ladiesCount} helperText={errors.ladiesCount?.message} />
            )}
          />
        </Grid>
        <Grid item xs={4}>
          <Controller
            name="kidsCount"
            control={control}
            render={({ field }) => (
              <TextField {...field} label="Kids" type="number" fullWidth error={!!errors.kidsCount} helperText={errors.kidsCount?.message} />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth error={!!errors.destination}>
            <InputLabel>Destination</InputLabel>
            <Controller
              name="destination"
              control={control}
              render={({ field }) => (
                <Select {...field} label="Destination">
                  {destinations.map(dest => (
                    <MenuItem key={dest.value} value={dest.value}>
                      {dest.label}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
            {errors.destination && <FormHelperText>{errors.destination.message}</FormHelperText>}

          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth error={!!errors.dateFrom}>
            <Controller
              name="dateFrom"
              control={control}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  label="Date From"
                  renderInput={(params) => (
                    <TextField {...params} fullWidth error={!!errors.dateFrom}
                      helperText={errors.dateFrom?.message} />
                  )}
                />
              )}
            />
            {errors.dateFrom && <FormHelperText>{errors.dateFrom.message}</FormHelperText>}
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth error={!!errors.dateTo}>
            <Controller
              name="dateTo"
              control={control}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  label="Date To"
                  renderInput={(params) => (
                    <TextField {...params} fullWidth error={!!errors.dateTo}
                      helperText={errors.dateTo?.message} />
                  )}
                />
              )}
            />
            {errors.dateTo && <FormHelperText>{errors.dateTo.message}</FormHelperText>}
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Button variant="outlined" onClick={() => handleClose()}>
              Cancel
            </Button>

            <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </Button>
          </Box>

        </Grid>
      </Grid>
    </form>
  );
};

export default BookingForm;
