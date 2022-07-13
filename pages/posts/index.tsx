import { NextPage } from 'next';
import AllPosts from '../../components/posts/all-posts';

const AllPostsPage: NextPage = () => {
  return <AllPosts posts={[]} />;
};

export default AllPostsPage;
