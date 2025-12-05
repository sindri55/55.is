/**
 * Blog Content Data (DEPRECATED)
 * 
 * This file is kept for backward compatibility only.
 * New blog posts should use the markdown system in /lib/blog-markdown-data.ts
 * 
 * See /BLOG_MARKDOWN_GUIDE.md for documentation on the new system.
 */

export interface TableOfContentsItem {
  id: string;
  title: string;
  level: number; // 1, 2, or 3 for h2, h3, h4
}

export interface BlogContentSection {
  id: string;
  type: 'heading' | 'paragraph' | 'list' | 'quote' | 'image' | 'code' | 'callout';
  heading?: string;
  headingLevel?: number; // 2, 3, or 4 for h2, h3, h4
  content?: string;
  items?: string[]; // for lists
  language?: string; // for code blocks
  imageUrl?: string;
  imageAlt?: string;
  imageCaption?: string;
  calloutType?: 'info' | 'warning' | 'success' | 'tip';
}

export interface BlogFullContent {
  id: string;
  metaDescription: string; // SEO meta description
  metaKeywords: string[]; // SEO keywords
  tableOfContents: TableOfContentsItem[];
  sections: BlogContentSection[];
  tags: string[];
  relatedPosts: string[]; // IDs of related posts
}

// Empty - use blogMarkdownContent from /lib/blog-markdown-data.ts instead
export const blogFullContent: Record<string, BlogFullContent> = {};
