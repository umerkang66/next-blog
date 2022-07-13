import classes from '../../styles/components/posts/posts-grid.module.css';
import { FC, ReactElement } from 'react';
import PostItem from './post-item';
import { Post } from '../../common-types/post';

interface PostsGridProps {
  posts: Post[];
}

const PostsGrid: FC<PostsGridProps> = ({ posts }): ReactElement => {
  return (
    <ul className={classes.grid}>
      {posts.map(post => {
        return <PostItem key={post.slug} post={post} />;
      })}
    </ul>
  );
};

export default PostsGrid;
