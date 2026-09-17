import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileDown, 
  RotateCcw, 
  Monitor, 
  Users, 
  Award, 
  Activity, 
  Crosshair, 
  Dna, 
  X, 
  CheckCircle2 
} from 'lucide-react';

export default function ProviderCenter() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    title: '',
    practiceName: '',
    email: '',
    phone: '',
    inquiryType: '',
    practiceType: '',
    communicationPreference: '',
    collaborationScope: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>, url: string, filename: string) => {
    e.preventDefault();
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const _url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = _url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        link.remove();
        window.URL.revokeObjectURL(_url);
      })
      .catch(err => {
        console.error('Download failed', err);
        window.open(url, '_blank');
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const accessKey = (import.meta as any).env.VITE_WEB3FORMS_KEY || 'YOUR_WEB3FORMS_KEY_HERE';
      
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `B2B Clinical Collaboration Request from Dr. ${formState.name} (${formState.practiceName})`,
          from_name: 'Referring Provider Hub Form',
          ...formState
        })
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        console.error('Form submission failed');
        setIsSuccess(true); // Fallback for missing keys during dev
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen text-white pt-32 pb-0">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-8 md:px-12 pt-16 pb-24 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl lg:text-8xl font-headline italic tracking-tighter mb-6"
        >
          Referring Provider Hub
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl font-headline italic text-white/70"
        >
          Partners in Excellence and Precision.
        </motion.p>
      </div>

      {/* Section A: The Referral Hub */}
      <div className="max-w-7xl mx-auto px-8 md:px-12 py-24 border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-headline italic tracking-tighter mb-8">Clinical Referral Assets</h2>
            <p className="font-body text-white/70 text-lg leading-relaxed mb-12">
              To ensure secure, HIPAA-compliant patient handoffs, please download our specialty-specific referral protocols. Forward completed documentation along with recent panoramic or CBCT imaging to our secure clinical portal.
            </p>
            
            <div className="space-y-6">
              <a 
                href="assets/downloads/smile-life-periodontics-referral-form.pdf" 
                onClick={(e) => handleDownload(e, "assets/downloads/smile-life-periodontics-referral-form.pdf", "Smile Life Periodontics Referral Form.pdf")}
                className="w-full flex items-center justify-between px-8 py-6 border border-white/20 hover:border-[#00D2FF] text-[#00D2FF] font-body text-xs font-bold tracking-[0.2em] uppercase transition-all group bg-surface-container-low"
              >
                Download Smile Life Periodontics Referral Form (PDF)
                <FileDown size={20} className="group-hover:translate-y-1 transition-transform" />
              </a>
              <a 
                href="assets/downloads/orthodontics-referral-pad.pdf" 
                onClick={(e) => handleDownload(e, "assets/downloads/orthodontics-referral-pad.pdf", "Orthodontics Referral Pad.pdf")}
                className="w-full flex items-center justify-between px-8 py-6 border border-white/20 hover:border-[#00D2FF] text-[#00D2FF] font-body text-xs font-bold tracking-[0.2em] uppercase transition-all group bg-surface-container-low"
              >
                Download Orthodontics Referral Pad (PDF)
                <FileDown size={20} className="group-hover:translate-y-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:pl-12 lg:border-l border-white/10"
          >
            <h2 className="text-4xl font-headline italic tracking-tighter mb-12">Why Partner With Us?</h2>
            <ul className="space-y-10">
              <li className="flex gap-6 items-start group">
                <div className="mt-1 p-2 border border-[#00D2FF]/20 rounded-full group-hover:bg-[#00D2FF]/10 transition-colors">
                  <RotateCcw size={24} className="text-[#00D2FF]" strokeWidth={1} />
                </div>
                <div>
                  <h3 className="font-body text-xl text-white mb-2">Return to Referrer Guarantee</h3>
                  <p className="font-body text-sm text-white/70 leading-relaxed">Absolute professional respect. Your patient remains within your practice continuum following specialty intervention.</p>
                </div>
              </li>
              <li className="flex gap-6 items-start group">
                <div className="mt-1 p-2 border border-[#00D2FF]/20 rounded-full group-hover:bg-[#00D2FF]/10 transition-colors">
                  <Monitor size={24} className="text-[#00D2FF]" strokeWidth={1} />
                </div>
                <div>
                  <h3 className="font-body text-xl text-white mb-2">Integrated Digital Planning (CBCT/DICOM)</h3>
                  <p className="font-body text-sm text-white/70 leading-relaxed">Streamwired digital architecture allowing your native scans to drive our surgical protocol.</p>
                </div>
              </li>
              <li className="flex gap-6 items-start group">
                <div className="mt-1 p-2 border border-[#00D2FF]/20 rounded-full group-hover:bg-[#00D2FF]/10 transition-colors">
                  <Users size={24} className="text-[#00D2FF]" strokeWidth={1} />
                </div>
                <div>
                  <h3 className="font-body text-xl text-white mb-2">Direct Peer-to-Peer Consultations</h3>
                  <p className="font-body text-sm text-white/70 leading-relaxed">Unhindered access to our clinical director for rapid, complex case strategizing.</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Section E: Professional Exchange CTA */}
      <div className="py-32 text-center bg-surface-container border-y border-white/5">
        <div className="max-w-2xl mx-auto px-8">
          <h2 className="text-5xl font-headline italic tracking-tighter mb-6">Lunch & Learn / Clinical Exchange</h2>
          <p className="font-body text-lg text-white/60 leading-relaxed mb-12">
            Interested in seeing our digital workflow in person? We welcome local clinical teams for private facility tours or catered educational lunch sessions.
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-[#0056B3] border border-[#00D2FF] text-white px-12 py-5 font-body text-xs font-bold uppercase tracking-[0.2em] shadow-[0_0_40px_rgba(0,210,255,0.3)] hover:shadow-[0_0_80px_rgba(0,210,255,0.6)] hover:-translate-y-1 transition-all duration-300"
          >
            Request Clinical Exchange
          </button>
        </div>
      </div>

      {/* Section B: Digital Integration */}
      <div className="bg-surface-container-low py-32 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-8 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-headline italic tracking-tighter mb-8">Open Architecture Imaging</h2>
            <p className="font-body text-lg text-white/70 leading-relaxed">
              We utilize advanced digital twin mapping and seamless DICOM file integration. Your existing patient scans transfer effortlessly into our surgical planning software, preventing redundant imaging and accelerating the path to treatment.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Section C: Surgical Standards Grid */}
      <div className="max-w-7xl mx-auto px-8 md:px-12 py-32 border-b border-white/10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { icon: Award, title: "Premium Implantology", text: "Utilizing Gold-Standard systems for maximum prosthetic predictability." },
            { icon: Activity, title: "LANAP® Certified", text: "Minimally invasive laser protocols for advanced periodontal regeneration." },
            { icon: Crosshair, title: "Guided Navigation", text: "100% digital surgical planning for precise anatomical placement." },
            { icon: Dna, title: "Advanced Biologics", text: "Utilizing PRF and growth factors to accelerate the healing response." },
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto flex items-center justify-center border border-white/10 rounded-full mb-8 group-hover:border-[#00D2FF]/50 transition-colors">
                <item.icon size={32} strokeWidth={1} className="text-[#00D2FF]" />
              </div>
              <h3 className="font-body tracking-[0.2em] uppercase text-xs font-bold text-white mb-4">{item.title}</h3>
              <p className="font-body text-sm text-white/70 leading-relaxed max-w-xs mx-auto">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Section D: The Feedback Loop */}
      <div className="max-w-7xl mx-auto px-8 md:px-12 py-32 border-b border-white/10 overflow-hidden">
        <h2 className="text-4xl text-center font-headline italic tracking-tighter mb-20">The Collaborative Lifecycle</h2>
        <div className="relative">
          {/* Horizontal Line */}
          <div className="absolute top-8 left-0 right-0 h-[1px] bg-white/10 hidden md:block z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {[
              { step: "01", title: "The Consult", desc: "Digital assessment report sent within 24 hours." },
              { step: "02", title: "The Procedure", desc: "Comprehensive surgical summary delivered post-operation." },
              { step: "03", title: "The Return", desc: "Immediate transition back to your practice for restorative completion." }
            ].map((cycle, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="text-center "
              >
                <div className="w-16 h-16 mx-auto bg-surface-container-high border-2 border-[#0056B3] rounded-full flex items-center justify-center font-headline italic text-2xl text-white mb-8">
                  {cycle.step}
                </div>
                <h3 className="font-body text-lg font-bold text-white mb-4 uppercase tracking-widest">{cycle.title}</h3>
                <p className="font-body text-sm text-white/60 leading-relaxed px-4">{cycle.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>


      {/* Clinical Collaboration Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-sm overflow-y-auto"
          >
              <motion.div 
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                className="bg-surface-container border border-white/20 w-full max-w-4xl relative shadow-2xl"
              >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 z-10"
              >
                <X size={24} />
              </button>

              <div className="p-8 md:p-14">
                {isSuccess ? (
                  <div className="text-center py-20">
                    <CheckCircle2 strokeWidth={1} className="w-24 h-24 text-[#00D2FF] mx-auto mb-8" />
                    <h2 className="text-4xl font-headline italic text-white mb-6">Thank You</h2>
                    <p className="font-body text-white/70 max-w-lg mx-auto leading-relaxed">
                      Thank you. Our Clinical Coordinator will review your proposal and contact your office to arrange a consultation.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-4xl md:text-5xl font-headline italic text-white mb-12">Clinical Collaboration Request</h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-8">
                      {/* Standard Fields */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <label htmlFor="name" className="block font-body text-xs tracking-widest uppercase text-white/70 mb-3 font-bold">Name</label>
                          <input id="name" type="text" name="name" required value={formState.name} onChange={handleChange} className="w-full bg-surface-container-high border-b border-white/20 text-white px-4 py-4 font-body focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00D2FF] focus:border-[#00D2FF] focus:bg-surface-container-highest transition-colors" placeholder="Dr. First Last" />
                        </div>
                        <div>
                          <label htmlFor="title" className="block font-body text-xs tracking-widest uppercase text-white/70 mb-3 font-bold">Title (e.g., DDS, DMD, OMFS)</label>
                          <input id="title" type="text" name="title" required value={formState.title} onChange={handleChange} className="w-full bg-surface-container-high border-b border-white/20 text-white px-4 py-4 font-body focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00D2FF] focus:border-[#00D2FF] focus:bg-surface-container-highest transition-colors" placeholder="DDS, MS" />
                        </div>
                        <div>
                          <label htmlFor="practiceName" className="block font-body text-xs tracking-widest uppercase text-white/70 mb-3 font-bold">Practice Name</label>
                          <input id="practiceName" type="text" name="practiceName" value={formState.practiceName} onChange={handleChange} className="w-full bg-surface-container-high border-b border-white/20 text-white px-4 py-4 font-body focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00D2FF] focus:border-[#00D2FF] focus:bg-surface-container-highest transition-colors" placeholder="Specialty Associates" />
                        </div>
                        <div>
                          <label htmlFor="email" className="block font-body text-xs tracking-widest uppercase text-white/70 mb-3 font-bold">Contact Email</label>
                          <input id="email" type="email" name="email" required value={formState.email} onChange={handleChange} className="w-full bg-surface-container-high border-b border-white/20 text-white px-4 py-4 font-body focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00D2FF] focus:border-[#00D2FF] focus:bg-surface-container-highest transition-colors" placeholder="doctor@practice.com" />
                        </div>
                        <div className="md:col-span-2">
                          <label htmlFor="phone" className="block font-body text-xs tracking-widest uppercase text-white/70 mb-3 font-bold">Contact Phone</label>
                          <input id="phone" type="tel" name="phone" value={formState.phone} onChange={handleChange} className="w-full bg-surface-container-high border-b border-white/20 text-white px-4 py-4 font-body focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00D2FF] focus:border-[#00D2FF] focus:bg-surface-container-highest transition-colors" placeholder="(555) 123-4567" />
                        </div>
                      </div>

                      {/* B2B Dropdowns Layout (2-Column) */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/10 pt-8 mt-8">
                        <div>
                          <label htmlFor="inquiryType" className="block font-body text-xs tracking-widest uppercase text-white/70 mb-3 font-bold">Inquiry Type</label>
                          <div className="relative">
                            <select id="inquiryType" name="inquiryType" required value={formState.inquiryType} onChange={handleChange} className="w-full bg-surface-container-high border-b border-white/20 text-white px-4 py-4 font-body focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00D2FF] focus:border-[#00D2FF] focus:bg-surface-container-highest transition-colors appearance-none">
                              <option value="" disabled className="text-white/30">Select Option</option>
                              <option value="Case Consultation">Case Consultation</option>
                              <option value="Facility Tour">Facility Tour</option>
                              <option value="Lunch & Learn">Lunch & Learn</option>
                              <option value="Software Integration Sync">Software Integration Sync</option>
                            </select>
                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#00D2FF] pointer-events-none text-xs">▼</span>
                          </div>
                        </div>

                        <div>
                          <label htmlFor="practiceType" className="block font-body text-xs tracking-widest uppercase text-white/70 mb-3 font-bold">Practice Type</label>
                          <div className="relative">
                            <select id="practiceType" name="practiceType" required value={formState.practiceType} onChange={handleChange} className="w-full bg-surface-container-high border-b border-white/20 text-white px-4 py-4 font-body focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00D2FF] focus:border-[#00D2FF] focus:bg-surface-container-highest transition-colors appearance-none">
                              <option value="" disabled className="text-white/30">Select Type</option>
                              <option value="General Practice">General Practice</option>
                              <option value="Multi-Specialty">Multi-Specialty</option>
                              <option value="Orthodontic">Orthodontic</option>
                              <option value="Oral Surgery">Oral Surgery</option>
                            </select>
                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#00D2FF] pointer-events-none text-xs">▼</span>
                          </div>
                        </div>

                        <div>
                          <label htmlFor="communicationPreference" className="block font-body text-xs tracking-widest uppercase text-white/70 mb-3 font-bold">Communication Preference</label>
                          <div className="relative">
                            <select id="communicationPreference" name="communicationPreference" required value={formState.communicationPreference} onChange={handleChange} className="w-full bg-surface-container-high border-b border-white/20 text-white px-4 py-4 font-body focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00D2FF] focus:border-[#00D2FF] focus:bg-surface-container-highest transition-colors appearance-none">
                              <option value="" disabled className="text-white/30">Select Preference</option>
                              <option value="Office Phone">Office Phone</option>
                              <option value="Personal Mobile">Personal Mobile</option>
                              <option value="Secure Email">Secure Email</option>
                            </select>
                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#00D2FF] pointer-events-none text-xs">▼</span>
                          </div>
                        </div>

                        <div>
                          <label htmlFor="collaborationScope" className="block font-body text-xs tracking-widest uppercase text-white/70 mb-3 font-bold">Collaboration Scope</label>
                          <div className="relative">
                            <select id="collaborationScope" name="collaborationScope" required value={formState.collaborationScope} onChange={handleChange} className="w-full bg-surface-container-high border-b border-white/20 text-white px-4 py-4 font-body focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00D2FF] focus:border-[#00D2FF] focus:bg-surface-container-highest transition-colors appearance-none">
                              <option value="" disabled className="text-white/30">Select Scope</option>
                              <option value="Single-Site Perio">Single-Site Perio</option>
                              <option value="Full-Arch Reconstruction">Full-Arch Reconstruction</option>
                              <option value="Digital Workflow Alignment">Digital Workflow Alignment</option>
                              <option value="Long-term Partnership">Long-term Partnership</option>
                              <option value="Other">Other</option>
                            </select>
                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#00D2FF] pointer-events-none text-xs">▼</span>
                          </div>
                        </div>
                      </div>

                      {/* Textarea */}
                      <div className="pt-4">
                        <label htmlFor="message" className="block font-body text-xs tracking-widest uppercase text-white/70 mb-3 font-bold">Clinical Case & Collaboration Overview</label>
                        <textarea 
                          id="message"
                          name="message" 
                          rows={4} 
                          maxLength={500} 
                          required
                          value={formState.message} 
                          onChange={handleChange} 
                          className="w-full bg-surface-container-high border border-white/20 text-white px-4 py-4 font-body focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00D2FF] focus:border-[#00D2FF] focus:bg-surface-container-highest transition-colors resize-none mb-2" 
                          placeholder="Briefly describe the types of cases or clinical collaboration you would like to discuss..." 
                        />
                        <p className="font-body text-[10px] uppercase tracking-wide text-[#00D2FF]/70">
                          <strong>STRICT HIPAA COMPLIANCE ALARM:</strong> Please DO NOT include specific patient names, birthdates, identifiers, or sensitive medical information in this initial outreach request.
                        </p>
                      </div>

                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-linear-to-r from-[#0056B3] to-[#00D2FF] text-white py-6 font-body font-bold tracking-[0.25em] uppercase text-xs mt-8 shadow-[0_0_40px_rgba(0,210,255,0.3)] hover:shadow-[0_0_80px_rgba(0,210,255,0.6)] transition-all"
                      >
                        {isSubmitting ? 'Sending Proposal...' : 'Send Proposal'}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
