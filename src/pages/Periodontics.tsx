import { motion } from 'motion/react';
import { ArrowRight, Activity, Shield, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { periodontalProcedures } from '../data/periodontalProcedures';
import { useRef, useEffect } from 'react';

export default function Periodontics() {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const LOOP_START_TIME = 0.0; 
  const LOOP_END_TIME = 9.7;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.currentTime >= LOOP_END_TIME) {
        video.currentTime = LOOP_START_TIME;
        video.play().catch(() => {});
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    const handleLoaded = () => video.currentTime = LOOP_START_TIME;
    video.addEventListener('loadedmetadata', handleLoaded);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('loadedmetadata', handleLoaded);
    };
  }, []);
  return (
    <div className=" text-white min-h-screen">
      
      {/* Cinematic Video Hero Section */}
      <section className="h-screen relative overflow-hidden  flex items-center justify-center border-b border-white/10 mb-32">
        <video 
          ref={videoRef}
          src="assets/video/Implant.mp4" 
          autoPlay 
          muted 
          defaultMuted
          playsInline 
          className="absolute inset-0 w-full h-full object-cover object-top opacity-50"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-transparent to-black z-10" />
        
        <div className="relative z-20 text-center max-w-4xl mx-auto px-8 w-full mt-20">
           <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-accent-light uppercase tracking-[0.6em] text-[11px] md:text-[10px] font-bold mb-8 block"
           >
              Dynamic Biomimetic Reconstruction
           </motion.span>
           <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-9xl font-headline italic mb-8 mt-4 tracking-tighter leading-[0.9]"
           >
              Advanced <br /><span className="text-primary not-italic font-medium">Periodontics</span>
           </motion.h1>
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 1, delay: 0.5 }}
           >
             <Link to="/book" className="mt-8 px-8 py-5 md:px-14 md:py-6 bg-linear-to-r from-primary to-accent-light text-white font-bold uppercase tracking-[0.25em] text-[11px] md:text-[10px] hover:scale-105 transition-all duration-500 inline-flex items-center gap-4 group shadow-[0_0_40px_rgba(0,210,255,0.3)] hover:shadow-[0_0_80px_rgba(0,210,255,0.6)]">
               Request Consultation <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-300" />
             </Link>
           </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-8 md:px-12">
        {/* Meet the Specialist Section */}
        <section className="mb-24 lg:mb-48 border-b border-white/5 pb-16 lg:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative h-[400px] md:h-auto md:aspect-[4/5] overflow-hidden border border-white/5 p-4 bg-white/5 rounded-[2rem]"
            >
              <img 
                src="assets/images/dr-sara-holding-implant.jpg" 
                alt="Dr. Sara Alhachache" 
                className="w-full h-full object-cover object-[center_10%]"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-accent-light/10 mix-blend-multiply"></div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="text-accent-light uppercase tracking-[0.6em] text-[11px] md:text-[10px] font-bold mb-8 block">THE CLINICAL DIRECTOR</span>
              <h2 className="text-5xl md:text-7xl font-headline italic mb-10 tracking-tighter leading-[0.9]">Dr. Sara Alhachache, <br/>Periodontist</h2>
              <p className="text-xl md:text-2xl font-headline italic text-accent-light leading-relaxed border-l-2 border-[#00D2FF]/40 pl-6 mb-8 mt-4 tracking-wide">
                "True structural longevity isn't born from mere treatment—it is born from an uncompromising respect for biological geometry. We do not just build foundations; we architect a secure sanctuary for systemic healing."
              </p>
              <p className="text-on-surface-variant text-lg font-body leading-relaxed opacity-80">
                Dr. Sara Alhachache is a leading specialist in advanced periodontics and full-mouth implantology. Drawing upon her elite fellowship training in periodontal microsurgery, she brings an unmatched level of structural precision and tissue management to every procedure. Her clinical philosophy bridges the gap between biological integrity and aesthetic geometry, ensuring that every foundation she builds is designed for systemic longevity. With a rigorous focus on advanced bone regeneration and minimally invasive laser therapies, she provides a sanctuary for patients requiring complex oral rehabilitation.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="flex flex-wrap justify-center gap-8 lg:gap-24 mb-24 lg:mb-48">
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


        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-primary/5 to-transparent p-8 md:p-24 lg:p-32 mb-24 lg:mb-48 rounded-[2rem] lg:rounded-[100px]">
          <span className="text-accent-light uppercase tracking-[0.6em] text-[11px] md:text-[10px] font-bold mb-8 block text-center">Surgical Directory</span>
          <h2 className="text-5xl md:text-7xl font-headline italic mb-24 text-center tracking-tighter leading-[0.9]">Advanced Procedures</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 lg:gap-x-32 gap-y-16">
            {Object.values(periodontalProcedures).map((proc) => (
              <Link to={`/periodontics/${proc.slug}`} key={proc.slug} className="pb-12 border-b border-white/5 group block">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-2xl lg:text-3xl font-headline italic text-accent-light group-hover:text-white transition-colors duration-500">{proc.title}</h4>
                  <div className="w-10 h-10 rounded-full border border-accent-light/30 flex items-center justify-center shrink-0 group-hover:bg-accent-light group-hover:border-accent-light transition-all duration-300">
                    <ArrowRight size={16} className="text-accent-light group-hover:text-black transition-colors" />
                  </div>
                </div>
                <p className="text-on-surface-variant text-sm font-body leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity duration-500 max-w-[90%]">{proc.subtitle}</p>
              </Link>
            ))}
          </div>
        </div>

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
                className="p-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 to-transparent rounded-[2rem] hover:from-primary/10 transition-all duration-500 group"
              >
                <span className="text-accent-light uppercase tracking-[0.4em] text-[9px] font-bold mb-6 block opacity-60">{article.tag}</span>
                <h3 className="text-2xl font-headline italic mb-10 tracking-tight text-white group-hover:text-accent-light transition-colors duration-300">{article.title}</h3>
                <Link to="#" className="text-[11px] md:text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 group-hover:text-accent-light transition-colors duration-300 flex items-center gap-2">
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
