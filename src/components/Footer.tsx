export default function Footer() {
  return (
    <footer className="bg-[#050508] text-white py-24 px-6 md:px-12 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-24">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-6 text-2xl font-black uppercase tracking-widest">
              <span>HINTON <span className="text-[#00e5ff]">EVOLUTION</span></span>
            </div>
            <p className="text-sm font-light leading-relaxed text-white/50 max-w-xs pr-4">
              Premium website design, development & management. Based in India, serving clients worldwide with excellence.
            </p>
          </div>
          
          <div className="lg:col-span-3">
            <h5 className="text-[11px] uppercase tracking-[0.2em] font-bold text-white mb-8">Services</h5>
            <ul className="space-y-4">
              <li><a href="/services" className="text-sm font-light hover:text-[#00e5ff] transition-colors text-white/60">Web & App Design</a></li>
              <li><a href="/services" className="text-sm font-light hover:text-[#00e5ff] transition-colors text-white/60">E-Commerce</a></li>
              <li><a href="/services" className="text-sm font-light hover:text-[#00e5ff] transition-colors text-white/60">Landing Pages</a></li>
              <li><a href="/services" className="text-sm font-light hover:text-[#00e5ff] transition-colors text-white/60">SEO & Growth</a></li>
              <li><a href="/services" className="text-sm font-light hover:text-[#00e5ff] transition-colors text-white/60">Website Management</a></li>
              <li><a href="/services" className="text-sm font-light hover:text-[#00e5ff] transition-colors text-white/60">Brand Identity</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h5 className="text-[11px] uppercase tracking-[0.2em] font-bold text-white mb-8">Company</h5>
            <ul className="space-y-4">
              <li><a href="/about" className="text-sm font-light hover:text-[#00e5ff] transition-colors text-white/60">About Us</a></li>
              <li><a href="/works" className="text-sm font-light hover:text-[#00e5ff] transition-colors text-white/60">Our Work</a></li>
              <li><a href="/pricing" className="text-sm font-light hover:text-[#00e5ff] transition-colors text-white/60">Pricing</a></li>
              <li><a href="/contact" className="text-sm font-light hover:text-[#00e5ff] transition-colors text-white/60">Contact</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h5 className="text-[11px] uppercase tracking-[0.2em] font-bold text-white mb-8">Contact</h5>
            <ul className="space-y-5">
              <li><a href="mailto:official@hintonevolution.com" className="text-sm font-light hover:text-[#00e5ff] transition-colors text-white/60">official@hintonevolution.com</a></li>
              <li><a href="tel:+919832727520" className="text-sm font-light hover:text-[#00e5ff] transition-colors text-white/60">+91 98327 27520</a></li>
              <li><p className="text-sm font-light text-white/60">Durgapur, West Bengal</p></li>
              <li><p className="text-sm font-light text-white/60 flex items-center justify-between group cursor-default">India <span className="text-[10px] uppercase font-bold tracking-widest text-[#2f3146] group-hover:text-[#00e5ff]/50 transition-colors">IN</span></p></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-xs font-light text-white/40">© 2026 Hinton Evolution. All rights reserved. Built with passion in India.</p>
        </div>
      </div>
    </footer>
  );
}
