import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Pricing({ isPage }: { isPage?: boolean }) {
  const navigate = useNavigate();
  const plans = [
    {
      name: 'Basic Plan',
      badge: 'STARTER',
      price: '₹5,000',
      oldPrice: '₹10,000',
      description: 'Perfect for individuals & small startups',
      theme: 'cyan-basic',
      features: [
        '1–3 pages (Home, About, Contact)',
        'Mobile responsive design',
        'Template-based layout',
        'Contact form included',
        'Basic SEO setup'
      ],
      customization: 'Up to 15 changes',
      revisions: '1 round',
      support: '7 days post-launch',
      btnText: 'Get Started'
    },
    {
      name: 'Basic Pro',
      badge: 'STARTER+',
      price: '₹10,000',
      oldPrice: '₹15,000',
      description: 'For those who want better quality',
      theme: 'cyan-highlight',
      isPopular: true,
      features: [
        'Everything in Basic Plan',
        'Improved design quality',
        'Speed optimization',
        'WhatsApp integration'
      ],
      customization: 'Up to 20 changes',
      revisions: '2 rounds',
      support: '15 days post-launch',
      btnText: 'Get Started'
    },
    {
      name: 'Intermediate Plan',
      badge: 'BUSINESS GROWTH',
      price: '₹15,000',
      oldPrice: '₹30,000',
      description: 'For growing businesses ready to scale',
      theme: 'cyan-basic',
      features: [
        '5–8 pages',
        'Semi-custom design',
        'SEO optimization',
        'WhatsApp/chat integration',
        'Google Analytics setup',
        'Speed optimization'
      ],
      customization: 'Up to 20 changes',
      revisions: '3 rounds',
      support: '1 month post-launch',
      btnText: 'Get Started'
    },
    {
      name: 'Intermediate Pro',
      badge: 'GROWTH+',
      price: '₹30,000',
      oldPrice: '₹45,000',
      description: 'For established brands aiming higher',
      theme: 'cyan-basic',
      features: [
        'Everything in Intermediate Plan',
        'Advanced UI improvements',
        'Conversion-focused design',
        'Blog setup / dynamic pages'
      ],
      customization: 'Up to 25 changes',
      revisions: '4 rounds',
      support: '2 months post-launch',
      btnText: 'Get Started'
    },
    {
      name: 'Advanced Plan 👑',
      badge: 'PREMIUM',
      price: '₹45,000',
      oldPrice: '₹80,000+',
      description: 'For enterprises & serious eCommerce',
      theme: 'gold',
      features: [
        '10+ pages or full eCommerce store',
        'Fully custom UI/UX design',
        'Payment gateway integration',
        'CMS / Admin dashboard',
        'Full SEO setup',
        'Speed & performance optimization'
      ],
      customization: 'Unlimited (lifetime basic changes)',
      revisions: 'Flexible',
      support: '3 months post-launch',
      btnText: 'Get Premium'
    }
  ];

  const getPlanTheme = (theme: string) => {
    switch(theme) {
      case 'cyan-highlight': 
        return { 
          card: 'border-[#00e5ff]/50 bg-[#0a0a0f] shadow-[0_0_20px_rgba(0,229,255,0.15)] transform md:-translate-y-2', 
          text: 'text-[#00e5ff]', 
          badge: 'text-[#00e5ff]',
          btn: 'bg-[#00e5ff] hover:bg-[#00e5ff]/90 text-black', 
          check: 'text-[#00e5ff]' 
        };
      case 'gold': 
        return { 
          card: 'border-[#ffc107]/50 bg-[#0a0a0f] shadow-[0_0_20px_rgba(255,193,7,0.15)]', 
          text: 'text-[#ffc107]', 
          badge: 'text-[#ffc107]',
          btn: 'bg-[#ffc107] hover:bg-[#ffc107]/90 text-black', 
          check: 'text-[#ffc107]' 
        };
      case 'cyan-basic':
      default: 
        return { 
          card: 'border-white/10 bg-[#0a0a0f] hover:border-white/20', 
          text: 'text-[#00e5ff]', 
          badge: 'text-[#00e5ff]',
          btn: 'bg-transparent hover:bg-white/5 text-white border border-white/10 hover:border-white/20', 
          check: 'text-[#00e5ff]' 
        };
    }
  };

  return (
    <section id="pricing" className={`px-4 md:px-6 bg-[#0B0B14] text-white ${isPage ? 'pt-24 md:pt-28 pb-20 md:pb-32' : 'py-20 md:py-32'}`}>
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
              <span className="text-white/40">Pricing</span>
            </motion.div>
            <div className="flex flex-col items-center text-center mt-8 px-4 relative z-10">
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex items-center justify-center gap-4 text-[#00e5ff] text-[10px] sm:text-xs font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase mb-6 sm:mb-8"
              >
                <div className="w-8 h-[1px] bg-[#00e5ff]"></div>
                PRICING PLANS
              </motion.div>
              <motion.h2 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[4.5rem] xl:text-[5rem] font-black tracking-widest text-white mb-6 leading-[1.1] w-full"
                style={{ fontFamily: 'Arial Black, Impact, sans-serif' }}
              >
                Transparent <span className="text-[#00e5ff]">Pricing</span> for Every Budget
              </motion.h2>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-white/60 max-w-2xl text-sm sm:text-base md:text-lg font-light mx-auto"
              >
                No hidden fees. No surprises. Just honest, value-driven packages — all prices in Indian Rupees (₹).
              </motion.p>
            </div>
          </motion.div>
        ) : (
          <div className="flex flex-col items-center text-center mb-16 px-4">
            <div className="flex items-center justify-center gap-4 text-[#00e5ff] text-[10px] sm:text-xs font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase mb-6 sm:mb-8">
              <div className="w-8 h-[1px] bg-[#00e5ff]"></div>
              PRICING PLANS
            </div>
            <h2 className="text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[4.5rem] xl:text-[5rem] font-black tracking-widest text-white mb-6 leading-[1.1] w-full" style={{ fontFamily: 'Arial Black, Impact, sans-serif' }}>
              Transparent <span className="text-[#00e5ff]">Pricing</span> for Every Budget
            </h2>
            <p className="text-white/60 max-w-2xl text-sm sm:text-base md:text-lg font-light">
              No hidden fees. No surprises. Just honest, value-driven packages — all prices in Indian Rupees (₹).
            </p>
          </div>
        )}

        <motion.div 
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
          className="space-y-6 mb-16"
        >
          {/* Top 3 Plans */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {plans.slice(0, 3).map((plan, i) => {
              const themeColors = getPlanTheme(plan.theme || '');
              return (
              <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.02, y: -5 }}
              key={i} 
              className={`flex flex-col p-8 rounded-2xl border ${themeColors.card} relative transition-all duration-300 group`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-[#00e5ff] text-black text-[10px] font-black uppercase tracking-widest rounded-full shadow-[0_0_15px_rgba(0,229,255,0.5)] z-10 flex items-center gap-1 whitespace-nowrap">
                  <span className="text-sm leading-none">⭐</span> MOST POPULAR STARTER
                </div>
              )}
              
              <div className="flex flex-col mb-6 mt-2">
                 <span className={`text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] mb-2 ${themeColors.badge}`}>
                   {plan.badge}
                 </span>
                 <h3 className="text-xl sm:text-2xl font-black tracking-wide text-white">{plan.name}</h3>
              </div>
              
              <div className="mb-4 flex items-end gap-3 flex-wrap">
                <div className={`text-4xl sm:text-[2.5rem] font-black leading-none ${themeColors.text}`}>{plan.price}</div>
                {plan.oldPrice && (
                  <div className="text-white/40 text-lg sm:text-xl mb-1">– {plan.oldPrice}</div>
                )}
              </div>
              
              <p className="text-sm text-white/60 mb-6 pb-6 border-b border-white/10 font-light">
                {plan.description}
              </p>
              
              <div className="flex-grow space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <Check size={18} className={`${themeColors.check} shrink-0 mt-0.5`} />
                    <span className="text-sm text-white/80">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-[#0f0f16] w-full p-4 rounded-xl mb-6 flex flex-col gap-1.5 text-xs text-white/50 border border-white/5 group-hover:border-white/10 transition-colors">
                <p><span className="font-bold text-white/80">Customization:</span> {plan.customization}</p>
                <p><span className="font-bold text-white/80">Revisions:</span> {plan.revisions}</p>
                <p><span className="font-bold text-white/80">Support:</span> {plan.support}</p>
              </div>
              
              <button onClick={() => navigate('/contact')} className={`w-full py-4 rounded-xl font-bold transition-all mt-auto flex items-center justify-center gap-2 ${themeColors.btn}`}>
                {plan.btnText} →
              </button>
            </motion.div>
            )})}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch w-full">
            {plans.slice(3, 5).map((plan, i) => {
              const themeColors = getPlanTheme(plan.theme || '');
              return (
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                whileHover={{ scale: 1.02, y: -5 }}
                key={i + 3} 
                className={`flex flex-col p-8 rounded-2xl border ${themeColors.card} relative transition-all duration-300 group ${i === 0 ? 'lg:col-span-2' : 'lg:col-span-3'}`}
              >
                {/* Same plan content layout */}
                {plan.isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-[#00e5ff] text-black text-[10px] font-black uppercase tracking-widest rounded-full shadow-[0_0_15px_rgba(0,229,255,0.5)] z-10 flex items-center gap-1 whitespace-nowrap">
                    <span className="text-sm leading-none">⭐</span> MOST POPULAR STARTER
                  </div>
                )}
                
                <div className="flex flex-col mb-6 mt-2">
                   <span className={`text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] mb-2 ${themeColors.badge}`}>
                     {plan.badge}
                   </span>
                   <h3 className="text-xl sm:text-2xl font-black tracking-wide text-white">{plan.name}</h3>
                </div>
                
                <div className="mb-4 flex items-end gap-3 flex-wrap">
                  <div className={`text-4xl sm:text-[2.5rem] font-black leading-none ${themeColors.text}`}>{plan.price}</div>
                  {plan.oldPrice && (
                    <div className="text-white/40 text-lg sm:text-xl mb-1">– {plan.oldPrice}</div>
                  )}
                </div>
                
                <p className="text-sm text-white/60 mb-6 pb-6 border-b border-white/10 font-light">
                  {plan.description}
                </p>
                
                <div className="flex-grow space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <Check size={18} className={`${themeColors.check} shrink-0 mt-0.5`} />
                      <span className="text-white/80 text-sm leading-relaxed font-light">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-[#0f0f16] w-full p-4 rounded-xl mb-6 flex flex-col gap-1.5 text-xs text-white/50 border border-white/5 group-hover:border-white/10 transition-colors">
                  <p><span className="font-bold text-white/80">Customization:</span> {plan.customization}</p>
                  <p><span className="font-bold text-white/80">Revisions:</span> {plan.revisions}</p>
                  <p><span className="font-bold text-white/80">Support:</span> {plan.support}</p>
                </div>
                
                <button onClick={() => navigate('/contact')} className={`w-full py-4 rounded-xl font-bold transition-all mt-auto flex items-center justify-center gap-2 ${themeColors.btn}`}>
                  {plan.btnText} →
                </button>
              </motion.div>
              )})}
          </div>
        </motion.div>
        
        <div className="bg-[#12121D] border border-white/10 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-8 justify-between items-center relative overflow-hidden mt-12 text-center md:text-left justify-center md:justify-center w-full max-w-5xl mx-auto">
           <div className="absolute top-0 right-0 w-64 h-64 bg-[#00e5ff]/5 blur-[80px] rounded-full pointer-events-none"></div>
           <div className="z-10 w-full flex flex-col items-center text-center">
              <p className="text-sm text-white/60 mb-2 flex items-center gap-2 justify-center"><span className="text-xl leading-none">💡</span> Not sure which plan is right for you?</p>
              <h3 className="text-lg md:text-2xl font-bold mb-6 text-white leading-tight">
                Book a <span className="text-[#00e5ff]">free 30-minute consultation</span> and we'll recommend the perfect package.
              </h3>
              
              <button onClick={() => navigate('/contact')} className="inline-flex items-center justify-center gap-2 bg-[#00e5ff] text-black px-8 py-3.5 rounded-lg font-bold hover:bg-[#00e5ff]/90 hover:scale-105 active:scale-95 transition-all w-full sm:w-auto">
                 <span>🗓️</span> Book Free Call →
              </button>
           </div>
        </div>
      </motion.div>
    </section>
  );
}
