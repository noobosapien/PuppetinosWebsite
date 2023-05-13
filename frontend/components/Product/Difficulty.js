import { Grid, Typography } from '@mui/material';
import React from 'react';

export default function Difficulty({ diff }) {
  const darkBlue = '#39A1B7';
  const lightBlue = '#C1EDEC';

  return (
    <>
      <Grid
        container
        direction="column"
        alignItems={'flex-end'}
        justifyItems={'center'}
        spacing={2}
      >
        <Grid item>
          <Grid container spacing={2} justifyContent={'flex-end'}>
            <Grid item>
              <div
                style={{
                  height: '2vh',
                  width: '3vw',
                  borderRadius: '1rem',
                  background:
                    diff === 1 || diff === 2 || diff === 3
                      ? darkBlue
                      : lightBlue,
                }}
              />
            </Grid>

            <Grid item>
              <div
                style={{
                  height: '2vh',
                  width: '3vw',
                  borderRadius: '1rem',
                  background: diff === 2 || diff === 3 ? darkBlue : lightBlue,
                }}
              />
            </Grid>

            <Grid item>
              <div
                style={{
                  height: '2vh',
                  width: '3vw',
                  borderRadius: '1rem',
                  background: diff === 3 ? darkBlue : lightBlue,
                }}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Typography>
            {diff === 1 ? 'Easy' : diff === 2 ? 'Medium' : 'Hard'}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
