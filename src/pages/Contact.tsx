import React from 'react';
import Layout from '../components/Layout';
import { Phone, MessageSquare, MapPin, Clock, Mail, Send } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  const towns = [
    'Zeerust', 'Mafikeng', 'Gaborone', 'Lichtenburg', 
    'Coligny', 'Vryburg', 'Swartruggens', 'Rustenburg',
    'Ramatlabama (Border)', 'Skilpadhek (Border)', 'Kopfontein (Border)
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-brand-on-surface text-white overflow-hidden pt-32 md:pt-32">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=2000"
            alt="Engine background"
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-on-surface via-brand-on-surface/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-brand-primary text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
              24/7 Roadside Help
            </span>
            <h1 className="text-display-lg mb-4 uppercase">
              NEED HELP NOW?
            </h1>
            <h2 className="text-display-lg text-brand-primary mb-12 uppercase leading-none">
              CALL 067 947 0553
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mb-12">
              We are available 24/7 for trucks, bakkies, and cars across the North West. We fix your vehicle right where you are.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:0679470553" className="btn-actuator-primary px-6 md:px-10 py-4 md:py-5 text-base md:text-lg w-full sm:w-auto">
                <Phone size={24} />
                <span>CALL NOW</span>
              </a>
              <a href="https://wa.me/27679470553" className="btn-actuator-secondary bg-[#25D366] text-white hover:bg-[#128C7E] px-6 md:px-10 py-4 md:py-5 text-base md:text-lg w-full sm:w-auto">
                <MessageSquare size={24} />
                <span>WHATSAPP</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Towns */}
      <section className="py-24 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-brand-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Where We Go</p>
            <h2 className="text-headline-lg uppercase">TOWNS WE HELP IN</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {towns.map((town) => (
              <div key={town} className="bg-white p-6 md:p-8 rounded-md shadow-sm border border-gray-100 flex items-center gap-4 group hover:shadow-md transition-all">
                <div className="w-10 h-10 bg-brand-surface rounded-md flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                  <MapPin size={20} />
                </div>
                <span className="font-display font-bold text-lg uppercase tracking-tight">{town}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form - Commented out per client request (Primary communication is WhatsApp/Calls) */}
            {/* 
            <div>
              <h3 className="text-3xl font-display font-bold mb-8 uppercase">Send Us A Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="label-md text-gray-400">Full Name</label>
                    <input type="text" className="w-full bg-brand-surface border-b border-gray-200 p-4 focus:border-brand-primary outline-none transition-colors" placeholder="Your Name" />
                  </div>
                  <div className="space-y-2">
                    <label className="label-md text-gray-400">Phone Number</label>
                    <input type="tel" className="w-full bg-brand-surface border-b border-gray-200 p-4 focus:border-brand-primary outline-none transition-colors" placeholder="012 345 6789" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="label-md text-gray-400">What do you need help with?</label>
                  <select className="w-full bg-brand-surface border-b border-gray-200 p-4 focus:border-brand-primary outline-none transition-colors">
                    <option>Roadside Help</option>
                    <option>Big Truck Repair</option>
                    <option>Electrical Problem</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="label-md text-gray-400">Message</label>
                  <textarea rows={4} className="w-full bg-brand-surface border-b border-gray-200 p-4 focus:border-brand-primary outline-none transition-colors" placeholder="Tell us how we can help you"></textarea>
                </div>
                <button className="btn-actuator-primary w-full py-5 text-lg">
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
            */}

            {/* Info */}
            <div className="space-y-8 md:y-12">
              <div>
                <h3 className="text-2xl md:text-3xl font-display font-bold mb-6 md:mb-8 uppercase">Emergency Help</h3>
                <div className="space-y-6 md:space-y-8">
                  <div className="flex gap-4 md:gap-6">
                    <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 bg-brand-surface flex items-center justify-center rounded-md text-brand-primary">
                      <Phone size={20} md:size={24} />
                    </div>
                    <div>
                      <p className="label-md text-gray-400 mb-1">24/7 Help Line</p>
                      <a href="tel:0679470553" className="text-xl md:text-2xl font-display font-bold hover:text-brand-primary transition-colors">067 947 0553</a>
                    </div>
                  </div>

                  {/* Email 
                  <div className="flex gap-4 md:gap-6">
                    <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 bg-brand-surface flex items-center justify-center rounded-md text-brand-primary">
                      <Mail size={20} md:size={24} />
                    </div>
                    <div>
                      <p className="label-md text-gray-400 mb-1">Email Us</p>
                      <a href="mailto:info@autocorrection.co.za" className="text-xl md:text-2xl font-display font-bold hover:text-brand-primary transition-colors break-all">info@autocorrection.co.za</a>
                    </div>
                  </div>
                */}
                </div>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-display font-bold mb-6 md:mb-8 uppercase">Where We Help</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {['Zeerust (Hub)', 'Mafikeng (Hub)', 'Gaborone (Regional Hub)', 'Lichtenburg', 'Coligny', 'Vryburg', 'Rustenburg', 'Swartruggens', 'Ramatlabama (Border)', 'Skilpadhek (Border)', 'Kopfontein (Border)].map((area) => (
                    <div key={area} className="flex items-center gap-2 text-gray-500">
                      <div className="w-1.5 h-1.5 bg-brand-primary rounded-full" />
                      <span className="text-sm font-medium">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
