import { NextPage } from 'next';
import PostContent from '../../components/posts/post-detail/post-content';
import { FullPost } from '../../common-types/post';

const DUMMY_POST: FullPost = {
  slug: 'getting-started-with-nextJs',
  title: 'Getting started with next js',
  image: 'getting-started-nextjs.png',
  excerpt: 'next js is the react framework for production',
  date: '2022-02-10',
  content: '# This is a first post',
};

const PostDetailPage: NextPage = () => {
  return <PostContent post={DUMMY_POST} />;
};

export default PostDetailPage;
