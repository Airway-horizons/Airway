import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

// Define the Terms and Conditions sections
const termsSections = [
  {
    title: '1. General Assistance',
    content:
      'You are free to avail the assistance of our Tour Advisors 24x7 during the course of the tour.',
  },
  {
    title: '2. Payment Terms',
    content: `Customers are required to pay 50% of the total booking amount in advance and the remaining 50% payable upon arrival.
    All bookings are confirmed only after receiving advance payment. Payment can be made online through bank transaction or e-wallets.
    In the case of uncertain events like natural calamities, government-imposed lockdown etc., where tour cannot be operated, your booking amount will be securely on hold. In such case, you can either apply for a refund or you can redeem later it for another similar package at a reasonable and convenient future. Interest shall not be applicable on such holdings.
    If you cancel the booking after confirmation, you will be refunded the advance amount after deducting the cancellation charges and service costs incurred by Airway Horizon LLP. Cancellation charges are strictly subjected to hotel policies and service costs may vary according to the package chose by you.`,
  },
  {
    title: '3. Booking and Cancellation Policies',
    content: `You have to make the advance payment promptly after finalizing your desired itinerary to ensure that the selected accommodations are not sold out.
    In the event of unavailability in the listed accommodations, an alternative arrangement of a similar standard will be made.
    No refunds will be provided for unused nights or early check-outs. Exceptions may be made in the case of emergency medical conditions, subject to hotel policy.
    All cancellations and refund requests must comply with our Cancellation Policy, which can be referred in Clause 11.`,
  },
  {
    title: '4. Transportation and Sightseeing',
    content: `All visitors must adhere to local transportation regulations, including hiring local taxis or other transport methods as specified by local tourism advisories.
    Airway Horizons is not responsible for changes in transportation availability or additional costs incurred due to unionized transportation services.
    Vehicle service is provided as per the itinerary, with operational hours generally from 08:00 AM to 07:30 PM. Sightseeing may be subject to operational conditions, including weather, and some activities may require direct payment by the customer.`,
  },
  {
    title: '5. Accommodation Policies',
    content: `Check-in and check-out times at hotels are governed by concerned hotel policies. Early check-in or late check-out may be available, subject to availability and potential additional charges.
    The price of the package does not include personal expenses such as laundry, telephone calls, room service, alcoholic beverages, mini bar charges, tips, portage, camera fees or any other facilities availed contrary to the terms of the package.
    The inclusion of extra beds in rooms are strictly subject to hotel policies. FYI, an extra bed (if available) may be in the form of a sofa cum bed, an additional mattress, or a removable foldable bed.
    To accommodate four persons comfortably, we strongly recommend booking two separate rooms or selecting a family room with twin beds, subject to availability.`,
  },
  {
    title: '6. Itinerary Modifications',
    content: `We reserve the right to modify the itinerary at any point due to factors such as Force Majeure events, strikes, festivals, weather conditions, traffic issues, overbooking of hotels/flights, cancellations/re-routing of flights, or entry restrictions at places of visit.
    While we strive to make suitable alternate arrangements, Airway Horizons will not be held liable for any refunds or compensation claims arising from such changes.`,
  },
  {
    title: '7. Liability and Responsibility',
    content: `Airway Horizons shall not be held responsible for any liabilities, damages, or costs arising from any negligence, misconduct, or violation of local laws by the client.
    Customers are required to verify and comply with travel regulations and eligibility for travel as per the regulatory guidelines of the destination country or state.`,
  },
  {
    title: '8. Specific Conditions',
    content: `In the case of special events or dates (e.g., 24th December, 31st December, 14th February), mandatory Gala Dinner charges may apply, payable directly at the hotel.
    No responsibility is taken for changes in country or state travel guidelines, which may occur without prior notice.`,
  },
  {
    title: '9. Insurance and Documentation',
    content: `It is strongly recommended that clients secure appropriate travel insurance to cover unforeseen events, including cancellations, medical emergencies, and other contingencies.
    The customer is responsible for ensuring that all travel documentation, including visas, passports, and identification, is up-to-date and in compliance with the entry requirements of the destination.`,
  },
  {
    title: '10. Miscellaneous',
    content: `Any disputes arising out of or in connection with these terms and conditions shall be governed by the laws of the jurisdiction in which Space Airway Horizons LLP is registered.
    By confirming your booking with Space Airway Horizons LLP, you acknowledge that you have read, understood, and agree to abide by the above terms and conditions.
    You understand and accept that Space Airway Horizon LLP acts solely as a travel coordinator. We assign Service Providers, including hotels, caterers, restaurants, drivers, and other travel assistants, to render services. There is no agent-principal, employer-employee, partnership, or vicarious liability relationship between Space Airway Horizon LLP and the Service Providers. We strive to assign the best service providers for your pleasure. However, Space Airway Horizon LLP is not responsible for any deficiencies in service, exploitation, impertinency, or inconveniences caused by the Service Providers.

    This document should cover a wide range of scenarios while limiting liability and ensuring clarity for both the client and the company. It's advisable to have your advocate review it for any jurisdiction-specific requirements.`,
  },
  {
    title: '11. Cancellation Policy',
    content: [
      {
        subtitle: '11.1. Cancellation by the Client',
        details: `Cancellation Prior to 30 Days Before Departure: If you cancel your booking more than 30 days prior to the scheduled departure date, a cancellation fee of 10% of the total booking amount will be charged.
        Cancellation Between 15 to 30 Days Before Departure: For cancellations made between 15 to 30 days before departure, a cancellation fee of 25% of the total booking amount will apply.
        
        Cancellation Between 7 to 14 Days Before Departure: If you cancel your booking 7 to 14 days before departure, a cancellation fee of 50% of the total booking amount will be charged.
        
        Cancellation Within 7 Days of Departure: For cancellations made within 7 days of departure, 75% of the total booking amount will be charged as a cancellation fee.
        
        Cancellation Within 48 Hours of Departure: If you cancel your booking within 48 hours of departure or fail to show up, 100% of the total booking amount will be charged as a cancellation fee.`,
      },
      {
        subtitle: '11.2. Refund Process',
        details: `Refunds for cancellations will be processed within 15 business days from the date of cancellation request, after deducting applicable cancellation fees and any non-refundable components such as hotel bookings, airline tickets, or other service charges.`,
      },
      {
        subtitle: '11.3. Non-Refundable Services',
        details: `Certain services such as flight tickets, hotel reservations, and other special arrangements may be non-refundable or subject to specific cancellation terms. In such cases, refund will be initiated only after deducting such amount.`,
      },
      {
        subtitle: '11.4. Amendments to Booking',
        details: `Any changes or amendments to the confirmed booking, such as rescheduling or modifying the itinerary, are subject to availability and may incur additional charges.
        If such changes or amendments results in cancellation of services, this cancellation policy will apply.`,
      },
      {
        subtitle: '11.5. Cancellation by Space Airway Horizons LLP',
        details: `In rare cases where Space Airway Horizons LLP may have to cancel a tour due to unforeseen circumstances (e.g., natural disasters, government regulations, etc.), you will be offered a full refund of the booking amount or an alternative tour option of equivalent value. We are not responsible for any additional costs or expenses incurred by the client as a result of the cancellation.`,
      },
      {
        subtitle: '11.6. Third-Party Services',
        details: `Cancellation of third-party services (e.g., flights, cruises, rail services) is subject to the terms and conditions of the respective service providers. Any cancellation fees levied by these providers will be passed on to the client.`,
      },
      {
        subtitle: '11.7. Force Majeure',
        details: `In the event of Force Majeure (unforeseeable circumstances such as natural disasters, strikes, pandemics, etc.), Space Airway Horizons LLP will not be liable for any cancellation charges, and the amount paid by the client may be retained as credit for future use, subject to terms.`,
      },
    ],
  },
];

export default function ToleranceView() {
  const [agreed, setAgreed] = useState(() => {
    // Initialize state from localStorage
    return localStorage.getItem('termsAccepted') === 'true';
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [check, setCheck] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheck(event.target.checked);
  };

  const handleSave = () => {
    if (check) {
      localStorage.setItem('termsAccepted', 'true');
      setOpenSnackbar(true);
      setAgreed(true);
    }
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container maxWidth="lg">
      <Box margin="auto" padding={2}>
        <Typography variant="h5" gutterBottom>
          Terms and Conditions
        </Typography>

        {termsSections.map((section, index) => (
          <Box key={index} marginBottom={2}>
            <Typography variant="h6" gutterBottom>
              {section.title}
            </Typography>
            {Array.isArray(section.content) ? (
              section.content.map((subSection, subIndex) => (
                <Box key={subIndex} marginBottom={2}>
                  <Typography variant="subtitle1" gutterBottom>
                    {subSection.subtitle}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {subSection.details}
                  </Typography>
                </Box>
              ))
            ) : (
              <Typography variant="body1" paragraph>
                {section.content}
              </Typography>
            )}
          </Box>
        ))}

        {!agreed ? (
          <Box sx={{ my: 6 }}>
            <FormControlLabel
              control={<Checkbox checked={check} onChange={handleCheckboxChange} />}
              label="I agree with these Terms and Conditions"
            />

            <Button variant="contained" color="primary" onClick={handleSave} disabled={!check}>
              Save
            </Button>
          </Box>
        ) : (
          <Alert severity="success" sx={{ my: 6 }}>
            You have successfully agreed to the terms and conditions.
          </Alert>
        )}

        <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleSnackbarClose}>
          <Alert onClose={handleSnackbarClose} severity="success">
            You have successfully agreed to the terms and conditions.
          </Alert>
        </Snackbar>
      </Box>
    </Container>
  );
}
