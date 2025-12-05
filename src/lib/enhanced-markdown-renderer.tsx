/**
 * Enhanced Markdown Renderer with UX improvements
 * - Code blocks with copy button and syntax highlighting
 * - Zoomable images
 * - External link styling
 * - Better typography
 */

import React, { useState } from 'react';
import { Copy, Check, ZoomIn, X, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { COLORS } from './constants';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { toast } from 'sonner';

interface ParsedContent {
  type: 'heading' | 'paragraph' | 'list' | 'callout' | 'code' | 'quote' | 'image';
  content?: string;
  level?: number;
  id?: string;
  items?: string[];
  calloutType?: 'tip' | 'warning' | 'action' | 'info';
  imageUrl?: string;
  imageAlt?: string;
  imageCaption?: string;
  emoji?: string;
}

/**
 * Code Block with Copy Button and Syntax Highlighting
 */
function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    toast.success('Kóði afritaður!');
    setTimeout(() => setCopied(false), 2000);
  };

  // Simple syntax highlighting
  const highlightCode = (code: string) => {
    const keywords = [
      'const',
      'let',
      'var',
      'function',
      'return',
      'if',
      'else',
      'for',
      'while',
      'class',
      'import',
      'export',
      'from',
      'async',
      'await',
      'true',
      'false',
      'null',
      'undefined',
    ];

    let highlighted = code;

    // Highlight strings (single and double quotes)
    highlighted = highlighted.replace(
      /(["'`])(?:(?=(\\?))\2.)*?\1/g,
      '<span style="color: #10b981">$&</span>'
    );

    // Highlight keywords
    keywords.forEach((keyword) => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'g');
      highlighted = highlighted.replace(
        regex,
        `<span style="color: #8e6eff; font-weight: 600">${keyword}</span>`
      );
    });

    // Highlight numbers
    highlighted = highlighted.replace(/\b(\d+)\b/g, '<span style="color: #fbbf24">$1</span>');

    // Highlight comments
    highlighted = highlighted.replace(
      /(\/\/.*$)/gm,
      '<span style="color: #6b7280; font-style: italic">$1</span>'
    );

    // Highlight operators
    highlighted = highlighted.replace(
      /([=+\-*/<>!&|])/g,
      '<span style="color: #4ea2fd">$1</span>'
    );

    return highlighted;
  };

  return (
    <div className="relative group my-6">
      <pre
        className="p-4 rounded-xl overflow-x-auto"
        style={{
          background: 'rgba(0, 0, 0, 0.4)',
          border: `1px solid ${COLORS.border.default}`,
          maxWidth: '100%',
          overflowX: 'auto',
        }}
      >
        <code
          dangerouslySetInnerHTML={{ __html: highlightCode(code) }}
          style={{
            fontSize: '14px',
            fontFamily: 'monospace',
            color: COLORS.accent.cyan,
            lineHeight: 1.6,
            whiteSpace: 'pre',
            display: 'block',
            wordBreak: 'normal',
            overflowWrap: 'normal',
          }}
        />
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-200 p-2 rounded-lg"
        style={{
          background: 'rgba(0, 0, 0, 0.6)',
          border: `1px solid ${COLORS.border.default}`,
        }}
      >
        {copied ? (
          <Check className="w-4 h-4" style={{ color: COLORS.accent.cyan }} />
        ) : (
          <Copy className="w-4 h-4" style={{ color: COLORS.text.muted }} />
        )}
      </button>
    </div>
  );
}

/**
 * Zoomable Image Component
 */
function ZoomableImage({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <>
      <figure className="my-8">
        <div
          className="rounded-xl overflow-hidden cursor-zoom-in group relative"
          onClick={() => setIsZoomed(true)}
        >
          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
            <ImageWithFallback
              src={src}
              alt={alt}
              className="w-full transition-transform duration-300"
            />
          </motion.div>
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 rounded-full" style={{ background: 'rgba(0, 0, 0, 0.6)' }}>
              <ZoomIn className="w-6 h-6" style={{ color: COLORS.text.primary }} />
            </div>
          </div>
        </div>
        {caption && (
          <figcaption
            className="mt-3 text-center"
            style={{
              fontSize: '14px',
              color: COLORS.text.muted,
              fontStyle: 'italic',
            }}
          >
            {caption}
          </figcaption>
        )}
      </figure>

      {/* Zoom Modal */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 cursor-zoom-out"
            style={{ background: 'rgba(0, 0, 0, 0.95)' }}
            onClick={() => setIsZoomed(false)}
          >
            <button
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-opacity-20 hover:bg-white transition-colors"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: `1px solid ${COLORS.border.default}`,
              }}
              onClick={() => setIsZoomed(false)}
            >
              <X className="w-6 h-6" style={{ color: COLORS.text.primary }} />
            </button>
            <motion.img
              src={src}
              alt={alt}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-full max-h-full rounded-xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/**
 * Processes inline markdown formatting (bold, links, etc.)
 */
function processInlineFormatting(text: string): React.ReactNode {
  if (!text) return text;

  const parts: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  // Process all formatting in one pass
  while (remaining.length > 0) {
    // Try to find the earliest occurrence of any formatting
    const boldMatch = remaining.match(/\*\*(.*?)\*\*/);
    const boldUnderscoreMatch = remaining.match(/__(.*?)__/);
    const italicAsteriskMatch = remaining.match(/(?<!\*)\*(?!\*)([^*]+?)\*(?!\*)/);
    const italicUnderscoreMatch = remaining.match(/(?<!_)_(?!_)([^_]+?)_(?!_)/);
    const strikethroughMatch = remaining.match(/~~(.*?)~~/);
    const linkMatch = remaining.match(/\[([^\]]+)\]\(([^)]+)\)/);

    const matches = [
      {
        type: 'bold',
        match: boldMatch,
        length: boldMatch ? boldMatch[0].length : Infinity,
        index: boldMatch ? boldMatch.index! : Infinity,
      },
      {
        type: 'boldUnderscore',
        match: boldUnderscoreMatch,
        length: boldUnderscoreMatch ? boldUnderscoreMatch[0].length : Infinity,
        index: boldUnderscoreMatch ? boldUnderscoreMatch.index! : Infinity,
      },
      {
        type: 'italic',
        match: italicAsteriskMatch,
        length: italicAsteriskMatch ? italicAsteriskMatch[0].length : Infinity,
        index: italicAsteriskMatch ? italicAsteriskMatch.index! : Infinity,
      },
      {
        type: 'italicUnderscore',
        match: italicUnderscoreMatch,
        length: italicUnderscoreMatch ? italicUnderscoreMatch[0].length : Infinity,
        index: italicUnderscoreMatch ? italicUnderscoreMatch.index! : Infinity,
      },
      {
        type: 'strikethrough',
        match: strikethroughMatch,
        length: strikethroughMatch ? strikethroughMatch[0].length : Infinity,
        index: strikethroughMatch ? strikethroughMatch.index! : Infinity,
      },
      {
        type: 'link',
        match: linkMatch,
        length: linkMatch ? linkMatch[0].length : Infinity,
        index: linkMatch ? linkMatch.index! : Infinity,
      },
    ];

    // Find the earliest match
    const earliest = matches.reduce((prev, curr) => (curr.index < prev.index ? curr : prev));

    if (earliest.match && earliest.index !== Infinity) {
      // Add text before the match
      if (earliest.index > 0) {
        parts.push(remaining.substring(0, earliest.index));
      }

      // Add the formatted element
      const content = earliest.match[1];

      if (earliest.type === 'bold' || earliest.type === 'boldUnderscore') {
        parts.push(
          <strong key={key++} style={{ fontWeight: 700, color: COLORS.text.primary }}>
            {processInlineFormatting(content)}
          </strong>
        );
      } else if (earliest.type === 'italic' || earliest.type === 'italicUnderscore') {
        parts.push(
          <em key={key++} style={{ fontStyle: 'italic' }}>
            {processInlineFormatting(content)}
          </em>
        );
      } else if (earliest.type === 'strikethrough') {
        parts.push(
          <span key={key++} style={{ textDecoration: 'line-through', opacity: 0.7 }}>
            {processInlineFormatting(content)}
          </span>
        );
      } else if (earliest.type === 'link') {
        const url = earliest.match[2];
        const isExternal = url.startsWith('http');
        parts.push(
          <a
            key={key++}
            href={url}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            className="inline-flex items-center gap-1 hover:underline"
            style={{ color: COLORS.accent.cyan, fontWeight: 600 }}
          >
            {content}
            {isExternal && <ExternalLink className="w-3.5 h-3.5" />}
          </a>
        );
      }

      // Update remaining text
      remaining = remaining.substring(earliest.index + earliest.length);
    } else {
      // No more matches, add remaining text
      parts.push(remaining);
      break;
    }
  }

  return parts.length > 0 ? <>{parts}</> : text;
}

/**
 * Renders a single markdown section with enhanced features
 */
export function renderEnhancedMarkdownSection(
  section: ParsedContent,
  index: number
): React.ReactNode {
  switch (section.type) {
    case 'heading':
      const HeadingTag = `h${section.level}` as keyof JSX.IntrinsicElements;
      return (
        <HeadingTag
          key={index}
          id={section.id}
          style={{
            fontSize:
              section.level === 2
                ? 'clamp(24px, 3vw, 32px)'
                : section.level === 3
                ? 'clamp(20px, 2.5vw, 24px)'
                : '18px',
            fontWeight: 700,
            color: COLORS.text.primary,
            marginTop: section.level === 2 ? '48px' : '32px',
            marginBottom: '16px',
            scrollMarginTop: '100px',
            overflowWrap: 'break-word',
            wordBreak: 'break-word',
            maxWidth: '100%',
          }}
        >
          {section.content}
        </HeadingTag>
      );

    case 'paragraph':
      return (
        <p
          key={index}
          style={{
            fontSize: '17px',
            lineHeight: 1.8,
            color: COLORS.text.secondary,
            marginBottom: '20px',
            overflowWrap: 'break-word',
            wordBreak: 'break-word',
            maxWidth: '100%',
          }}
        >
          {processInlineFormatting(section.content || '')}
        </p>
      );

    case 'list':
      return (
        <ul
          key={index}
          style={{
            marginBottom: '24px',
            paddingLeft: '24px',
            maxWidth: '100%',
          }}
        >
          {section.items?.map((item, idx) => (
            <li
              key={idx}
              style={{
                fontSize: '17px',
                lineHeight: 1.8,
                color: COLORS.text.secondary,
                marginBottom: '12px',
                listStyleType: 'disc',
                overflowWrap: 'break-word',
                wordBreak: 'break-word',
                maxWidth: '100%',
              }}
            >
              {processInlineFormatting(item)}
            </li>
          ))}
        </ul>
      );

    case 'quote':
      return (
        <blockquote
          key={index}
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
        <ZoomableImage
          key={index}
          src={section.imageUrl!}
          alt={section.imageAlt!}
          caption={section.imageCaption}
        />
      );

    case 'code':
      return <CodeBlock key={index} code={section.content || ''} />;

    case 'callout':
      const calloutStyles = {
        tip: {
          bg: 'rgba(142, 110, 255, 0.10)',
          border: 'rgba(142, 110, 255, 0.30)',
          icon: '💡',
          iconBg: 'rgba(142, 110, 255, 0.20)',
        },
        warning: {
          bg: 'rgba(255, 193, 7, 0.10)',
          border: 'rgba(255, 193, 7, 0.30)',
          icon: '⚠️',
          iconBg: 'rgba(255, 193, 7, 0.20)',
        },
        action: {
          bg: 'rgba(16, 185, 129, 0.10)',
          border: 'rgba(16, 185, 129, 0.30)',
          icon: '✅',
          iconBg: 'rgba(16, 185, 129, 0.20)',
        },
        info: {
          bg: 'rgba(78, 162, 253, 0.10)',
          border: 'rgba(78, 162, 253, 0.30)',
          icon: 'ℹ️',
          iconBg: 'rgba(78, 162, 253, 0.20)',
        },
      };

      const calloutType = section.calloutType || 'info';
      const style = calloutStyles[calloutType];

      return (
        <div
          key={index}
          className="my-6 p-5 rounded-xl border flex gap-4 items-start"
          style={{
            background: style.bg,
            borderColor: style.border,
            maxWidth: '100%',
            overflow: 'hidden',
          }}
        >
          <div
            className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
            style={{
              background: style.iconBg,
            }}
          >
            <span style={{ fontSize: '18px' }}>{style.icon}</span>
          </div>
          <div className="flex-1" style={{ minWidth: 0, overflow: 'hidden' }}>
            <div
              style={{
                fontSize: '16px',
                lineHeight: 1.7,
                color: COLORS.text.primary,
                overflowWrap: 'break-word',
                wordBreak: 'break-word',
              }}
            >
              {processInlineFormatting(section.content || '')}
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}