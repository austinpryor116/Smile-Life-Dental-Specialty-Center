import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const departments = [
  {
    title: 'General Dentistry',
    href: '/general-dentistry',
    description: 'The foundation of every beautiful smile is meticulous general care. Our general dentistry department provides high-end preventive and restorative services with clinical precision.',
    image: '/assets/images/general-dentist-chair.jpeg',
    gridClass: 'col-span-12 md:col-span-12'
  },
  {
    title: 'Periodontics',
    href: '/periodontics',
    description: 'Specializing in the foundation of your smile. Our periodontists utilize laser therapy and advanced grafting techniques to treat complex gum disease.',
    image: '/assets/images/dental-implant.jpeg',
    gridClass: 'col-span-12 md:col-span-6'
  },
  {
    title: 'Orthodontics',
    href: '/orthodontics',
    description: 'Beyond simple alignment, our orthodontic department focuses on craniofacial aesthetics and functional harmony.',
    image: '/assets/images/invisalign.jpeg',
    gridClass: 'col-span-12 md:col-span-6'
  }
];

export default function Departments() {
  return (
    <div className="pt-48 pb-48 bg-black">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <div className="mb-32 max-w-3xl">
          <span className="text-accent-light uppercase tracking-[0.6em] text-[10px] font-bold mb-8 block">Clinical Excellence</span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-headline italic mb-12 tracking-tighter leading-[0.85]">Specialty <br/>Departments</h1>
          <p className="text-on-surface-variant text-lg md:text-xl font-body leading-relaxed opacity-80">
            Our multi-disciplinary approach ensures that every aspect of your oral health is managed by a dedicated specialist, providing a seamless bridge between primary care and advanced therapy.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-12 lg:gap-16">
          {departments.map((dept, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col bg-surface-container-high overflow-hidden w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(50%-2rem)]"
            >
              <Link to={dept.href} className="flex flex-col h-full w-full group/link">
                <div className="h-[500px] overflow-hidden relative">
                  <img
                    src={dept.image}
                    alt={dept.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                    referrerPolicy="no-referrer"
                    loading="lazy"

                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                
                <div className="p-10 lg:p-14 flex flex-col flex-grow">
                  <h2 className="text-4xl lg:text-5xl font-headline italic mb-8 group-hover:text-accent-light transition-colors duration-300 tracking-tighter">{dept.title}</h2>
                  <p className="text-on-surface-variant text-sm font-body leading-relaxed mb-12 flex-grow opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                    {dept.description}
                  </p>
                  <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent-light flex items-center gap-4">
                    EXPLORE SPECIALTY <ArrowRight size={14} className="group-hover/link:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
