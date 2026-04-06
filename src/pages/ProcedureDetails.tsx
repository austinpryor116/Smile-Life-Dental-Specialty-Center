import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, Shield, ArrowRight } from 'lucide-react';
import { periodontalProcedures } from '../data/periodontalProcedures';

export default function ProcedureDetails() {
  const { procedureSlug } = useParams<{ procedureSlug: string }>();
  const navigate = useNavigate();

  // Validate the slug against our data dictionary
  const procedureData = procedureSlug ? periodontalProcedures[procedureSlug] : null;

  useEffect(() => {
    // If the patient navigates to an invalid/deleted slug, gracefully return them to the Periodontics directory
    if (!procedureData && procedureSlug) {
      navigate('/periodontics');
    }
  }, [procedureData, procedureSlug, navigate]);

  // Fallback while redirecting
  if (!procedureData) return null;

  return (
    <div className="pt-48 pb-48 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <Link to="/periodontics" className="inline-flex items-center gap-3 text-white/50 hover:text-[#00D2FF] transition-colors mb-16 group font-bold tracking-widest uppercase text-[10px]">
          <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform duration-300" /> Back to Clinical Directory
        </Link>
        
        {/* Cinematic Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#00D2FF] uppercase tracking-[0.6em] text-[10px] font-bold mb-6 block">Surgical Profile #{procedureData.id}</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline italic tracking-tighter text-white mb-8 leading-[0.9]">
              {procedureData.title}
            </h1>
            <p className="text-white/80 font-body text-xl md:text-2xl leading-relaxed mb-12 italic border-l-2 border-[#333333] pl-6 py-2">
              {procedureData.subtitle}
            </p>
            <div className="flex gap-4">
              <Link to="/book" className="px-10 py-5 bg-white text-black font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-[#00D2FF] hover:text-white transition-all duration-500 shadow-[0_0_25px_rgba(255,255,255,0.1)]">
                Request Strategy
              </Link>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-[#1A1A1A] p-2 border border-[#333333]">
              <div className="w-full h-full overflow-hidden relative group">
                <img 
                  src={procedureData.heroImage} 
                  alt={procedureData.title}
                  className="w-full h-full object-cover object-[center_10%] grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-105 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent"></div>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-[#0A0A0A] border border-[#333333] p-8 max-w-[280px] hidden md:block">
              <Shield className="text-[#00D2FF] mb-4" size={24} />
              <p className="font-headline italic text-xl tracking-tight leading-snug">Architected by <br/>Dr. Sara Alhachache</p>
            </div>
          </motion.div>
        </div>

        {/* Dynamic Architectural Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32 relative">
          {/* Vertical Divider line */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-[#333333] -translate-x-1/2"></div>
          
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
            <div className="text-[#00D2FF] uppercase tracking-[0.3em] text-[10px] font-bold mb-4 flex items-center gap-3">
               <span className="w-8 h-px bg-[#00D2FF]"></span> Phase I Assessment
            </div>
            <h3 className="text-4xl font-headline italic mb-8">What Is This Procedure?</h3>
            <p className="text-white/70 font-body text-lg leading-relaxed">{procedureData.whatItIs}</p>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6 md:mt-24">
            <div className="text-[#00D2FF] uppercase tracking-[0.3em] text-[10px] font-bold mb-4 flex items-center gap-3">
               <span className="w-8 h-px bg-[#00D2FF]"></span> Phase II Execution
            </div>
            <h3 className="text-4xl font-headline italic mb-8">Why Do We Do It?</h3>
            <p className="text-white/70 font-body text-lg leading-relaxed">{procedureData.whyWeDoIt}</p>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
            <div className="text-[#00D2FF] uppercase tracking-[0.3em] text-[10px] font-bold mb-4 flex items-center gap-3">
               <span className="w-8 h-px bg-[#00D2FF]"></span> Patient Experience
            </div>
            <h3 className="text-4xl font-headline italic mb-8">What Should You Expect?</h3>
            <p className="text-white/70 font-body text-lg leading-relaxed">{procedureData.whatToExpect}</p>
            
            {procedureData.externalLink && (
              <div className="pt-8">
                <a 
                  href={procedureData.externalLink.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-transparent border border-[#00D2FF] text-[#00D2FF] font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-[#00D2FF] hover:text-black transition-all duration-300 inline-flex items-center gap-3 group"
                >
                  {procedureData.externalLink.text} <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-300" />
                </a>
              </div>
            )}
          </motion.div>

        </div>

      </div>
    </div>
  );
}
