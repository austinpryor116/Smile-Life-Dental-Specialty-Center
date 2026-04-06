import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/src/lib/utils';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { 
    name: 'Departments', 
    href: '/departments',
    activePaths: ['/departments', '/periodontics', '/orthodontics']
  },
  { name: 'Patient Center', href: '/patient-center' },
  { name: 'Provider Center', href: '/provider-center' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav aria-label="Main Navigation" className={cn(
      "fixed top-0 z-50 w-full pl-5 pr-6 md:pr-12 py-6 md:py-8 flex justify-between items-center transition-all duration-500",
      scrolled ? "bg-black/10 backdrop-blur-2xl border-b border-white/10 shadow-[0_4_30px_rgba(0,0,0,0.1)]" : "bg-transparent"
    )}>
      <Link to="/" className="z-50 flex items-center group">
        <img 
          src="/assets/images/smile-life-logo.svg" 
          alt="Smile Life Dental Specialty Center Logo" 
          className="h-16 w-auto"
          referrerPolicy="no-referrer"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const parent = target.parentElement;
            if (parent && !parent.querySelector('.logo-fallback')) {
              const span = document.createElement('span');
              span.className = 'logo-fallback font-headline italic text-2xl text-primary tracking-tighter';
              span.innerText = 'SMILE LIFE';
              parent.appendChild(span);
            }
          }}
        />
      </Link>
      
      {/* Desktop Links */}
      <div className="hidden md:flex space-x-12 items-center">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.href || 
            (link.activePaths && link.activePaths.some(p => location.pathname.startsWith(p)));
          
          return (
            <Link
              key={link.name}
              to={link.href}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "font-body tracking-[0.3em] uppercase text-[10px] font-bold transition-all duration-300",
                isActive 
                  ? "text-primary border-b border-primary pb-1" 
                  : "text-white opacity-60 hover:opacity-100 hover:text-primary"
              )}
            >
              {link.name}
            </Link>
          );
        })}
      </div>

      <div className="flex items-center gap-6">
        <Link 
          to="/book"
          className="hidden md:block bg-linear-to-r from-primary to-accent-light text-white px-8 py-3 text-[10px] font-body font-bold tracking-[0.2em] uppercase transition-all hover:scale-105 duration-300 shadow-[0_0_20px_rgba(0,210,255,0.3)]"
        >
          Book Consultation
        </Link>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white z-50 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center space-y-12"
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href || 
                (link.activePaths && link.activePaths.some(p => location.pathname.startsWith(p)));
              
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "font-headline italic text-4xl tracking-tighter transition-all duration-300",
                    isActive ? "text-primary" : "text-white opacity-60"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link 
              to="/book"
              className="bg-primary text-black px-12 py-4 text-xs font-body font-bold tracking-[0.2em] uppercase"
            >
              Book Consultation
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
