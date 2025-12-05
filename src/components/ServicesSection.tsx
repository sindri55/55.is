import { motion } from 'motion/react';
import { Layout, Code, Search, Wrench, Sparkles, Zap, Shield } from 'lucide-react';
import { COLORS } from '../lib/constants';

export function ServicesSection() {
  const services = [
    {
      icon: Layout,
      title: 'Vefhönnun',
      description: 'Falleg og notendavæn hönnun sem endurspeglar vörumerki þitt og heillar notendur.',
      features: ['UI/UX hönnun', 'Responsive design', 'Figma prótótýpur'],
    },
    {
      icon: Code,
      title: 'Vefforritun',
      description: 'Öflug og stigstærð lausnir byggðar með nýjustu tækni og bestu starfsvenjum.',
      features: ['React & Next.js', 'TypeScript', 'API þróun'],
    },
    {
      icon: Search,
      title: 'SEO Þjónusta',
      description: 'Bættu sýnileika þinn á Google og náðu til fleiri viðskiptavina með okkar SEO lausnum.',
      features: ['Leitarvélabestun', 'Efnisstjórnun', 'Greining'],
    },
    {
      icon: Wrench,
      title: 'Viðhald & Stuðningur',
      description: 'Reglulegt viðhald og áreiðanlegur stuðningur til að halda vefnum þínum í gangi.',
      features: ['24/7 eftirlit', 'Uppfærslur', 'Öryggisvarnir'],
    },
  ];

  const features = [
    {
      icon: Zap,
      title: 'Hröð afköst',
      description: 'Hraðvirkar lausnir sem skila betri notendaupplifun',
    },
    {
      icon: Shield,
      title: 'Öruggt & traust',
      description: 'Byggt á bestu öryggisstaðlum og starfsvenjum',
    },
    {
      icon: Sparkles,
      title: 'Nútímaleg tækni',
      description: 'Notum nýjustu og bestu tækni sem völ er á',
    },
  ];

  return (
    <section className="relative py-32 px-6" id="services">
      {/* Background Mesh Gradient */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, rgba(142, 110, 255, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(0, 255, 194, 0.08) 0%, transparent 50%)
          `,
        }}
      />

      <div className="relative max-w-[1280px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00FFC2]/10 to-[#8E6EFF]/10 border border-[#00FFC2]/30 rounded-full px-4 py-2 mb-6">
            <motion.div
              className="w-2 h-2 rounded-full"
              style={{ background: COLORS.accent.cyan }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [1, 0.6, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <span
              className="uppercase tracking-wider"
              style={{
                fontSize: '11px',
                color: COLORS.accent.cyan,
                fontWeight: 600,
              }}
            >
              Það sem við gerum
            </span>
          </div>

          <h2
            className="mb-4"
            style={{
              fontSize: 'clamp(38px, 6vw, 56px)',
              fontWeight: 700,
              lineHeight: 1.2,
              color: COLORS.text.primary,
            }}
          >
            Þjónusta sem{' '}
            <span
              style={{
                background: COLORS.gradient.primary,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              skilar árangri
            </span>
          </h2>

          <p
            className="max-w-[680px] mx-auto"
            style={{
              fontSize: '18px',
              lineHeight: 1.6,
              color: COLORS.text.secondary,
            }}
          >
            Við bjóðum upp á heildstæða lausn fyrir öll þín stafrænu þörf, 
            frá hönnun til þróunar og viðhalds.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="group relative rounded-2xl p-8"
              style={{
                background: COLORS.background.secondary,
                border: `1px solid ${COLORS.border.default}`,
              }}
            >
              {/* Hover Glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${COLORS.accent.cyan}15 0%, transparent 70%)`,
                }}
              />

              {/* Content */}
              <div className="relative">
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${COLORS.accent.cyan}20 0%, transparent 100%)`,
                    border: `1px solid ${COLORS.accent.cyan}40`,
                  }}
                >
                  <service.icon className="w-7 h-7" style={{ color: COLORS.accent.cyan }} />
                </div>

                {/* Title & Description */}
                <h3
                  className="mb-3"
                  style={{
                    fontSize: '24px',
                    fontWeight: 700,
                    color: COLORS.text.primary,
                  }}
                >
                  {service.title}
                </h3>

                <p
                  className="mb-6"
                  style={{
                    fontSize: '16px',
                    lineHeight: 1.6,
                    color: COLORS.text.secondary,
                  }}
                >
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2"
                      style={{
                        fontSize: '14px',
                        color: COLORS.text.secondary,
                      }}
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: COLORS.accent.cyan }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="text-center p-8 rounded-2xl"
              style={{
                background: `linear-gradient(135deg, ${COLORS.background.secondary} 0%, ${COLORS.background.tertiary} 100%)`,
                border: `1px solid ${COLORS.border.default}`,
              }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4"
                style={{
                  background: `linear-gradient(135deg, ${COLORS.accent.purple}20 0%, transparent 100%)`,
                  border: `1px solid ${COLORS.accent.purple}40`,
                }}
              >
                <feature.icon className="w-6 h-6" style={{ color: COLORS.accent.purple }} />
              </div>

              <h4
                className="mb-2"
                style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: COLORS.text.primary,
                }}
              >
                {feature.title}
              </h4>

              <p
                style={{
                  fontSize: '14px',
                  color: COLORS.text.secondary,
                }}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}