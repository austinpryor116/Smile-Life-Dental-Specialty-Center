import { motion } from 'motion/react';

export default function Legal() {
  return (
    <div className="pt-48 pb-48  min-h-screen">
      <div className="max-w-4xl mx-auto px-8 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary uppercase tracking-[0.6em] text-[10px] font-bold mb-8 block">Compliance</span>
          <h1 className="text-6xl md:text-8xl font-headline italic mb-16 tracking-tighter">Legal <br /><span className="text-primary">Information</span></h1>
          
          <div className="space-y-12 text-on-surface-variant font-body leading-relaxed opacity-80">
            <section>
              <h2 className="text-white text-xl font-headline italic mb-6 tracking-tight">Terms of Service</h2>
              <p>
                Welcome to Smile Life Dental Specialty Center. By accessing our website and services, you agree to comply with and be bound by the following terms and conditions of use.
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-headline italic mb-6 tracking-tight">Professional Standards</h2>
              <p>
                All clinical procedures are performed by board-certified specialists in accordance with the highest standards of the American Dental Association and relevant specialty boards.
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-headline italic mb-6 tracking-tight">Liability</h2>
              <p>
                The information provided on this website is for educational purposes only and does not constitute medical advice. A formal consultation is required for any clinical diagnosis or treatment plan.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
