import { motion } from 'motion/react';
import { ArrowUpRight, Linkedin, Instagram, Facebook } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <footer className="bg-[#050508] text-white pt-32 pb-12 px-6 md:px-12 border-t border-white/5 relative z-10 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#00e5ff]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Massive CTA Section - Only on Home Page */}
        {isHomePage && (
          <div className="mb-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-12"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.3em] font-bold text-[#00e5ff] mb-6 block">Ready to start?</span>
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white leading-[0.9]">
                  Let's Build<br />
                  <span className="text-white/40">Together</span>
                </h2>
              </div>
              
              <motion.a 
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center min-w-[140px] w-[140px] h-[140px] md:min-w-[160px] md:w-[160px] md:h-[160px] rounded-full bg-[#00e5ff] text-black font-bold group shadow-[0_0_40px_rgba(0,229,255,0.3)] transition-shadow hover:shadow-[0_0_60px_rgba(0,229,255,0.5)] shrink-0"
              >
                <div className="flex flex-col items-center overflow-hidden">
                  <span className="text-sm tracking-wider uppercase mb-1 font-black">Start</span>
                  <ArrowUpRight strokeWidth={3} className="w-8 h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </motion.a>
            </motion.div>
          </div>
        )}

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-24 border-t border-white/10 pt-16">
          <div className="lg:col-span-5 lg:pr-8">
            <div className="flex items-center gap-2 mb-6 text-2xl font-black uppercase tracking-widest">
              <span>HINTON <span className="text-[#00e5ff]">EVOLUTION</span></span>
            </div>
            <p className="text-sm font-light leading-relaxed text-white/50 max-w-sm mb-8">
              Premium website design, development & management. Based in India, serving clients worldwide with excellence.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-[#00e5ff] hover:border-[#00e5ff] hover:text-black transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(0,229,255,0.4)]">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-[#00e5ff] hover:border-[#00e5ff] hover:text-black transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(0,229,255,0.4)]">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-[#00e5ff] hover:border-[#00e5ff] hover:text-black transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(0,229,255,0.4)]">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-[#00e5ff] hover:border-[#00e5ff] hover:text-black transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(0,229,255,0.4)]">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h5 className="text-xs uppercase tracking-[0.2em] font-bold text-white mb-8">Company</h5>
            <ul className="space-y-4">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Our Work', path: '/works' },
                { name: 'Pricing', path: '/pricing' },
                { name: 'Contact', path: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.path} className="text-[15px] font-light text-white/70 hover:text-[#00e5ff] transition-colors py-1 flex items-center gap-2 group">
                    <span className="w-0 h-[2px] bg-[#00e5ff] group-hover:w-4 transition-all duration-300"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h5 className="text-xs uppercase tracking-[0.2em] font-bold text-white mb-8">Contact</h5>
            <ul className="space-y-5">
              <li>
                <a href="mailto:hintonevolution@gmail.com" className="text-[15px] font-light text-white/70 hover:text-[#00e5ff] transition-colors py-1 inline-block">
                  hintonevolution@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919832727520" className="text-[15px] font-light text-white/70 hover:text-[#00e5ff] transition-colors py-1 inline-block">
                  +91 98327 27520
                </a>
              </li>
              <li>
                <p className="text-[15px] font-light text-white/70 py-1">Durgapur, West Bengal</p>
              </li>
              <li>
                <p className="text-[15px] font-light text-white/70 py-1 flex items-center group cursor-default">
                  India <span className="text-[10px] uppercase font-bold tracking-widest text-[#00e5ff]/50 ml-2">IN</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 mt-12 md:mt-0">
          <p className="text-[13px] font-light text-white/50 text-center md:text-left">
            © {new Date().getFullYear()} Hinton Evolution. All rights reserved. Built with passion in India.
          </p>
          <div className="flex gap-8">
            <a href="/policy" className="text-[13px] font-light text-white/50 hover:text-[#00e5ff] transition-colors py-1">Company Policy &amp; Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
