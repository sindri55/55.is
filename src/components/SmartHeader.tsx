'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { COLORS } from '../lib/constants';
import { useContactSheet } from '../lib/contact-sheet-context';

export function SmartHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const { openSheet } = useContactSheet();
  const prefersReducedMotion = useReducedMotion();
  const pathname = usePathname();

  const [dropdownLeft, setDropdownLeft] = useState(0);

  // Dropdown positioning
  useEffect(() => {
    const updateDropdownPosition = () => {
      if (servicesButtonRef.current) {
        const buttonRect = servicesButtonRef.current.getBoundingClientRect();
        setDropdownLeft(buttonRect.left);
      }
    };

    if (servicesOpen) {
      updateDropdownPosition();
    }

    window.addEventListener('resize', updateDropdownPosition);
    return () => window.removeEventListener('resize', updateDropdownPosition);
  }, [servicesOpen]);

  // Scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Scrolled state
      setScrolled(scrollY > 50);

      // Progress bar
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = windowHeight > 0 ? Math.min((scrollY / windowHeight) * 100, 100) : 0;
      setScrollProgress(progress);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setServicesOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Click outside to close mobile menu
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    
    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  // Smooth scroll to anchors
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('#')) return;
    
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { 
      label: 'Þjónustur', 
      href: '#services', 
      hasDropdown: true,
      dropdown: [
        { label: 'Stafrænar auglýsingar', href: '/auglysingar' },
        { label: 'Leitarvélabestun', href: '/leitarvelabestun' },
        { label: 'Vefsíðugerð', href: '/vefsidugerd' },
      ]
    },
    { label: 'Verðskrá', href: '/verdskra' },
    { label: 'Um okkur', href: '/um-okkur' },
  ];

  const isActive = (href: string) => {
    if (href === '/' || href === '#') {
      return pathname === '/';
    }
    if (href === '#services') {
      return pathname === '/';
    }
    if (href === '/blogg') {
      return pathname.startsWith('/blogg');
    }
    return pathname === href;
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
        }}
        transition={{ 
          opacity: { duration: 0.6 },
          y: { duration: 0.3, ease: [0.23, 1, 0.32, 1] }
        }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <motion.div
          animate={{
            height: scrolled ? '52px' : '56px',
          }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="relative"
          style={{
            background: scrolled 
              ? 'rgba(10, 11, 13, 0.7)' 
              : 'rgba(10, 11, 13, 0.05)',
            backdropFilter: scrolled ? 'blur(32px) saturate(180%)' : 'blur(8px)',
            WebkitBackdropFilter: scrolled ? 'blur(32px) saturate(180%)' : 'blur(8px)',
          }}
        >
          {/* Top subtle border - only visible on scroll */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-[1px]"
            style={{
              background: 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.05), transparent)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: scrolled ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Subtle top shadow for depth */}
          <motion.div
            className="absolute -bottom-6 left-0 right-0 h-6 pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.1), transparent)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: scrolled ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Content Container */}
          <div className="max-w-[1400px] mx-auto h-full px-6 lg:px-8 flex items-center">
            {/* Logo - Left */}
            <Link
              href="/"
              className="flex items-center gap-2.5 shrink-0 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 relative"
              aria-label="55.is markaðsstofa - fara á forsíðu"
              style={{
                marginTop: '-8px',
                marginBottom: '-8px',
              }}
            >
              <motion.div 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="relative"
                style={{
                  width: scrolled ? '180px' : '200px',
                  height: scrolled ? '50px' : '56px',
                  transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
                }}
              >
                {/* Base SVG image */}
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
                    filter: 'drop-shadow(0 2px 8px rgba(0, 255, 194, 0.15))',
                  }}
                />
              </motion.div>
            </Link>

            {/* Navigation - Center (absolute positioning for true centering) */}
            <nav 
              className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-1"
              role="navigation"
              aria-label="Aðalvalmynd"
            >
              {navItems.map((item) => (
                <div 
                  key={item.label} 
                  className="relative"
                >
                  {item.hasDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <motion.button
                        ref={servicesButtonRef}
                        className="flex items-center gap-1 px-3 py-1.5 rounded-md relative focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50"
                        whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.15 }}
                        style={{ 
                          fontSize: '14px',
                          fontWeight: 500,
                          color: servicesOpen ? COLORS.accent.cyan : COLORS.text.secondary,
                        }}
                        aria-expanded={servicesOpen}
                        aria-haspopup="true"
                      >
                        <span className="transition-colors duration-200">
                          {item.label}
                        </span>
                        <motion.div
                          animate={{ rotate: servicesOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="w-3.5 h-3.5" />
                        </motion.div>
                      </motion.button>
                      
                      {/* Invisible hover extension downward */}
                      {servicesOpen && (
                        <div 
                          className="absolute left-0 right-0"
                          style={{
                            top: '100%',
                            height: scrolled ? '12px' : '16px',
                          }}
                        />
                      )}
                    </div>
                  ) : (
                    <motion.div
                      whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.15 }}
                      className="rounded-md"
                    >
                      {item.href.startsWith('#') ? (
                        <a
                          href={item.href}
                          className="block px-3 py-1.5 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 relative"
                          style={{ 
                            fontSize: '14px',
                            fontWeight: 500,
                            color: isActive(item.href) ? COLORS.text.primary : COLORS.text.secondary,
                          }}
                          onClick={(e) => handleAnchorClick(e, item.href)}
                        >
                          {item.label}
                          {isActive(item.href) && (
                            <motion.div
                              layoutId="activeNav"
                              className="absolute -bottom-0.5 left-3 right-3 h-0.5 rounded-full"
                              style={{ background: COLORS.gradient.primary }}
                              transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                            />
                          )}
                        </a>
                      ) : (
                        <Link
                          href={item.href}
                          className="block px-3 py-1.5 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 relative"
                          style={{ 
                            fontSize: '14px',
                            fontWeight: 500,
                            color: isActive(item.href) ? COLORS.text.primary : COLORS.text.secondary,
                          }}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.label}
                          {isActive(item.href) && (
                            <motion.div
                              layoutId="activeNav"
                              className="absolute -bottom-0.5 left-3 right-3 h-0.5 rounded-full"
                              style={{ background: COLORS.gradient.primary }}
                              transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                            />
                          )}
                        </Link>
                      )}
                    </motion.div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button - Right */}
            <div className="ml-auto hidden lg:block">
              <motion.button
                onClick={() => openSheet('general')}
                className="relative px-5 py-2 rounded-lg overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0B0D]"
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: '0 4px 24px rgba(0, 138, 112, 0.3)',
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                style={{ 
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  background: 'linear-gradient(135deg, #008A70 0%, #007BA3 100%)',
                  boxShadow: '0 2px 12px rgba(0, 138, 112, 0.15)',
                }}
              >
                <span className="relative z-10">
                  Hafa samband
                </span>
              </motion.button>
            </div>

            {/* Mobile Menu Button - Larger touch target */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="ml-auto lg:hidden p-3 -mr-3 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50"
              style={{ color: COLORS.text.primary }}
              aria-label={mobileMenuOpen ? 'Loka valmynd' : 'Opna valmynd'}
              aria-expanded={mobileMenuOpen}
            >
              <motion.div
                animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </motion.div>
            </button>
          </div>

          {/* Bottom Gradient Glow Line */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] overflow-hidden">
            {/* Static subtle line */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.03), transparent)',
              }}
            />
            
            {/* Animated progress glow */}
            <motion.div
              className="absolute left-0 top-0 h-full"
              style={{
                width: `${scrollProgress}%`,
                background: 'linear-gradient(to right, #00FFC2, #00B8FF)',
                boxShadow: scrolled ? '0 0 20px rgba(0, 255, 194, 0.5), 0 0 40px rgba(0, 184, 255, 0.3)' : 'none',
              }}
              transition={{ 
                width: { duration: 0.1, ease: 'linear' },
                boxShadow: { duration: 0.3 }
              }}
            />
          </div>
        </motion.div>

        {/* Dropdown Menu - Bridge gap with invisible area */}
        <AnimatePresence>
          {servicesOpen && (
            <>
              {/* Invisible bridge to prevent gap issues */}
              <div
                className="absolute hidden lg:block"
                style={{
                  top: scrolled ? '52px' : '56px',
                  left: dropdownLeft - 12,
                  right: 0,
                  height: '12px',
                }}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              />
              
              <motion.div
                ref={dropdownRef}
                initial={{ opacity: 0, y: -8, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.96 }}
                transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                className="absolute hidden lg:block min-w-[240px] rounded-xl overflow-hidden"
                style={{
                  top: scrolled ? '64px' : '68px',
                  left: dropdownLeft - 12,
                  background: 'rgba(15, 16, 18, 0.95)',
                  backdropFilter: 'blur(24px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(24px) saturate(180%)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(0, 255, 194, 0.05)',
                }}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                role="menu"
              >
                <div className="py-2">
                  {navItems.find(item => item.hasDropdown)?.dropdown?.map((subItem, idx) => (
                    <motion.div
                      key={subItem.label}
                      className="transition-all duration-150 focus-within:outline-none"
                      whileHover={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        x: 4,
                      }}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ delay: idx * 0.03, duration: 0.15 }}
                    >
                      <Link
                        href={subItem.href}
                        className="block px-4 py-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cyan-400/50"
                        style={{ 
                          fontSize: '14px',
                          color: COLORS.text.secondary,
                          fontWeight: 500,
                        }}
                        onClick={() => setServicesOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="fixed top-[64px] left-4 right-4 z-40 rounded-2xl overflow-hidden lg:hidden"
            style={{
              background: 'rgba(15, 16, 18, 0.95)',
              backdropFilter: 'blur(24px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
            }}
            role="navigation"
            aria-label="Farsímavalmynd"
          >
            <nav className="flex flex-col p-4 gap-1">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="rounded-lg"
                >
                  {item.href.startsWith('#') ? (
                    <a
                      href={item.href}
                      className="py-3 px-4 rounded-lg transition-all hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cyan-400/50 min-h-[48px] flex items-center"
                      style={{ 
                        fontSize: '15px',
                        fontWeight: 500,
                        color: isActive(item.href) ? COLORS.text.primary : COLORS.text.secondary
                      }}
                      onClick={(e) => handleAnchorClick(e, item.href)}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="py-3 px-4 rounded-lg transition-all hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cyan-400/50 min-h-[48px] flex items-center"
                      style={{ 
                        fontSize: '15px',
                        fontWeight: 500,
                        color: isActive(item.href) ? COLORS.text.primary : COLORS.text.secondary
                      }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </motion.div>
              ))}
              <motion.button
                onClick={() => {
                  openSheet('general');
                  setMobileMenuOpen(false);
                }}
                whileTap={{ scale: 0.98 }}
                className="mt-3 px-5 py-3 rounded-lg min-h-[48px] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F1012]"
                style={{
                  background: 'linear-gradient(135deg, #008A70 0%, #007BA3 100%)',
                  color: '#FFFFFF',
                  fontSize: '14px',
                  fontWeight: 700,
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Hafa samband
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
