import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { Section, GlassCard, GlowingButton, TypingText } from './UI';
import { SKILLS, PROJECTS, EXPERIENCES, CERTIFICATES, SOCIAL_LINKS, CV_LINK } from '@/src/constants';
import { cn } from '@/src/lib/utils';
import { useState, FormEvent } from 'react';

// --- Hero Section ---
export const Hero = () => (
  <Section id="hero" className="min-h-screen flex flex-col justify-center items-center pt-20 relative overflow-hidden">
    {/* Decorative Elements */}
    <motion.div 
      animate={{ 
        y: [0, -40, 0], 
        rotate: [0, 45, 0],
        scale: [1, 1.1, 1] 
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[15%] left-[10%] w-32 h-32 bg-primary/10 blur-[80px] rounded-full"
    />
    <motion.div 
      animate={{ 
        y: [0, 60, 0], 
        rotate: [0, -45, 0],
        scale: [1, 1.2, 1]
      }}
      transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-[15%] right-[10%] w-48 h-48 bg-accent/10 blur-[100px] rounded-full"
    />

    <div className="max-w-7xl mx-auto w-full z-10 px-6 flex flex-col md:flex-row items-center justify-between gap-16">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="flex-1 text-center md:text-left"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-6"
        >
          👋 Welcome to my portfolio
        </motion.div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight text-slate-900 leading-tight">
          Hi, I'm <br />
          <span className="text-gradient-animate">Kevin Caidic</span>
        </h1>
        
        <div className="text-xl md:text-2xl text-slate-600 mb-8 font-medium">
          <TypingText text="Full-Stack Developer & Creative Problem Solver" className="text-slate-700" />
        </div>

        <p className="text-lg text-slate-600 mb-10 max-w-2xl leading-relaxed">
          I craft beautiful, functional web experiences that solve real problems. 
          Specializing in modern web technologies and user-centric design.
        </p>

        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
          <GlowingButton 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </GlowingButton>
          <GlowingButton 
            variant="outline"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </GlowingButton>
          <GlowingButton 
            variant="outline"
            href={CV_LINK}
          >
            <LucideIcons.Download size={18} /> Resume
          </GlowingButton>
        </div>

        <div className="flex items-center justify-center md:justify-start gap-4 mt-10">
          {SOCIAL_LINKS.map((link) => {
            const Icon = (LucideIcons as any)[link.icon];
            return (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-11 h-11 rounded-full bg-slate-100 hover:bg-gradient-to-r hover:from-primary hover:to-accent flex items-center justify-center text-slate-600 hover:text-white transition-all duration-300"
              >
                <Icon size={20} />
              </motion.a>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0, x: 50 }}
        animate={{ scale: 1, opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative flex-shrink-0"
      >
        <div className="relative w-72 h-72 md:w-96 md:h-96">
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-[3rem] opacity-20 blur-2xl animate-pulse-soft" />
          <div className="relative w-full h-full rounded-[3rem] overflow-hidden border-4 border-white shadow-2xl group">
            <img
              src="/KEVIN.jpeg"
              alt="Kevin Caidic"
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          
          {/* Floating Badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-200"
          >
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-slate-700">Available for work</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
    >
      <span className="text-xs font-medium">Scroll to explore</span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <LucideIcons.ChevronDown size={24} className="text-primary" />
      </motion.div>
    </motion.div>
  </Section>
);

// --- About Section ---
export const About = () => (
  <Section id="about" title="Artistic Essence" subtitle="The Visionary Behind">
    {/* Background Decorative Blob */}
    <div className="absolute top-1/2 left-0 w-[30%] h-[30%] bg-primary/5 blur-[80px] rounded-full -z-10" />
    
    <div className="grid lg:grid-cols-2 gap-20 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-xl md:text-2xl text-slate-700 leading-relaxed mb-10 font-light">
          Technology is the bridge between <span className="text-primary-dark font-medium underline decoration-primary/20 underline-offset-8">imagination and reality</span>. I specialize in crafting digital solutions that are not only functional but also deliver a seamless, aesthetic experience. My journey is driven by a passion for solving complex problems through elegant code and thoughtful design.
        </p>
        <div className="grid grid-cols-2 gap-8 mb-12">
          {[
            { label: 'ACADEMIC PROJECTS', value: '4+' },
            { label: 'WEB APPLICATIONS', value: '3+' },
            { label: 'CAPSTONE SYSTEM', value: '1' },
            { label: 'PASSION TO LEARN', value: '∞' },
          ].map((stat) => (
            <div key={stat.label} className="p-8 rounded-[2rem] glass-morphism border-primary/10 bg-white/60 hover:bg-white hover:scale-105 transition-all duration-500">
              <div className="text-4xl font-bold font-display text-primary-dark mb-2">{stat.value}</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-slate-700 font-bold">{stat.label}</div>
            </div>
          ))} 
        </div>
        <div className="flex justify-start">
          <a 
            href={CV_LINK} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.4em] text-slate-600 hover:text-primary-dark transition-all"
          >
            Explore Full Resume <LucideIcons.ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </motion.div>

      <div className="relative">
        <div className="absolute -left-12 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent hidden lg:block" />
        <div className="space-y-12">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="relative pl-8"
            >
              <div className="absolute left-[-6px] top-1.5 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(167,139,250,0.6)] animate-pulse" />
              <div className="text-[10px] font-display font-bold uppercase tracking-widest text-primary mb-1">{exp.period}</div>
              <h3 className="text-xl font-bold text-slate-800">{exp.role}</h3>
              <div className="text-slate-500 text-xs font-semibold mb-3 tracking-wide">@ {exp.company}</div>
              <p className="text-slate-600 text-sm leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </Section>
);

// --- Skills Section ---
export const Skills = () => (
  <Section id="skills" title="The Workshop" subtitle="Tools of the Trade">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {SKILLS.map((skill, i) => {
        const Icon = (LucideIcons as any)[skill.icon];
        return (
          <GlassCard key={skill.name} className="flex flex-col items-center text-center p-10 group bg-white/60 hover:bg-white/80 border-primary/10">
            <motion.div 
              whileHover={{ rotate: [0, -10, 10, 0] }}
              className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm"
            >
              <Icon size={32} className="text-primary-dark" />
            </motion.div>
            <h3 className="text-lg font-bold mb-4 text-slate-900">{skill.name}</h3>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="h-full bg-primary-dark shadow-[0_0_15px_rgba(139,92,246,0.2)]"
              />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest mt-4 text-slate-700">{skill.category}</span>
          </GlassCard>
        );
      })}
    </div>
  </Section>
);

// --- Mockup Components ---
const PhoneMockup = ({ image, title }: { image: string; title: string }) => (
  <div className="relative mx-auto border-slate-900 bg-slate-900 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl overflow-hidden group">
    <div className="h-[32px] w-[3px] bg-slate-800 absolute -left-[17px] top-[72px] rounded-l-lg" />
    <div className="h-[46px] w-[3px] bg-slate-800 absolute -left-[17px] top-[124px] rounded-l-lg" />
    <div className="h-[46px] w-[3px] bg-slate-800 absolute -left-[17px] top-[178px] rounded-l-lg" />
    <div className="h-[64px] w-[3px] bg-slate-800 absolute -right-[17px] top-[142px] rounded-r-lg" />
    <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white relative">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
      <div className="absolute top-0 inset-x-0 h-6 bg-slate-900/10 flex justify-center items-end pb-1">
        <div className="w-20 h-4 bg-slate-900 rounded-b-xl" />
      </div>
    </div>
  </div>
);

const BrowserMockup = ({ image, title }: { image: string; title: string }) => (
  <div className="relative mx-auto bg-slate-100 rounded-t-xl shadow-2xl overflow-hidden border border-slate-200 group">
    <div className="bg-slate-200 px-4 py-2 flex items-center gap-2">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-amber-400" />
        <div className="w-3 h-3 rounded-full bg-emerald-400" />
      </div>
      <div className="mx-auto bg-white rounded-md px-3 py-1 text-[10px] w-1/2 text-slate-400 text-center truncate">
        {title.toLowerCase().replace(/\s+/g, '-')}.dev
      </div>
    </div>
    <div className="aspect-video overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
    </div>
  </div>
);

// --- Projects Section ---
export const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Web App', 'Mobile App'];
  const filteredProjects = filter === 'All' ? PROJECTS : PROJECTS.filter(p => (p.category === filter || (filter === 'Web App' && p.type === 'web') || (filter === 'Mobile App' && p.type === 'mobile')));

  return (
    <Section id="projects" title="Curated works" subtitle="The Masterpieces of">
      {/* Decorative Blur */}
      <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="flex flex-wrap justify-center gap-6 mb-24">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={cn(
              "px-10 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-700",
              filter === cat 
                ? "bg-primary-dark text-white shadow-2xl shadow-primary-dark/30 scale-110" 
                : "bg-white/60 text-slate-400 hover:bg-white hover:text-primary-dark hover:shadow-lg"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
        {filteredProjects.map((project, i) => (
          <motion.div
            layout
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="flex flex-col"
          >
            <div className="mb-10 relative">
              {(project as any).type === 'mobile' ? (
                <PhoneMockup image={project.image} title={project.title} />
              ) : (
                <BrowserMockup image={project.image} title={project.title} />
              )}
              
              {/* Floating Tag */}
              <div className="absolute -bottom-4 right-4 md:-right-8 bg-white glass-morphism py-3 px-6 rounded-2xl border border-primary/20 shadow-xl z-20">
                 <span className="text-[10px] font-bold uppercase tracking-widest text-primary-dark">{project.category}</span>
              </div>
            </div>

            <div className="px-4">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[9px] font-bold tracking-widest px-3 py-1 bg-slate-100 text-slate-600 rounded-full uppercase border border-slate-200">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-3xl font-bold mb-4 text-slate-900 tracking-tight">{project.title}</h3>
              <p className="text-slate-600 text-lg mb-8 font-light leading-relaxed max-w-lg">
                {project.description}
              </p>
              <div className="flex items-center gap-8">
                <a 
                  href={project.live} 
                  className="group flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-primary-dark hover:gap-5 transition-all"
                >
                   View Project <LucideIcons.ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href={project.github} className="text-slate-400 hover:text-slate-900 transition-colors">
                  <LucideIcons.Github size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

// --- Certificates Section ---
export const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState<typeof CERTIFICATES[0] | null>(null);

  return (
    <Section id="certificates" title="Recognitions" subtitle="Honors & Achievements">
      <div className="flex overflow-x-auto gap-8 pb-12 hide-scrollbar snap-x cursor-grab active:cursor-grabbing">
        {CERTIFICATES.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -15, scale: 1.02 }}
            onClick={() => setSelectedCert(cert)}
            className="flex-shrink-0 w-[320px] md:w-[450px] glass-morphism rounded-[2.5rem] overflow-hidden snap-center group transition-all duration-500 cursor-zoom-in"
          >
            <div className="h-64 overflow-hidden relative bg-slate-50 flex items-center justify-center p-4">
              <img 
                src={cert.image} 
                alt={cert.title} 
                className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-105" 
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&q=80&w=600&text=Pending+Upload";
                }}
              />
              <div className="absolute inset-0 bg-primary/5 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <LucideIcons.Maximize2 size={16} className="text-primary-dark" />
              </div>
            </div>
            <div className="p-8">
              <div className="text-[10px] uppercase tracking-widest text-primary-dark mb-3 font-bold">{cert.issuer}</div>
              <h3 className="text-xl font-bold mb-4 text-slate-800 line-clamp-2">{cert.title}</h3>
              <div className="flex items-center justify-between">
                <span className="text-slate-600 text-xs font-bold">{cert.date}</span>
                <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-primary-dark group-hover:bg-primary-dark group-hover:text-white transition-all">
                  <LucideIcons.Scroll size={18} />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-slate-900/40 backdrop-blur-xl"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-5xl w-full glass-morphism rounded-[3rem] overflow-hidden shadow-2xl relative bg-white"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-red-500/10 hover:text-red-500 transition-all border border-black/5 shadow-sm"
              >
                <LucideIcons.X size={24} />
              </button>
              
              <div className="flex flex-col md:flex-row min-h-[60vh]">
                <div className="md:w-1/2 bg-slate-50 p-12 flex items-center justify-center overflow-hidden">
                  <img 
                    src={selectedCert.image} 
                    alt={selectedCert.title} 
                    className="max-h-[60vh] w-auto shadow-2xl rounded-lg"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&q=80&w=800&text=Certificate+Image+Pending";
                    }}
                  />
                </div>
                <div className="p-12 md:w-1/2 flex flex-col justify-center border-l border-black/5 bg-white">
                  <div className="text-primary-dark font-bold text-[10px] uppercase tracking-[0.4em] mb-4">{selectedCert.issuer}</div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 leading-tight tracking-tighter">{selectedCert.title}</h1>
                  <div className="h-1 w-20 bg-primary mb-10 rounded-full" />
                  
                  <div className="space-y-8 mb-12">
                    <div>
                      <div className="text-slate-600 text-[10px] font-bold uppercase tracking-widest mb-2">Recognition Date</div>
                      <div className="text-slate-800 text-xl font-medium">{selectedCert.date}</div>
                    </div>
                    <div>
                      <div className="text-slate-600 text-[10px] font-bold uppercase tracking-widest mb-2">Verification</div>
                      <div className="text-slate-700 text-sm leading-relaxed italic">
                        This document serves as formal recognition of professional achievement and technical competence in the specified field.
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => setSelectedCert(null)}
                    className="group flex items-center justify-center gap-3 w-full py-6 rounded-2xl bg-slate-900 text-white font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-primary-dark shadow-xl shadow-slate-900/10 transition-all active:scale-[0.98]"
                  >
                    Close Recognition <LucideIcons.ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};

// --- Contact Section ---
export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: { name?: string; email?: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Please introduce yourself.';
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Digital correspondence is required.';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'This format seems unusual. Please check your email.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <Section id="contact" title="Celestial Connection" subtitle="Let's Ignite a">
      <div className="grid lg:grid-cols-2 gap-24 max-w-6xl mx-auto items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-5xl font-bold mb-8 text-slate-900 uppercase tracking-tighter leading-[0.9]">Deepening <br/> The Bond.</h3>
          <p className="text-slate-700 mb-12 text-xl leading-relaxed font-light">
            In a world of noise, meaningful curation is everything. Let's discuss how we can elevate your vision into a digital masterpiece that resonates.
          </p>
          <div className="space-y-8">
            {[
              { icon: 'Mail', label: 'Personal Mail', value: 'caidic.kevin@dnsc.edu.ph', href: 'mailto:caidic.kevin@dnsc.edu.ph' },
              { icon: 'Phone', label: 'Direct Line', value: '09487562435', href: 'tel:+630000000000' },
              { icon: 'MapPin', label: 'Studio Base', value: 'Davao, Philippines', href: '#' },
            ].map((item) => {
              const Icon = (LucideIcons as any)[item.icon];
              return (
                <a key={item.label} href={item.href} className="flex items-center gap-8 group">
                  <div className="w-16 h-16 rounded-[1.5rem] glass flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-700 shadow-xl">
                    <Icon size={24} className="text-primary-dark" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-700 uppercase tracking-[0.3em] font-bold font-display mb-1">{item.label}</div>
                    <div className="text-xl font-bold text-slate-900 transition-colors group-hover:text-primary-dark">{item.value}</div>
                  </div>
                </a>
              );
            })}
          </div>
        </motion.div>
  
        <GlassCard className="p-12 border-white/80 bg-white/40 rounded-[4rem] shadow-2xl relative overflow-hidden">
          {/* Subtle Form Background Decoration */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 blur-3xl rounded-full" />
          
          <form className="space-y-10 relative z-10" onSubmit={handleSubmit} noValidate>
            <div className="relative group">
              <label className="text-[10px] uppercase tracking-[0.3em] text-slate-700 font-bold mb-3 block">Full Inquiry Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your Identity"
                className={cn(
                  "w-full bg-transparent border-b-2 px-0 py-4 outline-none transition-all text-slate-800 placeholder:text-slate-400 font-medium text-lg",
                  errors.name ? "border-red-400" : "border-slate-200 focus:border-primary-dark"
                )}
              />
              {errors.name && <p className="text-[10px] text-red-500 font-bold mt-2 uppercase tracking-widest">{errors.name}</p>}
            </div>
            <div className="relative">
              <label className="text-[10px] uppercase tracking-[0.3em] text-slate-700 font-bold mb-3 block">Digital Correspondence</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="email@domain.com"
                className={cn(
                  "w-full bg-transparent border-b-2 px-0 py-4 outline-none transition-all text-slate-800 placeholder:text-slate-400 font-medium text-lg",
                  errors.email ? "border-red-400" : "border-slate-200 focus:border-primary-dark"
                )}
              />
              {errors.email && <p className="text-[10px] text-red-500 font-bold mt-2 uppercase tracking-widest">{errors.email}</p>}
            </div>
            <div className="relative">
              <label className="text-[10px] uppercase tracking-[0.3em] text-slate-700 font-bold mb-3 block">The Narrative</label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Describe your vision..."
                className="w-full bg-transparent border-b-2 border-slate-200 px-0 py-4 outline-none focus:border-primary-dark transition-all text-slate-800 placeholder:text-slate-400 resize-none font-light italic"
              ></textarea>
            </div>
            
            <div className="relative">
              <GlowingButton 
                className="w-full py-6 text-[10px] uppercase tracking-[0.4em] font-bold"
                onClick={() => {}} // Form will be handled by onSubmit
              >
                {isSubmitting ? 'Transmitting...' : submitted ? 'Message Received' : 'Initiate Movement'}
              </GlowingButton>
              
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute -bottom-8 left-0 right-0 text-center"
                  >
                    <span className="text-[10px] text-primary-dark font-bold uppercase tracking-widest">Connection Established Successfully.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </form>
        </GlassCard>
      </div>
    </Section>
  );
};

// --- Footer ---
export const Footer = () => (
  <footer className="py-24 border-t border-slate-100 bg-white/80 backdrop-blur-md relative overflow-hidden">
    {/* Floating Footer Element */}
    <motion.div 
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 8, repeat: Infinity }}
      className="absolute top-0 left-1/4 w-32 h-32 bg-primary/5 blur-3xl rounded-full"
    />

    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
      <div className="text-4xl font-display font-bold text-gradient tracking-tighter">KVN.DEV</div>
      <div className="text-slate-700 text-[10px] font-bold uppercase tracking-[0.4em] text-center md:text-left">
        © {new Date().getFullYear()} KVN.DEV • Curated with minimalist perfection.
      </div>
      <div className="flex items-center gap-10">
        {SOCIAL_LINKS.map((link) => {
          const Icon = (LucideIcons as any)[link.icon];
          return (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ scale: 1.3, y: -4 }}
              className="text-slate-600 hover:text-primary-dark transition-all duration-500"
            >
              <Icon size={24} />
            </motion.a>
          );
        })}
      </div>
    </div>
  </footer>
);
