import { Grid, Typography } from '@mui/material';
import React from 'react';

export default function Confidence() {
  return (
    <>
      <Grid
        container
        direction={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        spacing={4}
      >
        <Grid item>
          <Typography sx={{ fontWeight: 500 }}>We promise...</Typography>
        </Grid>

        <Grid item container spacing={2} justifyContent={'space-between'}>
          <Grid item>
            <Typography>Safe checkout</Typography>
          </Grid>

          <Grid item>
            <Typography>Quality handiwork</Typography>
          </Grid>
        </Grid>

        <Grid item container spacing={2} justifyContent={'space-between'}>
          <Grid item>
            <Typography>Privacy</Typography>
          </Grid>

          <Grid item>
            <Typography>Exceed your expectations!</Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
