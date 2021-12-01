/** @format */

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import React from 'react';
import { Grid, Typography } from '@mui/material';
import { CardMembership, Event, QuestionAnswer } from '@mui/icons-material';
import { containerCSS } from '../../util';
const STATIC_IMAGE_PATH =
  'https://static.maaco.com/resources/front/resources/images/';

const ServicesFooter = () => {
  return (
    <Grid
      container
      component="section"
      css={css`position: relative;padding: 50px 0;`}
    >
      <Grid
        css={css`position: absolute;
                          overflow: hidden;
                          width: 100%;
                          height: 250px;
                          background-color: #ebebeb;
                          top: 0;
                    `}
      >
        <Grid
          css={css`background-image: url('${STATIC_IMAGE_PATH}polygon-components/polygon--left.svg');
                                    right: calc((100% - 1140px) / 2 + 1140px * .2);
                                    left: 0;
                                    position: absolute;
                                    top: 0;
                                    bottom: 0;
                                    background-size: 100% 100%;
                                    background-repeat: no-repeat;
                                    z-index: 5;
                          `}
        ></Grid>
        <Grid
          css={css`background-image: url('${STATIC_IMAGE_PATH}polygon-components/polygon--right.svg');
                                    left: calc((100% - 1140px) / 2 + 1140px * .2);
                                    right: 0;
                                    position: absolute;
                                    top: 0;
                                    bottom: 0;
                                    background-size: 100% 100%;
                                    background-repeat: no-repeat;
                                    z-index: 5;
                          `}
        ></Grid>
      </Grid>
      <Grid css={css(containerCSS)}>
        <Grid
          css={css`display: flex;
                                flex-wrap: wrap;
                                justify-content: space-around;
                                position: relative;
                                color: #595959;
                                z-index: 5;
                        `}
        >
          <Grid
            css={css`    
                                  width: 32%;
                                  padding: 15px;
                                  border: 1px solid #ebebeb;
                                  background-color: #fff;
                                  font-size: 1.4rem;
                                  text-align: center;
                                  color: inherit;
                                `}
          >
            <CardMembership css={css`font-size: 4rem !important;`} />
            <Typography
              component={'h3'}
              css={css`    
                                    font-size: 1.6rem;
                                    font-weight: bold;
                                    color: inherit;
                                    text-transform: uppercase;
                                `}
            >
              National Warranty
            </Typography>
            <Typography css={css`    font-size: 0.9rem;`}>
              Maaco offers a lifetime warranty on all structural repairs. This
              means that all materials Maaco uses in the repair of structural
              panels are warrantied for as long as you own the vehicle.
            </Typography>
            <Typography
              css={css`    
                                  border: 2px solid #006bb7;
                                  color: #214e70;background-color: #fff;
                                  display: inline-flex;
                                  align-items: center;
                                  justify-content: center;
                                  height: 35px;
                                  padding: 0 10px;
                                  outline: 0;
                                    font-size: 0.9rem;
                                    font-weight: bold;
                                    line-height: normal;
                                    text-align: center;
                                    text-transform: uppercase;
                                  `}
              aria-label="Learn More About National Warranty"
              component={'a'}
              href={'/warranty-policy/'}
            >
              Learn more
            </Typography>
          </Grid>
          <Grid
            css={css`    
                                  width: 32%;
                                  padding: 15px;
                                  border: 1px solid #ebebeb;
                                  background-color: #fff;
                                  font-size: 1.4rem;
                                  text-align: center;
                                  color: inherit;
                                `}
          >
            <Grid
              container
              css={css`flex-wrap: nowrap !important;`}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <QuestionAnswer css={css`font-size: 3rem !important;`} />
              <Typography
                component={'h3'}
                css={css`    
                                    font-size: 1.6rem;
                                    font-weight: bold;
                                    color: inherit;
                                    text-transform: uppercase;
                                    text-align: left;
                                    padding-left: 12px;
                                    `}
              >
                Rental car assistance
              </Typography>
            </Grid>
            <Typography css={css`    font-size: 0.9rem;`}>
              Can't be without a car? Contact your local Maaco center about our
              rental car assistance program. We will help you with your rental
              while your car is being worked on.
            </Typography>
            <img
              src={`${STATIC_IMAGE_PATH}services/service-assistance.jpg`}
              css={css`display: block;
                                    width: 100%;
                                    max-width: 100%;
                                    height: auto;
                                `}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default ServicesFooter;
