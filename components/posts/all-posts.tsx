import classes from '../../styles/components/posts/all-posts.module.css';
import { FC, ReactElement } from 'react';
import PostsGrid from './posts-grid';
import { Post } from '../../common-types/post';

interface AllPostsProps {
  posts: Post[];
}

const AllPosts: FC<AllPostsProps> = ({ posts }): ReactElement => {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default AllPosts;
