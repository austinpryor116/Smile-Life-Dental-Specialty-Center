import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, X, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const POST_OP_DATA = [
  {
    title: '1. Hemostasis (Managing Bleeding)',
    content: (
      <div className="space-y-6">
        <div>
          <h5 className="font-bold text-[#00D2FF] mb-2 uppercase tracking-[0.2em] text-[11px]">What is Biologically Normal</h5>
          <p className="text-white/80 leading-relaxed font-body">Slight capillary oozing and pink-tinged saliva are completely expected biological responses for the first 24 to 48 hours. Your saliva actively mixes with microscopic blood droplets, heavily exaggerating the visual volume of the bleeding. Do not panic.</p>
        </div>
        <div>
          <h5 className="font-bold text-[#00D2FF] mb-2 uppercase tracking-[0.2em] text-[11px]">The Pressure Protocol</h5>
          <p className="text-white/80 leading-relaxed font-body">Leave the initial pressure gauze exactly where Dr. Sara meticulously placed it. Maintain firm, continuous, unyielding bite pressure for a strict minimum of 45 minutes without talking or checking. If active, dark red bleeding continues freely after removal, smoothly replace the gauze directly over the localized surgical site and clamp down firmly for another 45-minute cycle.</p>
        </div>
        <div>
          <h5 className="font-bold text-[#00D2FF] mb-2 uppercase tracking-[0.2em] text-[11px]">The Tannic Acid Alternative</h5>
          <p className="text-white/80 leading-relaxed font-body">If bleeding stubbornly persists beyond 3 hours of gauze application, wet a standard, caffeinated black tea bag (Lipton works perfectly), wrap it lightly in a single layer of gauze, and bite down on it firmly for 30 minutes. The naturally occurring tannic acid acts as a hyper-powerful vasoconstrictor, rapidly shrinking the blood vessels and violently activating the clotting cascade.</p>
        </div>
        <div className="mt-4 border border-[#FF5252]/30 bg-[#FF5252]/5 p-5 rounded">
          <h5 className="font-bold text-[#FF5252] mb-2 uppercase tracking-[0.2em] text-[10px]">🚨 When to Contact the Director</h5>
          <p className="text-white/80 text-sm leading-relaxed font-body">If heavy, bright red, rapidly coagulating blood actively fills your mouth and does not slow down after three full 45-minute cycles of extreme localized pressure, contact our surgical concierge immediately.</p>
        </div>
      </div>
    )
  },
  {
    title: '2. Inflammation & Pain Architecture',
    content: (
      <div className="space-y-6">
        <div>
          <h5 className="font-bold text-[#00D2FF] mb-2 uppercase tracking-[0.2em] text-[11px]">The Swelling Curve</h5>
          <p className="text-white/80 leading-relaxed font-body">Understand that post-surgical swelling is not a complication; it is a highly evolved biological response funneling critical white blood cells to the trauma site. Peak facial swelling traditionally occurs heavily on the <strong>2nd or 3rd day</strong> following surgery, before rapidly dissipating over the subsequent week.</p>
        </div>
        <div>
          <h5 className="font-bold text-[#00D2FF] mb-2 uppercase tracking-[0.2em] text-[11px]">Ice Therapy Kinetics</h5>
          <p className="text-white/80 leading-relaxed font-body">For the definitive first 24 hours exclusively, apply a heavy ice pack tightly against the outside of your face bordering the surgical quadrant (20 minutes firmly ON, 20 minutes resting OFF). <strong>Do not utilize ice after the initial 24-hour window closes.</strong> Transition strictly to warm, moist heat (like a wet, microwaved towel) on day 3 to stimulate localized blood flow and aggressively flush out the lingering inflammation.</p>
        </div>
        <div>
          <h5 className="font-bold text-[#00D2FF] mb-2 uppercase tracking-[0.2em] text-[11px]">Strategic Pain Management</h5>
          <p className="text-white/80 leading-relaxed font-body">Begin taking your prescribed anti-inflammatory or pain medication immediately upon arriving home, well before the clinical-strength local anesthesia begins to naturally fade. It is neurologically vastly easier to preemptively mask a pain receptor than to chase it once the nervous system flares. Always intelligently take narcotic pain medication with a small nutritional base (like yogurt) to prevent violent nausea interactions.</p>
        </div>
      </div>
    )
  },
  {
    title: '3. Maxillary Sinus Lift Precautions',
    content: (
      <div className="space-y-6">
        <div className="bg-[#1A1A1A] border-l-2 border-[#FF5252] p-6">
          <h5 className="font-bold text-[#FF5252] mb-2 uppercase tracking-[0.2em] text-[11px]">Nasal Pressure Prohibition</h5>
          <p className="text-white/80 leading-relaxed font-body">If your procedure involved the upper jaw (including a Sinus Lift or upper posterior implants), you must absolutely avoid generating sinus pressure for 14 days. <strong>Do NOT blow your nose.</strong> If you must sneeze, you must do so forcefully with your mouth wide open to vent the pressure. Failure to adhere to this will tear the delicate Schneiderian membrane and force the bone graft directly into your sinus cavity.</p>
        </div>
        <div>
          <h5 className="font-bold text-[#00D2FF] mb-2 uppercase tracking-[0.2em] text-[11px]">CPAP Limitations</h5>
          <p className="text-white/80 leading-relaxed font-body">If you utilize a CPAP machine for sleep apnea, please consult with your sleep physician about abstaining from usage for the first few critical days following a sinus lift, as the continuous positive airway pressure can compromise the newly formed sinus window architecture.</p>
        </div>
        <div>
          <h5 className="font-bold text-[#00D2FF] mb-2 uppercase tracking-[0.2em] text-[11px]">Cardiovascular Exertion Limits</h5>
          <p className="text-white/80 leading-relaxed font-body">Absolutely no heavy lifting, strenuous cardio, or bending over at the waist for 48-72 hours. Elevating your systemic blood pressure or dramatically shifting blood flow to your head will immediately dislodge the blood clots and reignite heavy bleeding.</p>
        </div>
      </div>
    )
  },
  {
    title: '4. Absolute Surgical Site Protection',
    content: (
      <div className="space-y-6">
        <div className="bg-[#1A1A1A] border-l-2 border-[#00D2FF] p-6">
          <h5 className="font-bold text-white mb-2 uppercase tracking-[0.2em] text-[11px]">The Golden 72-Hour Rule</h5>
          <p className="text-white/80 leading-relaxed font-body"><strong>Absolutely NO spitting, smoking, vaping, or utilizing straws for a strict minimum of 3 full days.</strong> Any suction or negative atmospheric pressure dynamically generated in the oral cavity will violently pull the fragile healing blood clot directly out of the socket, immediately exposing the raw jawbone to the air. This triggers a highly excruciating neurological condition clinically known as "dry socket," which requires emergency clinical intervention and resetting.</p>
        </div>
        <div>
          <h5 className="font-bold text-[#00D2FF] mb-2 uppercase tracking-[0.2em] text-[11px]">Suture Mechanics & Integrity</h5>
          <p className="text-white/80 leading-relaxed font-body">Your surgical microscopic sutures may be specifically engineered to dissolve autonomously, or they may require structural manual extraction by Dr. Sara at your post-op reveal. Do not physically lift your lip, aggressively pull your cheek back, or use your tongue to investigate the architectural site, as this unwarranted tissue tension will instantly rip the delicate stitches and collapse the graft's flap margin.</p>
        </div>
        <div>
          <h5 className="font-bold text-[#00D2FF] mb-2 uppercase tracking-[0.2em] text-[11px]">Peridex (Chlorhexidine) Disclaimers</h5>
          <p className="text-white/80 leading-relaxed font-body">If prescribed Chlorhexidine organic rinse, utilize it strictly twice a day (morning and night) by gently tipping your head. <strong>Do not use this rinse for longer than two weeks</strong>, as extended use will temporarily cause superficial brown staining on your natural teeth, which must be polished off by a hygienist.</p>
        </div>
      </div>
    )
  },
  {
    title: '5. Precision Implant & LANAP Directives',
    content: (
      <div className="space-y-6">
        <div>
          <h5 className="font-bold text-[#00D2FF] mb-2 uppercase tracking-[0.2em] text-[11px]">LANAP® Regeneration Post-Op</h5>
          <p className="text-white/80 leading-relaxed font-body">If you underwent advanced Laser Periodontal Therapy, absolutely do not brush or floss the treated areas for 7-10 days, or as meticulously directed. The high-powered laser has successfully formed a fragile, fibrinous blood clot that acts as an unparalleled biological bandage to aggressively regenerate new ligaments attached to your teeth. Mechanically dislodging this seal halts the regeneration entirely. Rely exclusively on the chlorhexidine organic rinse prescribed.</p>
        </div>
        <div>
          <h5 className="font-bold text-[#00D2FF] mb-2 uppercase tracking-[0.2em] text-[11px]">Bone Graft Sediment Shedding</h5>
          <p className="text-white/80 leading-relaxed font-body">If your complex surgery incorporated advanced particulate bone grafting, it is completely typical to physically feel small, sand-like calcium granules freely rolling around your oral cavity for the absolute first few days. This is simply the microscopic excess surface material biologically shedding from the over-packed socket. Do not fret; your actual foundational graft is locked securely completely beneath the integrated gumline.</p>
        </div>
        <div>
          <h5 className="font-bold text-[#00D2FF] mb-2 uppercase tracking-[0.2em] text-[11px]">Prosthetic Isolation Protocol</h5>
          <p className="text-white/80 leading-relaxed font-body">If you utilize a flipper, Essix retainer, acrylic partial, or full denture, leave the prosthetic device physically out of your mouth as much as humanly possible for the entire first week to completely prevent mechanical downward pressure on the ultra-fragile healing implant site, unless Dr. Sara explicitly instructed you otherwise to deliberately shape the tissue.</p>
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

export default function PostOpInstructions() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-48 pb-48  min-h-screen">
      <div className="max-w-4xl mx-auto px-8 md:px-12">
        <Link to="/patient-center" className="inline-flex items-center gap-3 text-white/50 hover:text-[#00D2FF] transition-colors mb-16 group font-bold tracking-widest uppercase text-[10px]">
          <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform duration-300" /> Back to Patient Center
        </Link>
        <div className="mb-24">
          <span className="text-accent-light uppercase tracking-[0.6em] text-[10px] font-bold mb-6 block">Biological Integration</span>
          <h1 className="text-5xl md:text-7xl font-headline italic tracking-tighter text-white mb-8">Healing <br/><span className="text-[#00D2FF] not-italic font-medium text-4xl md:text-6xl pt-2 block">Protocols</span></h1>
          <p className="text-on-surface-variant font-body text-lg opacity-80 leading-relaxed max-w-2xl">Navigating your neurological and biological recovery with absolute, uncompromising precision. Please adhere strictly to the following parameters.</p>
        </div>
        <div className="space-y-2">
          {POST_OP_DATA.map((item, idx) => (
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
