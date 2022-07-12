import { NextPage } from 'next';
import { Post } from '../../common-types/post';
import AllPosts from '../../components/posts/all-posts';

const DUMMY_POSTS: Post[] = [
  {
    slug: 'getting-started-with-nextJs',
    title: 'Getting started with next js',
    image: 'getting-started-nextjs.png',
    excerpt: 'next js is the react framework for production',
    date: '2022-02-10',
    id: '6009c0eee65f6dce28fb3e50',
  },
  {
    slug: 'getting-started-with-nextJs2',
    title: 'Getting started with next js',
    image: 'getting-started-nextjs.png',
    excerpt: 'next js is the react framework for production',
    date: '2022-02-10',
    id: '6009c0eee65f6dce28fb3e51',
  },
  {
    slug: 'getting-started-with-nextJs3',
    title: 'Getting started with next js',
    image: 'getting-started-nextjs.png',
    excerpt: 'next js is the react framework for production',
    date: '2022-02-10',
    id: '6009c0eee65f6dce28fb3e52',
  },
  {
    slug: 'getting-started-with-nextJs4',
    title: 'Getting started with next js',
    image: 'getting-started-nextjs.png',
    excerpt: 'next js is the react framework for production',
    date: '2022-02-10',
    id: '6009c0eee65f6dce28fb3e53',
  },
];

const AllPostsPage: NextPage = () => {
  return <AllPosts posts={DUMMY_POSTS} />;
};

export default AllPostsPage;
