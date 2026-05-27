import { motion, useScroll, useSpring, useTransform, useMotionValue } from 'motion/react';
import { useState, useEffect } from 'react';
import { NAVIGATION_LINKS, SOCIAL_LINKS } from '@/src/constants';
import * as LucideIcons from 'lucide-react';
import { cn } from '@/src/lib/utils';

// --- Navbar ---
export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('About');
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-primary-light to-accent z-[100] origin-left shadow-lg shadow-primary/20"
        style={{ scaleX: scrollYProgress }}
      />
      <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 transition-all duration-500",
        isScrolled ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/60 py-4 shadow-sm" : "bg-transparent"
      )}
    >
      <motion.div 
        className="text-2xl font-display font-bold text-gradient tracking-tight"
        whileHover={{ scale: 1.05 }}
      >
        KVN.DEV
      </motion.div>

      <div className="hidden md:flex items-center gap-1 glass px-2 py-2 rounded-full">
        {NAVIGATION_LINKS.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setActiveItem(link.name)}
            className={cn(
              "relative px-5 py-2 text-sm font-medium transition-all rounded-full",
              activeItem === link.name 
                ? "text-white" 
                : "text-slate-600 hover:text-slate-900"
            )}
          >
            {link.name}
            {activeItem === link.name && (
              <motion.div
                layoutId="activeNav"
                className="absolute inset-0 bg-gradient-to-r from-primary to-primary-light rounded-full shadow-lg shadow-primary/30"
                style={{ zIndex: -1 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-3">
        {SOCIAL_LINKS.slice(0, 2).map((link) => {
          const Icon = (LucideIcons as any)[link.icon];
          return (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-9 h-9 rounded-full bg-slate-100 hover:bg-gradient-to-r hover:from-primary hover:to-accent flex items-center justify-center text-slate-600 hover:text-white transition-all duration-300"
            >
              <Icon size={18} />
            </motion.a>
          );
        })}
        <button className="md:hidden text-slate-800 w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center">
          <LucideIcons.Menu size={20} />
        </button>
      </div>
    </motion.nav>
    </>
  );
};

// --- Hooks ---
const useMousePosition = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return { mouseX, mouseY };
};

// --- Animated Background ---
export const Background = () => {
  const { mouseX, mouseY } = useMousePosition();
  
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh" />
      
      {/* Gradient Orbs */}
      <motion.div
        style={{ 
          x: useTransform(mouseX, [0, 2000], [30, -30]),
          y: useTransform(mouseY, [0, 2000], [30, -30])
        }}
        className="absolute top-[-10%] left-[-5%] w-[60%] h-[60%] bg-gradient-to-br from-primary/20 to-transparent blur-[120px] rounded-full"
      />
      <motion.div
        style={{ 
          x: useTransform(mouseX, [0, 2000], [-50, 50]),
          y: useTransform(mouseY, [0, 2000], [-50, 50])
        }}
        className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-gradient-to-tl from-accent/15 to-transparent blur-[140px] rounded-full"
      />
      <motion.div
        style={{ 
          x: useTransform(mouseX, [0, 2000], [20, -20]),
          y: useTransform(mouseY, [0, 2000], [50, -50])
        }}
        className="absolute top-[30%] right-[5%] w-[40%] h-[40%] bg-gradient-to-br from-primary-light/15 to-transparent blur-[100px] rounded-full"
      />

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-primary/30 rounded-full"
          initial={{ 
            top: `${Math.random() * 100}%`, 
            left: `${Math.random() * 100}%`,
            scale: 0
          }}
          animate={{ 
            scale: [0, 1, 0],
            y: [-100, 100],
            opacity: [0, 0.6, 0]
          }}
          transition={{ 
            duration: 5 + Math.random() * 5, 
            repeat: Infinity, 
            delay: Math.random() * 10,
            ease: "linear"
          }}
        />
      ))}

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(99, 102, 241) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(99, 102, 241) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />
    </div>
  );
};

// --- Custom Cursor ---
export const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsHovering(
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        target.closest('a') !== null ||
        target.closest('button') !== null
      );
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const springConfig = { damping: 30, stiffness: 300 };
  const cursorX = useSpring(mousePos.x, springConfig);
  const cursorY = useSpring(mousePos.y, springConfig);

  return (
    <>
      <motion.div
        style={{ x: cursorX, y: cursorY, translateX: '-50%', translateY: '-50%' }}
        animate={{ scale: isHovering ? 1.5 : 1 }}
        className="fixed top-0 left-0 w-10 h-10 border-2 border-primary/40 rounded-full pointer-events-none z-[100] hidden md:block"
      />
      <motion.div
        style={{ x: cursorX, y: cursorY, translateX: '-50%', translateY: '-50%' }}
        animate={{ scale: isHovering ? 0.5 : 1 }}
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[100] hidden md:block"
      />
    </>
  );
};

// --- Scroll Progress ---
export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-primary-light to-accent z-[60] origin-left shadow-lg shadow-primary/20"
      style={{ scaleX }}
    />
  );
};
