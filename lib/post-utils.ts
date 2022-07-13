import fs from 'fs';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'content', 'posts');

export function getAllPosts(): void {
  const postsFiles = fs.readdirSync(postsDirectory);
}
