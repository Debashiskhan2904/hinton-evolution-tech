import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function CTA() {
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  return (
    <section className="px-4 md:px-6 py-20 bg-[#0B0A10]">
      <motion.div 
        ref={ref}
        style={{ scale }}
        className="max-w-5xl mx-auto bg-[#12111A] border border-white/5 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#00e5ff]/10 blur-[100px] pointer-events-none rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 blur-[100px] pointer-events-none rounded-full"></div>
        
        <motion.div
           variants={containerVariants}
           initial="hidden"
           whileInView="show"
           viewport={{ once: true, margin: "-100px" }}
           className="relative z-10"
        >
          <motion.span variants={itemVariants} className="font-mono text-xs uppercase tracking-[0.3em] font-bold text-[#00e5ff] mb-6 block relative z-10">&mdash; LIMITED SLOTS AVAILABLE</motion.span>
          
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white mb-6 leading-[1.1] relative z-10">
            Ready to Build Something <br /> <span className="text-[#00e5ff]">Extraordinary?</span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-white/60 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto leading-relaxed relative z-10">
            We take a limited number of projects per month to guarantee full attention for every client. Book your free discovery call before your slot is gone.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 relative z-10">
            <button 
              onClick={() => navigate('/contact')}
              className="w-full sm:w-auto bg-[#00e5ff] text-black px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-[#00e5ff]/90 hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(0,229,255,0.2)]"
            >
              <span>🗓️</span> Book a Free Call &rarr;
            </button>
            
            <a 
              href="tel:+910000000000" 
              className="w-full sm:w-auto border border-white/10 bg-white/5 text-white px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-white/10 hover:border-white/20 transition-all"
            >
              <span>📞</span> Call Us Now
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
