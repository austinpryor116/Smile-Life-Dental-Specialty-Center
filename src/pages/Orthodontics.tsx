import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Ruler, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Orthodontics() {
  return (
    <div className="pt-48 pb-48 bg-black">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32 items-center mb-48">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-accent-light uppercase tracking-[0.6em] text-[10px] font-bold mb-8 block">Specialty Care</span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-headline italic mb-12 tracking-tighter leading-[0.85]">Precision <br /><span className="text-primary not-italic font-medium">Orthodontics</span></h1>
            <p className="text-on-surface-variant text-lg md:text-xl font-body leading-relaxed mb-14 max-w-xl opacity-80">
              Beyond simple alignment, our orthodontic department focuses on craniofacial aesthetics and functional harmony. We offer bespoke Invisalign treatments and discreet lingual braces for high-profile professionals who demand perfection without compromise.
            </p>
            <Link to="/book" className="px-14 py-6 bg-linear-to-r from-primary to-accent-light text-white font-bold uppercase tracking-[0.25em] text-[10px] hover:scale-105 transition-all duration-500 inline-flex items-center gap-4 group shadow-[0_0_30px_rgba(0,210,255,0.2)]">
              Request Consultation <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </motion.div>
          <div className="relative">
            <div className="aspect-[4/5] border border-primary/20 overflow-hidden bg-surface-container-low p-8">
              <img
                src="/assets/images/spec-ortho.webp"
                alt="Orthodontics"
                className="w-full h-full object-cover grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (!target.src.includes('unsplash')) {
                    target.src = "https://images.unsplash.com/photo-1533622597524-a1215e26c0a2?auto=format&fit=crop&q=80&w=1200";
                  }
                }}
              />
            </div>
            <div className="absolute -bottom-12 -right-12 bg-surface-container-low border border-outline-variant p-12 hidden md:block shadow-2xl">
              <Sparkles className="text-accent-light mb-6" size={32} strokeWidth={1} />
              <p className="font-headline italic text-3xl mb-2 tracking-tighter">Diamond Provider</p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-accent-light font-bold opacity-60">Invisalign Excellence</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-16 lg:gap-24 mb-48">
          {[
            { icon: Ruler, title: 'Digital Planning', desc: 'Every movement is planned using advanced 3D simulation software for predictable, artistic results.' },
            { icon: ShieldCheck, title: 'Discreet Options', desc: 'From clear aligners to lingual braces, we prioritize your professional image during treatment.' },
            { icon: Sparkles, title: 'Aesthetic Focus', desc: 'We don\'t just straighten teeth; we design smiles that complement your unique facial features.' }
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
          <span className="text-accent-light uppercase tracking-[0.6em] text-[10px] font-bold mb-8 block text-center">Treatment Options</span>
          <h2 className="text-5xl md:text-7xl font-headline italic mb-24 text-center tracking-tighter leading-[0.9]">Clinical Excellence</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 lg:gap-32">
            <div className="space-y-16">
              <div className="pb-16 border-b border-outline-variant group">
                <h4 className="text-2xl lg:text-3xl font-headline italic mb-6 text-accent-light group-hover:translate-x-4 transition-transform duration-500">Invisalign® Elite</h4>
                <p className="text-on-surface-variant text-sm font-body leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity duration-500">The world's most advanced clear aligner system, customized by our board-certified orthodontists for complex cases.</p>
              </div>
              <div className="pb-16 border-b border-outline-variant group">
                <h4 className="text-2xl lg:text-3xl font-headline italic mb-6 text-accent-light group-hover:translate-x-4 transition-transform duration-500">Lingual Braces</h4>
                <p className="text-on-surface-variant text-sm font-body leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity duration-500">Truly invisible braces placed on the back of your teeth, offering the precision of fixed appliances with total discretion.</p>
              </div>
            </div>
            <div className="space-y-16">
              <div className="pb-16 border-b border-outline-variant group">
                <h4 className="text-2xl lg:text-3xl font-headline italic mb-6 text-accent-light group-hover:translate-x-4 transition-transform duration-500">Accelerated Orthodontics</h4>
                <p className="text-on-surface-variant text-sm font-body leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity duration-500">Utilizing advanced technology to reduce treatment time by up to 50% while maintaining clinical excellence.</p>
              </div>
              <div className="pb-16 border-b border-outline-variant group">
                <h4 className="text-2xl lg:text-3xl font-headline italic mb-6 text-accent-light group-hover:translate-x-4 transition-transform duration-500">Surgical Orthodontics</h4>
                <p className="text-on-surface-variant text-sm font-body leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity duration-500">Correcting severe jaw irregularities in conjunction with our oral surgery department for life-changing results.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
