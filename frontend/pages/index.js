import React, { useRef } from 'react';
import Carousel from '../components/Home/Carousel';
import Hero from '../components/Home/Hero';
import LearnSection from '../components/Home/LearnSection';
import NewsLetterSection from '../components/Home/NewsLetterSection';
import SeasonalSection from '../components/Home/SeasonalSection';
import Layout from '../components/Layout';

export default function Home({ featured, seasonal }) {
  const learnRef = React.createRef();

  const forwardToLearn = () => {
    learnRef
      ? learnRef.current
        ? learnRef.current.scrollIntoView({ behavior: 'smooth' })
        : undefined
      : undefined;
  };

  return (
    <Layout title="Puppetinos" description={'Puppetinos passion for puppets'}>
      <Hero forwardToLearn={forwardToLearn} />
      <Carousel products={featured} />

      <SeasonalSection seasonal={seasonal} />
      <div ref={learnRef}>
        <LearnSection />
      </div>

      <NewsLetterSection />
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch(process.env.STRAPI_BASE + 'products?featured=true');

    // const res = await fetch('http://192.168.1.71:1337/products?featured=true');
    const featured = await res.json();

    const seasonalRes = await fetch(
      process.env.STRAPI_BASE + 'products?seasonal=true'
    );
    const seasonal = await seasonalRes.json();

    return {
      props: {
        featured,
        seasonal,
      },
    };
  } catch (e) {
    console.log(e);
    return {
      props: {},
    };
  }
}
