/** @format */

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import React from 'react';
import Layout from '../../components/Layout';
import { containerCSS, STATIC_IMAGE_PATH } from '../../util';
import { Button, Grid, Typography } from '@mui/material';
import Slide from './Slide';
import ServicesFooter from './ServicesFooter';
import ScheduleAppointment from './ScheduleAppointment';

const TILES_LIST = [
  {
    imgSrc: `${STATIC_IMAGE_PATH}services/paint-service-tape.jpg`,
    title: 'Taped off vehicle',
    title1: 'Easy & Affordable',
    title2: ' Car Painting',
    link: '/services/auto-painting/',
    linkTitle: 'Easy & Affordable Car Painting',
    content: (
      <Typography fontSize={'0.9rem'}>
        With our easy and affordable paint packages, there's no better time to
        get your car looking like new again.
        <span
          css={css`display: block;
                              margin-top: 2rem;`}
        >
          <a
            css={css`color: #005275;`}
            href="/online-estimator/"
            aria-label="Schedule a free estimate today"
          >
            Schedule a free estimate today
          </a>
        </span>
      </Typography>
    ),
  },
  {
    imgSrc: `${STATIC_IMAGE_PATH}services/service-cosmetic-car-repairs.jpg`,
    title: 'Employee using grinder for repair',
    title1: 'Uh-oh. Better Get Maaco.',
    title2: 'Collision Repair',
    link: '/services/collision-repair/',
    linkTitle: 'Uh-oh. Better Get Maaco.Collision Repair',
    content: (
      <Typography>
        Maaco's expertly trained technicians can repair your dents, dings and
        accidental damage to get you back on the road quickly.
        <span
          css={css`display: block;
                              margin-top: 2rem;`}
        >
          We service over 500,000 cars annually - with all repairs backed by our
          great&nbsp;
          <a
            css={css`color: #005275;`}
            href="/online-estimator/"
            aria-label="Nationwide Guarantee"
          >
            Nationwide Guarantee
          </a>
        </span>
      </Typography>
    ),
  },
];
const TILES_LIST_2 = [
  {
    imgSrc: `${STATIC_IMAGE_PATH}services/repair-program-drm.jpg`,
    title: 'Employee sanding vehicle',
    title1: 'Insurance Claims/Direct',
    title2: 'Repair Program (DRP)',
    link: '/services/insurance-claim-drp/',
    linkTitle: 'Insurance Claims/Direct Repair Program (DRP)',
    content: (
      <Typography fontSize={'0.9rem'}>
        20 million drivers have trusted Maaco's easy and affordable body shops -
        from minor damage to large repairs.
        <span
          css={css`display: block;
                              margin-top: 2rem;`}
        >
          We work with all major insurance companies to schedule, inspect and
          repair your vehicle.
          <a
            css={css`color: #005275;`}
            href="/online-estimator/"
            aria-label="Get an estimate today"
          >
            Get an estimate today
          </a>
        </span>
      </Typography>
    ),
  },
  {
    imgSrc: `${STATIC_IMAGE_PATH}services/fleet-services.jpg`,
    title: 'Employee sanding vehicle',
    customTitle: (
      <>
        <Typography
          component={'h3'}
          variant={'h3'}
          css={css`
                        position: relative;
                        z-index: 10;
                        margin: 0;
                        font-size: 2.1rem;
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
          Fleet
          <Typography fontSize={'1.6rem'} display={'inline'}>
            {' '}
            &{' '}
          </Typography>
          <Typography fontSize={'1.4rem'} display={'block'}>
            Industrial Services
          </Typography>
        </Typography>
      </>
    ),
    link: '/services/fleet-industrial-services/',
    linkTitle: 'Fleet & Industrial Services',
    content: (
      <Typography fontSize={'0.9rem'}>
        Maaco's certified centers are here to offer national or local fleets
        everything they need to stay on the road. From rebranding to accident
        management, benefit from corporate oversight, flexible billing and
        repairs backed by a nationwide warranty.
      </Typography>
    ),
  },
];
const TILES_LIST_3 = [
  {
    imgSrc: `${STATIC_IMAGE_PATH}services/vehicle-damage.jpg`,
    title: 'Types of vehicle damage',
    title2: 'Types of vehicle damage',
    link: '/services/damage-repair/',
    linkTitle: 'Types of vehicle damage',
    content: (
      <Typography fontSize={'0.9rem'}>
        From a cracked bumper to rust damage, Maaco offers a range of vehicle
        damage repair services that you can trust. Learn about our offerings and
        contact a Maaco near you.
      </Typography>
    ),
    sm: 6,
  },
  {
    imgSrc: `${STATIC_IMAGE_PATH}services/paintless-dent-repair.jpg`,
    title: 'Paintless Dent Repair',
    title2: 'Paintless Dent Repair',
    link: '/services/paintless-dent-repair/',
    linkTitle: 'Paintless Dent Repair',
    content: (
      <Typography fontSize={'0.9rem'}>
        If you have minor dings or dents on your car, paintless dent repair
        (PDR) may be a great affordable option to consider for repairs. This
        method uses special tools that pull the dents out of the surface of the
        vehicle without damaging the overall paint. Paintless dent repair is
        available at participating locations only. Please contact your local
        store for more details.
      </Typography>
    ),
    sm: 6,
  },
  {
    imgSrc: `${STATIC_IMAGE_PATH}services/headlight-restoration.png`,
    title: 'Headlight Restoration',
    title2: 'Headlight Restoration',
    link: '/services/headlight-restoration/',
    linkTitle: 'Headlight Restoration',
    content: (
      <Typography fontSize={'0.9rem'}>
        Driving at night or in poor weather can be dangerous with dim or cracked
        headlights. Learn more about how your local Maaco can restore your
        headlights to keep you safe and on the road.
      </Typography>
    ),
    sm: 6,
  },
  {
    imgSrc: `${STATIC_IMAGE_PATH}services/services-lease-turn-in.jpg`,
    title: 'Lease Turn-In',
    title1: <div>&nbsp;</div>,
    title2: 'Lease Turn-In',
    link: '',
    linkTitle: 'Lease Turn-In',
    content: (
      <Typography fontSize={'0.9rem'}>
        No one likes surprises during their lease-turn in. Stop by one of our
        local Maaco shops and let us help you maximize the value of your leased
        vehicle with easy and affordable repairs.
      </Typography>
    ),
    sm: 6,
  },
  {
    imgSrc: `${STATIC_IMAGE_PATH}services/fresh-coat.jpg`,
    title: 'Spray Bed Lining',
    title2: 'Spray Bed Lining',
    link: '',
    linkTitle: 'Spray Bed Lining',
    content: (
      <Typography fontSize={'0.9rem'}>
        Whether it's a work truck or your family car, the bed of your truck
        takes a beating. Maaco can help protect it by maintaining the bed liner
        creating a consistent, durable surface for your next roadtrip or
        project. Spray bed liners are available at participating locations only.
        Please contact your local store for more details.
      </Typography>
    ),
    sm: 6,
  },
  {
    imgSrc: `${STATIC_IMAGE_PATH}services/services-truck-oversized.jpg`,
    title: 'Truck & Oversized Equipment',
    title2: 'Truck & Oversized Equipment',
    link: '',
    linkTitle: 'Truck & Oversized Equipment',
    content: (
      <Typography fontSize={'0.9rem'}>
        We paint anything, even oversized equipment and trucks. Whether it's for
        work or pleasure, we can paint your tractors, semis or trailers to bring
        them back to life and protect them from the elements. Contact your local
        store to see if we can give your truck a fresh coat of paint.
      </Typography>
    ),
    sm: 6,
  },
];

const Services = () => {
  return (
    <Layout>
      <Grid container>
        <Grid
          css={css`position: relative;background-color: #016ab4;padding: 4rem 0;height: 345px;width: 100%;color: #FFF;`}
        >
          <Grid
            css={css`top: 0;left: 0;border-color: #024e84 transparent transparent;border-width: 235px 235px 0 0;position: absolute;width: 0;height: 0;border-style: solid;`}
          ></Grid>
          <Grid
            css={css`bottom: 0;right: 0;border-color: transparent transparent #024e84;border-width: 0 0 155px 270px;position: absolute;width: 0;height: 0;border-style: solid;`}
          ></Grid>
          <Grid css={css(containerCSS)}>
            <Grid container css={css`flex-wrap: nowrap !important;`}>
              <Grid
                item
                sm={4}
                css={css`margin-top: 2rem!important;max-width: 45rem;z-index:2;`}
              >
                <Grid
                  css={css`&>span{display: block;font-size: 3.8rem;line-height: 3.8rem;}`}
                >
                  <Typography css={css`font-weight: bold;`} component={'span'}>
                    Contactless
                  </Typography>
                  <Typography component={'span'}>procedure</Typography>
                </Grid>
                <Typography>It's as easy as / Book.Quote.Fix.</Typography>
                <Grid>
                  <Button
                    css={css`background-color: #af0e11;width: 23.5rem;border-top: none;margin-top: 10px;padding: 1.8rem 0;`}
                  >
                    <Typography
                      component={'span'}
                      css={css`font-style: italic;font-weight: bold;font-size: 1.4rem;color: #FFF;margin-top: 1rem;`}
                    >
                      Free Online Estimate
                    </Typography>
                  </Button>
                </Grid>
              </Grid>
              <Grid
                item
                sm={4}
                className="text-center hidden-xs"
                css={css`max-width: 30rem !important;margin: 0 2rem 0 3rem !important;z-index:2;@media (min-width: 600px){margin: 0 !important;}`}
              >
                <Grid container>
                  {[
                    {
                      icon: `icon/pin-icon.png`,
                      title: 'Visit Maaco.Com for your Nearest Location',
                      width: 5.2,
                    },
                    {
                      icon: 'icon/book-icon.png',
                      title: 'Book Your Appointment',
                      width: 3.3,
                    },
                    {
                      icon: 'icon/phone-icon.png',
                      title: 'Arrive at Maaco & Call the Shop',
                      width: 4,
                    },
                    {
                      icon: 'icon/car-icon.png',
                      title: "Stay in your car & We'll handle the rest!",
                      width: 5.5,
                    },
                  ].map(({ icon, title, width }) => (
                    <Grid
                      item
                      css={css`margin-bottom: 1rem !important;display:flex;`}
                    >
                      <span
                        css={css`display: inline-block;background: url('${STATIC_IMAGE_PATH}${icon}') no-repeat 0 0;height: 2.8rem;width: ${width}rem;`}
                      ></span>
                      <Typography
                        component={'span'}
                        css={css`font-weight:bold;font-size: 1.1rem;line-height: 1.1rem;padding-left: 0.2rem;text-transform: uppercase;`}
                      >
                        {title}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid
                item
                sm={4}
                css={css`margin-top: 3rem !important;max-width: 30rem !important;z-index:2;`}
                className="text-center hidden-xs hidden-sm"
              >
                <Typography
                  variant={'h6'}
                  css={css`text-transform: uppercase;font-size: 1.8rem;line-height: 1.9rem;font-weight: bold;text-align: center;`}
                >
                  We look Forward to Serving You and Keeping You safe!
                </Typography>
                <Typography component={'span'} variant={'body1'}>
                  Unsure of the cost? Our Online estimator tool can help!
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid css={css(containerCSS)}>
        <Grid container css={css`padding-bottom: 25px;`}>
          <Typography component="h1" variant="h1" color="#214e70">
            MAACO PAINT AND BODY SERVICES
          </Typography>
          <Typography component="p" variant="body1" color="#595959">
            Maaco is taking steps to protect the health and well-being of our
            employees and customers during COVID-19 and beyond. Maaco’s fast and
            efficient contactless process has been implemented with our
            customers and employees health and wellness in mind.
          </Typography>
        </Grid>
        <Grid container spacing={2}>
          {TILES_LIST.map((i) => (
            <Slide
              imgSrc={i.imgSrc}
              title={i.title}
              title1={i.title1}
              title2={i.title2}
              link={i.link}
              linkTitle={i.linkTitle}
              content={i.content}
            />
          ))}
          <Grid sm={4}>
            <ScheduleAppointment />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          {TILES_LIST_2.map((i) => (
            <Slide
              imgSrc={i.imgSrc}
              title={i.title}
              title1={i.title1}
              title2={i.title2}
              link={i.link}
              linkTitle={i.linkTitle}
              content={i.content}
              customTitle={i.customTitle}
            />
          ))}
        </Grid>
        <Grid container>
          <Typography
            component={'blockquote'}
            css={css`   
                        margin-bottom: 25px;
                        padding: 0 10%;
                        border: 0;
                        color: #000;
                        font-size: 1.4rem;
                        font-style: italic;
                    `}
          >
            “Maaco worked with the insurance company to repair my car faster
            than expected. Color and parts matched and fit nicely with the OEM
            look. They even helped me get a last minute car rental. Excellent
            customer service.”
            <div
              css={css`
                            position: relative;
                            padding-left: 50%;
                            padding-top: 15px;
                            font-size: 1.2rem;`}
            >
              <span css={css`display: block;font-style: normal;`}>
                — Kemchath T.
              </span>
            </div>
          </Typography>
        </Grid>
        <Grid container spacing={2}>
          <Grid
            container
            css={css`    
                        margin: 0 auto;width: 75% !important;&:before{content: " ";display: table;}`}
          >
            {TILES_LIST_3.map((i) => (
              <Slide
                imgSrc={i.imgSrc}
                title={i.title}
                title1={i.title1}
                title2={i.title2}
                link={i.link}
                linkTitle={i.linkTitle}
                content={i.content}
                sm={i.sm}
              />
            ))}
          </Grid>
        </Grid>
        <ServicesFooter />
      </Grid>
    </Layout>
  );
};

export default Services;
