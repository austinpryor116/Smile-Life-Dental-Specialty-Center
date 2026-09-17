import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

export const DEPARTMENTS_DATA = [
  {
    title: 'General Dentistry',
    href: '/general-dentistry',
    description: 'The foundation of every beautiful smile is meticulous general care. Our general dentistry department provides high-end preventive and restorative services with clinical precision.',
    image: 'assets/images/general-dentist-chair.jpeg',
    shortTitle: 'General'
  },
  {
    title: 'Periodontics',
    href: '/periodontics',
    description: 'Specializing in the foundation of your smile. Our periodontists utilize laser therapy and advanced grafting techniques to treat complex gum disease.',
    image: 'assets/images/dental-implant.jpeg',
    shortTitle: 'Perio'
  },
  {
    title: 'Orthodontics',
    href: '/orthodontics',
    description: 'Beyond simple alignment, our orthodontic department focuses on craniofacial aesthetics and functional harmony.',
    image: 'assets/images/invisalign.jpeg',
    shortTitle: 'Ortho'
  }
];

/**
 * Dynamic Flex Accordion Component
 * 
 * An interactive, cinematic UI component that uses flex-basis transitions instead of 
 * standard height calculations to create 60fps hardware-accelerated expansion animations.
 * When a user hovers over a panel, it expands to dominate the viewport layout, revealing 
 * deep-linked content and removing grayscale filters from the background imagery.
 * 
 * @component
 */
export default function DepartmentsAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.2 }}
      className="flex flex-col lg:flex-row h-[70vh] lg:h-[700px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-black"
    >
      {DEPARTMENTS_DATA.map((dept, idx) => {
        const isActive = activeIndex === idx;
        
        return (
          <div
            key={idx}
            onMouseEnter={() => setActiveIndex(idx)}
            className="relative group cursor-pointer border-b lg:border-b-0 lg:border-r border-white/10 last:border-0 overflow-hidden"
            style={{
              flex: isActive ? 3 : 1,
              transition: 'flex 0.7s cubic-bezier(0.25, 1, 0.5, 1)'
            }}
          >
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src={dept.image}
                alt={dept.title}
                className={cn(
                  "w-full h-full object-cover transition-all duration-1000",
                  isActive ? "grayscale-0 scale-105 brightness-100" : "grayscale scale-100 brightness-50 opacity-50"
                )}
              />
              {/* Gradient Overlays */}
              <div className={cn(
                "absolute inset-0 transition-opacity duration-700",
                isActive 
                  ? "bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" 
                  : "bg-black/40 opacity-100"
              )}></div>
            </div>

            {/* Content Container */}
            <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end">
              
              {/* Inactive State Vertical Text (Desktop Only) */}
              <div className={cn(
                "hidden lg:flex absolute inset-0 items-center justify-center transition-opacity duration-500",
                isActive ? "opacity-0 pointer-events-none" : "opacity-100"
              )}>
                <h2 className="text-white font-headline italic text-4xl -rotate-90 tracking-tighter whitespace-nowrap">
                  {dept.shortTitle}
                </h2>
              </div>

              {/* Active State Content */}
              <div className={cn(
                "transition-all duration-700 w-full lg:w-[600px]",
                isActive ? "opacity-100 translate-y-0" : "opacity-100 lg:opacity-0 translate-y-0 lg:translate-y-10"
              )}>
                <h2 className={cn(
                  "font-headline italic text-white transition-all duration-500 tracking-tighter mb-4 drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]",
                  isActive ? "text-4xl md:text-5xl lg:text-6xl text-[#00D2FF]" : "text-3xl"
                )}>
                  {dept.title}
                </h2>
                
                <div className={cn(
                  "overflow-hidden transition-all duration-700 ease-in-out",
                  isActive ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0 lg:max-h-0"
                )}>
                  <p className="text-white/80 font-body text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                    {dept.description}
                  </p>
                  
                  <Link 
                    to={dept.href}
                    onClick={(e) => {
                      if (!isActive) {
                        e.preventDefault();
                        setActiveIndex(idx);
                      }
                    }}
                    className="inline-flex items-center gap-4 bg-white/10 hover:bg-[#00D2FF] text-white hover:text-black backdrop-blur-sm border border-white/20 hover:border-[#00D2FF] px-8 py-4 text-xs font-body font-bold tracking-[0.2em] uppercase transition-all duration-300 group/btn"
                  >
                    Explore Specialty <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        );
      })}
    </motion.div>
  );
}
