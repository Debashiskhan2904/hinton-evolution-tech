import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Work({ isPage, limit }: { isPage?: boolean, limit?: number }) {
  const navigate = useNavigate();
  const categories = ['All Projects', 'Business Sites', 'eCommerce', 'Blog / Portfolio', 'SEO Projects'];
  const [activeCategory, setActiveCategory] = useState('All Projects');

  const projects = [
    {
      title: 'JEEBAN SURAKSHA HOSPITAL',
      category: 'Business Sites',
      badge: 'Healthcare',
      description: 'React.js • Online Booking System',
      icon: '🏥',
      theme: 'blue',
      link: 'https://jeeban-suraksha-hospital.vercel.app/',
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2653"
    },
    {
      title: 'LUXETHREADS ONLINE STORE',
      category: 'eCommerce',
      badge: 'Fashion',
      description: 'Shopify • 340% increase in sales',
      icon: '👗',
      theme: 'purple',
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=2653"
    },
    {
      title: 'TRAINROOT',
      category: 'All Projects',
      badge: 'SaaS',
      description: 'React • Premium Gym & Diet Tracker',
      icon: '🏋️',
      theme: 'teal',
      link: 'https://trainroot-1boo.vercel.app/',
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2653"
    },
    {
      title: 'SUNSHINE VALLEY PRIMARY SCHOOL',
      category: 'Business Sites',
      badge: 'Education',
      description: 'Bright & Friendly Design • High Engagement',
      icon: '🏫',
      theme: 'orange',
      link: 'https://sunshine-valley-primary-school.vercel.app/',
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=2653"
    },
    {
      title: 'Corporate Business Site',
      category: 'Business Sites',
      badge: 'Business',
      description: '5-page responsive website with CRM integration and lead capture forms.',
      icon: '🏢',
      theme: 'blue',
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2653"
    },
    {
      title: 'Personal Portfolio & Blog',
      category: 'Blog / Portfolio',
      badge: 'Portfolio',
      description: 'Minimalist portfolio site with integrated blog and contact system.',
      icon: '✍️',
      theme: 'green',
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=2653"
    }
  ];

  let filteredProjects = projects.filter(p => activeCategory === 'All Projects' || p.category === activeCategory);
  if (limit) {
    filteredProjects = filteredProjects.slice(0, limit);
  }

  const getThemeColors = (theme: string) => {
    switch(theme) {
      case 'purple': return 'bg-[#150B20] border-indigo-500/30 text-indigo-400 group-hover:border-indigo-500/60 shadow-[0_0_15px_rgba(99,102,241,0.1)] group-hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]';
      case 'green': return 'bg-[#0B1C12] border-emerald-500/30 text-emerald-400 group-hover:border-emerald-500/60 shadow-[0_0_15px_rgba(16,185,129,0.1)] group-hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]';
      case 'orange': return 'bg-[#1C110B] border-amber-500/30 text-amber-400 group-hover:border-amber-500/60 shadow-[0_0_15px_rgba(245,158,11,0.1)] group-hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]';
      case 'blue': return 'bg-[#0B151C] border-blue-500/30 text-blue-400 group-hover:border-blue-500/60 shadow-[0_0_15px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]';
      case 'teal': return 'bg-[#0a1a1a] border-teal-500/30 text-teal-400 group-hover:border-teal-500/60 shadow-[0_0_15px_rgba(20,184,166,0.1)] group-hover:shadow-[0_0_30px_rgba(20,184,166,0.2)]';
      case 'rose': return 'bg-[#1a0a0f] border-rose-500/30 text-rose-400 group-hover:border-rose-500/60 shadow-[0_0_15px_rgba(244,63,94,0.1)] group-hover:shadow-[0_0_30px_rgba(244,63,94,0.2)]';
      default: return 'bg-[#111111] border-white/10 text-white/40 group-hover:border-white/20';
    }
  };

  return (
    <section id="work" className={`px-4 md:px-6 overflow-hidden bg-[#0a0a0f] text-white ${isPage ? 'pt-24 md:pt-28 pb-20 md:pb-32' : 'py-20 md:py-32'}`}>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        {isPage ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center justify-center text-center gap-6 mb-12 relative"
          >
            <div className="absolute top-0 w-full h-[300px] bg-gradient-to-b from-[#00e5ff]/10 to-transparent blur-[100px] pointer-events-none"></div>
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex gap-4 text-sm font-medium mb-2 font-mono relative z-10"
            >
              <span className="text-[#00e5ff] cursor-pointer hover:underline" onClick={() => navigate('/')}>Home</span>
              <span className="text-white/20">/</span>
              <span className="text-white/40">Works</span>
            </motion.div>
            <div className="flex flex-col items-center text-center mt-8 px-4 relative z-10 w-full">
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex items-center justify-center gap-4 text-[#00e5ff] text-[10px] sm:text-xs font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase mb-6 sm:mb-8"
              >
                <div className="w-8 h-[1px] bg-[#00e5ff]"></div>
                PORTFOLIO
                <div className="w-8 h-[1px] bg-[#00e5ff]"></div>
              </motion.div>
              <motion.h2 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[4.5rem] xl:text-[5rem] font-black tracking-widest text-white mb-6 leading-[1.1] w-full"
                style={{ fontFamily: 'Arial Black, Impact, sans-serif' }}
              >
                Our <span className="text-[#00e5ff]">Best Work</span>
              </motion.h2>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-white/60 max-w-2xl text-sm sm:text-base md:text-lg font-light mx-auto"
              >
                Real projects, real results. Explore our portfolio of websites, stores, and digital solutions.
              </motion.p>
            </div>
          </motion.div>
        ) : (
          <div className="flex flex-col items-center text-center mb-16 px-4">
            <div className="flex items-center justify-center gap-4 text-[#00e5ff] text-[10px] sm:text-xs font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase mb-6 sm:mb-8">
              <div className="w-8 h-[1px] bg-[#00e5ff]"></div>
              PORTFOLIO
            </div>
            <h2 className="text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[4.5rem] xl:text-[5rem] font-black tracking-widest text-white mb-6 leading-[1.1] w-full" style={{ fontFamily: 'Arial Black, Impact, sans-serif' }}>
              Our <span className="text-[#00e5ff]">Best Work</span>
            </h2>
            <p className="text-white/60 max-w-2xl text-sm sm:text-base md:text-lg font-light mb-8">
              Real projects, real results. Explore our portfolio of websites, stores, and digital solutions.
            </p>
            <button onClick={() => navigate('/contact')} className="flex items-center gap-2 border border-white/20 hover:border-white/50 px-8 py-4 rounded-full text-sm font-medium transition-colors">
              Start a Project <ArrowRight size={16} />
            </button>
          </div>
        )}
        
        <div className="flex flex-wrap gap-3 mb-10 pl-4 md:pl-0">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 relative ${activeCategory === category ? 'bg-[#00e5ff] text-black shadow-[0_0_15px_rgba(0,229,255,0.4)]' : 'border border-white/20 text-white/70 hover:text-white hover:border-white/50'}`}
            >
              {category}
              {activeCategory === category && (
                <motion.div 
                  layoutId="activeFilter"
                  className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#00e5ff] shadow-[0_0_10px_#00e5ff]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
        
        <motion.div 
          layout 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((item, i) => {
              const themeClass = getThemeColors(item.theme);
              const themeBg = themeClass.split(' ')[0];
              const themeBorder = themeClass.split(' ')[1];
              const themeText = themeClass.split(' ')[2];
              return (
              <motion.a
                href={(item as any).link || '#'}
                target={(item as any).link ? "_blank" : undefined}
                rel={(item as any).link ? "noopener noreferrer" : undefined}
                onClick={(e) => !(item as any).link && e.preventDefault()}
                layout
                variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, scale: 0.9 }}
                key={item.title} 
                className={`group cursor-pointer flex flex-col rounded-3xl border transition-all duration-300 ${themeClass}`}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className={`aspect-[4/3] rounded-t-[1.4rem] flex flex-col items-center justify-center relative overflow-hidden ${themeBg}`}>
                  {(item as any).image ? (
                    <img src={(item as any).image} alt={item.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="text-6xl drop-shadow-2xl z-10">{item.icon}</div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="flex flex-col p-6 bg-[#161a22] rounded-b-[1.4rem] border-t border-white/5 h-full z-10 flex-1">
                  <h3 className="text-xl font-black tracking-tight mb-2 text-white">{item.title}</h3>
                  <p className="text-sm text-white/50 mb-6 flex-1">{item.description}</p>
                  <div className="mt-auto">
                    <span className={`text-[10px] uppercase font-bold tracking-widest px-4 py-1.5 rounded-full border border-white/10 ${themeText} bg-white/5`}>{item.badge}</span>
                  </div>
                </div>
              </motion.a>
            )})}
          </AnimatePresence>
        </motion.div>

        {limit && (
          <div className="mt-12 flex justify-center">
            <button 
              onClick={() => navigate('/works')}
              className="border border-white/20 text-white hover:bg-white/5 px-8 py-3 rounded-full text-sm font-medium transition-colors whitespace-nowrap"
            >
              View All Works &rarr;
            </button>
          </div>
        )}
      </motion.div>
    </section>
  );
}
