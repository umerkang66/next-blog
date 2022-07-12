import classes from '../../../styles/components/posts/post-detail/post-header.module.css';
import { FC, ReactElement } from 'react';
import Image from 'next/image';

interface PostHeaderProps {
  title: string;
  // image is full path
  image: string;
}

const PostHeader: FC<PostHeaderProps> = ({ title, image }): ReactElement => {
  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <Image src={image} alt={title} width={200} height={150} />
    </header>
  );
};

export default PostHeader;
