import React, { useEffect, useState } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SmallProductCard from '../common/SmallProductCard';
import { useRouter } from 'next/router';
import Carousel3D from './Carousel3D';
import { getAllTopRated } from '../../helpers/getAllTopRated';
import CustomButton from './CustomButton';

export default function Carousel({ products }) {
  const theme = useTheme();
  const router = useRouter();

  const [slides, setSlides] = useState([]);

  useEffect(() => {
    if (products instanceof Array && products.length > 0) {
      const _slides = [];
      products.forEach((product) => {
        var item = {};

        item.image = product.images[0].url;
        item.name = product.name;
        item.height = product.images[0].height;
        item.price = product.price;
        item.slug = product.slug;
        item.noofreviews = product.noofreviews ? product.noofreviews : 0;
        item.rating = product.rating ? product.rating : 0;

        _slides.push(item);
      });

      setSlides([..._slides]);
    }
  }, [products]);

  const [TopRated, setTopRated] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const result = await getAllTopRated(3);
      if (result instanceof Array) setTopRated([...result]);
    };

    getProducts();
  }, []);

  return (
    <Grid
      container
      justifyContent="space-evenly"
      alignItems="center"
      spacing={4}
      sx={{ marginTop: '6rem' }}
      direction="column"
    >
      <Grid item>
        <Typography
          variant="h2"
          sx={{
            fontSize: '1.5rem',
            fontWeight: '400',
          }}
        >
          Latest marionettes:
        </Typography>
      </Grid>

      <Grid
        item
        sx={(theme) => ({
          [theme.breakpoints.up('xs')]: {
            marginTop: '8rem',
          },
          [theme.breakpoints.up('sm')]: {
            marginTop: '20rem',
          },
        })}
        alignSelf="space-evenly"
      >
        <Carousel3D slides={slides} />
      </Grid>

      <Grid
        item
        sx={(theme) => ({
          [theme.breakpoints.up('xs')]: {
            marginTop: '6rem',
          },
          [theme.breakpoints.up('sm')]: {
            marginTop: '20rem',
          },
        })}
      >
        <CustomButton>View all</CustomButton>
      </Grid>
    </Grid>
  );
}
