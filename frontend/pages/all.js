import React, { useContext, useEffect } from 'react';
import Layout from '../components/Layout';
import { Grid, Typography } from '@mui/material';
import ProductCard from '../components/common/ProductCard';

export default function All({ products }) {
  return (
    <Layout>
      <Grid
        container
        alignItems={'center'}
        justifyContent={'center'}
        spacing={4}
        sx={{ marginTop: '2rem' }}
      >
        <Grid item>
          <Typography variant="h1" sx={{ fontSize: '2rem' }}>
            All the marionettes
          </Typography>
        </Grid>

        <Grid item xs={12} />

        <Grid
          item
          container
          alignItems={'center'}
          justifyContent={'center'}
          spacing={10}
        >
          {products.map((product) => (
            <Grid item>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Layout>
  );
}

export async function getStaticProps(context) {
  try {
    const res = await fetch(process.env.STRAPI_BASE + `products`);
    const products = await res.json();

    return {
      props: {
        products,
      },
    };
  } catch (e) {
    console.log(e);
  }
}
