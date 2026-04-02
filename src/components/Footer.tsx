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

      <div className="max-w-7xl mx-auto px-8 md:px-12 py-24">
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
              5733 S Padre Island Dr<br/>
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
