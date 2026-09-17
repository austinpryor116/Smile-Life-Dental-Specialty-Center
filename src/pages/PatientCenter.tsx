import React from 'react';
import { motion } from 'motion/react';
import { Waves, ArrowRight, Activity, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PatientCenter() {
  return (
    <div className="pt-32 lg:pt-48 pb-32 lg:pb-48 ">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="mb-32 max-w-3xl">
          <span className="text-accent-light uppercase tracking-[0.6em] text-[11px] md:text-[10px] font-bold mb-8 block">For Our Patients</span>
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-headline italic mb-8 md:mb-12 tracking-tighter leading-[0.85]">Concierge <br /><span className="text-primary">Experience</span></h1>
          <p className="text-on-surface-variant text-lg md:text-xl font-body leading-relaxed opacity-80">
            Streamlining your journey to a perfect smile. Access private treatment suites, manage appointments, and explore our recovery protocols.
          </p>
        </div>

        {/* Massive Route Portals */}
        <div className="mb-24 lg:mb-48">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-headline italic tracking-tighter text-white">Clinical Logistics Portals</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link to="/pre-op" className="group relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 to-transparent rounded-[2rem] lg:rounded-[3rem] p-8 md:p-16 hover:from-primary/30 hover:shadow-[0_0_80px_rgba(0,210,255,0.2)] transition-all duration-500 flex flex-col justify-between min-h-[250px] lg:min-h-[300px]">
              <div className="absolute inset-0 bg-linear-to-b from-[#00D2FF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <ShieldCheck size={48} strokeWidth={1} className="text-[#00D2FF] mb-12 group-hover:scale-110 transition-transform duration-500" />
              <div className="relative z-10">
                <span className="text-[#00D2FF] uppercase tracking-[0.4em] text-[11px] md:text-[10px] font-bold mb-4 block opacity-70">Prior to Arrival</span>
                <h3 className="text-4xl font-headline italic text-white mb-6 tracking-tight">Pre-Surgical <br/>Instructions</h3>
                <div className="flex items-center gap-4 text-white/50 group-hover:text-white transition-colors uppercase tracking-widest text-xs font-bold mt-8">
                  View Protocol <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </Link>

            <Link to="/post-op" className="group relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 to-transparent rounded-[2rem] lg:rounded-[3rem] p-8 md:p-16 hover:from-primary/30 hover:shadow-[0_0_80px_rgba(0,210,255,0.2)] transition-all duration-500 flex flex-col justify-between min-h-[250px] lg:min-h-[300px]">
              <div className="absolute inset-0 bg-linear-to-b from-[#00D2FF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Activity size={48} strokeWidth={1} className="text-[#00D2FF] mb-12 group-hover:scale-110 transition-transform duration-500" />
              <div className="relative z-10">
                <span className="text-[#00D2FF] uppercase tracking-[0.4em] text-[11px] md:text-[10px] font-bold mb-4 block opacity-70">Biological Integration</span>
                <h3 className="text-4xl font-headline italic text-white mb-6 tracking-tight">Healing & <br/>Recovery Protocols</h3>
                <div className="flex items-center gap-4 text-white/50 group-hover:text-white transition-colors uppercase tracking-widest text-xs font-bold mt-8">
                  View Protocol <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Short Visual Timeline */}
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-primary/5 to-transparent p-8 md:p-24 lg:p-32 relative overflow-hidden rounded-[2rem] lg:rounded-[3rem] mb-24 lg:mb-48">
          <div className="relative z-10">
            <span className="text-accent-light uppercase tracking-[0.6em] text-[11px] md:text-[10px] font-bold mb-8 block">Recovery Roadmap</span>
            <h2 className="text-5xl md:text-7xl font-headline italic mb-16 tracking-tighter leading-[0.9]">The Biological Path</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-accent-light/10 -translate-y-1/2 z-0"></div>
              
              {[
                { time: '24HR', title: 'Initial Stabilization', desc: 'Critical hemostasis mapping and biological rest.' },
                { time: '72HR', title: 'Tissue Integration', desc: 'Primary structural fibrin adaptation phase begins.' },
                { time: '7-DAY', title: 'Suture Resolution', desc: 'Accelerated soft-tissue healing timeline achieved.' }
              ].map((milestone, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                  <div className="w-24 h-24 rounded-full  border border-accent-light/30 flex items-center justify-center mb-8 group-hover:border-accent-light transition-all duration-500 shadow-[0_0_15px_rgba(0,210,255,0.05)]">
                    <span className="font-headline italic text-2xl text-accent-light">{milestone.time}</span>
                  </div>
                  <h4 className="font-bold uppercase tracking-[0.3em] text-[11px] mb-4 text-white">{milestone.title}</h4>
                  <p className="text-sm text-on-surface-variant font-body leading-relaxed opacity-70 max-w-[200px]">{milestone.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* The Experience */}
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-primary/5 to-transparent p-8 md:p-24 lg:p-32 relative overflow-hidden rounded-[2rem] lg:rounded-[3rem]">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-24 lg:gap-32 items-center">
            <div>
              <span className="text-accent-light uppercase tracking-[0.6em] text-[11px] md:text-[10px] font-bold mb-8 block">The Experience</span>
              <h2 className="text-5xl md:text-7xl font-headline italic mb-12 tracking-tighter leading-[0.9]">Your First Visit</h2>
              <p className="text-on-surface-variant mb-16 leading-relaxed font-body text-lg opacity-80">
                Experience dental care like never before. From our private waiting suites to our advanced diagnostic imaging, every detail is curated for your comfort.
              </p>
              <div className="space-y-12">
                {[
                  { num: '1', title: 'Clinical Assessment', desc: 'Comprehensive evaluation by our board-certified specialists.' },
                  { num: '2', title: 'Digital Imaging', desc: 'High-resolution 3D scans for precise treatment planning.' },
                  { num: '3', title: 'Concierge Planning', desc: 'Personalized treatment roadmap and financial coordination.' }
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-8 group">
                    <div className="w-14 h-14 rounded-full border border-accent-light/30 flex items-center justify-center shrink-0 text-accent-light font-headline italic text-2xl group-hover:bg-accent-light group-hover:text-black transition-all duration-500">{step.num}</div>
                    <div>
                      <h4 className="font-bold uppercase tracking-[0.3em] text-[11px] mb-3 text-accent-light">{step.title}</h4>
                      <p className="text-sm text-on-surface-variant font-body leading-relaxed opacity-70">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent p-4 overflow-hidden rounded-[2rem]">
                <img
                  src="assets/images/general-dentist-office.jpeg"
                  alt="Luxury Suite"
                  className="w-full h-full object-cover grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
