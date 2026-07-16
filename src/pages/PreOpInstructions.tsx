import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, X, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PRE_OP_DATA = [
  {
    title: '1. Pharmacological Protocol',
    content: (
      <div className="space-y-6">
        <div>
          <h5 className="font-bold text-[#00D2FF] mb-2 uppercase tracking-[0.2em] text-[11px]">Pre-Fill Prescriptions</h5>
          <p className="text-white/80 leading-relaxed font-body">To guarantee a seamless transition into recovery, you will receive your specialized post-operative pharmacological protocol prior to your surgical date. Please have all prescriptions filled at your preferred pharmacy and physically bring the sealed bottles with you to your appointment. This eliminates any logistical delays while you are under the effects of anesthesia.</p>
        </div>
        <div>
          <h5 className="font-bold text-[#00D2FF] mb-2 uppercase tracking-[0.2em] text-[11px]">Blood Thinners & Supplements</h5>
          <p className="text-white/80 leading-relaxed font-body">Unless explicitly directed otherwise by Dr. Sara, completely discontinue the use of Aspirin, non-steroidal anti-inflammatories (Advil, Motrin, Ibuprofen), Vitamin E, Fish Oil, and Ginseng <strong>3 to 5 full days prior to surgery</strong>, as these act as severe anti-coagulants and compromise the formation of the critical surgical blood clot. If you are actively prescribed Coumadin, Plavix, Xarelto, Eliquis, or other systemic blood thinners, you must follow the precise titration modification instructions provided during your bespoke consultation.</p>
        </div>
        <div>
          <h5 className="font-bold text-[#00D2FF] mb-2 uppercase tracking-[0.2em] text-[11px]">Antibiotic Protocols & Contraindications</h5>
          <p className="text-white/80 leading-relaxed font-body">If your medical history dictates antibiotic premedication for a cardiac condition, artificial heart valve, or a recent major joint replacement, you must strictly ingest your medication exactly 1 hour prior to your arrival. <br/><br/><strong>Critical Note for Women:</strong> If you are prescribed a post-operative antibiotic regimen, scientific literature confirms that certain antibiotics severely decrease the pharmacokinetic effectiveness of oral contraceptives. We strongly advise utilizing alternative precautions for the duration of your cycle to ensure absolute safety.</p>
        </div>
      </div>
    )
  },
  {
    title: '2. The "Soft Diet" Grocery Logistics',
    content: (
      <div className="space-y-6">
        <p className="text-white/80 leading-relaxed font-body">We highly recommend architecting your recovery menu well before your surgical date so you can bypass the store and transition directly into rest. Please stock your pantry exclusively with soft, cool, nutrient-dense biological fuel.</p>
        
        <div className="bg-white/5 border border-white/10 p-6 rounded">
          <h5 className="font-bold text-[#00D2FF] mb-4 uppercase tracking-[0.2em] text-[11px]">Approved Immediate Diet (First 24 Hours)</h5>
          <ul className="list-disc pl-5 text-white/80 leading-relaxed font-body space-y-2">
            <li>High-yield protein shakes (Ensure / Premier Protein) — <em>Kept chilled</em></li>
            <li>Smooth, room-temperature soups and robust bone broths</li>
            <li>Greek yogurt, pudding, applesauce, and Jell-O</li>
            <li>Thick fruit smoothies — <strong>MUST BE EATEN WITH A SPOON. ABSOLUTELY NO STRAWS.</strong></li>
          </ul>
        </div>
        
        <div className="bg-white/5 border border-white/10 p-6 rounded">
          <h5 className="font-bold text-[#00D2FF] mb-4 uppercase tracking-[0.2em] text-[11px]">Days 2-4 (The "Mushy" Diet)</h5>
          <p className="text-white/80 leading-relaxed font-body">As facial swelling begins to naturally subside, you may introduce lightly chewable staples: macaroni & cheese, whipped mashed potatoes, softly scrambled eggs, flaky white fish, excessively boiled pasta, cooled oatmeal, and cottage cheese.</p>
        </div>

        <div>
          <h5 className="font-bold text-[#FF5252] mb-2 uppercase tracking-[0.2em] text-[11px]">Strictly Avoid</h5>
          <p className="text-white/80 leading-relaxed font-body">Under no circumstances should you consume spicy foods, acidic foods (citrus/tomato), seeds, nuts, popcorn, chips, or anything requiring substantial mastication force for the first week. A single seed can lodge itself deeply into a surgical graft and trigger a massive systemic infection.</p>
        </div>
      </div>
    )
  },
  {
    title: '3. Systemic Health & Day-Of Attire',
    content: (
      <div className="space-y-6">
        <div>
          <h5 className="font-bold text-[#00D2FF] mb-2 uppercase tracking-[0.2em] text-[11px]">Temperature Control & Attire</h5>
          <p className="text-white/80 leading-relaxed font-body">To maintain absolute sterility and drastically inhibit bacterial growth, our surgical suites and operatories are kept at a low, clinically regulated temperature. Please dress warmly in exceptionally loose, comfortable clothing. If you are receiving an IV, please ensure you wear short sleeves or sleeves that can be easily rolled past the bicep to allow unimpeded vascular access.</p>
        </div>
        <div>
          <h5 className="font-bold text-[#00D2FF] mb-2 uppercase tracking-[0.2em] text-[11px]">Diabetic Homeostasis (A1C Protocol)</h5>
          <p className="text-white/80 leading-relaxed font-body">If you are diabetic, your HbA1c must ideally be below 7.0 for optimal bone graft integration. We schedule our diabetic patients strictly for morning appointments to minimize fasting stress. Monitor your baseline carefully prior to arrival.</p>
        </div>
        <div>
          <h5 className="font-bold text-[#00D2FF] mb-2 uppercase tracking-[0.2em] text-[11px]">Peripheral Sensory Isolation</h5>
          <p className="text-white/80 leading-relaxed font-body">If your procedure is being executed strictly under local anesthesia (without IV sedation), you are highly encouraged to bring your personal smartphone and noise-canceling headphones. Isolating yourself physiologically with your favorite music, audiobooks, or podcasts vastly reduces psychosomatic anxiety.</p>
        </div>
      </div>
    )
  },
  {
    title: '4. Critical Biological Preparation',
    content: (
      <div className="space-y-6">
        <div className="bg-[#1A1A1A] border-l-2 border-[#FF5252] p-6">
          <h5 className="font-bold text-[#FF5252] mb-2 uppercase tracking-[0.2em] text-[11px]">Nicotine & Vasoconstriction Rules</h5>
          <p className="text-white/80 leading-relaxed font-body">You must completely cease smoking and vaping nicotine products for a strict minimum of <strong>3 days prior</strong> to surgery (and 2 weeks post-surgery). Nicotine acts as a powerful systemic vasoconstrictor, starving your localized capillary beds of oxygen. Placing a bone graft into a nicotine-compromised site almost guarantees immediate biological failure and graft rejection.</p>
        </div>
        <div>
          <h5 className="font-bold text-[#00D2FF] mb-2 uppercase tracking-[0.2em] text-[11px]">Chlorhexidine Pre-Rinsing</h5>
          <p className="text-white/80 leading-relaxed font-body">If you were prescribed 0.12% Chlorhexidine Gluconate (Peridex), begin rinsing exactly as directed 48 hours prior to your surgical date. This radically reduces your natural oral biological load (bacterial count) and minimizes the statistical risk of trans-surgical contamination.</p>
        </div>
      </div>
    )
  },
  {
    title: '5. IV Sedation Directives',
    content: (
      <div className="space-y-6">
        <p className="text-white/80 leading-relaxed font-body">If your custom surgical blueprint requires IV Conscious Sedation or Deep Sedation, your systemic biological safety relies entirely upon your absolute, flawless adherence to the following directives:</p>
        
        <div className="bg-[#1A1A1A] border-l-2 border-[#FF5252] p-6">
          <h5 className="font-bold text-white mb-2 uppercase tracking-[0.2em] text-[11px]">Strict NPO (Fasting) Protocol</h5>
          <p className="text-white/80 leading-relaxed font-body">You must consume <strong>absolutely nothing by mouth</strong> (this emphatically includes water, coffee, breath mints, and chewing gum) for <strong>8 full physiological hours</strong> prior to your exact appointment time. If there is even a minuscule volume of fluid or food in your stomach, your body risks aspiration during sedation, which is a life-threatening medical emergency. If you break this rule, your surgery will be legally cancelled on the spot without exception.</p>
        </div>
        
        <div className="bg-[#1A1A1A] border-l-2 border-[#00D2FF] p-6 mt-4">
          <h5 className="font-bold text-white mb-2 uppercase tracking-[0.2em] text-[11px]">Legal Escort Requirement</h5>
          <p className="text-white/80 leading-relaxed font-body">You must have a trusted, responsible adult personally drive you strictly to the clinic, physically remain inside our sanctuary lobby for the entire duration of the procedure, and drive you directly home. <strong>Under zero circumstances are ride-share services (Uber/Lyft) or public taxis permitted for sedated patients.</strong> You are considered legally and neurologically impaired for 24 hours.</p>
        </div>

        <div className="bg-[#1A1A1A] border-l-2 border-[#00D2FF] p-6 mt-4">
          <h5 className="font-bold text-white mb-2 uppercase tracking-[0.2em] text-[11px]">Vascular Access & Monitoring</h5>
          <p className="text-white/80 leading-relaxed font-body">Please wear extremely <strong>loose, comfortable clothing with short sleeves</strong> (or sleeves that can be easily rolled up past the bicep) to allow the surgical team immediate vascular access for the IV. Additionally, you must completely <strong>remove all dark nail polish, artificial acrylics, and gel manicures</strong> from at least two of your fingers. The anesthesia pulse oximeter relies on projecting medical-grade infrared light securely through your natural nail bed to continuously monitor your blood oxygen saturation during deep sedation.</p>
        </div>
      </div>
    )
  }
];

// Interactive Accordion Component mapped for localized usage
const AccordionItem = ({ title, content, isOpen, onClick }: { key?: React.Key, title: string, content: React.ReactNode, isOpen: boolean, onClick: () => void }) => {
  return (
    <div className="mb-4">
      <button 
        onClick={onClick}
        className={`w-full flex items-center justify-between p-6 bg-[#1A1A1A] border rounded transition-all duration-300 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00D2FF] ${isOpen ? 'border-[#00D2FF]/50 shadow-[0_0_20px_rgba(0,210,255,0.1)]' : 'border-[#333333] hover:border-[#00D2FF]/30'}`}
        aria-expanded={isOpen}
      >
        <span className={`text-left font-headline italic font-bold uppercase tracking-[0.1em] text-base transition-colors duration-300 ${isOpen ? 'text-[#00D2FF]' : 'text-white group-hover:text-[#00D2FF]'}`} style={{ textShadow: isOpen ? '0 0 10px rgba(0,210,255,0.3)' : 'none' }}>
          {title}
        </span>
        <div className="ml-6 shrink-0 relative w-6 h-6 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="text-[#00D2FF]"
              >
                <X size={24} strokeWidth={1.5} />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="text-white/50 group-hover:text-[#00D2FF]"
              >
                <Plus size={24} strokeWidth={1.5} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="bg-[#000000] p-8 md:p-12 border-x border-b border-[#333333]/50 rounded-b mt-[-4px]">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function PreOpInstructions() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-48 pb-48  min-h-screen">
      <div className="max-w-4xl mx-auto px-8 md:px-12">
        <Link to="/patient-center" className="inline-flex items-center gap-3 text-white/50 hover:text-[#00D2FF] transition-colors mb-16 group font-bold tracking-widest uppercase text-[10px]">
          <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform duration-300" /> Back to Patient Center
        </Link>
        <div className="mb-24">
          <span className="text-accent-light uppercase tracking-[0.6em] text-[10px] font-bold mb-6 block">Prior to Execution</span>
          <h1 className="text-5xl md:text-7xl font-headline italic tracking-tighter text-white mb-8">Pre-Surgical <br/><span className="text-[#00D2FF] not-italic font-medium text-4xl md:text-6xl pt-2 block">Logistics</span></h1>
          <p className="text-on-surface-variant font-body text-lg opacity-80 leading-relaxed max-w-2xl">Detailed architectural protocols crafted to guarantee a completely predictable, sterile, and comfortable surgical baseline. Please read thoroughly 72 hours prior to your arrival.</p>
        </div>
        <div className="space-y-2">
          {PRE_OP_DATA.map((item, idx) => (
            <AccordionItem 
              key={idx} 
              title={item.title} 
              content={item.content} 
              isOpen={openIndex === idx} 
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}
