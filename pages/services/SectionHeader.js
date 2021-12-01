import { Typography } from '@mui/material';
import React from 'react';

const SectionHeader = ({ title }) => (
  <Typography component="h3" variant="h3" color="#214e70" lineHeight={'1.9rem'}>
    {title}
  </Typography>
);

export default SectionHeader;
