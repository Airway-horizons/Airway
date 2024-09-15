import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// Define the Terms and Conditions sections
const termsSections = [
  {
    title: 'Vision',
    content:
      'To inspire and empower individuals of all ages to explore beyond the ordinary, fostering a deeper connection with the world through meaningful and transformative travel experiences.',
  },
  {
    title: 'Mission',
    content: `At Airway Horizons, our mission is to create immersive and tailored travel itineraries that enrich lives. We are committed to providing exceptional CAS programs, cultural explorations, and adventurous journeys that promote learning, growth, and a global perspective. By curating unique travel experiences, we aim to ignite a passion for discovery and foster a sense of adventure in every traveler."`,
  },
];

export default function VisionMissionView() {
  return (
    <Container maxWidth="xl">
      <Box margin="auto" padding={2}>
        {/* <Typography variant="h5" gutterBottom>
          Vision Mission
        </Typography> */}

        {termsSections.map((section, index) => (
          <Box key={index} marginBottom={8}>
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
      </Box>
    </Container>
  );
}
