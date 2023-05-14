import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import ship from '../../public/ship.png';
import home from '../../public/home.png';
import returns from '../../public/returns.png';

export default function ShippingnReturn() {
  return (
    <>
      <Grid container direction={'column'} alignItems={'center'} spacing={4}>
        <Grid item>
          <Typography sx={{ fontWeight: 500 }}>Shipping and Returns</Typography>
        </Grid>

        <Grid
          item
          container
          direction={'column'}
          spacing={2}
          sx={{ marginLeft: '1px' }}
        >
          <Grid
            item
            container
            // justifyContent={'center'}
            alignItems={'center'}
            spacing={4}
          >
            <Grid item>
              <Image src={ship} width={30} height={30} />
            </Grid>

            <Grid item>
              <Typography>Courier company:</Typography>
            </Grid>

            <Grid item>
              <Typography>FedEx</Typography>
            </Grid>
          </Grid>

          <Grid
            item
            container
            // justifyContent={'center'}
            alignItems={'center'}
            spacing={4}
          >
            <Grid item>
              <Image src={home} width={30} height={30} />
            </Grid>

            <Grid item>
              <Typography>Delivered by:</Typography>
            </Grid>

            <Grid item>
              <Typography>June 11 - 20</Typography>
            </Grid>
          </Grid>

          <Grid
            item
            container
            // justifyContent={'center'}
            alignItems={'center'}
            spacing={4}
          >
            <Grid item>
              <Image src={returns} width={30} height={30} />
            </Grid>

            <Grid item>
              <Typography>Returns:</Typography>
            </Grid>

            <Grid item>
              <Typography>Free within 30 days</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
