import { Grid, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import safe from '../../public/safe.png';
import privacy from '../../public/privacy.png';
import handiwork from '../../public/handiwork.png';
import green from '../../public/green.png';

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
          <Grid
            item
            container
            direction="column"
            xs={6}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Grid item>
              <Image src={safe} width={30} height={30} />
            </Grid>
            <Grid item>
              <Typography>Safe checkout</Typography>
            </Grid>
          </Grid>

          <Grid
            item
            container
            direction="column"
            xs={6}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Grid item>
              <Image src={handiwork} width={30} height={30} />
            </Grid>
            <Grid item>
              <Typography>Quality handiwork</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item container spacing={2} justifyContent={'space-between'}>
          <Grid
            item
            container
            direction="column"
            xs={6}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Grid item>
              <Image src={privacy} width={30} height={30} />
            </Grid>
            <Grid item>
              <Typography>Privacy</Typography>
            </Grid>
          </Grid>

          <Grid
            item
            container
            direction="column"
            xs={6}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Grid item>
              <span style={{ fontSize: '2rem' }}>🥳🎉</span>
            </Grid>
            <Grid item>
              <Typography textAlign={'center'}>
                Exceed your expectations!
              </Typography>
            </Grid>
          </Grid>

          <Grid
            item
            container
            justifyContent={'center'}
            alignItems={'center'}
            direction={'column'}
          >
            <Grid item>
              <Image src={green} width={30} height={30} />
            </Grid>

            <Grid item>
              <Typography>And we are sustainable!</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
