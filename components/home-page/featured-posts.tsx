import { FC, ReactElement } from 'react';
import { Post } from '../../common-types/post';
import classes from '../../styles/components/home-page/featured-posts.module.css';
import PostsGrid from '../posts/posts-grid';

interface FeaturedPostsProps {
  posts: Post[];
}

const FeaturedPosts: FC<FeaturedPostsProps> = ({ posts }): ReactElement => {
  return (
    <section className={classes.latest}>
      <h2>FeaturedPosts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default FeaturedPosts;
