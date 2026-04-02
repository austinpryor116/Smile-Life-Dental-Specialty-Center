import { motion } from 'motion/react';

export default function Privacy() {
  return (
    <div className="pt-48 pb-48 bg-black min-h-screen">
      <div className="max-w-4xl mx-auto px-8 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary uppercase tracking-[0.6em] text-[10px] font-bold mb-8 block">Confidentiality</span>
          <h1 className="text-6xl md:text-8xl font-headline italic mb-16 tracking-tighter">Privacy <br /><span className="text-primary">Policy</span></h1>
          
          <div className="space-y-12 text-on-surface-variant font-body leading-relaxed opacity-80">
            <section>
              <h2 className="text-white text-xl font-headline italic mb-6 tracking-tight">HIPAA Compliance</h2>
              <p>
                Your privacy is our utmost priority. We adhere strictly to the Health Insurance Portability and Accountability Act (HIPAA) to ensure the security and confidentiality of your personal and clinical information.
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-headline italic mb-6 tracking-tight">Data Collection</h2>
              <p>
                We collect only the information necessary to provide you with the highest standard of specialty dental care. This includes personal identification, clinical history, and diagnostic imaging.
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-headline italic mb-6 tracking-tight">Information Sharing</h2>
              <p>
                Your clinical information is shared only with your referring primary care dentist and other healthcare providers directly involved in your treatment, unless otherwise authorized by you.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
