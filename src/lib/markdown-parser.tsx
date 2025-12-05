import React from 'react';
import { COLORS } from './constants';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Copy, Check, ExternalLink, ZoomIn } from 'lucide-react';
import { toast } from 'sonner';

/**
 * MARKDOWN RULES FOR BLOG CONTENT
 * ================================
 * 
 * Use this guide when creating blog posts. The LLM should follow these exact patterns.
 * 
 * HEADINGS:
 * # H1 - Main title (auto-generated from post metadata, don't use in content)
 * ## H2 - Major sections (auto-added to table of contents)
 * ### H3 - Sub-sections (auto-added to table of contents)
 * #### H4 - Minor headings
 * 
 * TEXT FORMATTING:
 * **bold text** - Makes text bold
 * *italic text* - Makes text italic (not recommended, use sparingly)
 * __bold text__ - Alternative bold syntax
 * _italic text_ - Alternative italic syntax
 * ~~strikethrough~~ - Strikethrough text
 * 
 * LISTS:
 * - Item one
 * - Item two
 * - Item three
 * 
 * CALLOUT BOXES (must start line with emoji + **Label:**):
 * 💡 **Pro tip:** Your tip content here
 * ⚠️ **Viðvörun:** Warning content here
 * ✅ **Næstu skref:** Action items here
 * ℹ️ **Athugið:** Info/note content here
 * 
 * CODE BLOCKS:
 * ```
 * Your code here
 * Can be multiple lines
 * ```
 * 
 * QUOTES:
 * > This is a quote
 * 
 * IMAGES:
 * ![Alt text](image-url)
 * ![Alt text](image-url "Optional caption")
 * 
 * PARAGRAPHS:
 * Just write normally. Leave a blank line between paragraphs.
 * 
 * EXAMPLE BLOG POST:
 * 
 * ## Inngangur
 * 
 * This is a paragraph with **bold text** and regular text.
 * 
 * 💡 **Pro tip:** Always start with research!
 * 
 * ## Main Section
 * 
 * Here's a list:
 * - First item with **bold part**
 * - Second item
 * - Third item
 * 
 * ### Sub-section
 * 
 * More content here.
 * 
 * ```
 * const example = "code block";
 * ```
 * 
 * ⚠️ **Viðvörun:** Don't do this common mistake!
 * 
 * ![Example image](https://example.com/image.jpg "Image caption")
 * 
 */

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

interface TableOfContentsItem {
  id: string;
  title: string;
  level: number;
}

/**
 * Parses markdown content into structured data
 */
export function parseMarkdown(markdown: string): {
  sections: ParsedContent[];
  tableOfContents: TableOfContentsItem[];
} {
  const lines = markdown.split('\n');
  const sections: ParsedContent[] = [];
  const tableOfContents: TableOfContentsItem[] = [];
  
  let i = 0;
  while (i < lines.length) {
    const line = lines[i].trim();
    
    // Skip empty lines
    if (!line) {
      i++;
      continue;
    }
    
    // Headings
    if (line.startsWith('#')) {
      const level = line.match(/^#+/)?.[0].length || 2;
      const text = line.replace(/^#+\s*/, '');
      const id = text
        .toLowerCase()
        .replace(/[^a-záðéíóúýþæö0-9\s-]/g, '')
        .replace(/\s+/g, '-');
      
      sections.push({
        type: 'heading',
        level,
        content: text,
        id,
      });
      
      // Add to TOC if H2 or H3
      if (level === 2 || level === 3) {
        tableOfContents.push({
          id,
          title: text,
          level,
        });
      }
      
      i++;
      continue;
    }
    
    // Callouts (💡, ⚠️, ✅, ℹ️)
    const calloutMatch = line.match(/^([💡⚠️✅ℹ️])\s*/);
    if (calloutMatch) {
      const emoji = calloutMatch[1];
      let restOfLine = line.substring(calloutMatch[0].length).trim();
      
      // Remove any non-letter characters at the start (emoji residuals, spaces, etc.)
      restOfLine = restOfLine.replace(/^[^\p{L}]+/u, '');

      // Remove the **Label:** pattern if present (e.g., **Pro tip:**, **Athugið:**, etc.)
      restOfLine = restOfLine.replace(/^\*\*[^*]+:\*\*\s*/, '');
      
      // Collect multi-line callout content
      let calloutContent = restOfLine;
      let j = i + 1;
      while (j < lines.length && lines[j].trim() && !lines[j].trim().startsWith('#') && !/^[💡⚠️✅ℹ️]\\s/.test(lines[j].trim())) {
        calloutContent += ' ' + lines[j].trim();
        j++;
      }
      
      const calloutTypeMap: { [key: string]: 'tip' | 'warning' | 'action' | 'info' } = {
        '💡': 'tip',
        '⚠️': 'warning',
        '✅': 'action',
        'ℹ️': 'info',
      };
      
      sections.push({
        type: 'callout',
        calloutType: calloutTypeMap[emoji] || 'info',
        content: calloutContent,
        emoji: emoji,
      });
      
      i = j;
      continue;
    }
    
    // Code blocks
    if (line.startsWith('```')) {
      let codeContent = '';
      i++;
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        codeContent += lines[i] + '\n';
        i++;
      }
      sections.push({
        type: 'code',
        content: codeContent.trim(),
      });
      i++;
      continue;
    }
    
    // Quotes
    if (line.startsWith('>')) {
      const quoteText = line.replace(/^>\s*/, '');
      sections.push({
        type: 'quote',
        content: quoteText,
      });
      i++;
      continue;
    }
    
    // Images
    if (line.startsWith('![')) {
      const match = line.match(/!\[(.*?)\]\((.*?)(?:\s+"(.*?)")?\)/);
      if (match) {
        sections.push({
          type: 'image',
          imageAlt: match[1],
          imageUrl: match[2],
          imageCaption: match[3],
        });
      }
      i++;
      continue;
    }
    
    // Lists (unordered)
    if (line.startsWith('-') || line.startsWith('*')) {
      const items: string[] = [];
      while (i < lines.length && (lines[i].trim().startsWith('-') || lines[i].trim().startsWith('*'))) {
        const item = lines[i].trim().replace(/^[-*]\s*/, '');
        items.push(item);
        i++;
      }
      sections.push({
        type: 'list',
        items,
      });
      continue;
    }
    
    // Regular paragraph
    let paragraph = line;
    let j = i + 1;
    while (j < lines.length && lines[j].trim() && !lines[j].trim().startsWith('#') && !lines[j].trim().startsWith('-') && !lines[j].trim().startsWith('*') && !lines[j].trim().startsWith('```') && !lines[j].trim().startsWith('>') && !lines[j].trim().startsWith('![') && !/^[💡⚠️✅ℹ️]\s*\*\*/.test(lines[j].trim())) {
      paragraph += ' ' + lines[j].trim();
      j++;
    }
    
    sections.push({
      type: 'paragraph',
      content: paragraph,
    });
    
    i = j;
  }
  
  return { sections, tableOfContents };
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
      { type: 'bold', match: boldMatch, length: boldMatch ? boldMatch[0].length : Infinity, index: boldMatch ? boldMatch.index! : Infinity },
      { type: 'boldUnderscore', match: boldUnderscoreMatch, length: boldUnderscoreMatch ? boldUnderscoreMatch[0].length : Infinity, index: boldUnderscoreMatch ? boldUnderscoreMatch.index! : Infinity },
      { type: 'italic', match: italicAsteriskMatch, length: italicAsteriskMatch ? italicAsteriskMatch[0].length : Infinity, index: italicAsteriskMatch ? italicAsteriskMatch.index! : Infinity },
      { type: 'italicUnderscore', match: italicUnderscoreMatch, length: italicUnderscoreMatch ? italicUnderscoreMatch[0].length : Infinity, index: italicUnderscoreMatch ? italicUnderscoreMatch.index! : Infinity },
      { type: 'strikethrough', match: strikethroughMatch, length: strikethroughMatch ? strikethroughMatch[0].length : Infinity, index: strikethroughMatch ? strikethroughMatch.index! : Infinity },
      { type: 'link', match: linkMatch, length: linkMatch ? linkMatch[0].length : Infinity, index: linkMatch ? linkMatch.index! : Infinity },
    ];
    
    // Find the earliest match
    const earliest = matches.reduce((prev, curr) => curr.index < prev.index ? curr : prev);
    
    if (earliest.match && earliest.index !== Infinity) {
      // Add text before the match
      if (earliest.index > 0) {
        parts.push(remaining.substring(0, earliest.index));
      }
      
      // Add the formatted element
      if (earliest.type === 'link') {
        const linkText = earliest.match[1];
        const linkUrl = earliest.match[2];
        const isExternal = linkUrl.startsWith('http');
        
        parts.push(
          <a
            key={key++}
            href={linkUrl}
            target={isExternal ? '_blank' : '_self'}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            className="blog-content-link"
            style={{
              color: COLORS.accent.cyan,
              textDecoration: 'none',
              borderBottom: `1px solid ${COLORS.accent.cyan}40`,
              transition: 'all 0.2s ease',
              fontWeight: 500,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderBottomColor = COLORS.accent.cyan;
              e.currentTarget.style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderBottomColor = `${COLORS.accent.cyan}40`;
              e.currentTarget.style.color = COLORS.accent.cyan;
            }}
          >
            {linkText}
            {isExternal && (
              <ExternalLink
                size={14}
                style={{
                  display: 'inline-block',
                  marginLeft: '4px',
                  verticalAlign: 'middle',
                  opacity: 0.7,
                }}
              />
            )}
          </a>
        );
      } else {
        const content = earliest.match[1];
        
        if (earliest.type === 'bold' || earliest.type === 'boldUnderscore') {
          parts.push(
            <strong key={key++} style={{ fontWeight: 700, color: COLORS.text.primary }}>
              {content}
            </strong>
          );
        } else if (earliest.type === 'italic' || earliest.type === 'italicUnderscore') {
          parts.push(
            <em key={key++} style={{ fontStyle: 'italic' }}>
              {content}
            </em>
          );
        } else if (earliest.type === 'strikethrough') {
          parts.push(
            <span key={key++} style={{ textDecoration: 'line-through', opacity: 0.7 }}>
              {content}
            </span>
          );
        }
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
 * Renders a single markdown section as a React component
 */
export function renderMarkdownSection(section: ParsedContent, index: number): React.ReactNode {
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
            lineHeight: 1.9,
            color: COLORS.text.secondary,
            marginBottom: '24px',
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
            marginBottom: '28px',
            paddingLeft: '24px',
          }}
        >
          {section.items?.map((item, idx) => (
            <li
              key={idx}
              style={{
                fontSize: '17px',
                lineHeight: 1.9,
                color: COLORS.text.secondary,
                marginBottom: '14px',
                listStyleType: 'disc',
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
        <figure key={index} className="my-8">
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
          key={index}
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
          <div className="flex-1">
            <div
              style={{
                fontSize: '16px',
                lineHeight: 1.7,
                color: COLORS.text.primary,
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
