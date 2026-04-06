import React from 'react';
import { motion } from 'motion/react';
import { FileText, Calendar, Shield, Waves, ArrowRight, Activity, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PatientCenter() {
  return (
    <div className="pt-48 pb-48 bg-black">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        
        {/* Header */}
        <div className="mb-32 max-w-3xl">
          <span className="text-accent-light uppercase tracking-[0.6em] text-[10px] font-bold mb-8 block">For Our Patients</span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-headline italic mb-12 tracking-tighter leading-[0.85]">Concierge <br /><span className="text-primary">Experience</span></h1>
          <p className="text-on-surface-variant text-lg md:text-xl font-body leading-relaxed opacity-80">
            Streamlining your journey to a perfect smile. Access private treatment suites, manage appointments, and explore our recovery protocols.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="flex flex-wrap justify-center gap-12 mb-48">
          {[
            { icon: FileText, title: 'Digital Forms', desc: 'Secure online intake paperwork.' },
            { icon: Calendar, title: 'Scheduling', desc: 'Request or reschedule your consultation.' },
            { icon: Shield, title: 'Medical Protocols', desc: 'Detailed surgical & healing instructions.' }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="p-12 border border-outline-variant bg-surface-container-low hover:border-primary/30 transition-all duration-500 group w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(50%-2rem)]"
            >
              <item.icon className="text-accent-light mb-10 group-hover:scale-110 transition-transform duration-500" size={40} strokeWidth={1} />
              <h3 className="text-3xl lg:text-4xl font-headline italic mb-8 tracking-tighter group-hover:text-accent-light transition-colors duration-300">{item.title}</h3>
              <p className="text-on-surface-variant text-sm font-body leading-relaxed mb-12 opacity-70 group-hover:opacity-100 transition-opacity duration-500">{item.desc}</p>
              <button className="text-accent-light uppercase tracking-[0.3em] text-[10px] font-bold border-b border-accent-light/20 pb-2 hover:border-accent-light transition-all duration-500">
                Access Now
              </button>
            </motion.div>
          ))}
        </div>

        {/* Massive Route Portals */}
        <div className="mb-48">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-headline italic tracking-tighter text-white">Clinical Logistics Portals</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link to="/pre-op" className="group relative overflow-hidden bg-surface-container-low border border-outline-variant p-16 hover:border-[#00D2FF]/50 transition-all duration-500 flex flex-col justify-between min-h-[300px]">
              <div className="absolute inset-0 bg-linear-to-b from-[#00D2FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <ShieldCheck size={48} strokeWidth={1} className="text-[#00D2FF] mb-12 group-hover:scale-110 transition-transform duration-500" />
              <div className="relative z-10">
                <span className="text-[#00D2FF] uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block opacity-70">Prior to Arrival</span>
                <h3 className="text-4xl font-headline italic text-white mb-6 tracking-tight">Pre-Surgical <br/>Instructions</h3>
                <div className="flex items-center gap-4 text-white/50 group-hover:text-white transition-colors uppercase tracking-widest text-xs font-bold mt-8">
                  View Protocol <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </Link>

            <Link to="/post-op" className="group relative overflow-hidden bg-surface-container-low border border-outline-variant p-16 hover:border-[#00D2FF]/50 transition-all duration-500 flex flex-col justify-between min-h-[300px]">
              <div className="absolute inset-0 bg-linear-to-b from-[#00D2FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Activity size={48} strokeWidth={1} className="text-[#00D2FF] mb-12 group-hover:scale-110 transition-transform duration-500" />
              <div className="relative z-10">
                <span className="text-[#00D2FF] uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block opacity-70">Biological Integration</span>
                <h3 className="text-4xl font-headline italic text-white mb-6 tracking-tight">Healing & <br/>Recovery Protocols</h3>
                <div className="flex items-center gap-4 text-white/50 group-hover:text-white transition-colors uppercase tracking-widest text-xs font-bold mt-8">
                  View Protocol <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Short Visual Timeline */}
        <div className="bg-surface-container-low border border-outline-variant p-16 md:p-24 lg:p-32 relative overflow-hidden mb-48">
          <div className="relative z-10">
            <span className="text-accent-light uppercase tracking-[0.6em] text-[10px] font-bold mb-8 block">Recovery Roadmap</span>
            <h2 className="text-5xl md:text-7xl font-headline italic mb-16 tracking-tighter leading-[0.9]">The Biological Path</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-accent-light/10 -translate-y-1/2 z-0"></div>
              
              {[
                { time: '24HR', title: 'Initial Stabilization', desc: 'Critical hemostasis mapping and biological rest.' },
                { time: '72HR', title: 'Tissue Integration', desc: 'Primary structural fibrin adaptation phase begins.' },
                { time: '7-DAY', title: 'Suture Resolution', desc: 'Accelerated soft-tissue healing timeline achieved.' }
              ].map((milestone, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                  <div className="w-24 h-24 rounded-full bg-black border border-accent-light/30 flex items-center justify-center mb-8 group-hover:border-accent-light transition-all duration-500 shadow-[0_0_15px_rgba(0,210,255,0.05)]">
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
        <div className="bg-surface-container-low border border-outline-variant p-16 md:p-24 lg:p-32 relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-24 lg:gap-32 items-center">
            <div>
              <span className="text-accent-light uppercase tracking-[0.6em] text-[10px] font-bold mb-8 block">The Experience</span>
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
              <div className="aspect-[4/5] border border-accent-light/20 p-8">
                <img
                  src="/assets/images/hero-bg.webp"
                  alt="Luxury Suite"
                  className="w-full h-full object-cover grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-12 -left-12 bg-surface-container-low border border-outline-variant p-12 hidden lg:block shadow-2xl">
                <div className="flex items-center gap-6 mb-4">
                  <Waves className="text-accent-light" size={32} strokeWidth={1} />
                  <span className="font-headline italic text-3xl tracking-tighter">Clinical Sanctuary</span>
                </div>
                <p className="text-[9px] text-accent-light uppercase tracking-tight font-bold opacity-60">DESIGNED FOR ABSOLUTE COMFORT AND PEACE OF MIND</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
