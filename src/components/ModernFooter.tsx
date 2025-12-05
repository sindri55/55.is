'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { Linkedin, Instagram, Facebook, ArrowRight } from 'lucide-react';
import { COLORS } from '../lib/constants';
import { useContactSheet } from '../lib/contact-sheet-context';

export function ModernFooter() {
  const { openSheet } = useContactSheet();

  const handleAnchorNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    selector: string
  ) => {
    if (!selector.startsWith('#')) return;
    const target = document.querySelector(selector);
    if (!target) return;
    e.preventDefault();
    const headerOffset = 80;
    const position = target.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top: position, behavior: 'smooth' });
  };

  const footerLinks = {
    services: [
      { label: 'Auglýsingar', href: '/auglysingar' },
      { label: 'Leitarvélabestun', href: '/leitarvelabestun' },
      { label: 'Vefsíðugerð', href: '/vefsidugerd' },
      { label: 'Verðskrá', href: '/verdskra' },
    ],
    contact: [
      { label: 'Hafa samband', href: '#contact' },
      { label: '55@55.is', href: 'mailto:55@55.is' },
      { label: '+354 660 5000', href: 'tel:+3546605000' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/55markadsstofa', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/55markadsstofa/', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/55markadsstofa', label: 'LinkedIn' },
  ];

  return (
    <footer className="relative mt-32 overflow-hidden">
      {/* Ambient Background Gradient */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0, 255, 194, 0.15) 0%, transparent 70%)',
        }}
      />

      {/* Animated Gradient Divider */}
      <div className="relative h-[1px] w-full overflow-hidden">
        <div
          className="h-full"
          style={{
            background: 'linear-gradient(90deg, transparent, #00FFC2 20%, #8E6EFF 50%, #00FFC2 80%, transparent)',
            backgroundSize: '200% 100%',
            animation: 'gradient-flow 8s linear infinite',
          }}
        />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-6 pt-20 pb-12">
        {/* Footer Links Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Logo & Description */}
          <div>
            <Link
              href="/"
              className="inline-block mb-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 rounded-lg"
              aria-label="55.is markaðsstofa"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="relative"
                style={{
                  width: '200px',
                  height: '56px',
                }}
              >
                {/* Base SVG image (hidden, used for loading) */}
                <img
                  src="https://raw.githubusercontent.com/sindri55/photos/9b74385728cb168db98d5aff44acf513e8e6559c/55logo.svg"
                  alt="55.is Markaðsstofa"
                  className="w-full h-full object-contain absolute inset-0"
                  style={{
                    opacity: 0,
                  }}
                />
                
                {/* Gradient overlay using mask */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(135deg, #00FFC2 0%, #00B8FF 100%)',
                    WebkitMaskImage: 'url(https://raw.githubusercontent.com/sindri55/photos/9b74385728cb168db98d5aff44acf513e8e6559c/55logo.svg)',
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskImage: 'url(https://raw.githubusercontent.com/sindri55/photos/9b74385728cb168db98d5aff44acf513e8e6559c/55logo.svg)',
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                    filter: 'drop-shadow(0 2px 8px rgba(0, 255, 194, 0.2))',
                  }}
                />
              </motion.div>
            </Link>
            <p
              style={{
                fontSize: '14px',
                color: COLORS.text.secondary,
                lineHeight: 1.6,
              }}
            >
              Við búum til stafræna upplifun sem skilar árangri.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4
              className="mb-4"
              style={{
                fontSize: '14px',
                fontWeight: 700,
                color: COLORS.text.primary,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}
            >
              Þjónusta
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith('/') ? (
                    <Link
                      href={link.href}
                      className="transition-colors hover:text-[#00FFC2]"
                      style={{
                        fontSize: '14px',
                        color: COLORS.text.secondary,
                      }}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="transition-colors hover:text-[#00FFC2]"
                      style={{
                        fontSize: '14px',
                        color: COLORS.text.secondary,
                      }}
                      onClick={(e) => handleAnchorNavigation(e, link.href)}
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="mb-4"
              style={{
                fontSize: '14px',
                fontWeight: 700,
                color: COLORS.text.primary,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}
            >
              Samband
            </h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => openSheet('general')}
                  className="transition-colors hover:text-[#00FFC2] inline-flex items-center gap-1.5"
                  style={{
                    fontSize: '14px',
                    color: COLORS.text.secondary,
                  }}
                >
                  Hafa samband
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </li>
              <li>
                <a
                  href="mailto:55@55.is"
                  className="transition-colors hover:text-[#00FFC2]"
                  style={{
                    fontSize: '14px',
                    color: COLORS.text.secondary,
                  }}
                >
                  55@55.is
                </a>
              </li>
              <li>
                <a
                  href="tel:+3546605000"
                  className="transition-colors hover:text-[#00FFC2]"
                  style={{
                    fontSize: '14px',
                    color: COLORS.text.secondary,
                  }}
                >
                  +354 660 5000
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6"
          style={{
            borderTop: '1px solid rgba(42, 45, 53, 0.5)',
          }}
        >
          <p
            style={{
              fontSize: '14px',
              color: COLORS.text.muted,
            }}
          >
            © 2025 55.is. Allur réttur áskilinn.{' '}
            <Link href="/personuvernd" className="hover:text-[#00FFC2] transition-colors">
              Persónuvernd
            </Link>
            {' · '}
            <Link href="/skilmalar" className="hover:text-[#00FFC2] transition-colors">
              Skilmálar
            </Link>
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                whileHover={{ y: -2 }}
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all"
                style={{
                  background: 'rgba(42, 45, 53, 0.5)',
                  border: '1px solid rgba(42, 45, 53, 0.8)',
                  color: COLORS.text.secondary,
                }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
