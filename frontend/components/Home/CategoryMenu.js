import React from 'react';
import { styled } from '@mui/material/styles';

import NextLink from 'next/link';
import {
  Button,
  Card,
  CardActionArea,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import Marionette from '../../public/marionettes.jpg';
import Bundles from '../../public/bundles.jpg';
import Theatre from '../../public/theatre.jpg';
import Stories from '../../public/stories.jpg';
import HowToUse from '../../public/how.jpg';
import Charity from '../../public/charity.jpg';
import Sticker from '../../public/sticker.png';

export default function CategoryMenu() {
  return (
    <>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          // marginTop: '5rem',
          background: 'rgba(0, 0, 0, 0.02)',
          paddingBottom: '5rem',
        }}
        spacing={10}
      >
        <Grid item container justifyContent="space-evenly" spacing={10}>
          {/* Marionettes and bundles */}
          <Grid
            item
            sx={{
              position: 'relative',
            }}
          >
            <img
              src={Sticker.src}
              style={{
                position: 'absolute',
                top: '2.0rem',
              }}
            />
            <Card
              sx={{
                maxWidth: '22rem',
                borderRadius: '1rem',
              }}
              elevation={14}
            >
              <Typography
                align="center"
                sx={{
                  fontSize: '2rem',
                  color: 'white',
                  background: 'rgba(255, 251, 28, 0.8)',
                  textShadow: '1px 1px 2px black',
                }}
              >
                Marionettes
              </Typography>
              <CardMedia
                component="img"
                alt="green iguana"
                height="300rem"
                image={Marionette.src}
              />

              <CardActionArea
                sx={{ background: '#ff006f', borderRadius: '0 0 1rem 1rem' }}
              >
                <Typography
                  align="center"
                  variant="body2"
                  sx={{
                    fontSize: '2rem',
                    marginTop: '1rem',
                    marginBottom: '1rem',
                    color: 'white',
                  }}
                >
                  Shop
                </Typography>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid
            item
            sx={{
              position: 'relative',
            }}
          >
            <img
              src={Sticker.src}
              style={{
                position: 'absolute',
                top: '2.0rem',
              }}
            />
            <Card
              sx={{
                maxWidth: '22rem',
                borderRadius: '1rem',
              }}
              elevation={14}
            >
              <Typography
                align="center"
                sx={{
                  fontSize: '2rem',
                  color: 'white',
                  background: 'rgba(66, 255, 28, 0.8)',
                  textShadow: '1px 1px 2px black',
                }}
              >
                Bundles
              </Typography>
              <CardMedia
                component="img"
                alt="green iguana"
                height="300rem"
                image={Bundles.src}
              />

              <CardActionArea
                sx={{ background: '#ff006f', borderRadius: '0 0 1rem 1rem' }}
              >
                <Typography
                  align="center"
                  variant="body2"
                  sx={{
                    fontSize: '2rem',
                    marginTop: '1rem',
                    marginBottom: '1rem',
                    color: 'white',
                  }}
                >
                  Shop
                </Typography>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>

        <Grid item container justifyContent="space-evenly" spacing={10}>
          {/* Theaters and stories */}

          <Grid
            item
            sx={{
              position: 'relative',
            }}
          >
            <img
              src={Sticker.src}
              style={{
                position: 'absolute',
                top: '2.0rem',
              }}
            />
            <Card
              sx={{
                maxWidth: '22rem',
                borderRadius: '1rem',
              }}
              elevation={14}
            >
              <Typography
                align="center"
                sx={{
                  fontSize: '2rem',
                  color: 'white',
                  background: 'rgba(222, 144, 0, 0.8)',
                  textShadow: '1px 1px 2px black',
                }}
              >
                Theatres
              </Typography>
              <CardMedia
                component="img"
                alt="green iguana"
                height="300rem"
                image={Theatre.src}
              />

              <CardActionArea
                sx={{ background: '#ff006f', borderRadius: '0 0 1rem 1rem' }}
              >
                <Typography
                  align="center"
                  variant="body2"
                  sx={{
                    fontSize: '2rem',
                    marginTop: '1rem',
                    marginBottom: '1rem',
                    color: 'white',
                  }}
                >
                  Shop
                </Typography>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid
            item
            sx={{
              position: 'relative',
            }}
          >
            <img
              src={Sticker.src}
              style={{
                position: 'absolute',
                top: '2.0rem',
              }}
            />
            <Card
              sx={{
                maxWidth: '22rem',
                borderRadius: '1rem',
              }}
              elevation={14}
            >
              <Typography
                align="center"
                sx={{
                  fontSize: '2rem',
                  color: 'white',
                  background: 'rgba(0, 222, 192, 0.8)',
                  textShadow: '1px 1px 2px black',
                }}
              >
                Stories
              </Typography>
              <CardMedia
                component="img"
                alt="green iguana"
                height="300rem"
                image={Stories.src}
              />

              <CardActionArea
                sx={{ background: '#00c3ff', borderRadius: '0 0 1rem 1rem' }}
              >
                <Typography
                  align="center"
                  variant="body2"
                  sx={{
                    fontSize: '2rem',
                    marginTop: '1rem',
                    marginBottom: '1rem',
                    color: 'white',
                  }}
                >
                  Explore
                </Typography>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>

        <Grid item container justifyContent="space-evenly" spacing={10}>
          {/* How to use and charity */}

          <Grid
            item
            sx={{
              position: 'relative',
            }}
          >
            <img
              src={Sticker.src}
              style={{
                position: 'absolute',
                top: '2.0rem',
              }}
            />
            <Card
              sx={{
                maxWidth: '22rem',
                borderRadius: '1rem',
              }}
              elevation={14}
            >
              <Typography
                align="center"
                sx={{
                  fontSize: '2rem',
                  color: 'white',
                  background: 'rgba(164, 107, 255, 0.8)',
                  textShadow: '1px 1px 2px black',
                }}
              >
                How to use?
              </Typography>
              <CardMedia
                component="img"
                alt="green iguana"
                height="300rem"
                image={HowToUse.src}
              />

              <CardActionArea
                sx={{ background: '#00c3ff', borderRadius: '0 0 1rem 1rem' }}
              >
                <Typography
                  align="center"
                  variant="body2"
                  sx={{
                    fontSize: '2rem',
                    marginTop: '1rem',
                    marginBottom: '1rem',
                    color: 'white',
                  }}
                >
                  Learn
                </Typography>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid
            item
            sx={{
              position: 'relative',
            }}
          >
            <img
              src={Sticker.src}
              style={{
                position: 'absolute',
                top: '2.0rem',
              }}
            />
            <Card
              sx={{
                maxWidth: '22rem',
                borderRadius: '1rem',
              }}
              elevation={14}
            >
              <Typography
                align="center"
                sx={{
                  fontSize: '2rem',
                  color: 'white',
                  background: 'rgba(255, 0, 8, 0.8)',
                  textShadow: '1px 1px 2px black',
                }}
              >
                Charity
              </Typography>
              <CardMedia
                component="img"
                alt="green iguana"
                height="300rem"
                image={Charity.src}
              />

              <CardActionArea
                sx={{
                  background: 'rgba(255, 0, 8, 0.8)',
                  borderRadius: '0 0 1rem 1rem',
                }}
              >
                <Typography
                  align="center"
                  variant="body2"
                  sx={{
                    fontSize: '2rem',
                    marginTop: '1rem',
                    marginBottom: '1rem',
                    color: 'white',
                  }}
                >
                  Get involved
                </Typography>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
