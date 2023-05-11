import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';

import Placeholder from '../../public/front.png';
import Placeholder2 from '../../public/history.png';

export default function LearnSection() {
  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <div
        style={{
          width: '100vw',
          height: '100vh',
          position: 'absolute',
          marginTop: '4rem',
          background: `rgba(0, 255, 240, 0.3)`,
          zIndex: '-1',
          // background: `url(${LearnBG.src}) rgba(0, 255, 240, 0.8)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          filter: 'blur(1px)',
          clipPath: 'polygon(0 0, 0% 80%, 100% 100%)',
        }}
      ></div>
      <Grid
        container
        alignItems="center"
        justifyContent="space-evenly"
        sx={{
          height: '100%',
        }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                textAlign="center"
                sx={{
                  fontWeight: '400',
                  fontSize: '2rem',
                }}
              >
                Learn the ancient and the sacred art of puppeteering.
              </Typography>
            </Grid>

            <Grid item>
              <Typography textAlign="center">
                Acquire a skill only a few people of this world posses .
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid
            container
            direction="column"
            spacing={4}
            sx={{ minWidth: '300' }}
          >
            <Grid item>
              <Card sx={{ minWidth: 200, borderRadius: '0.4rem' }} raised>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={Placeholder.src}
                    alt="Learn Puppeteering"
                  />
                  <CardContent>
                    <Grid container justifyContent="center">
                      <Grid item>
                        <Typography
                          gutterBottom
                          variant="body2"
                          component="div"
                          sx={{
                            fontWeight: '400',
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
              <Card sx={{ width: 200, borderRadius: '0.4rem' }} raised>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={Placeholder2.src}
                    alt="Learn Puppeteering"
                  />
                  <CardContent>
                    <Grid container justifyContent="center">
                      <Grid item>
                        <Typography
                          gutterBottom
                          textAlign="center"
                          variant="body2"
                          component="div"
                          sx={{
                            fontWeight: '400',
                          }}
                        >
                          Learn the history of puppets
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
