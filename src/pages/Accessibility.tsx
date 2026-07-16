import { motion } from 'motion/react';

export default function Accessibility() {
  return (
    <div className="pt-48 pb-48  min-h-screen">
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
              <h2 className="text-white text-xl font-headline italic mb-6 tracking-tight">Our Commitment to Accessibility</h2>
              <p>
                Smile Life Dental Specialty Center is firmly committed to ensuring that digital accessibility is a reality for people with disabilities. We are continually improving the user experience for everyone and actively applying the relevant accessibility standards to ensure our website remains accessible to the widest possible audience, regardless of technology or physical ability.
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-headline italic mb-6 tracking-tight">Standard of Compliance</h2>
              <p>
                We strive to adhere to the Web Content Accessibility Guidelines (WCAG) 2.1 at the AA level. These globally recognized guidelines, set forth by the World Wide Web Consortium (W3C), explain how to make web content more accessible for people with disabilities. Conformance with these standards helps make the web more user-friendly for all our patients and referring providers.
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-headline italic mb-6 tracking-tight">Continuous Improvement & Third-Party Applications</h2>
              <p>
                While we strive to ensure absolute compliance, the dynamic nature of websites means that continuous monitoring is required. We utilize a third-party accessibility widget to provide an immediate user-interface fallback, but we also manually audit our web framework. Some third-party integrations (such as external booking pathways or map providers) may not be fully under our control.
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-headline italic mb-6 tracking-tight">Reporting Accessibility Issues</h2>
              <p className="mb-4">
                If you experience any difficulty in navigating, reading, or submitting forms on the Smile Life Dental Specialty Center website, please do not hesitate to contact our administrative team so we can provide you with the information, item, or transaction you seek through an alternative communication method.
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-4 text-white/70">
                <li><strong>Email:</strong> <a href="mailto:accessibility@smilelife.com" className="hover:text-primary transition-colors focus-visible:outline-offset-4">accessibility@smilelife.com</a></li>
                <li><strong>Phone:</strong> (361) 857-6200</li>
                <li><strong>Address:</strong> 5733 S Padre Island Dr, Corpus Christi, TX 78412</li>
              </ul>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
