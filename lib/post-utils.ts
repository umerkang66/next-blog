import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post } from '../common-types/post';

const postsDirectory = path.join(process.cwd(), 'content', 'posts');

export function getPostFiles(): string[] {
  return fs.readdirSync(postsDirectory);
}

export function getPostData(postIdentifier: string): Post {
  const postSlug = postIdentifier.replace('.md', '');

  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  // data is metadata in md files, and content is content in "md" files
  const { data, content } = matter(fileContent);

  interface Data {
    title: string;
    image: string;
    excerpt: string;
    date: string;
    isFeatured: boolean;
  }

  const postData = data as Data;

  const fullPostData: Post = { slug: postSlug, ...postData, content };
  return fullPostData;
}

export function getAllPosts(): Post[] {
  const postsFiles = getPostFiles();

  const allPosts = postsFiles.map(postFile => getPostData(postFile));

  // sort by date, in descending order
  return allPosts.sort((postA, postB) => {
    return -(new Date(postA.date).getTime() - new Date(postB.date).getTime());
  });
}

export function getFeaturedPosts(): Post[] {
  return getAllPosts().filter(post => post.isFeatured);
}
