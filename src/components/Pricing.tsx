import { useState } from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { trackEvent } from '../utils/analytics';

export default function Pricing({ isPage }: { isPage?: boolean }) {
  const navigate = useNavigate();
  
  const plans = [
    {
      name: 'Starter Website',
      badge: 'Small Business, Professionals',
      price: '₹25,000',
      description: 'Ideal for establishing a professional online presence with essential features.',
      theme: 'cyan-basic',
      features: [
        'Up to 8 Pages',
        'Mobile Responsive Design',
        'Contact Form & WhatsApp Integration',
        'Basic SEO Setup & SSL Installation',
        'Google Maps & Social Integration',
        'Speed Optimization',
        '1 Month Support'
      ],
      btnText: 'Get Started'
    },
    {
      name: 'Business Website',
      badge: 'Growing Companies',
      price: '₹45,000',
      description: 'Advanced features and dynamic content management for businesses ready to scale.',
      theme: 'cyan-highlight',
      isPopular: true,
      features: [
        'Everything in Starter plus:',
        'Up to 20 Pages & Advanced UI/UX',
        'Blog & Dynamic CMS',
        'Google Analytics & Search Console',
        'Lead Forms & Security Setup',
        'Advanced Speed Optimization',
        '3 Months Support'
      ],
      btnText: 'Get Started'
    },
    {
      name: 'Premium Corporate',
      badge: 'Large Businesses & Brands',
      price: '₹90,000',
      description: 'A complete digital growth solution with custom design and corporate portals.',
      theme: 'gold',
      features: [
        'Everything in Business plus:',
        'Unlimited Pages & Custom Design',
        'Distributor/Dealer Portal',
        'Multi-language (Optional)',
        'HR/Career Portal & Corporate Forms',
        'Advanced SEO & Premium Security',
        '6 Months Support'
      ],
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
                Website Development <span className="text-[#00e5ff]">Packages</span>
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
              Website Development <span className="text-[#00e5ff]">Packages</span>
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch mb-16"
        >
          {plans.map((plan, i) => {
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
                  <span className="text-sm leading-none">⭐</span> MOST POPULAR
                </div>
              )}
              
              <div className="flex flex-col mb-6 mt-2">
                 <span className={`text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] mb-2 ${themeColors.badge}`}>
                   {plan.badge}
                 </span>
                 <h3 className="text-xl sm:text-2xl font-black tracking-wide text-white">{plan.name}</h3>
              </div>
              
              <div className="mb-4 flex items-end gap-3 flex-wrap">
                <div className={`text-4xl sm:text-[2.5rem] font-black leading-none ${themeColors.text} transition-all duration-300`}>
                  {plan.price}
                </div>
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
              
              <button onClick={() => {
                trackEvent('begin_checkout', {
                  currency: 'INR',
                  value: parseInt(plan.price.replace(/\D/g, '')),
                  items: [{ item_name: plan.name, price: plan.price }]
                });
                navigate('/contact');
              }} className={`w-full py-4 rounded-xl font-bold transition-all mt-auto flex items-center justify-center gap-2 ${themeColors.btn}`}>
                {plan.btnText} →
              </button>
            </motion.div>
            )})}
        </motion.div>
        
        <div className="bg-[#12121D] border border-white/10 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-8 justify-between items-center relative overflow-hidden mt-12 text-center md:text-left justify-center md:justify-center w-full max-w-5xl mx-auto">
           <div className="absolute top-0 right-0 w-64 h-64 bg-[#00e5ff]/5 blur-[80px] rounded-full pointer-events-none"></div>
           
           <div className="z-10 w-full flex flex-col items-center text-center">
              <p className="text-sm text-white/60 mb-2 flex items-center gap-2 justify-center"><span className="text-xl leading-none">💡</span> Not sure which plan is right for you?</p>
              <h3 className="text-lg md:text-2xl font-bold mb-6 text-white leading-tight">
                Book a <span className="text-[#00e5ff]">free 30-minute consultation</span> and we'll recommend the perfect package.
              </h3>
              
              <button onClick={() => {
                trackEvent('generate_lead', { event_category: 'Consultation', event_label: 'Free Call' });
                navigate('/contact');
              }} className="inline-flex items-center justify-center gap-2 bg-[#00e5ff] text-black px-8 py-3.5 rounded-lg font-bold hover:bg-[#00e5ff]/90 hover:scale-105 active:scale-95 transition-all w-full sm:w-auto">
                 <span>🗓️</span> Book Free Call →
              </button>
           </div>
        </div>
      </motion.div>
    </section>
  );
}
