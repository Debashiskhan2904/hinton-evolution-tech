import { motion } from 'motion/react';
import { ArrowRight, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();
  return (
    <section className="pt-32 pb-20 px-4 md:px-6 overflow-hidden relative w-full min-h-screen flex items-center bg-[#0B0A10]">
      {/* Background Aesthetic */}
      <div className="absolute top-0 left-0 w-full h-[800px] pointer-events-none opacity-50">
        <div className="absolute top-[-20%] left-1/4 w-[600px] h-[600px] bg-indigo-600/30 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 mb-8"
            >
              <span className="h-2 w-2 rounded-full bg-indigo-500" />
              <span className="text-xs font-medium text-indigo-300">Accepting new projects now</span>
            </motion.div>
            
            <motion.h1 
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    delayChildren: 0.1,
                    staggerChildren: 0.15
                  }
                }
              }}
              className="text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] font-black uppercase tracking-[-0.04em] leading-[0.85] text-white mb-8"
            >
               <motion.span 
                 variants={{
                   hidden: { opacity: 0, y: 30 },
                   visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 12 } }
                 }}
                 className="block hover:text-indigo-100 transition-colors"
               >
                 WE BUILD
               </motion.span>
               <motion.span 
                 variants={{
                   hidden: { opacity: 0, y: 30 },
                   visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 12 } }
                 }}
                 className="block bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent transform"
               >
                 DIGITAL
               </motion.span>
               <motion.span 
                 variants={{
                   hidden: { opacity: 0, y: 30 },
                   visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 12 } }
                 }}
                 className="block mb-6 hover:text-indigo-100 transition-colors"
               >
                 EMPIRES
               </motion.span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 100, damping: 11 }}
              className="text-2xl md:text-3xl font-bold text-white/90 mb-4 tracking-tight max-w-2xl"
            >
              Enterprise-Grade Web Solutions for Ambitious Brands
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 100, damping: 12 }}
              className="text-white/60 text-lg md:text-xl max-w-lg mb-10 font-light leading-relaxed"
            >
              Premium website design, development & management for businesses ready to dominate their market online. From concept to conversion — we handle everything.
            </motion.p>
            
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.7, type: "spring", stiffness: 100, damping: 10 }}
               className="flex flex-wrap items-center gap-4 mt-8"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contact')}
                className="bg-[#00e5ff] text-black px-6 py-3 rounded-md font-semibold transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(0,229,255,0.2)] hover:shadow-[0_0_30px_rgba(0,229,255,0.4)]" 
              >
                🚀 Get Started
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/works')}
                className="border border-white/20 hover:border-white/40 hover:bg-white/5 text-white px-6 py-3 rounded-md font-medium transition-all flex items-center gap-2"
              >
                📁 View Our Works
              </motion.button>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
            transition={{ 
              opacity: { delay: 0.4 },
              x: { delay: 0.4 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.4 } 
            }}
            className="relative lg:ml-8"
          >
             <motion.div 
               animate={{ y: [0, -5, 0] }}
               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="absolute -top-6 right-8 md:-right-6 z-20 rounded-full bg-[#111827] border border-white/10 px-4 py-2 flex items-center gap-2 text-sm font-medium shadow-xl"
             >
               <span className="text-amber-500">⚡</span>
               <span className="text-emerald-400">PageSpeed 99</span>
             </motion.div>
             
             <div className="rounded-2xl bg-[#0f111a] border border-white/10 shadow-2xl p-6 relative overflow-hidden">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-[#00e5ff]" />
                  <span className="ml-2 text-sm font-mono text-[#00e5ff] font-bold tracking-widest">// HINTON_EVOLUTION.exe</span>
                </div>
                
                <pre className="font-mono text-[15px] leading-[2] text-white/50 overflow-x-auto">
                  <div className="flex"><span><span className="text-[#ff3399]">const</span> <span className="text-white">agency</span> = {'{'}</span></div>
                  <div className="flex"><span>  <span className="text-[#00e5ff]">name</span>: <span className="text-[#ffb347]">"Hinton Evolution Tech"</span>,</span></div>
                  <div className="flex"><span>  <span className="text-[#00e5ff]">location</span>: <span className="text-[#ffb347]">"Durgapur, WB IN"</span>,</span></div>
                  <div className="flex"><span>  <span className="text-[#00e5ff]">expertise</span>: [<span className="text-[#ffb347]">"Web Design"</span>,</span></div>
                  <div className="flex relative">
                     <div className="absolute -left-12 -top-4 w-16 h-16 rounded-full border border-[#00e5ff]/30 flex items-center justify-center"></div>
                     <span>    <span className="text-[#ffb347]">"Maintenance"</span>, <span className="text-[#ffb347]">"SEO"</span>],</span>
                  </div>
                  <div className="flex"><span>  <span className="text-[#00e5ff]">projects</span>: <span className="text-[#00e5ff]">100</span><span className="text-[#00e5ff]">+</span>,</span></div>
                  <div className="flex"><span>  <span className="text-[#00e5ff]">satisfaction</span>: <span className="text-[#00e5ff]">98%</span>,</span></div>
                  <div className="flex"><span>  <span className="text-[#00e5ff]">status</span>: <span className="text-[#ffb347]">"Taking new clients </span>✅<span className="text-[#ffb347]">"</span></span></div>
                  <div className="flex"><span>{'}'};</span></div>
                  <div className="flex"><span className="h-4"></span></div>
                  <div className="flex"><span><span className="text-[#00e5ff]">launch</span>(<span className="text-white/70">agency</span>.<span className="text-[#00e5ff]">bestProject</span>());</span></div>
                </pre>
             </div>

             <motion.div 
               animate={{ y: [0, 8, 0] }}
               transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
               className="absolute -bottom-6 left-8 md:-left-6 z-20 rounded-full bg-[#111827] border border-white/10 px-4 py-2 flex items-center gap-3 text-sm font-medium shadow-xl"
             >
               <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
               <span className="text-white">Client site live!</span>
             </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
