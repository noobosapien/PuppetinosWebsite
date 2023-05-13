import {
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Rating,
  Typography,
} from '@mui/material';
import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function SmallProductCard({ product, noReviews }) {
  const router = useRouter();

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <Card
          sx={(theme) => ({
            width: '120px',
            borderRadius: '1rem',
            [theme.breakpoints.up('xs')]: {
              width: '120px',
            },
            [theme.breakpoints.up('sm')]: {
              width: '180px',
            },
            [theme.breakpoints.up('md')]: {
              width: '220px',
            },
            [theme.breakpoints.up('lg')]: {
              width: '320px',
            },
          })}
        >
          <CardActionArea
            onClick={(e) => {
              router.push(`/product/${product.slug}`);
            }}
          >
            <CardMedia
              component="img"
              alt={product.name}
              image={product.images instanceof Array && product.images[0].url}
            />
          </CardActionArea>
        </Card>
      </Grid>

      {noReviews ? (
        <></>
      ) : (
        <Grid
          item
          container
          alignItems="center"
          justifyContent="center"
          direction="column"
        >
          {/* <Grid item>
            <Rating value={product.rating} readOnly />
          </Grid>
          <Grid item>
            <Typography>
              ({product.noofreviews ? product.noofreviews : 0} reviews)
            </Typography>
          </Grid> */}
        </Grid>
      )}

      <Grid item alignSelf="center">
        <Typography variant="body2">{product.name}</Typography>
      </Grid>
    </Grid>
  );
}
