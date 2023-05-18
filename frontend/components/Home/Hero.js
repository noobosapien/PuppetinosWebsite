import { styled } from '@mui/system';
import React, { useEffect } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { useRouter } from 'next/router';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import Image from 'next/image';

import Placeholder from '../../public/buy.png';
import Placeholder2 from '../../public/learn.png';
import Placeholder3 from '../../public/comic.png';

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
  background: 'rgba(0, 255, 240, 0.2)',
  // left: 'calc(50%-75vw)',
  borderRadius: '45%',
  animation: 'rotate 30s infinite',

  '&::before': {
    content: '""',
    width: '100%',
    height: '100%',
    background: 'rgba(0, 255, 191, 0.1)',
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

function Hero1() {
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

function Hero2() {
  const theme = useTheme();

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
          background: `linear-gradient(125deg, rgba(0,255,240,0.3) 0%, rgba(89,177,206,0.1) 100%)`,
        }}
      ></div>
    </>
  );
}

function Hero3({ forwardToLearn, goToAllPage, toWebComic }) {
  return (
    <>
      <div
        style={{
          width: '100%',
          // height: '100vh',
          // position: 'absolute',
          paddingTop: '2rem',
        }}
      >
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          direction="column"
          spacing={6}
        >
          <Grid item>
            <Typography
              variant="h5"
              textAlign="center"
              sx={{ fontWeight: '300' }}
            >
              Hand made wooden marionettes
            </Typography>
          </Grid>

          <Grid item>
            <Typography textAlign="center">
              We help you to channel your inner puppeteer
            </Typography>
          </Grid>

          <Grid
            item
            container
            alignItems="center"
            justifyContent="space-evenly"
            spacing={4}
            sx={{
              marginTop: '4rem',
            }}
          >
            <Grid item>
              <Card sx={{ maxWidth: 300, borderRadius: '0.4rem' }} raised>
                <CardActionArea onClick={goToAllPage}>
                  <CardMedia
                    component="img"
                    height="300"
                    image={Placeholder.src}
                    alt="Goto all page"
                  />
                  <CardContent>
                    <Grid container justifyContent="center">
                      <Grid item>
                        <Typography
                          gutterBottom
                          variant="body2"
                          component="div"
                          sx={{
                            fontWeight: '300',
                          }}
                        >
                          Buy a marionette
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item>
              <Card sx={{ maxWidth: 300, borderRadius: '0.4rem' }} raised>
                <CardActionArea onClick={forwardToLearn}>
                  <CardMedia
                    component="img"
                    height="300"
                    image={Placeholder2.src}
                    alt="Learn puppeteering"
                  />
                  <CardContent>
                    <Grid container justifyContent="center">
                      <Grid item>
                        <Typography
                          gutterBottom
                          variant="body2"
                          component="div"
                          sx={{
                            fontWeight: '300',
                          }}
                        >
                          Learn puppeteering
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item>
              <Card sx={{ maxWidth: 300, borderRadius: '0.4rem' }} raised>
                <CardActionArea onClick={toWebComic}>
                  <CardMedia
                    component="img"
                    height="300"
                    image={Placeholder3.src}
                    alt="Webcomic"
                  />
                  <CardContent>
                    <Grid container justifyContent="center">
                      <Grid item>
                        <Typography
                          gutterBottom
                          variant="body2"
                          component="div"
                          sx={{
                            fontWeight: '300',
                          }}
                        >
                          Follow the webcomic
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default function Hero({ forwardToLearn }) {
  const theme = useTheme();
  const router = useRouter();

  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesLG = useMediaQuery(theme.breakpoints.down('lg'));
  const matchesXL = useMediaQuery(theme.breakpoints.down('xl'));

  const goToAllPage = () => {
    router.push('/all');
  };

  const toWebcomic = () => {
    router.push('/webcomic');
  };

  return (
    <>
      <Hero2 />
      <Hero1 />
      <Hero3
        forwardToLearn={forwardToLearn}
        goToAllPage={goToAllPage}
        toWebComic={toWebcomic}
      />
    </>
  );
}
