import { motion } from 'motion/react';
import { ArrowRight, Activity, Shield, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Periodontics() {
  return (
    <div className="pt-48 pb-48 bg-black">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32 items-center mb-48">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-accent-light uppercase tracking-[0.6em] text-[10px] font-bold mb-8 block">Foundation Care</span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-headline italic mb-12 tracking-tighter leading-[0.85]">Advanced <br /><span className="text-primary not-italic font-medium">Periodontics</span></h1>
            <p className="text-on-surface-variant text-lg md:text-xl font-body leading-relaxed mb-14 max-w-xl opacity-80">
              The health of your smile begins beneath the surface. Our periodontics department specializes in the prevention, diagnosis, and treatment of periodontal disease, and in the placement of dental implants using the latest regenerative techniques.
            </p>
            <Link to="/book" className="px-14 py-6 bg-linear-to-r from-primary to-accent-light text-white font-bold uppercase tracking-[0.25em] text-[10px] hover:scale-105 transition-all duration-500 inline-flex items-center gap-4 group shadow-[0_0_30px_rgba(0,210,255,0.2)]">
              Request Consultation <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </motion.div>
          <div className="relative">
            <div className="aspect-[4/5] border border-primary/20 overflow-hidden bg-surface-container-low p-8">
              <img
                src="/assets/images/spec-perio.webp"
                alt="Periodontics"
                className="w-full h-full object-cover grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (!target.src.includes('unsplash')) {
                    target.src = "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1200";
                  }
                }}
              />
            </div>
            <div className="absolute -bottom-12 -left-12 bg-surface-container-low border border-outline-variant p-12 hidden md:block shadow-2xl">
              <Activity className="text-accent-light mb-6" size={32} strokeWidth={1} />
              <p className="font-headline italic text-3xl mb-2 tracking-tighter">Laser Certified</p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-accent-light font-bold opacity-60">Minimally Invasive Care</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-16 lg:gap-24 mb-48">
          {[
            { icon: Activity, title: 'Laser Therapy', desc: 'LANAP® protocol for treating gum disease without scalpels or sutures, promoting faster healing.' },
            { icon: Shield, title: 'Implantology', desc: 'Expert placement of dental implants with advanced bone and tissue grafting for long-term stability.' },
            { icon: Heart, title: 'Systemic Health', desc: 'We manage the critical link between periodontal health and overall wellness, including heart health.' }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group w-full md:w-[calc(50%-2rem)] lg:w-[calc(50%-3rem)]"
            >
              <item.icon className="text-accent-light mb-10 group-hover:scale-110 transition-transform duration-500" size={40} strokeWidth={1} />
              <h3 className="text-3xl lg:text-4xl font-headline italic mb-8 tracking-tighter group-hover:text-accent-light transition-colors duration-300">{item.title}</h3>
              <p className="text-on-surface-variant text-sm font-body leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity duration-500">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-surface-container-low border border-outline-variant p-16 md:p-24 lg:p-32">
          <span className="text-accent-light uppercase tracking-[0.6em] text-[10px] font-bold mb-8 block text-center">Specialized Services</span>
          <h2 className="text-5xl md:text-7xl font-headline italic mb-24 text-center tracking-tighter leading-[0.9]">Clinical Foundation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 lg:gap-32">
            <div className="space-y-16">
              <div className="pb-16 border-b border-outline-variant group">
                <h4 className="text-2xl lg:text-3xl font-headline italic mb-6 text-accent-light group-hover:translate-x-4 transition-transform duration-500">Gum Grafting</h4>
                <p className="text-on-surface-variant text-sm font-body leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity duration-500">Advanced soft tissue grafting to correct recession and protect your teeth from sensitivity and decay.</p>
              </div>
              <div className="pb-16 border-b border-outline-variant group">
                <h4 className="text-2xl lg:text-3xl font-headline italic mb-6 text-accent-light group-hover:translate-x-4 transition-transform duration-500">Dental Implants</h4>
                <p className="text-on-surface-variant text-sm font-body leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity duration-500">Precision-guided implant surgery for single or multiple tooth replacement with natural-looking results.</p>
              </div>
            </div>
            <div className="space-y-16">
              <div className="pb-16 border-b border-outline-variant group">
                <h4 className="text-2xl lg:text-3xl font-headline italic mb-6 text-accent-light group-hover:translate-x-4 transition-transform duration-500">Bone Regeneration</h4>
                <p className="text-on-surface-variant text-sm font-body leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity duration-500">Utilizing growth factors and advanced grafting materials to rebuild lost bone structure.</p>
              </div>
              <div className="pb-16 border-b border-outline-variant group">
                <h4 className="text-2xl lg:text-3xl font-headline italic mb-6 text-accent-light group-hover:translate-x-4 transition-transform duration-500">Cosmetic Gum Surgery</h4>
                <p className="text-on-surface-variant text-sm font-body leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity duration-500">Reshaping "gummy" smiles or uneven gum lines to create a perfectly framed aesthetic result.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Meet the Specialist Section */}
        <section className="py-32 border-b border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/5] overflow-hidden border border-white/5 p-4 bg-white/5"
            >
              <img 
                src="/assets/images/dr-sara-profile.webp" 
                alt="Dr. Sara Alhachache" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-accent-light/10 mix-blend-multiply"></div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="text-accent-light uppercase tracking-[0.6em] text-[10px] font-bold mb-8 block">THE CLINICAL DIRECTOR</span>
              <h2 className="text-5xl md:text-7xl font-headline italic mb-10 tracking-tighter leading-[0.9]">Dr. Sara Alhachache, <br/>Periodontist</h2>
              <p className="text-on-surface-variant text-lg font-body leading-relaxed opacity-80">
                Dr. Sara is a leading specialist in advanced periodontics and full-mouth implantology. Drawing upon her elite fellowship training in periodontal microsurgery, she brings an unmatched level of structural precision and tissue management to every procedure. Her clinical philosophy bridges the gap between biological integrity and aesthetic geometry, ensuring that every foundation she builds is designed for systemic longevity. With a rigorous focus on advanced bone regeneration and minimally invasive laser therapies, she provides a sanctuary for patients requiring complex oral rehabilitation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Clinical Contributions Section */}
        <section className="py-32">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-headline italic tracking-tighter text-white">Academic & Clinical Insights</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { tag: 'CLINICAL RESEARCH', title: 'Advances in Biomimetic Bone Regeneration' },
              { tag: 'IMPLANTOLOGY', title: 'Soft Tissue Architecture in Anterior Implants' },
              { tag: 'SYSTEMIC HEALTH', title: 'The Oral-Systemic Link in Periodontal Therapy' }
            ].map((article, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="p-10 bg-surface-container-low border border-outline-variant hover:border-accent-light/30 transition-all duration-500 group"
              >
                <span className="text-accent-light uppercase tracking-[0.4em] text-[9px] font-bold mb-6 block opacity-60">{article.tag}</span>
                <h3 className="text-2xl font-headline italic mb-10 tracking-tight text-white group-hover:text-accent-light transition-colors duration-300">{article.title}</h3>
                <Link to="#" className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 group-hover:text-accent-light transition-colors duration-300 flex items-center gap-2">
                  Read Publication <ArrowRight size={12} />
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
