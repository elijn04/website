export interface Author {
  name: string;
  avatar: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  category: string;
  slug: string;
  author: Author;
  keywords?: string[];
} 