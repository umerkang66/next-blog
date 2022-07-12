import classes from '../../styles/components/posts/post-item.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { FC, ReactElement } from 'react';
import { Post } from '../../common-types/post';

interface PostsItemProps {
  post: Post;
}

const PostItem: FC<PostsItemProps> = ({ post }): ReactElement => {
  const { title, image, excerpt, date, slug } = post;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  // every post images should be in the same folder named after "slug"
  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <a>
          <div className={classes.image}>
            <Image
              src={imagePath}
              alt={title}
              width={300}
              height={200}
              layout={'responsive'}
            />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default PostItem;
