import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Phone, Mail, Clock, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-brand-on-surface pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src="logo.png" 
                alt="Auto Correction Mechanics Logo" 
                className="h-12 w-auto"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl leading-none tracking-tight">
                  AUTO <span className="text-brand-primary">CORRECTION</span>
                </span>
                <div className="flex flex-col">
                  <span className="font-display font-medium text-xs tracking-[0.2em] uppercase opacity-80">
                    MECHANICS
                  </span>
                  <span className="font-display font-bold text-[10px] text-brand-primary italic mt-1">
                    "Up and Press"
                  </span>
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              We fix big trucks and cars right where they are. Over 10 years of experience in auto electrical and mechanical repairs.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/share/1cq42ebrV2/" className="p-2 bg-gray-100 rounded-md hover:bg-brand-primary hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://www.tiktok.com/@acaz.joao?_r=1&_t=ZS-95HzfqCc5DB" className="p-2 bg-gray-100 rounded-md hover:bg-brand-primary hover:text-white transition-colors">
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-brand-primary transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Where We Help</h4>
            <ul className="space-y-4">
              {['Zeerust (Main Hub)', 'Mafikeng (Hub)', 'Gaborone (Regional Hub)', 'Lichtenburg', 'Rustenburg', 'Vryburg'].map((area) => (
                <li key={area} className="flex items-center gap-2 text-gray-600 text-sm">
                  <div className="w-1.5 h-1.5 bg-brand-primary rounded-full" />
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Talk To Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="text-brand-primary shrink-0" size={18} />
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Emergency Help</p>
                  <a href="tel:0679470553" className="text-sm hover:text-brand-primary transition-colors font-medium">067 947 0553</a>
                </div>
              </li>
              {/* Email section
              <li className="flex items-start gap-3">
                <Mail className="text-brand-primary shrink-0" size={18} />
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Email Us</p>
                  <a href="mailto:info@autocorrection.co.za" className="text-sm hover:text-brand-primary transition-colors font-medium">info@autocorrection.co.za</a>
                </div>
              </li>
              */}
              <li className="flex items-start gap-3">
                <Clock className="text-brand-primary shrink-0" size={18} />
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Operating Hours</p>
                  <p className="text-sm text-gray-600">24/7 Roadside Assistance</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs text-center md:text-left">
            © {currentYear} AUTO CORRECTION MECHANICS. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs text-center md:text-right">
            DEVELOPED BY <a href="https://www.plugconnectsolutions.co.za" target="_blank" rel="noopener noreferrer" className="text-gray-900 font-bold hover:text-brand-primary transition-colors">PLUG CONNECT SOLUTIONS</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
