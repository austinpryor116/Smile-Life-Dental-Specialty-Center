import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();
  const isProviderCenter = location.pathname === '/provider-center';

  return (
    <footer className="bg-black border-t border-white/5">
      {/* CTA Section */}
      {!isProviderCenter && (
        <div className="max-w-7xl mx-auto px-8 md:px-12 py-32 text-center border-b border-white/5">
          <h2 className="text-4xl md:text-6xl font-headline italic mb-12 tracking-tighter">
            Begin Your Journey to <br />
            <span className="text-primary not-italic font-medium">Aesthetic Perfection</span>
          </h2>
          <Link 
            to="/book"
            className="inline-block bg-linear-to-r from-primary to-accent-light text-white px-14 py-6 text-[10px] font-body font-bold tracking-[0.3em] uppercase transition-all hover:scale-105 duration-500 shadow-[0_0_30px_rgba(0,210,255,0.2)]"
          >
            Book Consultation
          </Link>
        </div>
      )}
      {/* Navigation Array (Dark Mode Map) */}
      <div className="border-t border-[#1A1A1A] relative" style={{ boxShadow: '0 0 30px rgba(0, 210, 255, 0.05)' }}>
        <div className="max-w-7xl mx-auto px-8 md:px-12 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left Column (Coordinates) */}
            <div>
              <h3 className="text-[10px] font-bold tracking-[0.2em] text-[#00D2FF] uppercase mb-8">
                CLINICAL COORDINATES
              </h3>
              <address className="font-body text-white/80 not-italic leading-loose text-sm mb-8">
                Smile Life Specialty Dental Center<br/>
                5733 South Padre Island Drive, Suite A<br/>
                Corpus Christi, TX 78412
              </address>
              <div className="flex flex-col gap-4">
                <a href="tel:3618576200" className="font-body text-sm text-white hover:text-[#00D2FF] transition-colors focus-visible:outline-offset-4 inline-block w-fit">
                  (361) 857-6200
                </a>
                <a 
                  href="https://share.google/8bpvldrF8rJtKBFV5" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-body text-sm font-semibold text-white/50 hover:text-[#00D2FF] transition-colors focus-visible:outline-offset-4 flex w-fit items-center gap-2"
                >
                  Get Directions <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>

            {/* Right Column (Map Embed) */}
            <div className="w-full relative rounded-lg overflow-hidden border border-white/5 bg-[#1A1A1A]">
              <iframe
                title="Smile Life Specialty Dental Center Location"
                src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=5733%20South%20Padre%20Island%20Drive,%20Suite%20A,%20Corpus%20Christi,%20TX%2078412+(Smile%20Life%20Specialty%20Dental%20Center)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                width="100%"
                height="400"
                style={{ 
                  border: 0, 
                  filter: 'invert(90%) hue-rotate(180deg) brightness(85%) contrast(85%)' 
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 md:px-12 py-24 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <Link to="/">
                <img 
                  src="/assets/images/smile-life-logo.svg" 
                  alt="Smile Life Dental Specialty Center Logo" 
                  className="h-16 w-auto"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector('.logo-fallback')) {
                      const span = document.createElement('span');
                      span.className = 'logo-fallback font-headline italic text-2xl text-primary tracking-tighter';
                      span.innerText = 'SMILE LIFE';
                      parent.appendChild(span);
                    }
                  }}
                />
              </Link>
            </div>
            <p className="font-body text-sm text-on-surface-variant opacity-60 leading-loose max-w-xs">
              5733 S Padre Island Dr, Suite A<br/>
              Corpus Christi, TX 78412
            </p>
          </div>

          <div>
            <h4 className="font-body text-[10px] font-bold tracking-[0.4em] text-accent-light mb-10 uppercase">Legal</h4>
            <ul className="space-y-5">
              <li>
                <Link 
                  className="font-body text-sm text-on-surface-variant hover:text-accent-light transition-all duration-300" 
                  to="/legal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Legal
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-body text-[10px] font-bold tracking-[0.4em] text-accent-light mb-10 uppercase">Privacy</h4>
            <ul className="space-y-5">
              <li>
                <Link 
                  className="font-body text-sm text-on-surface-variant hover:text-accent-light transition-all duration-300" 
                  to="/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link 
                  className="font-body text-sm text-on-surface-variant hover:text-accent-light transition-all duration-300" 
                  to="/accessibility"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="font-body text-[10px] text-on-surface-variant tracking-[0.1em] opacity-40 uppercase">
            © {new Date().getFullYear()} Smile Life Dental Specialty Center. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <span className="text-[10px] text-on-surface-variant tracking-[0.1em] opacity-40 uppercase">Specialty Dental Center Corpus Christi</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
