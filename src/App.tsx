import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Lock, X } from 'lucide-react';
import { signInWithPopup, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { auth, googleProvider } from './lib/firebase';

// Components
import Nav from './components/Nav';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import AdminSubmissions from './components/AdminSubmissions';
import Preloader from './components/Preloader';

// Pages
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import WorkPage from './pages/WorkPage';
import TeamPage from './pages/TeamPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import PolicyPage from './pages/PolicyPage';

const ADMIN_EMAILS = ['debashiskhan586@gmail.com', 'hintonevolution@gmail.com'];

function ScrollToTopRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [isPreloading, setIsPreloading] = useState(true);
  const [isAdminViewOpen, setIsAdminViewOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsAdmin(currentUser?.email ? ADMIN_EMAILS.includes(currentUser.email) : false);
    });
    return () => unsubscribe();
  }, []);

  const [isLoadingLogin, setIsLoadingLogin] = useState(false);

  const handleLogin = async () => {
    if (isLoadingLogin) return;
    setLoginError('');
    setIsLoadingLogin(true);
    try {
      await signInWithPopup(auth, googleProvider);
      setIsLoginModalOpen(false);
    } catch (error: any) {
      console.error("Login failed:", error);
      if (error.code === 'auth/popup-blocked') {
        setLoginError('Popup blocked by browser. Please allow popups or open this app in a new tab.');
      } else if (error.code === 'auth/cancelled-popup-request') {
        setLoginError('Login request was cancelled. Please try again.');
      } else if (error.code === 'auth/popup-closed-by-user') {
        setLoginError('Login window was closed before completing. Please try again.');
      } else if (error.code === 'auth/unauthorized-domain') {
        const currentDomain = window.location.hostname;
        setLoginError(`This domain (${currentDomain}) is not authorized. Please add it to Firebase Console -> Authentication -> Settings -> Authorized domains.`);
      } else {
        setLoginError('Failed to sign in. Please try again later.');
      }
    } finally {
      setIsLoadingLogin(false);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setIsAdminViewOpen(false);
  };

  return (
    <Router>
      <ScrollToTopRouteChange />
      
      <AnimatePresence>
        {isPreloading && <Preloader onComplete={() => setIsPreloading(false)} />}
      </AnimatePresence>

      <div className="min-h-screen bg-[#0B0A10] font-sans text-white selection:bg-indigo-500/30 selection:text-white overflow-x-hidden">
          <Nav 
            user={user}
            isAdmin={isAdmin}
            onLogin={() => setIsLoginModalOpen(true)}
            onLogout={handleLogout}
            onOpenAdmin={() => setIsAdminViewOpen(true)}
          />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/works" element={<WorkPage />} />
              <Route path="/about" element={<TeamPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/policy" element={<PolicyPage />} />
            </Routes>
          </main>
          <Footer />
          <ScrollToTop />
          
          <AnimatePresence>
            {isAdminViewOpen && isAdmin && (
              <AdminSubmissions onClose={() => setIsAdminViewOpen(false)} />
            )}

            {isLoginModalOpen && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                onClick={() => setIsLoginModalOpen(false)}
              >
                <motion.div 
                  initial={{ scale: 0.95, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.95, opacity: 0, y: 20 }}
                  onClick={(e) => e.stopPropagation()}
                  className="bg-[#12111A] border border-white/10 rounded-2xl p-8 max-w-sm w-full relative overflow-hidden"
                >
                  <button onClick={() => setIsLoginModalOpen(false)} className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors">
                    <X size={20} />
                  </button>
                  <div className="mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                      <Lock size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-tight">Admin Access</h3>
                  </div>
                  
                  <div className="flex flex-col space-y-4">
                    {loginError && (
                      <div className="bg-rose-500/10 border border-rose-500/20 rounded-lg p-3">
                        <p className="text-rose-400 text-sm leading-relaxed">{loginError}</p>
                      </div>
                    )}
                    <button 
                      onClick={handleLogin} 
                      disabled={isLoadingLogin}
                      className="w-full bg-white hover:bg-gray-100 disabled:bg-gray-300 disabled:cursor-not-allowed text-[#12111A] font-bold px-4 py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
                    >
                      {isLoadingLogin ? (
                        <div className="w-5 h-5 border-2 border-[#12111A]/20 border-t-[#12111A] rounded-full animate-spin"></div>
                      ) : (
                        <>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                          Sign in with Google
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
    </Router>
  );
}
