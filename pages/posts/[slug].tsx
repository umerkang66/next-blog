import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import PostContent from '../../components/posts/post-detail/post-content';
import { Post } from '../../common-types/post';
import { getPostData, getPostFiles } from '../../lib/post-utils';
import { Fragment } from 'react';
import Head from 'next/head';

const PostDetailPage: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = props => {
  return (
    <Fragment>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />
    </Fragment>
  );
};

interface Props {
  post: Post;
}

export const getStaticProps: GetStaticProps<Props> = ({ params }) => {
  const slug = params?.slug as string;

  return {
    props: { post: getPostData(slug) },
    revalidate: 600, // 10 min in seconds
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const postFilenames = getPostFiles();
  const paths = postFilenames.map(filename => ({
    params: { slug: filename.replace('.md', '') },
  }));

  return {
    // paths: [{ params: { slug: '' } }],
    paths,
    // we are fetching everything, so no need of fallback
    fallback: false,
  };
};

export default PostDetailPage;
