import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const faq = [
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1',
    value: 'panel1',
    heading: '1. What services does Airway Horizons offer?',
    detail:
      'Airway Horizons provides a wide range of travel services, including cultural and study programs for schools, holiday packages, adventure travel, and customized itineraries for individuals, families, and school groups.',
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2',
    value: 'panel2',
    heading: '2. How do I book a trip with Airway Horizons?',
    detail:
      'You can book a trip through our website, by contacting us via email or phone, or by visiting one of our offices. Once you share your travel requirements, our team will help you plan and customize the perfect itinerary.',
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3',
    value: 'panel3',
    heading: '3. Do you offer tailored itineraries?',
    detail:
      'Yes, we specialize in creating personalized itineraries based on your preferences. Whether you&#39;re looking for a family holiday, an adventure tour, or a school group trip, we will ensure the experience is tailored to meet your needs and expectations.',
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b4',
    value: 'panel4',
    heading: '4. What types of school group trips do you organize?',
    detail:
      'Airway Horizons arranges educational and cultural immersion programs, adventure trips, and study tours for school groups. Our trips are designed to offer both learning experiences and fun, all while ensuring the safety and well-being of the students.',
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5',
    value: 'panel5',
    heading: '5. What is your Zero Tolerance for Abuse Policy?',
    detail:
      'We have a strict zero-tolerance policy for any form of abuse, harassment, or misconduct. This policy applies to all travelers, staff, and service providers, ensuring a safe, respectful, and enjoyable experience for everyone involved.',
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6',
    value: 'panel6',
    heading: '6. How does Airway Horizons ensure the safety of school groups during trips?',
    detail:
      'We take the safety of school groups very seriously by providing experienced chaperones, maintaining strict behavior guidelines, and coordinating with trusted service providers. Our Zero Tolerance for Abuse policy further ensures a secure and respectful environment for students.',
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7',
    value: 'panel7',
    heading: '7. What should I do if I need to make changes to my booking?',
    detail:
      'If you need to make changes to your booking, simply contact our customer service team. We will assist you with modifying your itinerary, accommodations, or any other aspect of your trip, subject to availability and any applicable charges.',
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8',
    value: 'panel8',
    heading: '8. What payment methods do you accept?',
    detail:
      'We accept a variety of payment methods, including credit/debit cards, bank transfers, and online payment gateways. Once your booking is confirmed, we will provide you with the available payment options.',
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2h7b8',
    value: 'panel9',
    heading: '9. Do you provide support during the trip?',
    detail:
      'Yes, Airway Horizons offers 24/7 support throughout your trip. Whether it&#39;s an emergency or a simple query, our team is always available to ensure your travel experience goes smoothly.',
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2h7b8',
    value: 'panel10',
    heading: '10. What if I have a complaint or issue during my trip?',
    detail:
      'If you encounter any issues during your trip, please contact us immediately. We take all complaints seriously and will work to resolve any problems as quickly as possible. Additionally, our Zero Tolerance for Abuse policy ensures that any form of misconduct is addressed promptly.',
  },
];

export default function FaqsList() {
  return (
    <div>
      {faq?.map((accordion) => (
        <Accordion key={accordion.id}>
          <AccordionSummary expandIcon={<Iconify icon="eva:arrow-ios-downward-fill" />}>
            <Typography variant="subtitle1">{accordion.heading}</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography>{accordion.detail}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
