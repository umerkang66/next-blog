import classes from '../../../styles/components/posts/post-detail/post-content.module.css';
import { FC, ReactElement } from 'react';
import ReactMarkdown, { Components } from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import PostHeader from './post-header';
import { Post } from '../../../common-types/post';
import Image from 'next/image';

interface PostContentProps {
  post: Post;
}

const PostContent: FC<PostContentProps> = ({ post }): ReactElement => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderer: Components = {
    img(image): ReactElement {
      return (
        <Image
          src={`/images/posts/${post.slug}/${image.src}`}
          alt={image.alt}
          width={600}
          height={300}
        />
      );
    },

    code(code) {
      const { className, children } = code;
      const language = className?.split('-')[1]; // className is something like language-js => We need the "js" part here
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          children={String(children).replace(/\n$/, '')}
        />
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenderer}>{post.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
