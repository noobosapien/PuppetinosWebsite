import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  LinearProgress,
  Paper,
  Typography,
} from '@mui/material';
import { styled } from '@mui/system';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { useRouter } from 'next/router';

const Animation = styled('div')(({ theme }) => ({
  position: 'absolute',

  [theme.breakpoints.up('md')]: {
    width: '80vw',
    height: '80vw',
    left: '-60vw',
    // top: '60vw',
  },
  [theme.breakpoints.down('md')]: {
    width: '100vw',
    height: '100vw',
    left: '-80vw',
    // top: '100vw',
  },
  [theme.breakpoints.down('sm')]: {
    width: '150vw',
    height: '150vw',
    left: '-125vw',
    // top: '200vw',
  },
  top: '5rem',
  width: '100vw',
  height: '100vw',
  background: 'rgba(0, 238, 255, 0.5)',
  // left: 'calc(50%-75vw)',
  borderRadius: '45%',
  animation: 'rotate 30s infinite',

  '&::before': {
    content: '""',
    width: '100%',
    height: '100%',
    background: 'rgba(0, 255, 191, 0.5)',
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: '40%',
    animation: 'rotate 30s infinite',
  },

  '@keyframes rotate': {
    '0%': {
      transform: 'rotate(0)',
    },

    '100%': {
      transform: 'rotate(360deg)',
    },
  },
}));

function Hero2() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        zIndex: -1,
      }}
    >
      <Animation />
    </div>
  );
}

function Hero3() {
  return (
    <>
      <Grid container direction="column" alignItems="center" spacing={4}>
        <Grid item>
          {/* <Image src={Tradition} alt="tradition" width={438} height={125} /> */}
        </Grid>

        <Grid item>
          {/* Photo and description */}
          <Grid
            container
            justifyContent="space-around"
            alignItems="center"
            spacing={6}
          >
            <Grid item md={6}>
              {/* description */}
              <Typography
                variant="body2"
                sx={{ fontSize: '1.0rem', padding: '1rem' }}
                align="center"
              >
                {/* An age long tradition living with these hand made puppets */}
              </Typography>
            </Grid>

            <Grid item md={8}>
              <Grid container justifyContent="space-evenly" spacing={4}>
                {/* photos */}
                <Grid item>
                  {/* <Card sx={{}}>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      image={Puppet1.src}
                    />
                  </Card> */}
                </Grid>

                {/* <Grid item md={6} sx={{ marginTop: '3rem' }}>
                  <Card sx={{ borderRadius: '10% 30% 50% 70%' }}>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      image={Puppet2.src}
                    />
                  </Card>
                </Grid> */}
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid container>
            <Grid item xs={4}>
              <LinearProgress variant="determinate" value={20} />
            </Grid>

            <Grid item>
              <Button>Quality</Button>
            </Grid>

            <Grid item>
              <Button>Good Will</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

function Hero4() {
  useEffect(() => {}, []);

  return (
    <>
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          'z-index': '-100',
          // clipPath: 'polygon(100% 0, 100% 38%, 100% 100%, 0 11%, 0 0)',
          clipPath: 'circle(50.5% at 100% 1%)',
          background:
            'linear-gradient(270deg, rgba(255,0,111,0.24723392775078779) 0%, rgba(160,255,236,0.5665616588432247) 46%)',
        }}
      ></div>
    </>
  );
}

function Hero5() {
  return (
    <>
      <Grid
        container
        justifyContent="space-evenly"
        alignItems="center"
        spacing={10}
        sx={{ marginTop: '5rem' }}
      >
        <Grid item>
          <Card
            elevation={10}
            sx={{ maxWidth: '30rem', background: 'rgba(255,255,255,0.2)' }}
          >
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <CardContent>
                  <Typography
                    align="center"
                    variant="body2"
                    sx={{ fontSize: '2rem' }}
                  >
                    Tradition
                  </Typography>
                </CardContent>
              </Grid>

              <Grid item>
                {/* <Image height="50" width={215} src={OTP.src} alt="OTP" /> */}
              </Grid>

              <Grid item>
                <CardContent>
                  <Grid
                    container
                    direction="column"
                    alignItems="center"
                    spacing={4}
                  >
                    <Grid item>
                      <Typography
                        align="center"
                        variant="body2"
                        sx={{ fontSize: '1rem' }}
                      >
                        Keeping alive the tradition of puppeteering at our
                        hearts and bringing old school entertainment to the new
                        world.
                      </Typography>
                    </Grid>

                    <Grid item>
                      <Button
                        variant="outlined"
                        onClick={(e) => router.push('/about')}
                      >
                        Learn more
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Grid>

        <Grid item>
          <Card
            elevation={10}
            sx={{ maxWidth: '30rem', background: 'rgba(255,255,255,0.2)' }}
          >
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <CardContent>
                  <Typography
                    align="center"
                    variant="body2"
                    sx={{ fontSize: '2rem' }}
                  >
                    Quality
                  </Typography>
                </CardContent>
              </Grid>

              <Grid item>
                {/* <Image height="50" width={215} src={OTP.src} alt="OTP" /> */}
              </Grid>

              <Grid item>
                <CardContent>
                  <Grid
                    container
                    direction="column"
                    alignItems="center"
                    spacing={4}
                  >
                    <Grid item>
                      <Typography
                        align="center"
                        variant="body2"
                        sx={{ fontSize: '1rem' }}
                      >
                        We strive for quality and customer satisfaction beyond
                        anything else with the best support we can provide and a
                        hassel free returns program.
                      </Typography>
                    </Grid>

                    <Grid item>
                      <Button
                        variant="outlined"
                        onClick={(e) => router.push('/about')}
                      >
                        Learn more
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Grid>

        <Grid item>
          <Card
            elevation={10}
            sx={{ maxWidth: '30rem', background: '#ff006f20' }}
          >
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <CardContent>
                  <Typography
                    align="center"
                    variant="body2"
                    sx={{ fontSize: '2rem' }}
                  >
                    Good will
                  </Typography>
                </CardContent>
              </Grid>

              <Grid item>
                {/* <Image height="50" width={215} src={OTP.src} alt="OTP" /> */}
              </Grid>

              <Grid item>
                <CardContent>
                  <Grid
                    container
                    direction="column"
                    alignItems="center"
                    spacing={4}
                  >
                    <Grid item>
                      <Typography
                        align="center"
                        variant="body2"
                        sx={{ fontSize: '1rem' }}
                      >
                        We donate 20% of your purchase to charity on behalf of
                        you at the end of every month.
                      </Typography>
                    </Grid>

                    <Grid item>
                      <Button
                        variant="outlined"
                        onClick={(e) => router.push('/about')}
                      >
                        Learn more
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default function Hero() {
  const theme = useTheme();
  const router = useRouter();

  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesLG = useMediaQuery(theme.breakpoints.down('lg'));
  const matchesXL = useMediaQuery(theme.breakpoints.down('xl'));

  return (
    <>
      <Hero4 />
      <Hero2 />
      <Hero5 />
    </>
  );
}
