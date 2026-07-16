/**
 * Application Homepage (Landing Route)
 * 
 * Serves as the primary entry point for the Smile Life Dental Specialty Center.
 * Implements a complex, scroll-driven cinematic layout using Framer Motion (`motion/react`)
 * to handle scroll-linked entrance animations and staggered staggered child elements.
 * 
 * Core Features:
 * - Floating "Glassmorphism" Hero Component
 * - Interactive CSS-Grid Specialty Cards
 * - Performance optimized lazy-loaded SVG animations
 * 
 * @module Home
 */
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ShieldCheck, Star, Users, Activity, Layers, Zap, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import DepartmentsAccordion from '../components/DepartmentsAccordion';
import { useState, useEffect } from 'react';

export default function Home() {
  const [coordinate, setCoordinate] = useState({ x: 0, y: 0, show: false, label: '' });

  useEffect(() => {
    const animateCoord = () => {
      setCoordinate({
        x: Math.floor(Math.random() * 60) + 20, // Keep it towards the center-ish
        y: Math.floor(Math.random() * 60) + 20,
        show: true,
        label: `X: ${(Math.random() * 500).toFixed(1)} / Y: ${(Math.random() * 500).toFixed(1)}`
      });
      setTimeout(() => setCoordinate(prev => ({ ...prev, show: false })), 2000);
    };
    
    // Initial delay then trigger loop
    const timeoutId = setTimeout(() => {
      animateCoord();
      const intervalId = setInterval(animateCoord, 8000);
      // Clean up interval if component unmounts
      return () => clearInterval(intervalId);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[95vh] flex items-center overflow-hidden ">
        {/* Holographic Glow Foundation */}
        <div className="absolute inset-0 z-0 pointer-events-none mix-blend-screen" style={{ background: 'radial-gradient(circle at 80% 50%, rgba(0, 210, 255, 0.07) 0%, transparent 50%)' }}></div>
        
        {/* Geometric Grid Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none z-0" 
          style={{ 
            backgroundImage: 'linear-gradient(#1A1A1A 0.5px, transparent 0.5px), linear-gradient(90deg, #1A1A1A 0.5px, transparent 0.5px)',
            backgroundSize: '50px 50px' 
          }}
        ></div>

        {/* Dynamic Coordinate Flash */}
        <AnimatePresence>
          {coordinate.show && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.5, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute z-10 pointer-events-none font-body text-[#00D2FF]"
              style={{ left: `${coordinate.x}%`, top: `${coordinate.y}%` }}
            >
              <div className="w-[3px] h-[3px] bg-[#00D2FF] rounded-full mb-1 shadow-[0_0_10px_#00D2FF]"></div>
              <span className="text-[11px] md:text-[10px] tracking-widest uppercase font-bold">{coordinate.label}</span>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 z-0 flex justify-end pointer-events-none"
        >
          <div 
            className="relative w-full lg:w-[40%] pr-0 lg:pr-[5%] h-full flex items-center justify-center overflow-hidden"
            style={{ WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 80%)', maskImage: 'radial-gradient(circle, black 40%, transparent 80%)' }}
          >
            {/* The Scanning Beam */}
            <motion.div
              animate={{ x: ['-20%', '120%'] }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 bottom-0 w-[1px] bg-[#00D2FF]/30 shadow-[0_0_40px_rgba(0,210,255,0.7)] z-20 pointer-events-none"
              style={{ left: '0%' }}
            ></motion.div>
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-[140%] h-[140%] max-w-none object-contain mix-blend-screen animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite]"
              style={{ 
                filter: 'drop-shadow(0 0 20px rgba(0, 210, 255, 0.3))',
                clipPath: 'circle(35% at 50% 50%)'
              }}
            >
              <source src="/assets/video/hero-molar-3d.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full pt-28 md:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <span className="text-primary uppercase tracking-[0.6em] text-[11px] md:text-[10px] font-bold mb-10 block">
              Excellence in Specialty Dentistry
            </span>
            <h1 
              className="text-6xl md:text-8xl lg:text-9xl font-headline italic mb-12 leading-[0.85] tracking-tighter"
              style={{ textShadow: '0 0 30px rgba(0, 210, 255, 0.1)' }}
            >
              Artistry Meets <br />
              <span className="text-primary not-italic font-medium">Clinical Precision</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant mb-14 leading-relaxed font-body max-w-xl opacity-90">
              Redefining the standard of oral healthcare through artistry and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-8">
              <Link
                to="/book"
                className="px-8 py-5 md:px-14 md:py-6 bg-linear-to-r from-primary to-accent-light text-white font-bold uppercase tracking-[0.25em] text-[11px] md:text-[10px] hover:scale-105 transition-all duration-500 flex items-center justify-center gap-4 group shadow-[0_0_40px_rgba(0,210,255,0.3)] hover:shadow-[0_0_80px_rgba(0,210,255,0.6)]"
              >
                Book Consultation
              </Link>
              <Link
                to="/departments"
                className="px-8 py-5 md:px-14 md:py-6 border border-accent-light/40 text-accent-light font-bold uppercase tracking-[0.25em] text-[11px] md:text-[10px] hover:border-accent-light hover:bg-accent-light/5 transition-all duration-500 flex items-center justify-center"
              >
                Our Specialties
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Core Departments Accordion - Moved to top below Hero */}
      <section className="pt-24 lg:pt-32 pb-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent-light uppercase tracking-[0.6em] text-[11px] md:text-[10px] font-bold mb-6 block">Our Expertise</span>
            <h2 className="text-4xl md:text-6xl font-headline italic tracking-tighter">Specialty <span className="text-primary not-italic font-medium">Departments</span></h2>
          </div>
          <DepartmentsAccordion />
        </div>
      </section>
      
      {/* Complex Protocols */}
      <section className="py-48 px-8 ">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 lg:mb-32 gap-8 lg:gap-12">
            <div className="max-w-2xl">
              <span className="text-accent-light uppercase tracking-[0.6em] text-[11px] md:text-[10px] font-bold mb-8 block">Clinical Excellence</span>
              <h2 className="text-5xl md:text-7xl font-headline italic mb-10 tracking-tighter leading-[0.9]">Specialized Care for <br />Complex Cases</h2>
              <p className="text-on-surface-variant font-body leading-relaxed text-lg opacity-80">
                Our center is designed to handle the most complex dental challenges, from full-mouth reconstructions to advanced periodontal therapies.
              </p>
            </div>
            <Link to="/departments" className="text-accent-light uppercase tracking-[0.3em] text-[11px] md:text-[10px] font-bold border-b border-accent-light/20 pb-4 hover:border-accent-light transition-all duration-500 mb-2">
              View All Departments
            </Link>
          </div>

          {/* Complex Case Protocol Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-16 lg:mb-32">
            {[
              { icon: Activity, title: 'Full-Mouth Reconstruction' },
              { icon: Layers, title: 'Advanced Bone Grafting' },
              { icon: Zap, title: 'Laser Periodontal Therapy (LANAP)' },
              { icon: Target, title: 'Implant Microsurgery' }
            ].map((item, i) => (
              <div key={i} className="p-8 border border-white/5 bg-white/5 backdrop-blur-sm group hover:border-accent-light/30 transition-all duration-500">
                <item.icon className="text-accent-light mb-6 group-hover:scale-110 transition-transform duration-500" size={32} strokeWidth={1} />
                <h4 className="text-sm font-sans font-bold tracking-widest uppercase text-white/80 group-hover:text-white transition-colors duration-300">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Innovation Suite Section */}
      <section className="relative py-32 overflow-hidden  border-b border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <span className="text-accent-light uppercase tracking-[0.6em] text-[11px] md:text-[10px] font-bold mb-8 block">The Innovation Suite</span>
              <h2 className="text-5xl md:text-7xl font-headline italic mb-10 tracking-tighter leading-[0.9]">Precision at <br />Every Micron.</h2>
              <p className="text-on-surface-variant text-lg font-body leading-relaxed opacity-80 max-w-xl">
                Leveraging advanced forensic digital-twin scanning and 3D architectural mapping to visualize your clinical outcome before the first incision is made.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="relative aspect-video overflow-hidden border border-white/5 p-4 bg-white/5 backdrop-blur-sm">
                <img 
                  src="/assets/images/3d-scan.jpeg" 
                  alt="3D Intraoral Scanner Tip" 
                  className="w-full h-full object-cover grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                  loading="lazy"

                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-32 ">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <div className="mb-24 max-w-3xl mx-auto">
            <span className="text-primary uppercase tracking-[0.6em] text-[11px] md:text-[10px] font-bold mb-8 block">Our Foundation</span>
            <h2 className="text-5xl md:text-8xl font-headline italic mb-12 tracking-tighter leading-[0.9]">Pillars of <br />Smile Life</h2>
            <p className="text-on-surface-variant text-lg font-body leading-relaxed opacity-80">
              Our multi-disciplinary approach ensures that every aspect of your oral health is managed by a dedicated specialist, providing a seamless bridge between primary care and advanced therapy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 lg:gap-32 max-w-6xl mx-auto">
            {[
              { icon: ShieldCheck, title: 'CLINICAL EXCELLENCE', desc: 'Uncompromising standards in every procedure.' },
              { icon: Star, title: 'LUXURY EXPERIENCE', desc: 'A concierge-level sanctuary for patient comfort.' },
              { icon: Users, title: 'REFERRAL BRIDGE', desc: 'A seamless specialized extension of primary care dentistry.' }
            ].map((pillar, i) => (
              <div key={i} className="flex flex-col items-center text-center group h-full justify-start border-none outline-none">
                <div className="mb-12 text-[#00D2FF] drop-shadow-[0_0_5px_rgba(0,210,255,0.6)] group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(0,210,255,1)] transition-all duration-700 ease-out">
                  <pillar.icon size={48} strokeWidth={0.75} />
                </div>
                <h3 className="text-[11px] font-sans font-bold tracking-[2px] uppercase mb-8 text-white">{pillar.title}</h3>
                <p className="text-on-surface-variant text-sm font-body leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialist's Philosophy Section */}
      <section className="py-32  border-y border-white/5">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col lg:flex-row gap-24 items-center">
            <div className="lg:w-1/2">
              <div className="aspect-[3/4] overflow-hidden border border-white/5 p-6 bg-white/5">
                <img 
                  src="/assets/images/dr-sara-holding-implant.jpg" 
                  alt="Dr. Sara Alhachache - Specialist Portrait" 
                  className="w-full h-full object-cover object-[center_10%]"
                  referrerPolicy="no-referrer"
                  loading="lazy"

                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <span className="text-accent-light uppercase tracking-[0.6em] text-[11px] md:text-[10px] font-bold mb-8 block">The Specialist's Philosophy</span>
              <h2 className="text-5xl md:text-7xl font-headline italic mb-10 tracking-tighter leading-[0.9]">A Commitment to <br />Biological Integrity.</h2>
              <p className="text-on-surface-variant text-lg font-body leading-relaxed opacity-80 mb-12">
                Dr. Sara Alhachache specializes in complex periodontal therapies and microsurgical reconstructions. Her approach balances systemic oral health with the poetry of dental geometry.
              </p>
              <p className="text-xl md:text-2xl font-headline italic text-primary leading-relaxed border-l-2 border-primary/40 pl-6 mb-12 tracking-wide text-white/90">
                "True structural longevity isn't born from mere treatment—it is born from an uncompromising respect for biological geometry. We do not just build foundations; we architect a secure sanctuary for systemic healing."
              </p>
              <div className="font-signature text-5xl text-accent-light opacity-80">
                Dr. Sara Alhachache
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Concierge Journey Section */}
      <section className="py-48  border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16 lg:mb-32">
            <span className="text-accent-light uppercase tracking-[0.6em] text-[11px] md:text-[10px] font-bold mb-8 block">The Sanctuary Experience</span>
            <h2 className="text-5xl md:text-8xl font-headline italic tracking-tighter leading-[0.9]">The Concierge Journey</h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-accent-light/20 -translate-y-1/2 hidden lg:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
              {[
                { step: 'Consult', desc: 'Multi-disciplinary triage.' },
                { step: 'Architect', desc: 'Custom 3D surgical blueprint.' },
                { step: 'Restore', desc: 'Specialized clinical execution.' },
                { step: 'Return', desc: 'Seamless transition back to your primary care dentist.' }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center group">
                  <div className="w-4 h-4 rounded-full bg-accent-light mb-12 relative shadow-[0_0_15px_rgba(0,210,255,0.8)]">
                    <div className="absolute inset-0 rounded-full bg-accent-light animate-ping opacity-20"></div>
                  </div>
                  <h3 className="text-2xl font-headline italic mb-4 tracking-tight text-white group-hover:text-accent-light transition-colors duration-300">{item.step}</h3>
                  <p className="text-on-surface-variant text-sm font-body leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity duration-500 max-w-[200px]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
