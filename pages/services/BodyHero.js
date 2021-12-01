/** @format */

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Grid } from '@mui/material';
import { containerCSS } from '../../util';

const BodyHero = ({ leftSideContent, rightSideContent }) => (
  <Grid
    css={css`position: relative;
    overflow: hidden;
    height: 320px;
    background-color: #ebebeb;`}
  >
    <Grid
      css={css(containerCSS)}
      container
      height={'100%;'}
      padding={'0px !important'}
    >
      <Grid sm={7} position={'relative'}>
        <Grid display={'flex'} justifyContent={'center'} alignItems={'center'}>
          {leftSideContent}
        </Grid>
      </Grid>
      <Grid sm={5} position={'relative'} css={css`width: 100%;height: 100%;`}>
        {rightSideContent}
      </Grid>
    </Grid>
  </Grid>
);

export default BodyHero;
