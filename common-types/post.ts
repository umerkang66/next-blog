export interface Post {
  title: string;
  image: string;
  excerpt: string;
  date: string;
  slug: string;
}

export interface FullPost extends Post {
  content: string;
}
