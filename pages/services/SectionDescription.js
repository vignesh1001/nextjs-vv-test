/** @format */

/** @jsxImportSource @emotion/react */
import { Typography } from '@mui/material';
import { css } from '@emotion/react';
import React from 'react';

const SectionDescription = ({ title, paddingTop = '12px' }) => (
  <Typography
    component="p"
    variant="body2"
    css={css`font-size: 0.9rem; z-index: 5;`}
    color="#595959"
    paddingTop={paddingTop}
    zIndex={5}
  >
    {title}
  </Typography>
);

export default SectionDescription;
