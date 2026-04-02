import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Star, Users, Activity, Layers, Zap, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[95vh] flex items-center overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 z-0"
        >
          <img
            src="/assets/images/hero-bg.webp"
            alt="Luxury Dental Clinic Interior - Smile Life Dental Specialty Center"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              if (!target.src.includes('unsplash')) {
                target.src = "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2000";
              }
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-primary/5"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-accent-light/5"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <span className="text-primary uppercase tracking-[0.6em] text-[10px] font-bold mb-10 block">
              Excellence in Specialty Dentistry
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-headline italic mb-12 leading-[0.85] tracking-tighter">
              Artistry Meets <br />
              <span className="text-primary not-italic font-medium">Clinical Precision</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant mb-14 leading-relaxed font-body max-w-xl opacity-90">
              Redefining the standard of oral healthcare through artistry and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-8">
              <Link
                to="/book"
                className="px-14 py-6 bg-linear-to-r from-primary to-accent-light text-white font-bold uppercase tracking-[0.25em] text-[10px] hover:scale-105 transition-all duration-500 flex items-center justify-center gap-4 group shadow-[0_0_30px_rgba(0,210,255,0.2)]"
              >
                Book Consultation
              </Link>
              <Link
                to="/departments"
                className="px-14 py-6 border border-accent-light/40 text-accent-light font-bold uppercase tracking-[0.25em] text-[10px] hover:border-accent-light hover:bg-accent-light/5 transition-all duration-500 flex items-center justify-center"
              >
                Our Specialties
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Innovation Suite Section */}
      <section className="relative py-32 overflow-hidden bg-black border-b border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <span className="text-accent-light uppercase tracking-[0.6em] text-[10px] font-bold mb-8 block">The Innovation Suite</span>
              <h2 className="text-5xl md:text-7xl font-headline italic mb-10 tracking-tighter leading-[0.9]">Precision at <br />Every Micron.</h2>
              <p className="text-on-surface-variant text-lg font-body leading-relaxed opacity-80 max-w-xl">
                Leveraging advanced forensic digital-twin scanning and 3D architectural mapping to visualize your clinical outcome before the first incision is made.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="relative aspect-video overflow-hidden border border-white/5 p-4 bg-white/5 backdrop-blur-sm">
                <img 
                  src="/assets/images/hero-bg.webp" 
                  alt="3D Intraoral Scanner Tip" 
                  className="w-full h-full object-cover grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.src.includes('unsplash')) {
                      target.src = "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2000";
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <div className="mb-24 max-w-3xl mx-auto">
            <span className="text-primary uppercase tracking-[0.6em] text-[10px] font-bold mb-8 block">Our Foundation</span>
            <h2 className="text-5xl md:text-8xl font-headline italic mb-12 tracking-tighter leading-[0.9]">Pillars of <br />Smile Life</h2>
            <p className="text-on-surface-variant text-lg font-body leading-relaxed opacity-80">
              Our multi-disciplinary approach ensures that every aspect of your oral health is managed by a dedicated specialist, providing a seamless bridge between primary care and advanced therapy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 lg:gap-32 max-w-6xl mx-auto">
            {[
              { icon: ShieldCheck, title: 'BOARD CERTIFIED', desc: 'Clinical leadership in every discipline.' },
              { icon: Star, title: 'LUXURY EXPERIENCE', desc: 'A concierge-level sanctuary for patient comfort.' },
              { icon: Users, title: 'REFERRAL BRIDGE', desc: 'A seamless specialized extension of primary care dentistry.' }
            ].map((pillar, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="mb-12 text-accent-light group-hover:scale-110 transition-transform duration-700 ease-out">
                  <pillar.icon size={48} strokeWidth={0.75} />
                </div>
                <h3 className="text-[11px] font-sans font-bold tracking-[0.4em] mb-8 text-white">{pillar.title}</h3>
                <p className="text-on-surface-variant text-sm font-body leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialist's Philosophy Section */}
      <section className="py-32 bg-black border-y border-white/5">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col lg:flex-row gap-24 items-center">
            <div className="lg:w-1/2">
              <div className="aspect-[3/4] overflow-hidden border border-white/5 p-6 bg-white/5">
                <img 
                  src="/assets/images/dr-sara-profile.webp" 
                  alt="Dr. Sara - Specialist Portrait" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.src.includes('unsplash')) {
                      target.src = "https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=1200";
                    }
                  }}
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <span className="text-accent-light uppercase tracking-[0.6em] text-[10px] font-bold mb-8 block">The Specialist's Philosophy</span>
              <h2 className="text-5xl md:text-7xl font-headline italic mb-10 tracking-tighter leading-[0.9]">A Commitment to <br />Biological Integrity.</h2>
              <p className="text-on-surface-variant text-lg font-body leading-relaxed opacity-80 mb-12">
                Dr. Sara specializes in complex periodontal therapies and microsurgical reconstructions. Her approach balances systemic oral health with the poetry of dental geometry.
              </p>
              <div className="font-signature text-5xl text-accent-light opacity-80">
                Dr. Sara
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Specialties */}
      <section className="py-48 px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
            <div className="max-w-2xl">
              <span className="text-accent-light uppercase tracking-[0.6em] text-[10px] font-bold mb-8 block">Clinical Excellence</span>
              <h2 className="text-5xl md:text-7xl font-headline italic mb-10 tracking-tighter leading-[0.9]">Specialized Care for <br />Complex Cases</h2>
              <p className="text-on-surface-variant font-body leading-relaxed text-lg opacity-80">
                Our center is designed to handle the most complex dental challenges, from full-mouth reconstructions to advanced periodontal therapies.
              </p>
            </div>
            <Link to="/departments" className="text-accent-light uppercase tracking-[0.3em] text-[10px] font-bold border-b border-accent-light/20 pb-4 hover:border-accent-light transition-all duration-500 mb-2">
              View All Departments
            </Link>
          </div>

          {/* Complex Case Protocol Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
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

          <div className="flex flex-wrap justify-center gap-12 lg:gap-16">
            {[
              { 
                title: 'Orthodontics', 
                desc: 'Alignment is the poetry of dental geometry. We architect structural harmony.', 
                href: '/orthodontics',
                image: '/assets/images/spec-ortho.webp',
                alt: 'Digital Smile Design and Orthodontic Alignment in Corpus Christi, TX'
              },
              { 
                title: 'Periodontics', 
                desc: 'The foundation of brilliance lies beneath the surface. We utilize microsurgical protocols for structural permanence.', 
                href: '/periodontics',
                image: '/assets/images/spec-perio.webp',
                alt: 'Specialized Periodontal and Implant Surgery in Corpus Christi, TX'
              },
              { 
                title: 'General Dentistry', 
                desc: 'Health is the canvas upon which we paint. Surgical-grade commitment to total oral biological health.', 
                href: '/general-dentistry',
                image: '/assets/images/spec-general.webp',
                alt: 'Advanced Diagnostic Mapping and General Oral Health in Corpus Christi, TX'
              }
            ].map((spec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="group flex flex-col bg-surface-container-high overflow-hidden w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(50%-2rem)]"
              >
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img 
                    src={spec.image} 
                    alt={spec.alt}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (!target.src.includes('unsplash')) {
                        const fallbacks: Record<string, string> = {
                          'spec-ortho.webp': 'https://images.unsplash.com/photo-1533622597524-a1215e26c0a2?auto=format&fit=crop&q=80&w=1200',
                          'spec-perio.webp': 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1200',
                          'spec-general.webp': 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1200'
                        };
                        const fileName = spec.image.split('/').pop() || '';
                        target.src = fallbacks[fileName] || "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1200";
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <div className="p-10 lg:p-14 flex flex-col flex-grow">
                  <h4 className="text-3xl lg:text-4xl font-headline italic mb-8 group-hover:text-accent-light transition-colors duration-300 tracking-tighter">{spec.title}</h4>
                  <p className="text-on-surface-variant text-sm font-body leading-relaxed mb-12 flex-grow opacity-70 group-hover:opacity-100 transition-opacity duration-500">{spec.desc}</p>
                  <Link to={spec.href} className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent-light flex items-center gap-4 group/link">
                    EXPLORE SPECIALTY <ArrowRight size={14} className="group-hover/link:translate-x-2 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Concierge Journey Section */}
      <section className="py-48 bg-black border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-32">
            <span className="text-accent-light uppercase tracking-[0.6em] text-[10px] font-bold mb-8 block">The Sanctuary Experience</span>
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
