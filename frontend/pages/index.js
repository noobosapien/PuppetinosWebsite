import { Divider } from '@mui/material';
import Carousel from '../components/Home/Carousel';
import CategoryMenu from '../components/Home/CategoryMenu';
import Hero from '../components/Home/Hero';
import LatestProducts from '../components/Home/LatestProducts';
import Satisfaction from '../components/Home/Satisfaction';
import Layout from '../components/Layout';

export default function Home({ featured }) {
  return (
    <Layout title="Puppetinos" description={'Puppetinos passion for puppets'}>
      <Hero />
      <Carousel products={featured} />
      <Divider sx={{ marginTop: '5rem', marginBottom: '5rem' }} />
      <CategoryMenu />
      <LatestProducts />
      <Satisfaction />
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch(process.env.STRAPI_BASE + 'products?featured=true');
    const featured = await res.json();

    return {
      props: {
        featured,
      },
    };
  } catch (e) {}
}
