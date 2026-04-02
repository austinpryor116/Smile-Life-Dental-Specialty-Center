import { motion } from 'motion/react';

export default function Accessibility() {
  return (
    <div className="pt-48 pb-48 bg-black min-h-screen">
      <div className="max-w-4xl mx-auto px-8 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary uppercase tracking-[0.6em] text-[10px] font-bold mb-8 block">Inclusion</span>
          <h1 className="text-6xl md:text-8xl font-headline italic mb-16 tracking-tighter">Accessibility <br /><span className="text-primary">Statement</span></h1>
          
          <div className="space-y-12 text-on-surface-variant font-body leading-relaxed opacity-80">
            <section>
              <h2 className="text-white text-xl font-headline italic mb-6 tracking-tight">Our Commitment</h2>
              <p>
                Smile Life Dental Specialty Center is committed to providing a website that is accessible to the widest possible audience, regardless of technology or ability.
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-headline italic mb-6 tracking-tight">Web Standards</h2>
              <p>
                We are actively working to increase the accessibility and usability of our website and in doing so adhere to many of the available standards and guidelines.
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-headline italic mb-6 tracking-tight">Contact Us</h2>
              <p>
                If you experience any difficulty in accessing the Smile Life Dental Specialty Center website, please do not hesitate to contact us at our Corpus Christi office.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
