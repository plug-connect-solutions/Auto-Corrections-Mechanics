import React from 'react';
import Layout from '../components/Layout';
import { Award } from 'lucide-react';
import { motion } from 'motion/react';

export default function Gallery() {
  // Essential for GitHub Pages sub-route asset loading
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-white pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 bg-brand-primary text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
              Live Portfolio
            </div>
            <h1 className="text-[12vw] md:text-[8vw] font-display font-bold leading-[0.85] tracking-tighter uppercase mb-12">
              OUR <span className="text-brand-primary italic">WORK</span>
            </h1>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-gray-100 pt-12">
            <div className="md:col-span-8">
              <p className="text-xl md:text-2xl text-gray-500 leading-tight max-w-2xl">
                Precision repairs for heavy-duty vehicles. We bring engineering excellence to the roadside, ensuring every job is finished with zero compromise.
              </p>
            </div>
            <div className="md:col-span-4 flex md:justify-end items-end">
              <div className="text-right">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Total Jobs Logged</p>
                <p className="text-4xl font-display font-bold">1400+</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Sections in Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 mb-24">
            
            {/* Featured Video (Large) */}
            <motion.div 
              className="md:col-span-8 relative group rounded-md overflow-hidden h-[400px] md:h-[600px] shadow-2xl"
              whileHover={{ scale: 0.995 }}
            >
              <video
                src={`${baseUrl}vid2.mp4`}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-on-surface/80 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-40" />
              <div className="absolute bottom-8 left-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-[1px] bg-brand-primary" />
                  <span className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.2em]">Live Field Capture</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-display font-bold text-white uppercase italic leading-none">Fixing a Big Gearbox</h3>
              </div>
            </motion.div>

            {/* Technical Detail Card */}
            <div className="md:col-span-4 flex flex-col gap-6">
              <div className="flex-grow p-8 md:p-10 bg-brand-on-surface text-white rounded-md relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:scale-110 transition-transform duration-700">
                  <Award size={120} />
                </div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-12">
                     <span className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.2em] mb-4 block">01 / Diagnosis</span>
                     <h4 className="text-3xl font-display font-bold uppercase italic leading-tight mb-4">Finding The<br/>Problem</h4>
                     <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                       Our mechanics use advanced diagnostics to isolate mechanical failures before specialized repair begins.
                     </p>
                  </div>
                  
                  <div className="mt-auto pt-8 border-t border-white/10 space-y-6">
                    <div>
                      <div className="flex justify-between items-end mb-2">
                        <span className="text-[10px] uppercase font-bold text-gray-500">Accuracy Rate</span>
                        <span className="text-2xl font-display italic">100%</span>
                      </div>
                      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="h-full bg-brand-primary" 
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-brand-surface border border-gray-100 rounded-md">
                 <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-4 block">02 / Ready to Dispatch</span>
                 <p className="text-sm font-medium leading-normal mb-8">
                   We cover Zeerust, Mafikeng and Gaborone 24/7. Call for immediate roadside mechanical assistance.
                 </p>
                 <a href="tel:0679470553" className="w-full py-4 bg-brand-primary text-white text-center font-display font-bold uppercase tracking-widest text-xs block rounded-md hover:bg-brand-primary/90 transition-colors">
                   Emergency Call
                 </a>
              </div>
            </div>

            {/* Split Layout for Before & After */}
            <div className="md:col-span-6 h-[400px] rounded-md overflow-hidden border border-gray-100 relative group">
              <video
                src={`${baseUrl}vid4.mp4`}
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                 <span className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.2em] mb-2 block">Before & After</span>
                 <h4 className="text-xl font-display font-bold text-white uppercase italic">On Site Tyre Replacement</h4>
              </div>
            </div>

            <div className="md:col-span-6 h-[400px] rounded-md overflow-hidden border border-gray-100 relative group">
              <img
                src={`${baseUrl}img14.jpeg`}
                alt="Restored heavy duty vehicle components"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                 <span className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.2em] mb-2 block">Tyres Available</span>
                 <h4 className="text-xl font-display font-bold text-white uppercase italic">We sell & retread tyres</h4>
              </div>
            </div>

            {/* Balanced Media Row 1 */}
            <div className="md:col-span-6 h-[400px] rounded-md overflow-hidden border border-gray-100 relative group">
              <video
                src={`${baseUrl}vid3.mp4`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                 <span className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.2em] mb-2 block">Mobile Response</span>
                 <h4 className="text-xl font-display font-bold text-white uppercase italic">Field Service Deployment</h4>
              </div>
            </div>

            <div className="md:col-span-6 h-[400px] rounded-md overflow-hidden border border-gray-100 relative group">
              <img
                src={`${baseUrl}img8.jpeg`}
                alt="Qualified mechanic performing precision work"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                 <span className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.2em] mb-2 block">Heavy Duty Repair</span>
                 <h4 className="text-xl font-display font-bold text-white uppercase italic">Engine Rebuild Project</h4>
              </div>
            </div>

            {/* Balanced Media Row 2 */}
            <div className="md:col-span-6 h-[400px] rounded-md overflow-hidden border border-gray-100 relative group">
              <video
                src={`${baseUrl}vid5.mp4`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                 <span className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.2em] mb-2 block">Technical Support</span>
                 <h4 className="text-xl font-display font-bold text-white uppercase italic">Custom Solutions Deployment</h4>
              </div>
            </div>

            <div className="md:col-span-6 h-[400px] rounded-md overflow-hidden border border-gray-100 relative group">
              <img
                src={`${baseUrl}img12.jpeg`}
                alt="Service truck responding to a breakdown call"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                 <span className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.2em] mb-2 block">Roadside Assistance</span>
                 <h4 className="text-xl font-display font-bold text-white uppercase italic">Service Truck Logistics</h4>
              </div>
            </div>
          </div>

          {/* Tyres Section */}
          <div className="mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-[1px] bg-brand-primary" />
                <span className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.2em]">Inventory & Supply</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-bold uppercase italic mb-8">Get a <span className="text-brand-primary">Grip</span> on Quality</h2>
              <p className="text-xl text-gray-500 max-w-3xl mb-12">
                Engineered for endurance and built for the toughest South African roads. We supply premium tyre stock and offer expert retreading services to keep your bakkies and heavy-duty trucks moving with zero downtime.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
              <div className="md:col-span-6 h-[400px] rounded-md overflow-hidden border border-gray-100 relative group">
                <img
                  src={`${baseUrl}img16.jpeg`}
                  alt="Tyres in storage"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                  <span className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.2em] mb-2 block">Fresh Stock</span>
                  <h4 className="text-2xl font-display font-bold text-white uppercase italic">Premium Tyre Inventory</h4>
                </div>
              </div>

              <div className="md:col-span-6 h-[400px] rounded-md overflow-hidden border border-gray-100 relative group">
                <img
                  src={`${baseUrl}img19.jpeg`}
                  alt="Tyres on back of bakkie"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                  <span className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.2em] mb-2 block">Mobile Supply</span>
                  <h4 className="text-2xl font-display font-bold text-white uppercase italic">Bakkie Dispatch Ready</h4>
                </div>
              </div>

              <div className="md:col-span-6 h-[400px] rounded-md overflow-hidden border border-gray-100 relative group">
                <img
                  src={`${baseUrl}img17.jpeg`}
                  alt="Organized tyre storage"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                  <span className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.2em] mb-2 block">Warehouse</span>
                  <h4 className="text-2xl font-display font-bold text-white uppercase italic">High-Volume Capacity</h4>
                </div>
              </div>

              <div className="md:col-span-6 h-[400px] rounded-md overflow-hidden border border-gray-100 relative group">
                <img
                  src={`${baseUrl}img18.jpeg`}
                  alt="Retreading service"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                  <span className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.2em] mb-2 block">Safety First</span>
                  <h4 className="text-2xl font-display font-bold text-white uppercase italic">Expert Retreading Services</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Roadside Section */}
          <div className="bg-brand-on-surface rounded-md p-8 md:p-12 text-white overflow-hidden relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <h2 className="text-headline-lg mb-6 uppercase">24/7 Roadside Help</h2>
                <p className="text-lg text-gray-400 leading-relaxed mb-10">
                  Whether it's midnight or rush hour, we are ready to help you on the spot. We bring the workshop to you.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://www.google.com/maps" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-actuator-primary"
                  >
                    See Map
                  </a>
                  <button className="btn-actuator-secondary bg-white/10 text-white hover:bg-white/20">How We Help</button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={`${baseUrl}img13.jpeg`}
                  alt="Service truck"
                  className="rounded-md grayscale hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <img
                  src={`${baseUrl}img15.jpeg`}
                  alt="Roadside assistance"
                  className="rounded-md grayscale hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
