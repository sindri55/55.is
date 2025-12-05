'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search,
  Sparkles,
  ArrowRight,
  Clock,
  TrendingUp,
  Calendar,
  Filter,
} from 'lucide-react';
import Link from 'next/link';
import { Breadcrumb } from './Breadcrumb';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { COLORS } from '../lib/constants';
import {
  blogPosts,
  categories,
  categoryColors,
  type BlogPost,
  type BlogCategory,
} from '../lib/blog-data';

export function BlogCopy() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<BlogCategory | 'Allt'>('Allt');

  // Filtered posts based on search and category
  const filteredPosts = useMemo(() => {
    let filtered = [...blogPosts];

    // Filter by category
    if (activeCategory !== 'Allt') {
      filtered = filtered.filter((post) => post.category === activeCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.category.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [searchQuery, activeCategory]);

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  // Format date to Icelandic
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const months = [
      'jan', 'feb', 'mar', 'apr', 'maí', 'jún',
      'júl', 'ágú', 'sep', 'okt', 'nóv', 'des'
    ];
    return `${date.getDate()}. ${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  return (
    <div className="relative">
      {/* Breadcrumb */}
      <section className="relative pt-24 sm:pt-28 px-6">
        <div className="max-w-[1200px] mx-auto">
          <Breadcrumb items={[{ label: 'Heim', href: '/' }, { label: 'Blogg' }]} />
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 px-6">
        {/* Subtle aurora gradient */}
        <motion.div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 40% at 50% 20%, rgba(0, 255, 194, 0.25) 0%, transparent 60%)',
          }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.12, 0.18, 0.12],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <div className="max-w-[1200px] mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-10">
            {/* Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 mb-6"
              style={{
                borderColor: `${COLORS.accent.cyan}30`,
                background: `${COLORS.accent.cyan}08`,
              }}
            >
              <Sparkles className="h-3.5 w-3.5" style={{ color: COLORS.accent.cyan }} />
              <span
                className="uppercase tracking-[0.15em]"
                style={{
                  fontSize: '10px',
                  color: COLORS.accent.cyan,
                  fontWeight: 600,
                }}
              >
                Blogg
              </span>
            </motion.div>

            {/* H1 Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mb-4"
              style={{
                fontSize: 'clamp(32px, 6vw, 52px)',
                fontWeight: 800,
                lineHeight: 1.1,
                color: COLORS.text.primary,
              }}
            >
              Insights & fréttir
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mb-8"
              style={{
                fontSize: 'clamp(15px, 2.5vw, 18px)',
                color: COLORS.text.secondary,
                lineHeight: 1.6,
              }}
            >
              Tips, tricks og fréttir úr heimi stafrænnar markaðssetningar
            </motion.p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="relative max-w-xl mx-auto"
            >
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5"
                style={{ color: COLORS.text.muted }}
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Leita að greinum..."
                className="w-full pl-12 pr-4 py-4 rounded-xl outline-none transition-all focus:border-cyan-500/50"
                style={{
                  background: 'rgba(21, 23, 28, 0.6)',
                  border: `1px solid ${COLORS.border.default}`,
                  color: COLORS.text.primary,
                  fontSize: '15px',
                  backdropFilter: 'blur(12px)',
                }}
              />
            </motion.div>
          </div>

          {/* Category Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-12"
          >
            <motion.button
              onClick={() => setActiveCategory('Allt')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 rounded-lg transition-all"
              style={{
                background:
                  activeCategory === 'Allt'
                    ? COLORS.gradient.primary
                    : 'rgba(42, 45, 53, 0.5)',
                color: activeCategory === 'Allt' ? COLORS.text.dark : COLORS.text.secondary,
                border: `1px solid ${
                  activeCategory === 'Allt' ? 'transparent' : COLORS.border.default
                }`,
                fontSize: '14px',
                fontWeight: 600,
              }}
            >
              Allt
            </motion.button>

            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-lg transition-all"
                style={{
                  background:
                    activeCategory === category
                      ? categoryColors[category].bg
                      : 'rgba(42, 45, 53, 0.5)',
                  color:
                    activeCategory === category
                      ? categoryColors[category].text
                      : COLORS.text.secondary,
                  border: `1px solid ${
                    activeCategory === category
                      ? categoryColors[category].border
                      : COLORS.border.default
                  }`,
                  fontSize: '14px',
                  fontWeight: 600,
                }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Post (only show if no filters active) */}
      {featuredPost && activeCategory === 'Allt' && !searchQuery && (
        <section className="relative py-8 px-6">
          <div className="max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative group cursor-pointer"
            >
              <Link href={`/blogg/${featuredPost.id}`}>
                <div
                  className="relative rounded-3xl overflow-hidden border"
                  style={{
                    background: COLORS.background.secondary,
                    borderColor: `${COLORS.accent.cyan}40`,
                  }}
                >
                  {/* Featured Badge */}
                  <div className="absolute top-6 left-6 z-20">
                    <motion.div
                      className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 backdrop-blur-md"
                      style={{
                        background: 'rgba(0, 0, 0, 0.6)',
                        borderColor: `${COLORS.accent.cyan}60`,
                      }}
                      animate={{
                        boxShadow: [
                          `0 0 0px ${COLORS.accent.cyan}00`,
                          `0 0 20px ${COLORS.accent.cyan}40`,
                          `0 0 0px ${COLORS.accent.cyan}00`,
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
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
                        Featured
                      </span>
                    </motion.div>
                  </div>

                  {/* Trending Badge */}
                  {featuredPost.trending && (
                    <div className="absolute top-6 right-6 z-20">
                      <div
                        className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 backdrop-blur-md"
                        style={{
                          background: 'rgba(0, 0, 0, 0.6)',
                          borderColor: `${COLORS.accent.purple}60`,
                        }}
                      >
                        <TrendingUp className="h-3.5 w-3.5" style={{ color: COLORS.accent.purple }} />
                        <span
                          style={{
                            fontSize: '11px',
                            color: COLORS.accent.purple,
                            fontWeight: 600,
                          }}
                        >
                          Trending
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="relative h-[300px] md:h-[400px] overflow-hidden">
                      <motion.div
                        className="w-full h-full"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                      >
                        <ImageWithFallback
                          src={featuredPost.image}
                          alt={featuredPost.title}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>

                      {/* Gradient overlay */}
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            'linear-gradient(to right, transparent 0%, rgba(13, 14, 16, 0.5) 100%)',
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div className="p-8 sm:p-10 flex flex-col justify-center">
                      {/* Category */}
                      <div
                        className="inline-flex self-start items-center gap-2 rounded-full border px-3 py-1 mb-4"
                        style={{
                          background: categoryColors[featuredPost.category].bg,
                          borderColor: categoryColors[featuredPost.category].border,
                        }}
                      >
                        <span
                          style={{
                            fontSize: '12px',
                            color: categoryColors[featuredPost.category].text,
                            fontWeight: 600,
                          }}
                        >
                          {featuredPost.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h2
                        className="mb-4 group-hover:text-cyan-400 transition-colors"
                        style={{
                          fontSize: 'clamp(24px, 3vw, 32px)',
                          fontWeight: 700,
                          color: COLORS.text.primary,
                          lineHeight: 1.2,
                        }}
                      >
                        {featuredPost.title}
                      </h2>

                      {/* Excerpt */}
                      <p
                        className="mb-6"
                        style={{
                          fontSize: '16px',
                          color: COLORS.text.secondary,
                          lineHeight: 1.6,
                        }}
                      >
                        {featuredPost.excerpt}
                      </p>

                      {/* Meta Info */}
                      <div className="flex flex-wrap items-center gap-4 mb-6">
                        <div className="flex items-center gap-2">
                          <ImageWithFallback
                            src={featuredPost.author.avatar}
                            alt={featuredPost.author.name}
                            className="w-8 h-8 rounded-full"
                          />
                          <span
                            style={{
                              fontSize: '14px',
                              color: COLORS.text.primary,
                              fontWeight: 500,
                            }}
                          >
                            {featuredPost.author.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4" style={{ color: COLORS.text.muted }} />
                          <span style={{ fontSize: '14px', color: COLORS.text.muted }}>
                            {featuredPost.readTime} mín
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" style={{ color: COLORS.text.muted }} />
                          <span style={{ fontSize: '14px', color: COLORS.text.muted }}>
                            {formatDate(featuredPost.date)}
                          </span>
                        </div>
                      </div>

                      {/* CTA */}
                      <motion.div
                        className="inline-flex items-center gap-2"
                        whileHover={{ x: 4 }}
                        style={{
                          fontSize: '15px',
                          color: COLORS.accent.cyan,
                          fontWeight: 600,
                        }}
                      >
                        Lesa meira
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at center, ${COLORS.accent.cyan}08 0%, transparent 70%)`,
                    }}
                  />
                    </div>
                  </Link>
            </motion.div>
         </div>
       </section>
      )}

      {/* Blog Grid */}
      <section className="relative py-12 px-6">
        <div className="max-w-[1200px] mx-auto">
          <AnimatePresence mode="wait">
            {filteredPosts.length === 0 ? (
              // Empty State
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-center py-20"
              >
                <div
                  className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
                  style={{
                    background: `${COLORS.accent.cyan}15`,
                  }}
                >
                  <Search className="w-10 h-10" style={{ color: COLORS.accent.cyan }} />
                </div>
                <h3
                  className="mb-2"
                  style={{
                    fontSize: '24px',
                    fontWeight: 700,
                    color: COLORS.text.primary,
                  }}
                >
                  Engar greinar fundust
                </h3>
                <p
                  style={{
                    fontSize: '16px',
                    color: COLORS.text.secondary,
                  }}
                >
                  Prófaðu að breyta leitarskilyrðum þínum
                </p>
              </motion.div>
            ) : (
              // Blog Cards Grid
              <motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {regularPosts.map((post, index) => (
                  <BlogCard key={post.id} post={post} index={index} formatDate={formatDate} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Load More Section (placeholder) */}
      {filteredPosts.length > 0 && (
        <section className="relative py-12 px-6">
          <div className="max-w-[1200px] mx-auto text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl"
              style={{
                background: `${COLORS.accent.cyan}15`,
                border: `1px solid ${COLORS.accent.cyan}30`,
                color: COLORS.accent.cyan,
                fontSize: '15px',
                fontWeight: 700,
              }}
            >
              Skoða fleiri greinar
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </section>
      )}
    </div>
  );
}

// Blog Card Component
interface BlogCardProps {
  post: BlogPost;
  index: number;
  formatDate: (date: string) => string;
}

function BlogCard({ post, index, formatDate }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group cursor-pointer"
    >
      <Link
        href={`/blogg/${post.id}`}
        className="block relative h-full rounded-2xl overflow-hidden border transition-all duration-300"
        style={{
          background: COLORS.background.secondary,
          borderColor: COLORS.border.default,
        }}
      >
        {/* Image */}
        <div className="relative h-[200px] overflow-hidden">
          <motion.div
            className="w-full h-full"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.6 }}
          >
            <ImageWithFallback
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, transparent 0%, rgba(13, 14, 16, 0.5) 100%)',
            }}
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex gap-2">
            {post.isNew && (
              <div
                className="rounded-full px-2.5 py-1 backdrop-blur-md"
                style={{
                  background: 'rgba(0, 0, 0, 0.6)',
                  border: `1px solid ${COLORS.accent.cyan}60`,
                }}
              >
                <span
                  style={{
                    fontSize: '10px',
                    color: COLORS.accent.cyan,
                    fontWeight: 700,
                    textTransform: 'uppercase',
                  }}
                >
                  Nýtt
                </span>
              </div>
            )}
            {post.trending && (
              <div
                className="rounded-full px-2.5 py-1 backdrop-blur-md flex items-center gap-1"
                style={{
                  background: 'rgba(0, 0, 0, 0.6)',
                  border: `1px solid ${COLORS.accent.purple}60`,
                }}
              >
                <TrendingUp className="w-3 h-3" style={{ color: COLORS.accent.purple }} />
                <span
                  style={{
                    fontSize: '10px',
                    color: COLORS.accent.purple,
                    fontWeight: 700,
                  }}
                >
                  🔥
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Category */}
          <div
            className="inline-flex items-center gap-2 rounded-full border px-2.5 py-1 mb-3"
            style={{
              background: categoryColors[post.category].bg,
              borderColor: categoryColors[post.category].border,
            }}
          >
            <span
              style={{
                fontSize: '11px',
                color: categoryColors[post.category].text,
                fontWeight: 600,
              }}
            >
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h3
            className="mb-3 group-hover:text-cyan-400 transition-colors"
            style={{
              fontSize: '18px',
              fontWeight: 700,
              color: COLORS.text.primary,
              lineHeight: 1.3,
            }}
          >
            {post.title}
          </h3>

          {/* Excerpt */}
          <p
            className="mb-4 line-clamp-2"
            style={{
              fontSize: '14px',
              color: COLORS.text.secondary,
              lineHeight: 1.5,
            }}
          >
            {post.excerpt}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" style={{ color: COLORS.text.muted }} />
              <span style={{ fontSize: '13px', color: COLORS.text.muted }}>
                {post.readTime} mín
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" style={{ color: COLORS.text.muted }} />
              <span style={{ fontSize: '13px', color: COLORS.text.muted }}>
                {formatDate(post.date)}
              </span>
            </div>
          </div>

          {/* Author */}
          <div className="flex items-center gap-2 pt-4 border-t" style={{ borderColor: COLORS.border.default }}>
            <ImageWithFallback
              src={post.author.avatar}
              alt={post.author.name}
              className="w-7 h-7 rounded-full"
            />
            <span
              style={{
                fontSize: '13px',
                color: COLORS.text.secondary,
                fontWeight: 500,
              }}
            >
              {post.author.name}
            </span>
          </div>
        </div>

        {/* Hover gradient glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
          style={{
            background: `radial-gradient(circle at center, ${COLORS.accent.cyan}05 0%, transparent 70%)`,
            border: `1px solid ${COLORS.accent.cyan}20`,
          }}
        />
      </Link>
    </motion.div>
  );
}
