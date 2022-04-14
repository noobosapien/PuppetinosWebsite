import {
  Card,
  CardActionArea,
  CardMedia,
  Fab,
  Grid,
  Typography,
} from '@mui/material';
import { styled } from '@mui/system';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Clean from '../../public/clean2.jpg';
import Artisan from '../../public/rare.svg';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import HandPuppet from '../../public/hand_puppet.webp';
import Marionette from '../../public/pinochio_mari.jpg';
import FingerPuppet from '../../public/finger_puppet.jpg';
import ShadowPuppet from '../../public/shadow_puppet.webp';
import Art from '../../public/art.svg';
import { useRouter } from 'next/router';

const Animation = styled('div')(({ theme }) => ({
  position: 'absolute',

  [theme.breakpoints.up('md')]: {
    width: '80vw',
    height: '80vw',
    left: '-60vw',
  },
  [theme.breakpoints.down('md')]: {
    width: '100vw',
    height: '100vw',
    left: '-80vw',
  },
  [theme.breakpoints.down('sm')]: {
    width: '150vw',
    height: '150vw',
    left: '-125vw',
  },
  width: '100vw',
  height: '100vw',
  background: 'rgba(0, 238, 255, 0.5)',
  top: '10vw',
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

export default function Hero() {
  const theme = useTheme();
  const router = useRouter();

  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesLG = useMediaQuery(theme.breakpoints.down('lg'));
  const matchesXL = useMediaQuery(theme.breakpoints.down('xl'));

  const handleGoToHP = async (e) => {
    router.push('/category/Hand Puppets');
  };

  const handleGoToMN = async (e) => {
    router.push('/category/Marionettes');
  };

  const handleGoToFP = async (e) => {
    router.push('/category/Finger Puppets');
  };

  const handleGoToSP = async (e) => {
    router.push('/category/Shadow Puppets');
  };

  return (
    <>
      <Hero2 />

      <Grid
        container
        direction="column"
        justifyContent="space-between"
        sx={{ marginTop: '10rem' }}
        spacing={4}
      >
        <Grid item container justifyContent="space-evenly" alignItems="center">
          {/* hand puupets and marionettes */}
          <Grid item>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Grid item>
                <Card
                  sx={(theme) => ({
                    borderRadius: '25%',
                    width: '25rem',
                    [theme.breakpoints.down('xl')]: {
                      width: '25rem',
                    },
                    [theme.breakpoints.down('lg')]: {
                      width: '20rem',
                    },
                    [theme.breakpoints.down('md')]: {
                      width: '15rem',
                    },
                    [theme.breakpoints.down('sm')]: {
                      width: '8rem',
                    },
                  })}
                >
                  <CardActionArea onClick={handleGoToHP}>
                    <CardMedia
                      component="img"
                      height="100%"
                      image={HandPuppet.src}
                      alt="Hand Puppets"
                      sx={{
                        opacity: 0.7,
                        transform: `perspective(1000px) rotateY(120 deg) translateZ(120 px)`,
                      }}
                    />
                  </CardActionArea>
                </Card>
              </Grid>

              <Grid item>
                <Typography variant="body2">Hand Puppets</Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Grid item>
                <Card
                  sx={(theme) => ({
                    borderRadius: '25%',
                    width: '25rem',
                    [theme.breakpoints.down('xl')]: {
                      width: '25rem',
                    },
                    [theme.breakpoints.down('lg')]: {
                      width: '20rem',
                    },
                    [theme.breakpoints.down('md')]: {
                      width: '15rem',
                    },
                    [theme.breakpoints.down('sm')]: {
                      width: '8rem',
                    },
                  })}
                >
                  <CardActionArea onClick={handleGoToMN}>
                    <CardMedia
                      component="img"
                      height="100%"
                      image={Marionette.src}
                      alt="Marionettes"
                      sx={{
                        opacity: 0.7,
                        transform: `perspective(1000px) rotateY(120 deg) translateZ(120 px)`,
                      }}
                    />
                  </CardActionArea>
                </Card>
              </Grid>

              <Grid item>
                <Typography variant="body2">Marionettes</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item container justifyContent="space-evenly" alignItems="center">
          {/* finger puppets and shadow puppets */}

          <Grid item>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Grid item>
                <Card
                  sx={(theme) => ({
                    borderRadius: '25%',
                    width: '25rem',
                    [theme.breakpoints.down('xl')]: {
                      width: '25rem',
                    },
                    [theme.breakpoints.down('lg')]: {
                      width: '20rem',
                    },
                    [theme.breakpoints.down('md')]: {
                      width: '15rem',
                    },
                    [theme.breakpoints.down('sm')]: {
                      width: '8rem',
                    },
                  })}
                >
                  <CardActionArea onClick={handleGoToFP}>
                    <CardMedia
                      component="img"
                      height="100%"
                      image={FingerPuppet.src}
                      alt="finger puppets"
                      sx={{
                        opacity: 0.7,
                        transform: `perspective(1000px) rotateY(120 deg) translateZ(120 px)`,
                      }}
                    />
                  </CardActionArea>
                </Card>
              </Grid>

              <Grid item>
                <Typography variant="body2">Finger Puppets</Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Grid item>
                <Card
                  sx={(theme) => ({
                    borderRadius: '25%',
                    width: '25rem',
                    [theme.breakpoints.down('xl')]: {
                      width: '25rem',
                    },
                    [theme.breakpoints.down('lg')]: {
                      width: '20rem',
                    },
                    [theme.breakpoints.down('md')]: {
                      width: '15rem',
                    },
                    [theme.breakpoints.down('sm')]: {
                      width: '8rem',
                    },
                  })}
                >
                  <CardActionArea onClick={handleGoToSP}>
                    <CardMedia
                      component="img"
                      height="100%"
                      image={ShadowPuppet.src}
                      alt="shadow puppets"
                      sx={{
                        opacity: 0.7,
                        transform: `perspective(1000px) rotateY(120 deg) translateZ(120 px)`,
                      }}
                    />
                  </CardActionArea>
                </Card>
              </Grid>

              <Grid item>
                <Typography variant="body2">Shadow Puppets</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
