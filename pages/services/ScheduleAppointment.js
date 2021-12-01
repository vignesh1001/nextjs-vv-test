/** @format */

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import React from 'react';
import { Grid, Typography } from '@mui/material';
import SearchLocation from '../../components/SearchLocation';
import { Event } from '@mui/icons-material';

const ScheduleAppointment = () => {
  return (
    <Grid
      css={css`padding: 20px;
                            background-color: #b30f11;
                            font-size: 1.4rem;
                            text-align: center;
                            & .MuiOutlinedInput-adornedEnd {
                              background-color: #fff;
                            }
                          `}
    >
      <Event
        css={css`
                                margin-top: -6px;
                                margin-right: 6px;
                                color: #fff;
                                font-size: 40px !important;
                            `}
      />
      <Typography
        css={css`margin: 10px 0 20px;
                                color: #fff;
                                text-transform: uppercase;
                                font-size: 1.8rem;
                                font-weight: bold;
                                line-height: 30px;`}
      >
        Schedule an Appointment
      </Typography>
      <Typography
        css={css`
                            margin: 0;
                            color: #fff;
                            text-transform: uppercase;
                            font-size: 0.9rem;
                            font-weight: bold;
                        `}
      >
        Find a Maaco near you!
      </Typography>
      <SearchLocation />
    </Grid>
  );
};

export default ScheduleAppointment;
