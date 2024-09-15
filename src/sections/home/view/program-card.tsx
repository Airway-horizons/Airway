import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { m } from 'framer-motion'; // Import `m` instead of `motion`
import { styled } from '@mui/material/styles';

// Styled component for the card
const StyledCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  borderRadius: '50%',
  overflow: 'hidden',
  width: 200,
  height: 200,
  boxShadow: theme.shadows[5],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

// Styled component for the image
const CardImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

// Styled component for the title
const TitleOverlay = styled(CardContent)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  background: 'rgba(0, 0, 0, 0.5)',
  color: 'white',
  padding: theme.spacing(1),
  height: '100%',
  textAlign: 'center',
  alignContent: 'center',
}));

const ProgramCard = ({ coverUrl, title }: any) => (
  <m.div
    whileHover={{ scale: 1.05 }}
    style={{ borderRadius: '50%', marginTop: '20px', display: 'flex', justifyContent: 'center' }}
  >
    <StyledCard>
      <CardImage src={coverUrl} alt={title} />
      <TitleOverlay>
        <Typography variant="subtitle1">{title}</Typography>
      </TitleOverlay>
    </StyledCard>
  </m.div>
);

export default ProgramCard;
