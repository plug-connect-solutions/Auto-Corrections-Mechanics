import React from 'react';
import Layout from '../components/Layout';
import { Phone, ArrowRight, Shield, Clock, Award, MapPin, CheckCircle2, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] md:h-[90vh] flex items-center overflow-hidden pt-20 md:pt-0">
        <div className="absolute inset-0 z-0">
          <img
            src="img1.jpeg"
            alt="Auto Correction Mechanics mobile repair unit working on a heavy duty truck engine"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-3 py-1 bg-brand-primary text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-6"
            >
              24/7 Roadside Help • We Come To You
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-display-lg text-white mb-6"
            >
              BROKEN DOWN?<br />
              <span className="text-brand-primary">WE COME TO YOU FAST!</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-300 mb-10 leading-relaxed max-w-2xl"
            >
              24/7 Mobile Mechanic for Trucks, Bakkies & Cars. Reliable help when you need it most. We fix your vehicle where it stands so you can get back on the road.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="tel:0679470553" className="btn-actuator-primary px-6 md:px-8 py-4 text-sm md:text-base w-full sm:w-auto">
                <Phone size={20} />
                <span>CALL US NOW 067 947 0553</span>
              </a>
              <Link to="/services" className="btn-actuator-secondary px-6 md:px-8 py-4 text-sm md:text-base bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm w-full sm:w-auto">
                <span>See Our Prices</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Call Us? */}
      <section className="py-24 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-8 text-center md:text-left">
            <div className="max-w-2xl flex flex-col items-center md:items-start">
              <h2 className="text-headline-lg mb-4">WHY CALL US?</h2>
              <div className="w-20 h-1 bg-brand-primary mb-8" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="text-brand-primary" />,
                title: "We Get There Fast",
                desc: "We know the stress of a breakdown. Our team aims to reach you as quickly as possible, anywhere in our service areas."
              },
              {
                icon: <Clock className="text-brand-primary" />,
                title: "24/7 Always Ready",
                desc: "Night or day, rain or shine. We are always ready to help. Breakdowns don't wait for business hours, and neither do we.",
                dark: true
              },
              {
                icon: <Award className="text-brand-primary" />,
                title: "Expert Mechanics",
                desc: "Qualified mechanics with the right tools for both light cars and heavy-duty trucks. We do the job right."
              }
            ].map((item, i) => (
              <div
                key={i}
                className={`p-10 rounded-md transition-all duration-300 ${
                  item.dark ? 'bg-brand-on-surface text-white' : 'bg-white shadow-sm hover:shadow-md'
                }`}
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-display font-bold mb-4">{item.title}</h3>
                <p className={`text-sm leading-relaxed ${item.dark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Emergency Banner */}
          <div className="mt-12 bg-brand-primary p-8 md:p-12 rounded-md flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white">
              <h3 className="text-2xl font-display font-bold mb-2 uppercase italic">Stuck on the road? Call us now!</h3>
              <p className="opacity-90">Don't wait around. One call and we are on our way.</p>
            </div>
            <a href="tel:0679470553" className="bg-white text-brand-primary px-8 py-4 rounded-md font-display font-bold flex items-center gap-3 hover:bg-gray-100 transition-colors">
              <Phone size={20} />
              067 947 0553
            </a>
          </div>
        </div>
      </section>

      {/* Our Work */}
      <section className="py-24 bg-brand-on-surface text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-headline-lg mb-2 uppercase">OUR WORK</h2>
              <p className="text-gray-400 uppercase tracking-widest text-xs font-bold">Fixing it right, fixing it fast.</p>
            </div>
            <Link to="/gallery" className="btn-actuator-primary bg-brand-primary/20 hover:bg-brand-primary/40 text-brand-primary border border-brand-primary/30">
              <Award size={16} />
              <span>See More Work</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
            <div 
              className="md:col-span-8 relative group overflow-hidden rounded-md h-[350px] sm:h-[450px] md:h-full"
            >
              <video
                src="vid1.mp4"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 pointer-events-none">
                <span className="label-md text-brand-primary mb-1 md:mb-2 block">Live from the field</span>
                <h3 className="text-xl md:text-2xl font-display font-bold">Highway Engine Fix and Tyre Replacement</h3>
              </div>
            </div>
            <div className="md:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6">
              <div className="relative group overflow-hidden rounded-md aspect-video md:aspect-auto">
                <img
                  src="./img3.jpeg"
                  alt="Qualified mechanic performing precision work on a heavy truck engine"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-brand-primary px-2 py-1">Expert Heavy Duty Mechanics</span>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-md aspect-video md:aspect-auto">
                <img
                  src="img4.jpeg"
                  alt="High quality truck tyres and diagnostics tools ready for roadside help"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-brand-primary px-2 py-1">New Tyres Supplied On-Site</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-md overflow-hidden shadow-lg border border-gray-100">
                <img
                  src="img2_.jpeg"
                  alt="Experienced Auto Correction mechanic specializing in local North West breakdown response"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 bg-brand-primary p-6 md:p-8 rounded-md text-white shadow-xl">
                <p className="text-3xl md:text-4xl font-display font-bold">10+</p>
                <p className="text-[10px] md:text-xs uppercase font-bold tracking-widest">Years Experience</p>
              </div>
            </div>
            <div>
              <h2 className="text-headline-lg mb-6 uppercase">OUR STORY</h2>
              <p className="text-lg font-display font-medium mb-6">Over 10 years of keeping North West Province moving.</p>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Auto Correction Mechanics started with a simple idea: getting help when you break down shouldn't be a mission. For 10 years, we've built a name on being honest, fast, and knowing our stuff.
                </p>
                <p>
                  We aren't just mechanics; we are the people you call when you're in a fix. Whether it's a flat battery in Zeerust or a big engine problem on the way to Mafikeng, we treat every call with the same urgency.
                </p>
              </div>
              <ul className="mt-10 space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-primary" size={20} />
                  <span className="font-medium">Trusted by hundreds of local drivers and fleet owners</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-primary" size={20} />
                  <span className="font-medium">Specialists in heavy-duty truck and trailer repairs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-headline-lg mb-4 uppercase">OUR PRICES</h2>
            <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">Straight talk. No hidden costs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 border-none md:border md:border-gray-100 rounded-md overflow-hidden shadow-none md:shadow-sm">
            {/* Step 1 */}
            <div className="p-8 md:p-10 bg-brand-surface border border-gray-100 md:border-none md:border-r rounded-md md:rounded-none relative">
              <div className="absolute top-4 right-4 text-[10px] font-bold text-gray-300 uppercase">Step 1</div>
              <MapPin className="text-gray-400 mb-6" size={32} />
              <h4 className="text-xl font-display font-bold mb-2">Call-Out Fee</h4>
              <p className="text-sm text-gray-500 mb-8">Standard fee to send our mobile workshop to where you are.</p>
              <div className="mt-auto">
                <span className="text-4xl font-display font-bold text-brand-on-surface">R450</span>
                <span className="text-xs text-gray-400 uppercase font-bold ml-2">Once-off</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-8 md:p-10 bg-brand-on-surface text-white rounded-md md:rounded-none relative">
              <div className="absolute top-4 right-4 text-[10px] font-bold text-brand-primary uppercase">Step 2</div>
              <Zap className="text-brand-primary mb-6" size={32} />
              <h4 className="text-xl font-display font-bold mb-2">Travel Fee</h4>
              <p className="text-sm text-gray-400 mb-8">Calculated based on the distance from our nearest hub to you.</p>
              <div className="mt-auto">
                <span className="text-4xl font-display font-bold text-brand-primary">R9.65</span>
                <span className="text-xs text-gray-500 uppercase font-bold ml-2">/km</span>
                <div className="mt-2 inline-block px-2 py-1 bg-brand-primary/10 text-brand-primary text-[10px] font-bold uppercase tracking-widest rounded">Fair Distance Tracking</div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-8 md:p-10 bg-brand-surface border border-gray-100 md:border-none relative rounded-md md:rounded-none">
              <div className="absolute top-4 right-4 text-[10px] font-bold text-gray-300 uppercase">Step 3</div>
              <Clock className="text-gray-400 mb-6" size={32} />
              <h4 className="text-xl font-display font-bold mb-2">Labour Rate</h4>
              <p className="text-sm text-gray-500 mb-8">Expert on-site repair work by our qualified mechanics.</p>
              <div className="mt-auto">
                <span className="text-4xl font-display font-bold text-brand-on-surface">R550</span>
                <span className="text-xs text-gray-400 uppercase font-bold ml-2">/hr</span>
                <p className="text-[10px] text-gray-400 uppercase font-bold mt-2">Professional Work</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center px-4">
            <p className="text-sm text-gray-400 italic mb-8">*Total cost = Call-out + (Distance x R9.65) + (Hours x R550). Parts are separate.*</p>
            <a href="tel:0679470553" className="btn-actuator-primary px-6 md:px-12 py-4 md:py-5 text-base md:text-lg w-full sm:w-auto">
              GET A QUOTE NOW: 067 947 0553
            </a>
          </div>
        </div>
      </section>

      {/* Where We Help */}
      <section className="py-24 bg-brand-on-surface text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-headline-lg mb-6 uppercase">WHERE WE HELP</h2>
              <p className="text-gray-400 mb-10 leading-relaxed">
                Based in the heart of North West Province, we cover a big area to make sure no driver is left stranded.
              </p>
              <div className="grid grid-cols-2 gap-x-8 gap-y-6 mb-12">
                {[
                  { city: "Zeerust", type: "Main Hub" },
                  { city: "Mafikeng", type: "Second Hub" },
                  { city: "Gaborone", type: "Regional Hub" },
                  { city: "Lichtenburg", type: "Service Area" },
                  { city: "Rustenburg", type: "Service Area" },
                  { city: "Vryburg", type: "Service Area" },
                  { city: "Coligny", type: "Service Area" },
                  { city: "Swartruggens", type: "Service Area" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <MapPin className="text-brand-primary shrink-0" size={18} />
                    <div>
                      <p className="font-display font-medium text-sm">{item.city}</p>
                      <p className="text-[9px] text-gray-500 uppercase font-bold tracking-widest">{item.type}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-8 bg-white/5 rounded-md border border-white/10">
                <h4 className="font-display font-bold mb-4">Need a Tow?</h4>
                <p className="text-sm text-gray-400 mb-6">If we can't fix it on the spot, we have partners with big tow trucks to move your vehicle to a safe place.</p>
                <a href="tel:0679470553" className="text-brand-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  CALL FOR HELP NOW <ArrowRight size={16} />
                </a>
              </div>
            </div>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Auto+Correction+Mechanics+Zeerust" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative block group overflow-hidden rounded-md"
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src="map_location.png" 
                  alt="Auto Correction Mechanics Google Maps location at 1214 Krans St, Zeerust" 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000";
                    (e.target as HTMLImageElement).className = "w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-all duration-500 group-hover:scale-110";
                  }}
                />
              </div>
              <div className="relative z-10 aspect-square flex items-center justify-center p-12 border border-white/10 transition-all duration-300 group-hover:border-brand-primary/50">
                <div className="text-center">
                  <MapPin className="text-brand-primary mx-auto mb-6 transition-transform duration-300 group-hover:scale-110" size={64} />
                  <h3 className="text-2xl font-display font-bold mb-2">LIVE DISPATCH MAP</h3>
                  <p className="text-sm text-gray-400 mb-8">Mechanics currently active in:<br />Zeerust (2) | Mafikeng (1)</p>
                  <div className="flex flex-col items-center gap-4">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-xs font-bold uppercase tracking-widest text-green-500">Live Availability</span>
                    </div>
                    <span className="text-[10px] font-bold text-brand-primary uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Click for Directions</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
