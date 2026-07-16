import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';
import DepartmentsAccordion from '../components/DepartmentsAccordion';

export default function Departments() {

  return (
    <div className="pt-40 pb-48 min-h-screen">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="mb-16 md:mb-24 max-w-3xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-accent-light uppercase tracking-[0.6em] text-[10px] font-bold mb-6 block"
          >
            Clinical Excellence
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-9xl font-headline italic mb-8 tracking-tighter leading-[0.85]"
          >
            Specialty <br/><span className="text-[#00D2FF] not-italic font-medium">Departments</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-on-surface-variant text-lg md:text-xl font-body leading-relaxed opacity-80 border-l-2 border-[#00D2FF] pl-6"
          >
            Our multi-disciplinary approach ensures that every aspect of your oral health is managed by a dedicated specialist, providing a seamless bridge between primary care and advanced therapy.
          </motion.p>
        </div>

        {/* Dynamic Flex Accordion */}
        <DepartmentsAccordion />
      </div>
    </div>
  );
}
