import classes from '../../../styles/components/posts/post-detail/post-content.module.css';
import { FC, ReactElement } from 'react';
import PostHeader from './post-header';
import { FullPost } from '../../../common-types/post';

interface PostContent {
  post: FullPost;
}

const PostContent: FC<PostContent> = ({ post }): ReactElement => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      {post.content}
    </article>
  );
};

export default PostContent;
