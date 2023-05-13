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
      >
        <Grid item>
          <Typography sx={{ fontWeight: 500 }}>We promise...</Typography>
        </Grid>

        <Grid
          item
          container
          direction={'column'}
          spacing={2}
          sx={{ marginLeft: '1px' }}
        ></Grid>
      </Grid>
    </>
  );
}
