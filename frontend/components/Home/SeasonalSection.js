import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import ComicBG from '../../public/comicbg.png';
import SmallProductCard from '../common/SmallProductCard';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function SeasonalcSection({ seasonal }) {
  const [products, setProducts] = useState([]);

  const theme = useTheme();

  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesLG = useMediaQuery(theme.breakpoints.down('lg'));
  const matchesXL = useMediaQuery(theme.breakpoints.down('xl'));

  useEffect(() => {
    const seasonalProducts = [];

    seasonal instanceof Array
      ? seasonal.forEach((pr) => {
          seasonalProducts.push(pr);
        })
      : undefined;

    setProducts([...seasonalProducts]);
  }, [seasonal]);

  return (
    <div
      style={{
        position: 'relative',
        height: '100vh',
        top: '10vh',
        marginBottom: matchesSM
          ? '60vh'
          : matchesMD
          ? '55vh'
          : matchesLG
          ? '30vh'
          : matchesXL
          ? '50vh'
          : '40vh',
      }}
    >
      <div
        style={{
          width: '100vw',
          height: '100vh',
          background: `url(${ComicBG.src}) rgba(0, 255, 240, 0.8)`,
          backgroundBlendMode: 'multiply',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'absolute',
          // filter: 'blur(8px)',
          //   top: '30vh',
          opacity: '0.3',
          zIndex: -2,
          clipPath: 'polygon(0 24%, 100% 0%, 100% 78%, 0% 100%)',
        }}
      ></div>

      <Grid
        container
        sx={{
          width: '100vw',
          height: '100vh',
        }}
        // spacing={4}
        // direction="column"
      >
        <Grid item>
          <Grid container>
            <Grid item>
              <Typography
                textAlign="center"
                sx={{
                  fontWeight: '400',
                  fontSize: '2rem',
                }}
                alignSelf="center"
              >
                Checkout our summer collection:
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sx={{ marginBottom: '4rem' }} />

        <Grid item container>
          {/* product cards */}
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            spacing={4}
          >
            {products.map((prod) => (
              <Grid item>
                <SmallProductCard product={prod} noReviews={0} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
