/** @format */

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Grid, Typography } from '@mui/material';
import { containerCSS, STATIC_IMAGE_PATH } from '../../util';

const Certifications = () => {
  const certificateImg = (imgSrc) => (
    <Grid
      css={css`background-image: url('${imgSrc}'); height: 100px;margin-bottom: 15px;background-repeat: no-repeat;background-position: 50%;`}
    />
  );

  const certificateTitle = (title) => (
    <Grid
      css={css`display: block;font-size: 14px;margin-bottom: 1rem;text-transform: uppercase;text-align: center;color: #595959;font-weight: bold;`}
    >
      {title}
    </Grid>
  );

  const certificateDescription = (description) => (
    <Grid css={css`font-size: 0.9rem;color: #595959;line-height: 1.1`}>
      {description}
    </Grid>
  );

  return (
    <Grid css={css(containerCSS)}>
      <Grid container>
        <Typography
          css={css`font-weight: bold;font-size: 1.5rem;display: flex;justify-content: center;color:#214e70;width: 100%;text-align: center;text-transform: uppercase;`}
        >
          Certifications
        </Typography>
      </Grid>
      <Grid container justifyContent={'center'}>
        <Grid
          item
          sm={4}
          css={css`padding: 0 15px;text-align: center;margin-bottom: 15px;`}
        >
          {certificateImg(
            `${STATIC_IMAGE_PATH}certifications/maaco-certified.png`
          )}
          {certificateTitle('Maaco Certified')}
          {certificateDescription(
            'Our Maaco Certified centers are the "best of the best." These centers are distinguished for their quality of work in both auto painting and body repairs. Certified centers have to pass a rigorous certification process annually that is a comprehensive review of their business and repair services.'
          )}
        </Grid>
        <Grid
          item
          sm={4}
          css={css`padding: 0 15px;text-align: center;margin-bottom: 15px;`}
        >
          {certificateImg(`${STATIC_IMAGE_PATH}certifications/i-car-gold.png`)}
          {certificateTitle('I-CAR Gold Certified')}
          {certificateDescription(
            'I-CAR Gold Class Certification is an independent third-party certification process that is quite literally the gold standard for collision repair. I-CAR Gold centers are extensively trained in the latest tools and technologies of the trade.'
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Certifications;
