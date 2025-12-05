import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BlogDetailCopy } from '@/components/BlogDetailCopy';
import { blogPosts } from '@/lib/blog-data';
import { blogMarkdownContent } from '@/lib/blog-markdown-data';
import { buildBlogPostJsonLd, SITE_URL } from '@/lib/seo';

interface BlogDetailPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.id }));
}

export function generateMetadata({ params }: BlogDetailPageProps): Metadata {
  const post = blogPosts.find((p) => p.id === params.slug);
  if (!post) {
    return {
      title: 'Færsla fannst ekki | Blogg 55.is',
    };
  }

  const markdown = blogMarkdownContent[post.id];
  const description =
    markdown?.metaDescription ??
    post.excerpt ??
    'Lesið nýjustu innsýn frá 55.is um stafræna markaðssetningu á Íslandi.';
  const url = `${SITE_URL}/blogg/${post.id}`;

  return {
    title: `${post.title} | Blogg 55.is`,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      url,
      title: post.title,
      description,
      type: 'article',
      authors: [post.author.name],
      publishedTime: post.date,
    },
  };
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const post = blogPosts.find((p) => p.id === params.slug);

  if (!post) {
    notFound();
  }

  const markdown = blogMarkdownContent[post.id];
  const description =
    markdown?.metaDescription ??
    post.excerpt ??
    'Lesið nýjustu innsýn frá 55.is um stafræna markaðssetningu á Íslandi.';
  const jsonLd = buildBlogPostJsonLd({
    title: post.title,
    description,
    url: `${SITE_URL}/blogg/${post.id}`,
    datePublished: post.date,
    author: post.author.name,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogDetailCopy postId={post.id} />
    </>
  );
}
