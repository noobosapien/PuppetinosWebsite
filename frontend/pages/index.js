import Carousel from '../components/Home/Carousel';
import Hero from '../components/Home/Hero';
import LatestProducts from '../components/Home/LatestProducts';
import Satisfaction from '../components/Home/Satisfaction';
import Layout from '../components/Layout';

export default function Home({ featured }) {
  return (
    <Layout title="Puppetino" description={'Puppetino passion for puppets'}>
      <Hero />
      <Carousel products={featured} />
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
