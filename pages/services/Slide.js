/** @format */

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Grid, Typography } from '@mui/material';
import Link from 'next/link';
const Slide = ({
  imgSrc,
  title,
  title1,
  title2,
  title3,
  link,
  linkTitle,
  content,
  customTitle,
  sm = 4,
  isHideShadow = false,
  isHideFirstRow = false,
}) => {
  return (
    <Grid sm={sm} xs={12} css={css`padding: 0 15px 25px 15px;`}>
      <Link href={link || '#'} passHref>
        <Typography
          component={'a'}
          title={linkTitle}
          css={css`
            text-decoration: none; 
            color: #fff;
            &:hover{
              color: #dbdbdb;
            }`}
        >
          <Grid
            css={css`
                height: 200px;
                overflow: hidden;
                position: relative;
                padding: 20px 0 0 15px;
                background-repeat: no-repeat;
                background-size: cover;
                z-index: 1;
                background-color: #000;
                display: block;
        `}
          >
            {!isHideShadow && (
              <div
                css={css`position: absolute;
                    top: 0;
                    left: 0;
                    z-index: 5;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0,0,0,.54);
                `}
              ></div>
            )}
            <img
              src={imgSrc}
              alt={`Maaco: ${title}`}
              css={css`    
                color: #005999;
                font-size: 1.4rem;
                height: 100%;
                left: 0;
                max-width: 100%;
                position: absolute;
                object-fit: cover;
                top: 0;
                width: 100%;
            `}
            />
            {!isHideFirstRow && (
              <span css={css`margin: 10px 0;display: block;`}>&nbsp;</span>
            )}
            {customTitle ? customTitle : undefined}
            {title1 && (
              <Typography
                component={'h3'}
                variant={'h3'}
                css={css`
                        position: relative;
                        z-index: 10;
                        margin: 0;
                        font-size: 1.4rem;
                        line-height: 26px;
                        text-transform: uppercase;
                        text-shadow: 4px 3px 8px #000;
                        color: inherit;
                        font-weight: 400;
                        @media (min-width: 992px) and (max-width: 1199px){
                          font-size: 2.6rem;
                          line-height: 20px;
                        }
                    `}
              >
                {title1}
              </Typography>
            )}
            {title2 && (
              <Typography
                component={'h2'}
                variant={'h2'}
                css={css`
                        position: relative;
                        z-index: 10;
                        margin: 0;
                        font-size: 2.1rem;
                        line-height: 34px;
                        text-transform: uppercase;
                        text-shadow: 4px 3px 8px #000;
                        color: inherit;
                    `}
              >
                {title2}
              </Typography>
            )}
            {title3 && (
              <Grid>
                <Typography component={'h3'} variant={'h3'} css={css``}>
                  {title3}
                </Typography>
              </Grid>
            )}
            {link && (
              <Typography
                component={'span'}
                variant={'body'}
                title={title}
                aria-label={`Learn more about ${title}`}
                css={css`
                        position: absolute;
                        font-weight: 800;
                        bottom: 10px;
                        left: 10px;
                        z-index: 10;
                        font-size: 0.9rem;
                        text-transform: uppercase;
                        color: #fff;
                        text-decoration: none;
                        &:hover {
                          text-decoration: underline;
                        }
                  `}
              >
                Learn More
              </Typography>
            )}
          </Grid>
          <Grid css={css`padding-top: 10px;`}>
            <Typography
              component={'p'}
              variant={'body'}
              css={css`font-size: 0.9rem;color: #595959;`}
            >
              {content}
            </Typography>
          </Grid>
        </Typography>
      </Link>
    </Grid>
  );
};

export default Slide;
