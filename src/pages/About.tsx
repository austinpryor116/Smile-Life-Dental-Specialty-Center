/**
 * About the Specialty Center Route
 * 
 * Provides an overview of the Smile Life philosophy, clinical standards, and the
 * leading practitioners. Features highly-styled, glassmorphism UI elements and
 * scroll-linked animations.
 * 
 * Interactive Components:
 * - The Doctor Profile cards (`TEAM`) serve as interactive navigational links 
 *   routing users directly to their respective specialty departments.
 * 
 * @module About
 */
import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Award, Shield, Heart, Clock, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const TEAM = [
  {
    name: 'Dr. Sara',
    role: 'Clinical Director & Specialty Lead',
    bio: 'Dr. Sara is a pioneering force in advanced dental reconstruction and periodontal therapy. She built Smile Life on the philosophy that a world-class smile requires uncompromising biological precision.',
    image: 'assets/images/dr-sara-profile.jpeg',
    objectPosition: 'center 10%',
    link: '/periodontics'
  },
  {
    name: 'Dr. Vasquez',
    role: 'Lead Prosthodontist',
    bio: 'With over a decade of specialized training in complex restorations and full-mouth rehabilitations, Dr. Vasquez merges advanced material science with unmatched clinical artistry.',
    image: 'assets/images/dr-vasquez.jpg',
    objectPosition: 'center 20%',
    link: '/general-dentistry'
  }
];

const SPECIALTIES = [
  { title: 'Immediate Dentures', description: 'Transformative prosthetic solutions delivered with absolute precision on the same day as surgery.' },
  { title: 'Veneers & Aesthetics', description: 'Ultra-thin, custom-milled porcelain veneers engineered to perfect your unique facial architecture.' },
  { title: 'MDI Implants', description: 'Minimally invasive, rapid-recovery implant architecture for permanent structural stabilization.' },
  { title: 'Advanced Periodontics', description: 'Laser-assisted regeneration protocols that organically rebuild the foundation of your smile.' }
];

export default function About() {
  return (
    <div className="pt-24 lg:pt-32 pb-24 lg:pb-48 min-h-screen">
      
      {/* Hero Section */}
      <section className="px-8 md:px-12 max-w-7xl mx-auto pt-10 lg:pt-20 mb-16 lg:mb-32">
        <div className="max-w-4xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-accent-light uppercase tracking-[0.6em] text-[11px] md:text-[10px] font-bold mb-6 block"
          >
            The Smile Life Standard
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-headline italic tracking-tighter mb-8"
          >
            Your Smile Makeover <br/><span className="text-[#00D2FF] not-italic font-medium">Starts Here</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-on-surface-variant font-body text-xl opacity-80 leading-relaxed max-w-2xl border-l-2 border-[#00D2FF] pl-6"
          >
            We are not just another dental clinic; we are a destination where innovation meets compassion, and where your smile is our definitive signature.
          </motion.p>
        </div>
      </section>

      {/* How Our Dentistry Is Different */}
      <section className="border-y border-white/5 bg-black/20 backdrop-blur-sm py-16 lg:py-32 mb-16 lg:mb-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00D2FF]/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-8 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-headline italic tracking-tighter mb-6 text-white">How Our Dentistry <br/><span className="text-accent-light not-italic font-medium">Is Different</span></h2>
            <p className="text-white/70 leading-relaxed font-body mb-8 text-lg">
              Smile Life Dental Specialty Center prides itself on standing out in the vast dental landscape. Our unique approach aggressively intertwines cutting-edge implant techniques with highly personalized restorative solutions, ensuring that every patient receives the absolute zenith of clinical care.
            </p>
            <ul className="space-y-6">
              {[
                { icon: Shield, text: 'Uncompromising surgical sterility and safety protocols.' },
                { icon: Award, text: 'State-of-the-art digital lab and 3D Cone Beam integration.' },
                { icon: Heart, text: 'Fiercely protective, patient-first biological philosophy.' }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#00D2FF]/10 flex items-center justify-center shrink-0 border border-[#00D2FF]/20">
                    <item.icon size={18} className="text-[#00D2FF]" />
                  </div>
                  <span className="text-white/80 font-body leading-relaxed pt-2">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[600px] rounded-[2rem] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent overflow-hidden group p-4 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <div className="absolute inset-0 bg-[#00D2FF]/10 z-10 group-hover:bg-transparent transition-colors duration-700 rounded-[2rem]"></div>
            <img src="assets/images/general-dentist-office.jpeg" alt="State of the art dental office" className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 rounded-[2rem]" />
          </div>
        </div>
      </section>

      {/* Clinical Directors */}
      <section className="max-w-7xl mx-auto px-8 md:px-12 mb-16 lg:mb-32">
        <div className="text-center mb-20">
          <span className="text-accent-light uppercase tracking-[0.6em] text-[11px] md:text-[10px] font-bold mb-4 block">The Architects</span>
          <h2 className="text-4xl md:text-6xl font-headline italic tracking-tighter text-white">Clinical <span className="text-[#0056B3] not-italic font-medium">Directors</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TEAM.map((member, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="h-full"
            >
              <Link to={member.link} className="group h-full relative bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 to-transparent rounded-[2rem] overflow-hidden hover:from-primary/20 hover:shadow-[0_0_60px_rgba(0,210,255,0.15)] transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)] block">
                <div className="aspect-square md:aspect-[4/3] relative overflow-hidden bg-black">
                  <img src={member.image} alt={member.name} style={{ objectPosition: member.objectPosition || 'center top' }} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 mix-blend-luminosity group-hover:mix-blend-normal" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent"></div>
                </div>
                <div className="p-10 relative z-10 -mt-20">
                  <h3 className="text-3xl font-headline italic tracking-tight text-white mb-2 group-hover:text-primary transition-colors">{member.name}</h3>
                  <span className="text-[#00D2FF] font-body text-xs uppercase tracking-[0.3em] font-bold block mb-6">{member.role}</span>
                  <p className="text-white/60 font-body leading-relaxed">{member.bio}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Things We Are Amazing At */}
      <section className="border-t border-white/5 pt-16 lg:pt-32 mb-16 lg:mb-32">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-headline italic tracking-tighter mb-6 text-white">Things We Are <br/><span className="text-accent-light not-italic font-medium">Amazing At</span></h2>
            <p className="text-white/70 max-w-2xl font-body text-lg">We excel in blending advanced dental implant procedures with tailor-made aesthetic designs, giving every patient a structural reason to smile confidently.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SPECIALTIES.map((spec, idx) => (
              <div key={idx} className="p-8 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 to-transparent rounded-[2rem] hover:from-primary/30 hover:shadow-[0_0_60px_rgba(0,210,255,0.15)] transition-all duration-500 group cursor-pointer">
                <h3 className="text-xl font-headline italic text-white mb-3 group-hover:text-[#00D2FF] transition-colors">{spec.title}</h3>
                <p className="text-white/50 font-body text-sm leading-relaxed">{spec.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logistics & Booking */}
      <section className="max-w-7xl mx-auto px-8 md:px-12 mb-16 lg:mb-32">
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-[#0A0A0A] to-[#111111] rounded-[3rem] p-12 lg:p-20 flex flex-col lg:flex-row gap-16 items-center justify-between shadow-[0_0_50px_rgba(0,210,255,0.05)]">
          <div className="max-w-xl">
            <h2 className="text-4xl font-headline italic tracking-tighter text-white mb-6">Ready for the smile you've always <span className="text-[#00D2FF] not-italic font-medium">dreamed of?</span></h2>
            <p className="text-white/60 font-body mb-8">Scheduling your first consultation or next clinical appointment couldn't be easier. Secure your spot directly in our system.</p>
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-4 text-white/80 font-body text-sm">
                <Phone size={16} className="text-[#00D2FF]" />
                <span>(361) 853-1900</span>
              </div>
              <div className="flex items-center gap-4 text-white/80 font-body text-sm">
                <Clock size={16} className="text-[#00D2FF]" />
                <span>Monday - Friday | 8:30 AM – 5:00 PM</span>
              </div>
              <div className="flex items-center gap-4 text-white/80 font-body text-sm">
                <MapPin size={16} className="text-[#00D2FF]" />
                <span>5733 S. Padre Island Dr. Corpus Christi, TX</span>
              </div>
            </div>
          </div>
          <div className="shrink-0">
            <Link 
              to="/book"
              className="inline-flex items-center gap-4 bg-[#00D2FF] text-black px-8 py-4 md:px-12 md:py-5 text-xs md:text-sm font-body font-bold tracking-[0.2em] uppercase hover:bg-white shadow-[0_0_40px_rgba(0,210,255,0.3)] hover:shadow-[0_0_80px_rgba(0,210,255,0.6)] transition-all duration-500 group rounded-full"
            >
              Schedule Appointment <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
