'use client';

/**
 * Enhanced Markdown Renderers with UX improvements
 */

import React, { useState } from 'react';
import { Copy, Check, ZoomIn, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { COLORS } from '../lib/constants';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { toast } from 'sonner';

/**
 * Code Block with Copy Button and Syntax Highlighting
 */
export function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    toast.success('Code copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  // Simple syntax highlighting for JavaScript/TypeScript
  const highlightCode = (code: string) => {
    const keywords = ['const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'while', 'class', 'import', 'export', 'from', 'async', 'await'];
    const strings = code.match(/(["'`])(?:(?=(\\?))\2.)*?\1/g) || [];
    
    let highlighted = code;
    
    // Highlight strings
    strings.forEach(str => {
      highlighted = highlighted.replace(str, `<span style="color: #10b981">${str}</span>`);
    });
    
    // Highlight keywords
    keywords.forEach(keyword => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'g');
      highlighted = highlighted.replace(regex, `<span style="color: #8e6eff">${keyword}</span>`);
    });
    
    // Highlight numbers
    highlighted = highlighted.replace(/\b(\d+)\b/g, '<span style="color: #fbbf24">$1</span>');
    
    // Highlight comments
    highlighted = highlighted.replace(/(\/\/.*$)/gm, '<span style="color: #6b7280; font-style: italic">$1</span>');
    
    return highlighted;
  };

  return (
    <div className="relative group my-6">
      <pre
        className="p-4 rounded-xl overflow-x-auto"
        style={{
          background: 'rgba(0, 0, 0, 0.4)',
          border: `1px solid ${COLORS.border.default}`,
        }}
      >
        <code
          dangerouslySetInnerHTML={{ __html: highlightCode(code) }}
          style={{
            fontSize: '14px',
            fontFamily: 'monospace',
            color: COLORS.accent.cyan,
            lineHeight: 1.6,
          }}
        />
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-lg"
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
export function ZoomableImage({
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
          <ImageWithFallback src={src} alt={alt} className="w-full transition-transform duration-300 group-hover:scale-105" />
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 cursor-zoom-out"
            style={{ background: 'rgba(0, 0, 0, 0.95)' }}
            onClick={() => setIsZoomed(false)}
          >
            <button
              className="absolute top-4 right-4 p-2 rounded-full"
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
              className="max-w-full max-h-full rounded-xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
