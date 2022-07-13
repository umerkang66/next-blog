import { NextPage } from 'next';
import { Fragment } from 'react';
import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/home-page/featured-posts';

const HomePage: NextPage = () => {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={[]} />
    </Fragment>
  );
};

export default HomePage;
