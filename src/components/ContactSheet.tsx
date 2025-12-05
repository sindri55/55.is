'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, CheckCircle2, Send } from 'lucide-react';
import { COLORS } from '../lib/constants';
import { useContactSheet, ContactSheetContext } from '../lib/contact-sheet-context';
import { toast } from 'sonner';

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  services: string[];
  budget: string;
  message: string;
}

const serviceOptions = [
  { id: 'ads', label: 'Auglýsingar (Meta/Google)' },
  { id: 'seo', label: 'Leitarvélabestun (SEO)' },
  { id: 'vefsidugerd', label: 'Vefsíðugerð' },
  { id: 'landing', label: 'Landing pages' },
  { id: 'markadsuttekt', label: 'Markaðsúttekt' },
  { id: 'annad', label: 'Annað / ekki viss' },
];

const budgetOptions = [
  { value: 'under500', label: '< 500k' },
  { value: '500-1m', label: '500k - 1M' },
  { value: '1m-2m', label: '1M - 2M' },
  { value: 'over2m', label: '2M+' },
  { value: 'unsure', label: 'Ekki viss' },
];

// Context-aware content
const contextContent: Record<ContactSheetContext, { title: string; submitText: string }> = {
  general: {
    title: 'Hey! Segðu okkur frá verkefninu',
    submitText: 'Senda fyrirspurn',
  },
  markadsuttekt: {
    title: 'Fáðu ókeypis markaðsúttekt',
    submitText: 'Fá markaðsúttekt',
  },
  verdskra: {
    title: 'Ræðum verkefnið',
    submitText: 'Senda fyrirspurn',
  },
  ads: {
    title: 'Byrjum að tala um ads',
    submitText: 'Senda fyrirspurn',
  },
  seo: {
    title: 'Byrjum að tala um SEO',
    submitText: 'Senda fyrirspurn',
  },
  vefsidugerd: {
    title: 'Byrjum að tala um vefinn',
    submitText: 'Senda fyrirspurn',
  },
};

// Pre-select services based on context
const getPreselectedServices = (context: ContactSheetContext): string[] => {
  switch (context) {
    case 'ads':
      return ['ads'];
    case 'seo':
      return ['seo'];
    case 'vefsidugerd':
      return ['vefsidugerd'];
    case 'markadsuttekt':
      return ['markadsuttekt'];
    default:
      return [];
  }
};

export function ContactSheet() {
  const { isOpen, context, closeSheet } = useContactSheet();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    services: [],
    budget: '',
    message: '',
  });

  // Pre-select services when context changes
  useEffect(() => {
    if (isOpen) {
      setFormData((prev) => ({
        ...prev,
        services: getPreselectedServices(context),
      }));
    }
  }, [context, isOpen]);

  // Reset form when sheet closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          services: [],
          budget: '',
          message: '',
        });
      }, 300); // Wait for slide-out animation
    }
  }, [isOpen]);

  // Prevent body scroll when sheet is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleService = (serviceId: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter((s) => s !== serviceId)
        : [...prev.services, serviceId],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error('Vinsamlegast fylltu út alla nauðsynlega reiti');
      return;
    }

    if (isSubmitting) return;

    try {
      setIsSubmitting(true);
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          context,
          pageUrl: typeof window !== 'undefined' ? window.location.href : undefined,
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || 'Óvænt villa');
      }

      toast.success('Takk fyrir! Við höfum móttekið fyrirspurnina og munum hafa samband innan 24-48 klst.');
      closeSheet();
    } catch (error) {
      console.error('Contact submit failed', error);
      toast.error('Ekki tókst að senda fyrirspurn. Reyndu aftur á eftir.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const content = contextContent[context];
  const showBudgetField = formData.services.includes('vefsidugerd');

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeSheet}
            className="fixed inset-0 z-50"
            style={{
              background: 'rgba(0, 0, 0, 0.7)',
              backdropFilter: 'blur(8px)',
            }}
          />

          {/* Sheet */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full sm:w-[600px] overflow-y-auto"
            style={{
              background: COLORS.background.primary,
              borderLeft: `1px solid ${COLORS.border.default}`,
              boxShadow: '-20px 0 60px rgba(0, 0, 0, 0.5)',
            }}
          >
            {/* Header */}
            <div
              className="sticky top-0 z-10 px-8 py-6 border-b"
              style={{
                background: COLORS.background.primary,
                borderColor: COLORS.border.default,
              }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2
                    style={{
                      fontSize: '28px',
                      fontWeight: 800,
                      color: COLORS.text.primary,
                      lineHeight: 1.2,
                    }}
                  >
                    {content.title}
                  </h2>
                  <p
                    className="mt-2"
                    style={{
                      fontSize: '14px',
                      color: COLORS.text.secondary,
                    }}
                  >
                    Við svörum öllum innan 24-48 klst
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeSheet}
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border transition-colors"
                  style={{
                    borderColor: COLORS.border.default,
                    color: COLORS.text.secondary,
                  }}
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="px-8 py-8 space-y-8">
              {/* Basic Info - 2 Column Grid */}
              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2"
                      style={{
                        fontSize: '14px',
                        fontWeight: 600,
                        color: COLORS.text.primary,
                      }}
                    >
                      Nafn <span style={{ color: COLORS.accent.cyan }}>*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, name: e.target.value }))
                      }
                      placeholder="Jón Jónsson"
                      required
                      className="w-full px-4 py-3 rounded-xl border transition-all focus:outline-none focus:border-cyan-500"
                      style={{
                        background: COLORS.background.secondary,
                        borderColor: COLORS.border.default,
                        color: COLORS.text.primary,
                        fontSize: '15px',
                      }}
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label
                      htmlFor="company"
                      className="block mb-2"
                      style={{
                        fontSize: '14px',
                        fontWeight: 600,
                        color: COLORS.text.primary,
                      }}
                    >
                      Fyrirtæki{' '}
                      <span style={{ color: COLORS.text.muted, fontWeight: 400 }}>
                        (valkvætt)
                      </span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, company: e.target.value }))
                      }
                      placeholder="Jónsson ehf."
                      className="w-full px-4 py-3 rounded-xl border transition-all focus:outline-none focus:border-cyan-500"
                      style={{
                        background: COLORS.background.secondary,
                        borderColor: COLORS.border.default,
                        color: COLORS.text.primary,
                        fontSize: '15px',
                      }}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2"
                      style={{
                        fontSize: '14px',
                        fontWeight: 600,
                        color: COLORS.text.primary,
                      }}
                    >
                      Netfang <span style={{ color: COLORS.accent.cyan }}>*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, email: e.target.value }))
                      }
                      placeholder="jon@example.is"
                      required
                      className="w-full px-4 py-3 rounded-xl border transition-all focus:outline-none focus:border-cyan-500"
                      style={{
                        background: COLORS.background.secondary,
                        borderColor: COLORS.border.default,
                        color: COLORS.text.primary,
                        fontSize: '15px',
                      }}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block mb-2"
                      style={{
                        fontSize: '14px',
                        fontWeight: 600,
                        color: COLORS.text.primary,
                      }}
                    >
                      Sími <span style={{ color: COLORS.accent.cyan }}>*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, phone: e.target.value }))
                      }
                      placeholder="+354 123 4567"
                      required
                      className="w-full px-4 py-3 rounded-xl border transition-all focus:outline-none focus:border-cyan-500"
                      style={{
                        background: COLORS.background.secondary,
                        borderColor: COLORS.border.default,
                        color: COLORS.text.primary,
                        fontSize: '15px',
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label
                  className="block mb-3"
                  style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    color: COLORS.text.primary,
                  }}
                >
                  {context === 'general' 
                    ? 'Hvað getum við hjálpað með? (valfrjálst)'
                    : 'Mig langar að tala um...'}
                </label>
                {context === 'general' && (
                  <p
                    className="mb-3"
                    style={{
                      fontSize: '13px',
                      color: COLORS.text.muted,
                    }}
                  >
                    Eða bara segðu frá í skilaboðunum að neðan 👇
                  </p>
                )}
                <div className="flex flex-wrap gap-3">
                  {serviceOptions.map((service) => {
                    const isSelected = formData.services.includes(service.id);
                    return (
                      <motion.button
                        key={service.id}
                        type="button"
                        onClick={() => toggleService(service.id)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-5 py-2.5 rounded-full border transition-all flex items-center gap-2"
                        style={{
                          fontSize: '14px',
                          fontWeight: 500,
                          borderColor: isSelected ? COLORS.accent.cyan : COLORS.border.default,
                          background: isSelected
                            ? `${COLORS.accent.cyan}15`
                            : COLORS.background.secondary,
                          color: isSelected ? COLORS.accent.cyan : COLORS.text.secondary,
                        }}
                      >
                        {isSelected && <CheckCircle2 className="w-4 h-4" />}
                        {service.label}
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Budget Field (Conditional) */}
              <AnimatePresence>
                {showBudgetField && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <label
                      htmlFor="budget"
                      className="block mb-2"
                      style={{
                        fontSize: '14px',
                        fontWeight: 600,
                        color: COLORS.text.primary,
                      }}
                    >
                      Fjárhagsrammi (ca.)
                    </label>
                    <select
                      id="budget"
                      value={formData.budget}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, budget: e.target.value }))
                      }
                      className="w-full px-4 py-3 rounded-xl border transition-all focus:outline-none focus:border-cyan-500"
                      style={{
                        background: COLORS.background.secondary,
                        borderColor: COLORS.border.default,
                        color: COLORS.text.primary,
                        fontSize: '15px',
                      }}
                    >
                      <option value="">Veldu bil...</option>
                      {budgetOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Message Textarea */}
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2"
                  style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    color: COLORS.text.primary,
                  }}
                >
                  Segðu okkur meira{' '}
                  <span style={{ color: COLORS.text.muted, fontWeight: 400 }}>(optional)</span>
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, message: e.target.value }))
                  }
                  placeholder="T.d. hvað ertu að reyna að ná fram, timeline, núverandi staða..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border transition-all focus:outline-none focus:border-cyan-500 resize-none"
                  style={{
                    background: COLORS.background.secondary,
                    borderColor: COLORS.border.default,
                    color: COLORS.text.primary,
                    fontSize: '15px',
                    lineHeight: 1.6,
                  }}
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 rounded-xl flex items-center justify-center gap-2"
                  style={{
                    background: 'linear-gradient(135deg, #008A70 0%, #007BA3 100%)',
                    color: '#FFFFFF',
                    fontSize: '17px',
                    fontWeight: 700,
                    opacity: isSubmitting ? 0.7 : 1,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    boxShadow: '0 4px 16px rgba(0, 138, 112, 0.25)',
                  }}
                >
                  <Send className="w-5 h-5" />
                  <span>{isSubmitting ? 'Sendir...' : 'Senda fyrirspurn'}</span>
                </motion.button>

                <p
                  className="text-center mt-4"
                  style={{
                    fontSize: '12px',
                    color: COLORS.text.muted,
                  }}
                >
                  Ókeypis · Svörum innan 24-48 klst · Engin binding
                </p>
              </div>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
