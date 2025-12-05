/**
 * Blog Data
 * Mock blog posts for the 55.is blog page
 */

export type BlogCategory = 'SEO' | 'Auglýsingar' | 'Vefsíðugerð' | 'Almennt';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  author: {
    name: string;
    avatar: string;
  };
  readTime: number; // in minutes
  date: string;
  image: string;
  featured?: boolean;
  trending?: boolean;
  isNew?: boolean; // posts less than 7 days old
}

export const blogPosts: BlogPost[] = [
  {
    id: 'leitarordarannsokn-2024',
    title: 'Hvernig á að velja réttu leitarorðin fyrir íslenskt fyrirtæki',
    excerpt: 'Djúpköfun í leitarorðarannsóknir fyrir íslenskan markað. Við förum í gegnum verkfæri, aðferðir og best practices til að finna leitarorð sem skila árangri.',
    category: 'SEO',
    author: {
      name: 'Sigurður Þór',
      avatar: 'https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200',
    },
    readTime: 8,
    date: '2025-11-28',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    featured: true,
    trending: true,
    isNew: true,
  },
  {
    id: 'local-seo-island',
    title: 'Local SEO fyrir íslensk fyrirtæki: Fullkominn leiðarvísir',
    excerpt: 'Ef þú rekur fyrirtæki með staðbundna þjónustu þarftu að vera sýnilegur á Google Maps og í local leit. Hér er leiðarvísirinn.',
    category: 'SEO',
    author: {
      name: 'Sigurður Þór',
      avatar: 'https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200',
    },
    readTime: 12,
    date: '2025-11-25',
    image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    trending: true,
  },
];

// Helper function to check if post is new (less than 7 days old)
export function isPostNew(dateString: string): boolean {
  const postDate = new Date(dateString);
  const today = new Date('2025-11-30'); // Current date from system prompt
  const diffTime = Math.abs(today.getTime() - postDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays <= 7;
}

// Add isNew flag to posts
blogPosts.forEach(post => {
  post.isNew = isPostNew(post.date);
});

// Category colors matching design system
export const categoryColors: Record<BlogCategory, { bg: string; text: string; border: string }> = {
  SEO: {
    bg: 'rgba(0, 255, 194, 0.10)',
    text: '#00FFC2',
    border: 'rgba(0, 255, 194, 0.30)',
  },
  Auglýsingar: {
    bg: 'rgba(142, 110, 255, 0.10)',
    text: '#8E6EFF',
    border: 'rgba(142, 110, 255, 0.30)',
  },
  Vefsíðugerð: {
    bg: 'rgba(78, 162, 253, 0.10)',
    text: '#4EA2FD',
    border: 'rgba(78, 162, 253, 0.30)',
  },
  Almennt: {
    bg: 'rgba(255, 255, 255, 0.08)',
    text: '#B8BBC2',
    border: 'rgba(255, 255, 255, 0.15)',
  },
};

// Get all unique categories
export const categories: BlogCategory[] = ['Almennt', 'SEO', 'Auglýsingar', 'Vefsíðugerð'];