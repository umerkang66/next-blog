import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';
import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/home-page/featured-posts';
import { getFeaturedPosts } from '../lib/post-utils';
import { Post } from '../common-types/post';

const HomePage: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = props => {
  return (
    <Fragment>
      <Head>
        <title>Umer's Blog</title>
        <meta
          name="description"
          content="I post about programming and web development"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
};

interface Props {
  posts: Post[];
}

export const getStaticProps: GetStaticProps<Props> = () => {
  return {
    props: { posts: getFeaturedPosts() },
    revalidate: 600, // 10 min in seconds
  };
};

export default HomePage;
