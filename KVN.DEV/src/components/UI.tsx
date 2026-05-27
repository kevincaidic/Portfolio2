import { motion, HTMLMotionProps } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { ReactNode } from 'react';

// --- Glass Card ---
export interface GlassCardProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
}

export const GlassCard = ({ children, className, ...props }: GlassCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -8, boxShadow: "0 20px 40px -10px rgba(99, 102, 241, 0.15)" }}
    className={cn("glass-morphism rounded-2xl p-8 transition-all duration-500", className)}
    {...props}
  >
    {children}
  </motion.div>
);

// --- Button ---
export const GlowingButton = ({ children, className, onClick, variant = 'primary', href, download }: { children: ReactNode, className?: string, onClick?: () => void, variant?: 'primary' | 'secondary' | 'outline', href?: string, download?: boolean }) => {
  const variants = {
    primary: "bg-gradient-to-r from-primary to-primary-light text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40",
    secondary: "bg-gradient-to-r from-accent to-accent-dark text-white shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40",
    outline: "border-2 border-slate-300 text-slate-700 bg-white hover:border-primary hover:text-primary hover:shadow-lg",
  };

  const commonProps = {
    whileHover: { scale: 1.02, y: -2 },
    whileTap: { scale: 0.98 },
    className: cn(
      "px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 inline-flex items-center justify-center gap-2 cursor-pointer", 
      variants[variant], 
      className
    ),
  };

  if (href) {
    return (
      <motion.a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        download={download}
        {...commonProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button onClick={onClick} {...commonProps}>
      {children}
    </motion.button>
  );
};

// --- Section ---
export const Section = ({ id, title, subtitle, children, className }: { id: string, title?: string, subtitle?: string, children: ReactNode, className?: string }) => (
  <section id={id} className={cn("py-24 md:py-32 relative", className)}>
    {title && (
      <div className="mb-20 text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary font-semibold uppercase tracking-wider text-xs mb-4"
        >
          {subtitle || "Discover"}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight"
        >
          {title}
        </motion.h2>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: '60px' }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6 rounded-full"
        />
      </div>
    )}
    <div className="max-w-7xl mx-auto px-6">
      {children}
    </div>
  </section>
);

// --- Animated Typing Effect ---
export const TypingText = ({ text, className }: { text: string, className?: string }) => (
  <motion.div className={cn("inline-block", className)}>
    {text.split('').map((char, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.05, delay: index * 0.05 }}
      >
        {char}
      </motion.span>
    ))}
  </motion.div>
);
