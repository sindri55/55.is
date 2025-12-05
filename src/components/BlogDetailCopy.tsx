'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import {
  ArrowLeft,
  Clock,
  Calendar,
  Share2,
  Facebook,
  Linkedin,
  Link2,
  Check,
  ArrowRight,
  Sparkles,
  ArrowUp,
  Printer,
} from 'lucide-react';
import { Breadcrumb } from './Breadcrumb';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { COLORS } from '../lib/constants';
import { useContactSheet } from '../lib/contact-sheet-context';
import {
  blogPosts,
  categoryColors,
  type BlogPost,
} from '../lib/blog-data';
import type { BlogContentSection } from '../lib/blog-content-data';
import {
  blogMarkdownContent,
  type BlogPostMarkdown,
} from '../lib/blog-markdown-data';
import { parseMarkdown } from '../lib/markdown-parser';
import { renderEnhancedMarkdownSection } from '../lib/enhanced-markdown-renderer';
import { toast } from 'sonner';

interface BlogDetailCopyProps {
  postId: string;
}

export function BlogDetailCopy({ postId }: BlogDetailCopyProps) {
  const post = blogPosts.find((p) => p.id === postId);
  const markdownContent = blogMarkdownContent[postId];

  if (!post || !markdownContent) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 style={{ fontSize: '24px', color: COLORS.text.primary, marginBottom: '16px' }}>
            Grein fannst ekki
          </h2>
          <Link
            href="/blogg"
            className="inline-flex items-center gap-2"
            style={{ color: COLORS.accent.cyan, fontSize: '16px' }}
          >
            <ArrowLeft className="w-5 h-5" />
            Til baka í blogg
          </Link>
        </div>
      </div>
    );
  }

  return <BlogDetailContent post={post} markdownContent={markdownContent} />;
}

interface BlogDetailContentProps {
  post: BlogPost;
  markdownContent: BlogPostMarkdown;
}

function BlogDetailContent({ post, markdownContent }: BlogDetailContentProps) {
  const { openSheet } = useContactSheet();

  const parsedContent = parseMarkdown(markdownContent.content);
  const contentSections = parsedContent.sections;
  const tableOfContents = parsedContent.tableOfContents;
  const metaDescription = markdownContent.metaDescription;
  const tags = markdownContent.tags;
  const relatedPostIds = markdownContent.relatedPosts || [];

  const [activeSection, setActiveSection] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [tocFixed, setTocFixed] = useState(false);
  const [tocAbsoluteTop, setTocAbsoluteTop] = useState<number | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const tocStartRef = useRef<HTMLDivElement>(null);
  const contentEndRef = useRef<HTMLDivElement>(null);
  const tocRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [readingProgress, setReadingProgress] = useState(0);
  
  useEffect(() => {
    const updateProgress = () => {
      const scrolled = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / height) * 100;
      setReadingProgress(Math.min(Math.max(progress, 0), 100));
      setShowBackToTop(scrolled > 500);
    };

    window.addEventListener('scroll', updateProgress);
    updateProgress();

    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  const relatedPosts = relatedPostIds
    ?.map((id) => blogPosts.find((p) => p.id === id))
    .filter((p): p is BlogPost => p !== undefined)
    .slice(0, 3);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const months = [
      'janúar',
      'febrúar',
      'mars',
      'apríl',
      'maí',
      'júní',
      'júlí',
      'ágúst',
      'september',
      'október',
      'nóvember',
      'desember',
    ];
    return `${date.getDate()}. ${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  // Share functionality
  const handleShare = (platform: 'facebook' | 'linkedin' | 'copy') => {
    const url = window.location.href;
    const title = post?.title || '';

    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'linkedin':
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
          '_blank'
        );
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        setCopied(true);
        toast.success('Hlekkur afritaður!');
        setTimeout(() => setCopied(false), 2000);
        break;
    }
  };

  // Intersection observer for TOC
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -80% 0px' }
    );

    tableOfContents.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [tableOfContents]);

  // Scroll listener for TOC fixed position
  useEffect(() => {
    const handleScroll = () => {
      if (!tocStartRef.current || !contentEndRef.current || !tocRef.current) return;

      const asideRect = tocStartRef.current.getBoundingClientRect();
      const contentEndRect = contentEndRef.current.getBoundingClientRect();
      const tocHeight = tocRef.current.clientHeight;
      
      // Check if we should be fixed
      const shouldBeFixed = asideRect.top <= 120;
      setTocFixed(shouldBeFixed);
      
      // Check if TOC bottom would go past content end
      if (shouldBeFixed) {
        const tocBottom = 120 + tocHeight;
        const distanceToContentEnd = contentEndRect.top;
        
        // Add buffer zone (80px) to prevent flickering
        // If TOC bottom would pass hashtags, switch to absolute positioning
        if (tocBottom >= distanceToContentEnd - 80) { // Increased buffer from 40 to 80
          // Calculate the stop position relative to the aside container
          const contentEndOffsetTop = contentEndRef.current.offsetTop;
          const asideOffsetTop = tocStartRef.current.offsetTop;
          const relativeContentEndTop = contentEndOffsetTop - asideOffsetTop;
          const stopPosition = relativeContentEndTop - tocHeight - 40; // Stop 40px above hashtags
          setTocAbsoluteTop(Math.max(0, stopPosition));
        } else {
          setTocAbsoluteTop(null);
        }
      } else {
        setTocAbsoluteTop(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll); // Recalculate on resize
    handleScroll(); // Check initial position

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Smooth scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  if (!post || !markdownContent) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 style={{ fontSize: '24px', color: COLORS.text.primary, marginBottom: '16px' }}>
            Grein fannst ekki
          </h2>
          <Link
            href="/blogg"
            className="inline-flex items-center gap-2"
            style={{ color: COLORS.accent.cyan, fontSize: '16px' }}
          >
            <ArrowLeft className="w-5 h-5" />
            Til baka í blogg
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-50 origin-left"
        style={{
          scaleX,
          background: COLORS.gradient.primary,
        }}
      />

      {/* Breadcrumb */}
      <section className="relative pt-24 sm:pt-28 px-6">
        <div className="max-w-[1200px] mx-auto">
          <Breadcrumb
            items={[
              { label: 'Heim', href: '/' },
              { label: 'Blogg', href: '/blogg' },
              { label: post.title },
            ]}
          />
        </div>
      </section>

      {/* Article Header */}
      <article className="relative">
        <header className="relative py-8 sm:py-12 px-6">
          <div className="max-w-[880px] mx-auto">
            {/* Category Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-6"
            >
              <div
                className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5"
                style={{
                  background: categoryColors[post.category].bg,
                  borderColor: categoryColors[post.category].border,
                }}
              >
                <span
                  style={{
                    fontSize: '13px',
                    color: categoryColors[post.category].text,
                    fontWeight: 600,
                  }}
                >
                  {post.category}
                </span>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mb-6"
              style={{
                fontSize: 'clamp(28px, 5vw, 48px)',
                fontWeight: 800,
                lineHeight: 1.15,
                color: COLORS.text.primary,
              }}
            >
              {post.title}
            </motion.h1>

            {/* Meta Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mb-8"
              style={{
                fontSize: 'clamp(16px, 2.5vw, 20px)',
                color: COLORS.text.secondary,
                lineHeight: 1.6,
              }}
            >
              {metaDescription}
            </motion.p>

            {/* Author & Meta Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pb-8 border-b"
              style={{ borderColor: COLORS.border.default }}
            >
              <div className="flex items-center gap-3">
                <ImageWithFallback
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div style={{ fontSize: '15px', color: COLORS.text.primary, fontWeight: 600 }}>
                    {post.author.name}
                  </div>
                  <div style={{ fontSize: '13px', color: COLORS.text.muted }}>Höfundur</div>
                </div>
              </div>

              <div className="h-8 w-px" style={{ background: COLORS.border.default }} />

              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" style={{ color: COLORS.text.muted }} />
                <span style={{ fontSize: '14px', color: COLORS.text.muted }}>
                  {formatDate(post.date)}
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" style={{ color: COLORS.text.muted }} />
                <span style={{ fontSize: '14px', color: COLORS.text.muted }}>
                  {post.readTime} mín lestur
                </span>
              </div>
            </motion.div>
          </div>
        </header>

        {/* Featured Image */}
        <section className="relative px-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-[1200px] mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-video">
              <ImageWithFallback
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </section>

        {/* Main Content + Sidebar */}
        <section className="relative px-6 pb-20">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-[280px_1fr_200px] gap-12">
              {/* Left Sidebar - Table of Contents (Desktop) */}
              <aside className="hidden lg:block" ref={tocStartRef} style={{ position: 'relative' }}>
                <div
                  ref={tocRef}
                  style={{
                    paddingRight: '8px',
                    position: tocAbsoluteTop !== null ? 'absolute' : tocFixed ? 'fixed' : 'relative',
                    top: tocAbsoluteTop !== null ? `${tocAbsoluteTop}px` : tocFixed ? '120px' : 'auto',
                    width: tocFixed || tocAbsoluteTop !== null ? '280px' : 'auto',
                  }}
                >
                  <h3
                    className="mb-4"
                    style={{
                      fontSize: '13px',
                      fontWeight: 700,
                      color: COLORS.text.primary,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    Efnisyfirlit
                  </h3>
                  <nav>
                    {tableOfContents.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="block w-full text-left py-2.5 transition-all duration-200"
                        style={{
                          fontSize: '15px',
                          lineHeight: 1.5,
                          color:
                            activeSection === item.id ? COLORS.accent.cyan : COLORS.text.secondary,
                          paddingLeft: `${(item.level - 2) * 12 + 12}px`,
                          fontWeight: activeSection === item.id ? 600 : 400,
                          borderLeft:
                            activeSection === item.id
                              ? `2px solid ${COLORS.accent.cyan}`
                              : '2px solid transparent',
                        }}
                        onMouseEnter={(e) => {
                          if (activeSection !== item.id) {
                            e.currentTarget.style.color = COLORS.text.primary;
                            e.currentTarget.style.paddingLeft = `${(item.level - 2) * 12 + 16}px`;
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (activeSection !== item.id) {
                            e.currentTarget.style.color = COLORS.text.secondary;
                            e.currentTarget.style.paddingLeft = `${(item.level - 2) * 12 + 12}px`;
                          }
                        }}
                      >
                        {item.title}
                      </button>
                    ))}
                  </nav>
                </div>
              </aside>

              {/* Main Content */}
              <div style={{ minWidth: 0, width: '100%', overflow: 'hidden' }}>
                <div
                  className="prose prose-invert max-w-none"
                  style={{
                    color: COLORS.text.secondary,
                    width: '100%',
                    maxWidth: '100%',
                    overflowWrap: 'break-word',
                    wordBreak: 'break-word',
                  }}
                >
                  {contentSections.map((section, index) => renderEnhancedMarkdownSection(section, index))}
                </div>

                {/* Tags */}
                <div className="mt-12 pt-8 border-t" style={{ borderColor: COLORS.border.default }} ref={contentEndRef}>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-lg"
                        style={{
                          background: 'rgba(42, 45, 53, 0.5)',
                          border: `1px solid ${COLORS.border.default}`,
                          fontSize: '13px',
                          color: COLORS.text.secondary,
                        }}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Sidebar - Share (Desktop) */}
              <aside className="hidden lg:block">
                <div className="sticky top-32">
                  <h3
                    className="mb-4"
                    style={{
                      fontSize: '14px',
                      fontWeight: 700,
                      color: COLORS.text.primary,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    Deila
                  </h3>
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => handleShare('facebook')}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg transition-colors"
                      style={{
                        background: 'rgba(42, 45, 53, 0.5)',
                        border: `1px solid ${COLORS.border.default}`,
                        color: COLORS.text.secondary,
                        fontSize: '14px',
                      }}
                    >
                      <Facebook className="w-4 h-4" />
                      Facebook
                    </button>
                    <button
                      onClick={() => handleShare('linkedin')}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg transition-colors"
                      style={{
                        background: 'rgba(42, 45, 53, 0.5)',
                        border: `1px solid ${COLORS.border.default}`,
                        color: COLORS.text.secondary,
                        fontSize: '14px',
                      }}
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </button>
                    <button
                      onClick={() => handleShare('copy')}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg transition-colors"
                      style={{
                        background: 'rgba(42, 45, 53, 0.5)',
                        border: `1px solid ${COLORS.border.default}`,
                        color: COLORS.text.secondary,
                        fontSize: '14px',
                      }}
                    >
                      {copied ? <Check className="w-4 h-4" /> : <Link2 className="w-4 h-4" />}
                      {copied ? 'Afritað!' : 'Afrita'}
                    </button>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Author Bio */}
        <section className="relative px-6 py-12">
          <div className="max-w-[880px] mx-auto">
            <div
              className="rounded-2xl p-8 border"
              style={{
                background: COLORS.background.secondary,
                borderColor: COLORS.border.default,
              }}
            >
              <div className="flex items-start gap-4">
                <ImageWithFallback
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-20 h-20 rounded-full flex-shrink-0"
                />
                <div>
                  <h3
                    className="mb-2"
                    style={{
                      fontSize: '20px',
                      fontWeight: 700,
                      color: COLORS.text.primary,
                    }}
                  >
                    Um höfundinn
                  </h3>
                  <p
                    className="mb-1"
                    style={{
                      fontSize: '18px',
                      fontWeight: 600,
                      color: COLORS.accent.cyan,
                    }}
                  >
                    {post.author.name}
                  </p>
                  <p
                    style={{
                      fontSize: '15px',
                      color: COLORS.text.secondary,
                      lineHeight: 1.6,
                    }}
                  >
                    Stofnandi og framkvæmdastjóri 55.is. Sérfræðingur í stafrænni markaðssetningu
                    með áralanga reynslu af SEO, Google Ads og vefsíðugerð fyrir íslensk fyrirtæki.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative px-6 py-12">
          <div className="max-w-[880px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl p-8 sm:p-12 overflow-hidden text-center"
              style={{
                background: COLORS.background.secondary,
                border: `1px solid ${COLORS.border.default}`,
              }}
            >
              {/* Gradient glow */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  background:
                    'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0, 255, 194, 0.2) 0%, transparent 70%)',
                }}
              />

              <div className="relative z-10">
                <div
                  className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 mb-4"
                  style={{
                    borderColor: `${COLORS.accent.cyan}30`,
                    background: `${COLORS.accent.cyan}08`,
                  }}
                >
                  <Sparkles className="h-3.5 w-3.5" style={{ color: COLORS.accent.cyan }} />
                  <span
                    className="uppercase tracking-wider"
                    style={{
                      fontSize: '11px',
                      color: COLORS.accent.cyan,
                      fontWeight: 700,
                    }}
                  >
                    Tilboð
                  </span>
                </div>

                <h3
                  className="mb-4"
                  style={{
                    fontSize: 'clamp(24px, 4vw, 32px)',
                    fontWeight: 800,
                    color: COLORS.text.primary,
                  }}
                >
                  Vilt þú ná betri árangri?
                </h3>
                <p
                  className="mb-8"
                  style={{
                    fontSize: '16px',
                    color: COLORS.text.secondary,
                    lineHeight: 1.6,
                  }}
                >
                  Við hjálpum íslenskum fyrirtækjum að vaxa með gagnreyndri stafrænni
                  markaðssetningu. Fáðu ókeypis ráðgjöf í dag.
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => openSheet('general')}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl"
                  style={{
                    background: COLORS.gradient.primary,
                    color: COLORS.text.dark,
                    fontSize: '16px',
                    fontWeight: 700,
                    boxShadow: `0 8px 24px ${COLORS.accent.cyan}40`,
                  }}
                >
                  <Sparkles className="w-5 h-5" />
                  Tökum spjall
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts && relatedPosts.length > 0 && (
          <section className="relative px-6 py-12">
            <div className="max-w-[1200px] mx-auto">
              <h2
                className="mb-8"
                style={{
                  fontSize: 'clamp(24px, 3vw, 32px)',
                  fontWeight: 800,
                  color: COLORS.text.primary,
                }}
              >
                Tengdar greinar
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost, index) => (
                  <motion.div
                    key={relatedPost.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group cursor-pointer"
                  >
                    <Link
                      href={`/blogg/${relatedPost.id}`}
                      className="block rounded-2xl overflow-hidden border transition-all duration-300"
                      style={{
                        background: COLORS.background.secondary,
                        borderColor: COLORS.border.default,
                      }}
                    >
                      {/* Image */}
                      <div className="relative h-[160px] overflow-hidden">
                        <motion.div
                          className="w-full h-full"
                          whileHover={{ scale: 1.08 }}
                          transition={{ duration: 0.6 }}
                        >
                          <ImageWithFallback
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <div
                          className="inline-block rounded-full border px-2.5 py-1 mb-3"
                          style={{
                            background: categoryColors[relatedPost.category].bg,
                            borderColor: categoryColors[relatedPost.category].border,
                            fontSize: '11px',
                            color: categoryColors[relatedPost.category].text,
                            fontWeight: 600,
                          }}
                        >
                          {relatedPost.category}
                        </div>
                        <h3
                          className="group-hover:text-cyan-400 transition-colors"
                          style={{
                            fontSize: '16px',
                            fontWeight: 700,
                            color: COLORS.text.primary,
                            lineHeight: 1.3,
                          }}
                        >
                          {relatedPost.title}
                        </h3>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 p-4 rounded-full shadow-2xl z-40"
            style={{
              background: COLORS.gradient.primary,
              color: COLORS.text.dark,
              border: 'none',
              cursor: 'pointer',
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Print Button (Desktop) */}
      <div className="hidden lg:block fixed bottom-8 left-8 z-40">
        <button
          onClick={() => window.print()}
          className="p-4 rounded-full shadow-lg transition-all duration-300"
          style={{
            background: 'rgba(42, 45, 53, 0.8)',
            border: `1px solid ${COLORS.border.default}`,
            color: COLORS.text.secondary,
            cursor: 'pointer',
          }}
        >
          <Printer className="w-5 h-5" />
        </button>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          /* Hide navigation, footer, and UI elements */
          header, footer, nav, button, .no-print {
            display: none !important;
          }
          
          /* Reset colors for print */
          body {
            background: white !important;
            color: black !important;
          }
          
          /* Ensure content is visible */
          article {
            max-width: 100% !important;
            padding: 0 !important;
          }
          
          /* Hide reading progress bar */
          .fixed {
            position: relative !important;
          }
          
          /* Page breaks */
          h2 {
            page-break-after: avoid;
          }
          
          img {
            max-width: 100% !important;
            page-break-inside: avoid;
          }
          
          /* Link URLs */
          a[href]:after {
            content: " (" attr(href) ")";
          }
        }
      `}</style>
    </div>
  );
}

// Content Section Component
interface ContentSectionProps {
  section: BlogContentSection;
}

function ContentSection({ section }: ContentSectionProps) {
  switch (section.type) {
    case 'heading':
      const HeadingTag = `h${section.headingLevel}` as keyof JSX.IntrinsicElements;
      return (
        <HeadingTag
          id={section.id}
          style={{
            fontSize:
              section.headingLevel === 2
                ? 'clamp(24px, 3vw, 32px)'
                : section.headingLevel === 3
                ? 'clamp(20px, 2.5vw, 24px)'
                : '18px',
            fontWeight: 700,
            color: COLORS.text.primary,
            marginTop: section.headingLevel === 2 ? '48px' : '32px',
            marginBottom: '16px',
            scrollMarginTop: '100px',
          }}
        >
          {section.heading}
        </HeadingTag>
      );

    case 'paragraph':
      return (
        <p
          style={{
            fontSize: '17px',
            lineHeight: 1.8,
            color: COLORS.text.secondary,
            marginBottom: '20px',
          }}
        >
          {section.content}
        </p>
      );

    case 'list':
      return (
        <ul
          style={{
            marginBottom: '24px',
            paddingLeft: '24px',
          }}
        >
          {section.items?.map((item, index) => (
            <li
              key={index}
              style={{
                fontSize: '17px',
                lineHeight: 1.8,
                color: COLORS.text.secondary,
                marginBottom: '12px',
                listStyleType: 'disc',
              }}
              dangerouslySetInnerHTML={{ __html: item }}
            />
          ))}
        </ul>
      );

    case 'quote':
      return (
        <blockquote
          className="relative my-8 pl-6 border-l-4"
          style={{
            borderColor: COLORS.accent.cyan,
            fontStyle: 'italic',
          }}
        >
          <p
            style={{
              fontSize: '20px',
              lineHeight: 1.6,
              color: COLORS.text.primary,
              fontWeight: 500,
            }}
          >
            {section.content}
          </p>
        </blockquote>
      );

    case 'image':
      return (
        <figure className="my-8">
          <div className="rounded-xl overflow-hidden">
            <ImageWithFallback
              src={section.imageUrl!}
              alt={section.imageAlt!}
              className="w-full"
            />
          </div>
          {section.imageCaption && (
            <figcaption
              className="mt-3 text-center"
              style={{
                fontSize: '14px',
                color: COLORS.text.muted,
                fontStyle: 'italic',
              }}
            >
              {section.imageCaption}
            </figcaption>
          )}
        </figure>
      );

    case 'code':
      return (
        <pre
          className="my-6 p-4 rounded-xl overflow-x-auto"
          style={{
            background: 'rgba(0, 0, 0, 0.4)',
            border: `1px solid ${COLORS.border.default}`,
          }}
        >
          <code
            style={{
              fontSize: '14px',
              fontFamily: 'monospace',
              color: COLORS.accent.cyan,
              lineHeight: 1.6,
            }}
          >
            {section.content}
          </code>
        </pre>
      );

    case 'callout':
      const calloutStyles = {
        info: {
          bg: 'rgba(78, 162, 253, 0.10)',
          border: 'rgba(78, 162, 253, 0.30)',
          icon: 'ℹ️',
        },
        warning: {
          bg: 'rgba(255, 193, 7, 0.10)',
          border: 'rgba(255, 193, 7, 0.30)',
          icon: '⚠️',
        },
        success: {
          bg: 'rgba(16, 185, 129, 0.10)',
          border: 'rgba(16, 185, 129, 0.30)',
          icon: '✅',
        },
        tip: {
          bg: 'rgba(142, 110, 255, 0.10)',
          border: 'rgba(142, 110, 255, 0.30)',
          icon: '💡',
        },
      };

      const calloutType = section.calloutType || 'info';
      const style = calloutStyles[calloutType];

      return (
        <div
          className="my-6 p-4 rounded-xl border"
          style={{
            background: style.bg,
            borderColor: style.border,
          }}
        >
          <p
            style={{
              fontSize: '16px',
              lineHeight: 1.7,
              color: COLORS.text.primary,
            }}
            dangerouslySetInnerHTML={{ __html: section.content || '' }}
          />
        </div>
      );

    default:
      return null;
  }
}
