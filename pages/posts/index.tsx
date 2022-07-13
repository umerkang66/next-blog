import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';
import { Post } from '../../common-types/post';
import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../lib/post-utils';

const AllPostsPage: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = props => {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="A list of all blogs on programming" />
      </Head>
      <AllPosts posts={props.allPosts} />
    </Fragment>
  );
};

interface Props {
  allPosts: Post[];
}

export const getStaticProps: GetStaticProps<Props> = () => {
  return {
    props: { allPosts: getAllPosts() },
    revalidate: 600, // 10 min in seconds
  };
};

export default AllPostsPage;
