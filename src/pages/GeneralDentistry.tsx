import { motion } from 'motion/react';
import { ArrowRight, Smile, ShieldCheck, Zap, Atom, Layers, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GeneralDentistry() {
  return (
    <div className="pt-48 pb-48 ">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center mb-24 lg:mb-48">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-accent-light uppercase tracking-[0.6em] text-[11px] md:text-[10px] font-bold mb-8 block">Essential Care</span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-headline italic mb-12 tracking-tighter leading-[0.85]">General <br /><span className="text-primary not-italic font-medium">Dentistry</span></h1>
            <p className="text-on-surface-variant text-lg md:text-xl font-body leading-relaxed mb-14 max-w-xl opacity-80">
              While we specialize in complex cases, the foundation of every beautiful smile is meticulous general care. Our general dentistry department provides high-end preventive and restorative services with the same clinical precision as our specialty wings.
            </p>
            <Link to="/book" className="px-8 py-5 md:px-14 md:py-6 bg-linear-to-r from-primary to-accent-light text-white font-bold uppercase tracking-[0.25em] text-[11px] md:text-[10px] hover:scale-105 transition-all duration-500 inline-flex items-center gap-4 group shadow-[0_0_40px_rgba(0,210,255,0.3)] hover:shadow-[0_0_80px_rgba(0,210,255,0.6)]">
              Request Consultation <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </motion.div>
          <div className="relative">
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent p-4 overflow-hidden rounded-[2rem]">
              <img
                src="assets/images/general-dentist-office.jpeg"
                alt="General Dentistry"
                className="w-full h-auto max-h-[600px] object-contain grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
                loading="lazy"

              />
            </div>

          </div>
        </div>

        {/* Meet the Doctor Section */}
        <section className="mb-24 lg:mb-48 border-b border-white/5 pb-16 lg:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/5] overflow-hidden border border-white/5 p-4 bg-white/5"
            >
              <img 
                src="assets/images/dr-vasquez.jpg" 
                alt="Dr. Vasquez" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"

              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="text-accent-light uppercase tracking-[0.6em] text-[11px] md:text-[10px] font-bold mb-8 block">LEAD CLINICAL DENTIST</span>
              <h2 className="text-5xl md:text-7xl font-headline italic mb-10 tracking-tighter leading-[0.9]">Dr. Vasquez, <br/>General Dentistry</h2>
              <div className="space-y-8">
                <p className="text-xl md:text-2xl font-headline italic text-accent-light leading-relaxed border-l-2 border-[#00D2FF]/40 pl-6 mb-8 mt-4 tracking-wide">
                  "Preventative care is not simply a routine interaction—it is a lifelong commitment to preserving your biological masterpiece. We blend precision digital mapping with biomimetic artistry to ensure your signature smile commands the test of time."
                </p>
                <p className="text-on-surface-variant text-lg font-body leading-relaxed opacity-80">
                  As the primary architect of your oral health, Dr. Vasquez approaches general dentistry with a focus on comprehensive biological integrity. By utilizing advanced digital mapping and biomimetic principles, every diagnostic evaluation is designed to preserve and protect your natural dentition.
                </p>
                <p className="text-on-surface-variant text-lg font-body leading-relaxed opacity-80">
                  Committed to the 'Clinical Sanctuary' philosophy, the general dentistry team ensures that routine maintenance, composite restorations, and preventative care are executed with the same surgical-grade precision and uncompromised comfort found in our specialty departments.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
        <div className="flex flex-wrap justify-center gap-8 lg:gap-24 mb-24 lg:mb-48">
          {[
            { icon: ShieldCheck, title: 'Preventive Care', desc: 'Bespoke hygiene protocols and comprehensive exams to detect issues before they become complex.' },
            { icon: Zap, title: 'Digital Diagnostics', desc: 'Low-radiation digital X-rays and intraoral cameras for precise, transparent diagnosis.' },
            { icon: Smile, title: 'Restorative Art', desc: 'Composite fillings and restorations that mimic the natural translucency and strength of enamel.' }
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

        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-primary/5 to-transparent p-8 md:p-24 lg:p-32 rounded-[2rem] lg:rounded-[3rem] mb-24 lg:mb-48">
          <span className="text-accent-light uppercase tracking-[0.6em] text-[11px] md:text-[10px] font-bold mb-8 block text-center">Comprehensive Solutions</span>
          <h2 className="text-5xl md:text-7xl font-headline italic mb-24 text-center tracking-tighter leading-[0.9]">Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {[
              { icon: Sparkles, title: 'Bespoke Cleanings', desc: 'Professional hygiene sessions tailored to your specific oral microbiome and aesthetic goals.' },
              { icon: Atom, title: 'Biomimetic Reconstruction', desc: 'Restoring tooth structure by mimicking the natural elasticity and biomechanics of human dentition, utilizing advanced ceramic layering to achieve surgical-grade biological integrity.' },
              { icon: Layers, title: 'Composite Restorations', desc: 'Metal-free, tooth-colored fillings that bond seamlessly to your natural tooth structure.' },
              { icon: Zap, title: 'Emergency Care', desc: 'Priority scheduling for urgent dental needs to restore your comfort and function immediately.' }
            ].map((item, i) => (
              <div key={i} className="p-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 to-transparent rounded-[2rem] hover:from-primary/10 transition-all duration-500 group">
                <item.icon className="text-accent-light mb-8 group-hover:scale-110 transition-transform duration-500" size={32} strokeWidth={1} />
                <h4 className="text-2xl lg:text-3xl font-headline italic mb-6 text-accent-light group-hover:translate-x-2 transition-transform duration-500">{item.title}</h4>
                <p className="text-on-surface-variant text-sm font-body leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity duration-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>


      </div>
    </div>
  );
}
