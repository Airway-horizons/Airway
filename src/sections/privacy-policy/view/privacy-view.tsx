import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function PrivacyView() {
  return (
    <Container maxWidth="lg">
      <Box padding={2}>
        <Typography variant="h4" gutterBottom>
          Privacy Policy
        </Typography>
        <Typography variant="body1" paragraph>
          At Airway Horizons, we are committed to safeguarding your privacy and ensuring that your
          personal information is handled securely and responsibly. This privacy policy outlines how
          we collect, use, and protect your information when you use our website and services,
          including travel arrangements for individuals and school groups.
        </Typography>

        <Typography variant="h5" gutterBottom>
          1. Information We Collect
        </Typography>
        <Typography variant="body1" paragraph>
          We may collect the following types of personal information when you interact with our
          website or services:
        </Typography>
        <Typography variant="body1" paragraph>
          <strong style={{ marginLeft: '20px' }}>• Personal Identification Information:</strong>{' '}
          Name, email address, phone number, postal address, etc.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong style={{ marginLeft: '20px' }}>• School Group Information:</strong> Student names,
          parent/guardian contact details, school name, and travel-related documents.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong style={{ marginLeft: '20px' }}>• Travel Information:</strong> Passport details,
          visa information, and other details necessary for booking trips.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong style={{ marginLeft: '20px' }}>• Payment Information:</strong> Credit/debit card
          details or bank information for processing payments.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong style={{ marginLeft: '20px' }}>• Communication Data:</strong> Emails, messages,
          and feedback you provide to us.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong style={{ marginLeft: '20px' }}>• Technical Information:</strong> IP address,
          browser type, device information, and usage data through cookies or similar technologies.
        </Typography>

        <Typography variant="h5" gutterBottom>
          2. How We Use Your Information
        </Typography>
        <Typography variant="body1" paragraph>
          The personal information we collect is used for:
        </Typography>
        <Typography variant="body1" paragraph>
          <strong style={{ marginLeft: '20px' }}>• Booking and Managing Travel Services:</strong> To
          process bookings, reservations, and related services for individuals, families, and school
          groups.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong style={{ marginLeft: '20px' }}>• Communication:</strong> To provide booking
          confirmations, updates, customer service, and responses to inquiries.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong style={{ marginLeft: '20px' }}>• Payment Processing:</strong> To securely process
          payments for travel services.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong style={{ marginLeft: '20px' }}>• Marketing:</strong> To send promotional offers
          and updates, subject to your consent.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong style={{ marginLeft: '20px' }}>• Improving Services:</strong> To analyze user
          behavior and preferences to enhance our website and services.
        </Typography>

        <Typography variant="h5" gutterBottom>
          3. Sharing Your Information
        </Typography>
        <Typography variant="body1" paragraph>
          We do not sell or share your personal information with third parties, except:
        </Typography>
        <Typography variant="body1" paragraph>
          <strong style={{ marginLeft: '20px' }}>• Service Providers:</strong> To trusted third
          parties who assist in processing travel bookings, payments, or other related services
          (e.g., airlines, hotels, insurance companies), including school group trip arrangements.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong style={{ marginLeft: '20px' }}>• Legal Compliance:</strong> When required by law,
          or to protect the rights, property, or safety of our company, customers, or others.
        </Typography>

        <Typography variant="h5" gutterBottom>
          4. Security of Your Information
        </Typography>
        <Typography variant="body1" paragraph>
          We are committed to protecting your personal data through secure practices and
          technologies. However, no transmission of information over the internet is entirely
          secure, and we cannot guarantee the absolute security of your data.
        </Typography>

        <Typography variant="h5" gutterBottom>
          5. Your Rights
        </Typography>
        <Typography variant="body1" paragraph>
          You have the right to:
        </Typography>
        <Typography variant="body1" paragraph>
          <strong style={{ marginLeft: '20px' }}>
            • Access, update, or delete your personal information.
          </strong>
        </Typography>
        <Typography variant="body1" paragraph>
          <strong style={{ marginLeft: '20px' }}>
            • Withdraw consent for marketing communications.
          </strong>
        </Typography>
        <Typography variant="body1" paragraph>
          <strong style={{ marginLeft: '20px' }}>
            • Request information about how your data is processed.
          </strong>
        </Typography>
        <Typography variant="body1" paragraph>
          <strong style={{ marginLeft: '20px' }}>
            • Lodge a complaint with a supervisory authority if you believe your data has been
            mishandled.
          </strong>
        </Typography>

        <Typography variant="h5" gutterBottom>
          6. Cookies
        </Typography>
        <Typography variant="body1" paragraph>
          Our website uses cookies to improve your browsing experience and gather usage statistics.
          You can control your cookie preferences through your browser settings, but this may limit
          the functionality of our website.
        </Typography>

        <Typography variant="h5" gutterBottom>
          7. Third-Party Links
        </Typography>
        <Typography variant="body1" paragraph>
          Our website may contain links to third-party websites. Please note that we are not
          responsible for the privacy practices or content of those sites. We encourage you to
          review their privacy policies before providing any personal information.
        </Typography>

        <Typography variant="h5" gutterBottom>
          8. Changes to This Privacy Policy
        </Typography>
        <Typography variant="body1" paragraph>
          We may update this privacy policy periodically. Any changes will be posted on this page,
          and the effective date will be updated accordingly. We recommend you review this policy
          regularly to stay informed about how we are protecting your data.
        </Typography>

        <Typography variant="h5" gutterBottom>
          9. Contact Us
        </Typography>
        <Typography variant="body1" paragraph>
          If you have any questions or concerns about this privacy policy, or if you would like to
          exercise your data protection rights, please contact us at: info@airwayhorizons.com
        </Typography>
      </Box>
    </Container>
  );
}
