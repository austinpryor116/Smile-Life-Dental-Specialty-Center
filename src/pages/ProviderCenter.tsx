import { motion } from 'motion/react';
import { FileDown, FileUp, MessageSquare, Activity, ShieldCheck, Cpu, Mail } from 'lucide-react';

export default function ProviderCenter() {
  return (
    <div className="pt-48 pb-48 bg-black">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <div className="mb-32 max-w-3xl">
          <span className="text-primary uppercase tracking-[0.6em] text-[10px] font-bold mb-8 block">Professional Collaboration</span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-headline italic mb-12 tracking-tighter leading-[0.85]">Provider <br /><span className="text-primary not-italic font-medium">Center</span></h1>
          <p className="text-on-surface-variant text-lg md:text-xl font-body leading-relaxed opacity-80">
            We serve as a trusted extension of your practice. Our specialty center is built on a foundation of seamless communication and clinical excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32 mb-48">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-4xl lg:text-5xl font-headline italic mb-12 tracking-tighter">Clinical Referral Assets</h2>
            <p className="text-on-surface-variant text-lg font-body leading-relaxed mb-16 opacity-80">
              To ensure secure, HIPAA-compliant patient handoffs, please download our specialty-specific referral protocols. Forward completed documentation along with recent panoramic or CBCT imaging to our secure clinical portal.
            </p>
            
            <div className="space-y-8">
              <button className="w-full py-8 px-10 bg-linear-to-r from-[#0056B3] to-accent-light text-white font-bold uppercase tracking-[0.25em] text-[10px] hover:scale-[1.02] transition-all duration-500 flex items-center justify-between group shadow-[0_0_30px_rgba(0,210,255,0.1)]">
                Download Periodontics Referral Pad (PDF) <FileDown size={18} className="group-hover:translate-y-1 transition-transform duration-300" />
              </button>
              
              <button className="w-full py-8 px-10 border border-accent-light/30 bg-surface-container-low text-accent-light font-bold uppercase tracking-[0.25em] text-[10px] hover:bg-accent-light hover:text-black transition-all duration-500 flex items-center justify-between group">
                Download Orthodontics Referral Pad (PDF) <FileDown size={18} className="group-hover:translate-y-1 transition-transform duration-300" />
              </button>
            </div>
          </motion.div>

          <div className="space-y-20">
            <h2 className="text-4xl lg:text-5xl font-headline italic mb-12 tracking-tighter">Why Refer to Us?</h2>
            {[
              { icon: Activity, title: 'RETURN TO REFERRER', desc: 'Our "Return to Referrer" guarantee ensures your patients are returned to your practice immediately following specialty treatment.' },
              { icon: FileUp, title: 'CLINICAL ASSETS', desc: 'Download high-resolution clinical assets, case studies, and referral protocols for your practice.' },
              { icon: MessageSquare, title: 'PEER-TO-PEER ACCESS', desc: 'Direct line to our board-certified specialists for immediate case consultation and peer-to-peer support.' }
            ].map((benefit, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="flex gap-10 group"
              >
                <div className="w-20 h-20 shrink-0 border border-accent-light/20 flex items-center justify-center text-accent-light group-hover:bg-accent-light group-hover:text-black transition-all duration-500">
                  <benefit.icon size={32} strokeWidth={0.75} />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold tracking-[0.4em] mb-4 text-white group-hover:text-accent-light transition-colors duration-300">{benefit.title}</h4>
                  <p className="text-on-surface-variant text-sm font-body leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity duration-500">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Digital Integration Section */}
        <div className="bg-surface-container-low border border-outline-variant p-16 md:p-24 lg:p-32 mb-48">
          <div className="max-w-4xl">
            <span className="text-accent-light uppercase tracking-[0.6em] text-[10px] font-bold mb-8 block">Digital Integration</span>
            <h2 className="text-5xl md:text-7xl font-headline italic mb-12 tracking-tighter leading-[0.9]">Open Architecture Imaging</h2>
            <p className="text-on-surface-variant text-lg md:text-xl font-body leading-relaxed opacity-80">
              We utilize advanced digital twin mapping and seamless DICOM file integration. Your existing patient scans transfer effortlessly into our surgical planning software, preventing redundant imaging and accelerating the path to treatment.
            </p>
          </div>
        </div>

        {/* Peer Consultation Call-Out */}
        <div className="text-center py-32 border-t border-outline-variant">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-headline italic mb-12 tracking-tighter leading-[0.9]">Complex Case? <br/>Let’s Collaborate.</h2>
            <p className="text-on-surface-variant text-lg font-body leading-relaxed mb-16 opacity-80">
              Dr. Sara is available for direct peer-to-peer case reviews. If you have a highly complex reconstructive or periodontal case, contact our clinical coordinator to schedule a secure digital consultation.
            </p>
            <button className="px-14 py-6 bg-linear-to-r from-primary to-accent-light text-white font-bold uppercase tracking-[0.25em] text-[10px] hover:scale-105 transition-all duration-500 inline-flex items-center gap-4 group shadow-[0_0_30px_rgba(0,210,255,0.2)]">
              Email Clinical Coordinator <Mail size={14} className="group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
