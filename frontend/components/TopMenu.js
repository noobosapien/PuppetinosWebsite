import { styled } from '@mui/material/styles';
import {
  Button,
  Card,
  CardActionArea,
  Collapse,
  Grid,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import React, { useContext, useState } from 'react';
import { Box } from '@mui/system';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import HandPuppet from '../public/hand_puppet.svg';
import Marionette from '../public/marionette.svg';
import FingerPuppet from '../public/finger_puppet.svg';
import ShadowPuppet from '../public/shadow_puppet.svg';

import { useRouter } from 'next/router';
import { Store } from '../utils/store';

const CustomBox = styled(Card)(({ theme }) => ({
  borderRadius: '0',
  paddingTop: '0.8rem',
  [theme.breakpoints.up('xl')]: {
    height: '6.0rem',
    background: theme.palette.common.black,
    marginTop: '2%',
  },
  [theme.breakpoints.down('xl')]: {
    height: '6.0rem',
    background: theme.palette.common.black,
    marginTop: '2%',
  },
  [theme.breakpoints.down('md')]: {
    height: '5.5rem',
    background: theme.palette.common.black,
    marginTop: '2%',
  },
}));

const PaperDrop = styled(Paper)(({ theme }) => ({
  position: 'absolute',
  width: '1.5rem',
  height: '2rem',
  background: theme.palette.common.roseRed,
  marginTop: '1rem',
  marginLeft: '1rem',
  borderRadius: '10rem 10rem 5rem 5rem',
  cursor: 'pointer',
}));

export default function TopMenu() {
  const { state, dispatch } = useContext(Store);
  const { topMenu } = state;

  const [openMenu, setOpenMenu] = useState(true);

  const router = useRouter();

  const theme = useTheme();

  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesLG = useMediaQuery(theme.breakpoints.down('lg'));
  const matchesXL = useMediaQuery(theme.breakpoints.down('xl'));

  const collapsedSize = matchesXS
    ? 10
    : matchesSM
    ? 20
    : matchesMD
    ? 30
    : matchesLG
    ? 30
    : matchesXL
    ? 40
    : 40;

  const handlePaperClick = (e) => {
    topMenu && topMenu.open
      ? dispatch({ type: 'CLOSE_TOP_MENU' })
      : dispatch({ type: 'OPEN_TOP_MENU' });
  };

  return (
    <>
      <Collapse in={topMenu && topMenu.open} collapsedSize={collapsedSize}>
        <CustomBox>
          <Grid container alignItems="center" justifyContent="space-around">
            <Grid item>
              <CardActionArea
                disableRipple
                onClick={(e) => {
                  router.push('/category/Hand Puppets');
                }}
              >
                <Grid
                  container
                  justifyContent="center"
                  direction="column"
                  alignItems="center"
                >
                  <Grid item>
                    <Image
                      src={HandPuppet}
                      alt={'hand puppets'}
                      width={40}
                      height={40}
                    />
                  </Grid>

                  <Grid item>
                    <Typography
                      sx={{
                        color: '#fff',
                        fontSize: matchesMD ? '0.6rem' : '1.5rem',
                      }}
                    >
                      Hand Puppets
                    </Typography>
                  </Grid>
                </Grid>
              </CardActionArea>
            </Grid>

            <Grid item>
              <CardActionArea
                disableRipple
                onClick={(e) => {
                  router.push('/category/Marionettes');
                }}
              >
                <Grid
                  container
                  justifyContent="center"
                  direction="column"
                  alignItems="center"
                >
                  <Grid item>
                    <Image
                      src={Marionette}
                      alt={'marionettes'}
                      width={40}
                      height={40}
                    />
                  </Grid>

                  <Grid item>
                    <Typography
                      sx={{
                        color: '#fff',
                        fontSize: matchesMD ? '0.6rem' : '1.5rem',
                      }}
                    >
                      Marionettes
                    </Typography>
                  </Grid>
                </Grid>
              </CardActionArea>
            </Grid>

            <Grid item>
              <CardActionArea
                disableRipple
                onClick={(e) => {
                  router.push('/category/Finger Puppets');
                }}
              >
                <Grid
                  container
                  justifyContent="center"
                  direction="column"
                  alignItems="center"
                >
                  <Grid item>
                    <Image
                      src={FingerPuppet}
                      alt={'finger puppets'}
                      width={40}
                      height={40}
                    />
                  </Grid>

                  <Grid item>
                    <Typography
                      sx={{
                        color: '#fff',
                        fontSize: matchesMD ? '0.6rem' : '1.5rem',
                      }}
                    >
                      Finger Puppets
                    </Typography>
                  </Grid>
                </Grid>
              </CardActionArea>
            </Grid>

            <Grid item>
              <CardActionArea
                disableRipple
                onClick={(e) => {
                  router.push('/category/Shadow Puppets');
                }}
              >
                <Grid
                  container
                  justifyContent="center"
                  direction="column"
                  alignItems="center"
                >
                  <Grid item>
                    <Image
                      src={ShadowPuppet}
                      alt={'shadow puppets'}
                      width={40}
                      height={40}
                    />
                  </Grid>

                  <Grid item>
                    <Typography
                      sx={{
                        color: '#fff',
                        fontSize: matchesMD ? '0.6rem' : '1.5rem',
                      }}
                    >
                      Shadow Puppets
                    </Typography>
                  </Grid>
                </Grid>
              </CardActionArea>
            </Grid>
          </Grid>
        </CustomBox>
      </Collapse>

      <div
        style={{
          borderLeft: '0.1rem solid #3a8783',
          height: '1rem',
          marginLeft: '1.7rem',
          marginTop: '0rem',
          position: 'absolute',
        }}
      ></div>
      <PaperDrop elevation={16} size="small" onClick={handlePaperClick} />
    </>
  );
}
