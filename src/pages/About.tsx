import React from 'react';
import Layout from '../components/Layout';
import { Shield, Target, Award, MapPin, Phone, Zap, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  // Update this if your GitHub Pages repository is not at the root
  const baseUrl = ""; 

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 bg-brand-on-surface text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=2000"
            alt="Expert roadside mechanic team for heavy duty truck repairs in North West Province"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-3 py-1 bg-brand-primary text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-6"
            >
              Trusted for 10+ Years
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[clamp(3.5rem,10vw,9rem)] font-display font-bold leading-[0.85] tracking-tighter uppercase mb-12"
            >
              ABOUT <span className="text-brand-primary italic">US</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-400 leading-tight max-w-2xl"
            >
              Based in Zeerust, we are the team you call when you're in a fix. We've been helping drivers and truck owners for over 10 years across the North West.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Expertise */}
      <section className="py-24 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 bg-white p-12 rounded-md shadow-sm"
            >
              <h2 className="text-headline-lg mb-6 uppercase">WHAT WE STAND FOR</h2>
              <p className="text-2xl font-display font-bold text-brand-primary mb-8 leading-tight">
                One simple goal — Get you back on the road as quickly and safely as possible.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We know that every minute your truck is standing still, you are losing money. Our mobile units have the right tools and parts to fix your vehicle right there on the spot.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-surface rounded-md">
                    <Shield className="text-brand-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold mb-2">Safety First</h4>
                    <p className="text-sm text-gray-500">We keep you and your vehicle safe while we work.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-surface rounded-md">
                    <Target className="text-brand-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold mb-2">Doing It Right</h4>
                    <p className="text-sm text-gray-500">No guessing. We find the real problem and fix it.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-brand-on-surface text-white p-12 rounded-md relative overflow-hidden"
            >
              <div className="relative z-10">
                <Award className="text-brand-primary mb-8" size={48} />
                <h3 className="text-2xl font-display font-bold mb-6 uppercase">OUR EXPERIENCE</h3>
                <p className="text-gray-400 leading-relaxed mb-8">
                  Led by a qualified auto electrician with over 10 years of experience. We specialize in big trucks and complicated electrical problems.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-sm">
                    <div className="w-1.5 h-1.5 bg-brand-primary rounded-full" />
                    Heavy Duty Truck Specialist
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <div className="w-1.5 h-1.5 bg-brand-primary rounded-full" />
                    Auto Electrical Expert
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <div className="w-1.5 h-1.5 bg-brand-primary rounded-full" />
                    Finding Problems Fast
                  </li>
                </ul>
              </div>
              <div className="absolute -bottom-12 -right-12 opacity-10 pointer-events-none">
                <Award size={240} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-md overflow-hidden shadow-sm border border-gray-100">
            <div className="lg:col-span-4 p-12 bg-brand-surface relative overflow-hidden">
              <div className="absolute inset-0 z-0">
                <img 
                  src={`${baseUrl}map_location.png`}
                  alt="Service Area Map" 
                  className="w-full h-full object-cover opacity-20"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600";
                  }}
                />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <MapPin className="text-brand-primary" size={24} />
                  <h3 className="text-xl font-display font-bold uppercase">Where We Help</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    { name: 'Zeerust', type: 'Main Hub' },
                    { name: 'Mafikeng', type: 'Hub' },
                    { name: 'Gaborone', type: 'Regional Hub' },
                    { name: 'Lichtenburg', type: 'Service Area' },
                    { name: 'Rustenburg', type: 'Service Area' },
                    { name: 'Vryburg', type: 'Service Area' },
                    { name: 'Coligny', type: 'Service Area' },
                    { name: 'Swartruggens', type: 'Service Area' }
                  ].map((area) => (
                    <li key={area.name} className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span className="font-medium text-sm">{area.name}</span>
                      {area.type && <span className="text-[8px] font-bold text-brand-primary uppercase tracking-widest">{area.type}</span>}
                    </li>
                  ))}
                </ul>
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Border Post Help</p>
                  <p className="text-sm font-medium">Ramatlabama • Skilpadshek • Kopfontein</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 p-12 bg-brand-primary text-white flex flex-col justify-center relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-end gap-2 mb-4">
                  <span className="text-[clamp(4rem,12vw,10rem)] font-display font-bold leading-none italic">FAST</span>
                </div>
                <h3 className="text-2xl font-display font-bold mb-6 uppercase tracking-tight">We Get To You Quickly</h3>
                <p className="text-lg opacity-90 max-w-xl leading-relaxed mb-10">
                  We come to you, wherever you are. On the road, at the job site, or at the border. We don't waste time.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/10 rounded-md flex items-center justify-center">
                    <Zap size={32} />
                  </div>
                  <div className="w-16 h-16 bg-white/10 rounded-md flex items-center justify-center">
                    <Clock size={32} />
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 opacity-10">
                <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
                  <circle cx="200" cy="200" r="180" stroke="white" strokeWidth="40" strokeDasharray="20 40" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Precision Industrialism */}
      <section className="py-24 bg-brand-on-surface text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="aspect-video rounded-md overflow-hidden"
            >
              <img
                src={`${baseUrl}img6.jpeg`}
                alt="Auto Correction Mechanics industrial workshop equipment"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://unsplash.com/photos/a-man-is-working-on-a-car-engine-6bTHShbYDhY";
                }}
              />
            </motion.div>
            <div>
              <h2 className="text-[clamp(2rem,5vw,4rem)] font-display font-bold mb-12 uppercase leading-none">GETTING THE JOB<br />DONE RIGHT</h2>
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 bg-brand-primary flex items-center justify-center rounded-md">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-bold mb-2 uppercase">Finding The Problem Fast</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      We use the latest tools to find exactly what's wrong with your truck's electrical system.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 bg-brand-primary flex items-center justify-center rounded-md">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-bold mb-2 uppercase">24/7 Roadside Help</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Breakdowns don't wait for anyone. Neither do we. Rain or shine, day or night.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-headline-lg mb-4 uppercase italic">STUCK ON THE ROAD?</h2>
          <h3 className="text-[clamp(2.5rem,8vw,5rem)] text-brand-primary font-display font-bold mb-8 uppercase leading-none">CALL US ANYTIME.</h3>
          <p className="text-lg text-gray-500 mb-12">
            We are always ready to help. Our mechanics are waiting for your call.
          </p>
          <div className="inline-flex items-stretch rounded-md overflow-hidden shadow-2xl">
            <div className="bg-brand-primary p-6 flex items-center justify-center">
              <Phone className="text-white" size={32} />
            </div>
            <div className="bg-brand-on-surface p-6 px-10 text-left">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Emergency Hotline</p>
              <a 
                href="tel:0679470553" 
                aria-label="Call emergency hotline at 067 947 0553"
                className="text-3xl md:text-4xl font-display font-bold text-white hover:text-brand-primary transition-colors"
              >
                067 947 0553
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
