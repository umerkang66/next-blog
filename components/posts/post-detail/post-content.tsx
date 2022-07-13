import classes from '../../../styles/components/posts/post-detail/post-content.module.css';
import { FC, ReactElement } from 'react';
import ReactMarkdown from 'react-markdown';
import PostHeader from './post-header';
import { FullPost } from '../../../common-types/post';

interface PostContentProps {
  post: FullPost;
}

const PostContent: FC<PostContentProps> = ({ post }): ReactElement => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
