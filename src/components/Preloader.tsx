import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    // Simple timer or window load
    const handleLoad = () => {
      setTimeout(() => onComplete(), 500);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
    
    const timeout = setTimeout(() => {
      onComplete();
    }, 2500); // Fallback
    
    return () => clearTimeout(timeout);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050508]"
    >
      <motion.div
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
        className="flex flex-col items-center justify-center gap-6"
      >
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 rounded-full border-2 border-white/10 animate-ping" style={{ animationDuration: '2s' }}></div>
          <div className="absolute inset-2 rounded-full border-2 border-t-[#00e5ff] border-r-transparent border-b-[#00e5ff]/50 border-l-transparent animate-spin" style={{ animationDuration: '1.5s' }}></div>
          <div className="absolute inset-4 rounded-full border-2 border-l-white/50 border-r-white/50 border-t-transparent border-b-transparent animate-spin" style={{ animationDuration: '3s', animationDirection: 'reverse' }}></div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-[#00e5ff] font-mono text-xs tracking-[0.4em] uppercase font-bold">Initializing</span>
          <div className="w-24 h-[1px] bg-white/10 overflow-hidden relative">
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-[#00e5ff] to-transparent"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
