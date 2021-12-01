/** @format */

/** @jsxImportSource @emotion/react */
import { Typography } from '@mui/material';
import { css } from '@emotion/react';
import React from 'react';

const SectionTitle = ({ title }) => (
  <Typography
    component="h4"
    variant="h4"
    css={css`font-size: 1.4rem; z-index: 5;line-height: 1.4;margin-top: 0;`}
    color="#595959"
    zIndex={5}
  >
    {title}
  </Typography>
);

export default SectionTitle;
