import { motion } from 'motion/react';
import { toast } from 'sonner';
import { CheckCircle, XCircle, Info, AlertTriangle } from 'lucide-react';
import { cn } from '../lib/utils';
import { COLORS } from '../lib/constants';

export function ToastDemo() {
  const toastExamples = [
    {
      label: 'Success Toast',
      icon: CheckCircle,
      color: COLORS.accent.cyan,
      action: () => toast.success('Success!', {
        description: 'Your action was completed successfully.',
      }),
    },
    {
      label: 'Error Toast',
      icon: XCircle,
      color: '#FF4444',
      action: () => toast.error('Error!', {
        description: 'Something went wrong. Please try again.',
      }),
    },
    {
      label: 'Info Toast',
      icon: Info,
      color: COLORS.accent.blue,
      action: () => toast.info('Information', {
        description: 'Here is some useful information for you.',
      }),
    },
    {
      label: 'Warning Toast',
      icon: AlertTriangle,
      color: '#FFA500',
      action: () => toast.warning('Warning!', {
        description: 'Please be careful with this action.',
      }),
    },
  ];

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="mb-4"
            style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: 700,
              color: COLORS.text.primary,
            }}
          >
            Toast Notifications Demo
          </h2>
          <p
            style={{
              fontSize: '16px',
              color: COLORS.text.secondary,
            }}
          >
            Click the buttons below to see toast notifications in action
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {toastExamples.map((example, index) => (
            <motion.button
              key={example.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={example.action}
              className={cn(
                "group relative rounded-xl p-6 transition-all",
                "flex flex-col items-center gap-3"
              )}
              style={{
                background: COLORS.background.secondary,
                border: `1px solid ${COLORS.border.default}`,
              }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110"
                style={{
                  background: `${example.color}20`,
                  border: `1px solid ${example.color}40`,
                }}
              >
                <example.icon className="w-6 h-6" style={{ color: example.color }} />
              </div>
              <span
                style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: COLORS.text.primary,
                }}
              >
                {example.label}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Code Example */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 rounded-xl p-6"
          style={{
            background: COLORS.background.secondary,
            border: `1px solid ${COLORS.border.default}`,
          }}
        >
          <h3
            className="mb-4"
            style={{
              fontSize: '18px',
              fontWeight: 700,
              color: COLORS.text.primary,
            }}
          >
            Usage Example:
          </h3>
          <pre
            className="overflow-x-auto"
            style={{
              fontSize: '14px',
              color: COLORS.text.secondary,
              fontFamily: 'monospace',
            }}
          >
{`import { toast } from 'sonner';

// Simple toast
toast.success('Success message!');

// Toast with description
toast.error('Error!', {
  description: 'Something went wrong.',
});

// Toast with action
toast.info('New update available', {
  action: {
    label: 'Update',
    onClick: () => console.log('Updating...'),
  },
});`}
          </pre>
        </motion.div>
      </div>
    </section>
  );
}
