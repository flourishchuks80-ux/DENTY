/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Search, Bell, User, Star, ArrowUpRight, Plus, ChevronRight, Mic, PhoneOff, Video, X, Check, ArrowRight, ChevronLeft, Quote, Linkedin, Instagram, Facebook, Twitter, Phone } from 'lucide-react';
import { motion } from 'motion/react';

const navLinks = ['Home', 'About', 'Services', 'Doctors', 'Appointments', 'Contact'];

const featureList = [
  { name: 'Expert Care', active: true },
  { name: 'Advanced Technology', active: false },
  { name: 'Affordable Plans', active: false },
  { name: 'Professional Staff', active: false },
];

const doctors = [
  { name: 'Dr. Faisal Ahmed', title: 'Senior Dentist', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400&auto=format&fit=crop' },
  { name: 'Dr. Shamim Sultana', title: 'Senior Dentist', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=400&auto=format&fit=crop' },
  { name: 'Dr. Md Musharraf Alam', title: 'Senior Dentist', image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=400&auto=format&fit=crop', active: true },
  { name: 'Dr. Mati Mohammed', title: 'Senior Dentist', image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&auto=format&fit=crop' },
];

const testimonials = [
  {
    quote: "The Staff Is So Friendly And Professional. They Explained Everything Clearly And Made Sure I Was Comfortable During The Entire Treatment. Highly Recommend!",
    author: "Malik H.",
    role: "Project Manager",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
  },
  {
    quote: "I Used To Avoid Dental Visits, But This Clinic Changed My Perspective Completely. The Care And Attention I Received Were Beyond Expectations!",
    author: "Mahi H.",
    role: "Product Sales",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop"
  },
  {
    quote: "The Best Dental Experience I've Ever Had! Quick, Painless, And The Results Are Absolutely Amazing. I Finally Love My Bright, Beautiful Smile Again.",
    author: "Rehana T.",
    role: "Senior Consultant",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-bg-canvas px-4 py-4 md:px-8 md:py-6 text-sans">
      {/* Navbar */}
      <nav id="navbar" className="mx-auto mb-8 flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg bg-brand-primary rotate-45">
            <Plus className="h-5 w-5 text-white -rotate-45" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-heading">Denty</span>
        </div>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link, i) => (
            <li key={link}>
              <a
                href="#"
                className={`text-sm font-medium transition-colors ${
                  i === 0 ? 'text-heading font-semibold' : 'text-nav-link hover:text-brand-primary'
                }`}
              >
                {i === 0 && <span className="mr-1 text-brand-primary">•</span>}
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a 
            href="tel:+1234567890" 
            className="flex items-center gap-2 rounded-full bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-transform hover:scale-105 active:scale-95"
          >
            <Phone className="h-4 w-4 fill-white flex-shrink-0" />
            <span className="whitespace-nowrap">+1 (234) 567-890</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <main id="hero" className="mx-auto mb-20 grid max-w-7xl grid-cols-1 gap-5 lg:grid-cols-[1fr_1.1fr]">
        
        {/* Left Pane */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative flex flex-col justify-between overflow-hidden rounded-[32px] bg-bg-hero-panel p-8 md:p-12 lg:p-16"
        >
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/60 px-4 py-1.5 text-xs font-semibold text-brand-primary">
              <Star className="h-3.5 w-3.5 fill-brand-primary text-brand-primary" />
              <span>5.0 (4824 Reviews)</span>
            </div>

            <h1 className="mb-6 text-4xl font-semibold leading-[1.1] tracking-tight text-heading md:text-5xl lg:text-6xl">
              Exceptional Dental Care, <br />
              Every Step Of The Way
            </h1>

            <p className="mb-10 max-w-lg text-body-teal">
              Your smile deserves the best. Experience advanced dental solutions with a gentle touch, tailored for your comfort.
            </p>

            <div className="mb-12 flex flex-wrap gap-4">
              <button className="rounded-xl bg-brand-primary px-7 py-3.5 font-semibold text-white transition-transform hover:scale-105 active:scale-95">
                Book Appointment
              </button>
              <button className="rounded-xl border border-brand-primary px-7 py-3.5 font-semibold text-brand-primary transition-colors hover:bg-brand-primary/5">
                Get Started Today
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Promo Card 1 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="flex items-center gap-4 rounded-3xl bg-brand-accent-orange/40 p-4 ring-1 ring-black/5"
            >
              <div className="flex-1">
                <h3 className="mb-4 text-sm font-semibold text-heading">24/7 Service Available</h3>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-heading text-white">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
              <div className="h-28 w-24 overflow-hidden rounded-2xl bg-brand-accent-orange/20">
                <img 
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=200&auto=format&fit=crop" 
                  alt="Doctor" 
                  className="h-full w-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            {/* Promo Card 2 */}
            <motion.div 
               whileHover={{ y: -5 }}
               className="flex items-center gap-4 rounded-3xl bg-brand-accent-pink p-4 ring-1 ring-black/5"
            >
              <div className="flex-1">
                <h3 className="mb-4 text-sm font-semibold text-heading">Find The Best Doctors</h3>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-primary text-white">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
              <div className="h-28 w-24 overflow-hidden rounded-2xl bg-brand-accent-pink/30">
                 <img 
                  src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=200&auto=format&fit=crop" 
                  alt="Doctor" 
                  className="h-full w-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Pane */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-[600px] overflow-hidden rounded-[32px] lg:h-auto"
        >
          <img 
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2000&auto=format&fit=crop" 
            alt="Dental care in progress" 
            className="h-full w-full object-cover"
            referrerPolicy="no-referrer"
          />
          
          {/* Overlay Stats */}
          <div className="absolute inset-x-4 bottom-4 flex flex-wrap gap-2 sm:inset-x-8 sm:bottom-8 lg:flex-nowrap">
            {[
              { label: 'Expert Doctors', value: '200+', delay: 0.4 },
              { label: 'Recover Patient', value: '400+', delay: 0.5 },
              { label: 'Satisfied Rate', value: '98%', delay: 0.6 },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: stat.delay }}
                className="flex-1 min-w-[120px] rounded-2xl bg-white/90 p-5 backdrop-blur-md"
              >
                <div className="text-2xl font-bold text-heading">{stat.value}</div>
                <div className="text-xs font-medium text-nav-link">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>

      {/* Features & Services Section */}
      <section id="features" className="mx-auto mb-24 max-w-7xl">
        <div className="flex flex-col gap-10 lg:flex-row">
          
          {/* Sidebar */}
          <div className="w-full lg:w-[35%]">
            <h2 className="mb-10 text-4xl font-semibold leading-tight tracking-tight text-heading">
              Features <br />
              & Services
            </h2>
            
            <div className="flex flex-col gap-3">
              {featureList.map((feature, i) => (
                <motion.button
                  key={feature.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center justify-between rounded-xl px-6 py-5 text-sm font-medium transition-all ${
                    feature.active 
                      ? 'bg-nav-item-bg text-brand-primary ring-1 ring-brand-primary/10 shadow-sm' 
                      : 'bg-[#F4FAFB] text-nav-link hover:bg-brand-primary/5'
                  }`}
                >
                  <span>{feature.name}</span>
                  <ChevronRight className={`h-4 w-4 ${feature.active ? 'text-brand-primary' : 'text-nav-link/40'}`} />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Detail Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-1 flex-col overflow-hidden rounded-[24px] bg-[#F4FAFB] p-8 lg:flex-row lg:p-10"
          >
            {/* Video Call Simulation */}
            <div className="relative w-full overflow-hidden rounded-2xl bg-gray-200 lg:w-[45%]">
               <img 
                 src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=800&auto=format&fit=crop" 
                 alt="Doctor in video call" 
                 className="h-full w-full object-cover"
                 referrerPolicy="no-referrer"
               />
               
               {/* Controls */}
               <div className="absolute inset-x-0 bottom-4 flex justify-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white">
                    <Video className="h-5 w-5" />
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-white">
                    <PhoneOff className="h-5 w-5" />
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white">
                    <Mic className="h-5 w-5" />
                  </div>
               </div>

               {/* Timer Badge */}
               <div className="absolute top-4 right-4 flex items-center gap-2 rounded-full bg-white/30 px-3 py-1 text-[10px] font-bold text-white backdrop-blur-md">
                  <div className="h-1.5 w-1.5 rounded-full bg-red-500" />
                  <span>11 : 15 MIN</span>
               </div>

               {/* Mini Avatar */}
               <div className="absolute top-4 left-4 h-16 w-14 overflow-hidden rounded-xl border border-white/50 shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" 
                    alt="Patient avatar" 
                    className="h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
               </div>
            </div>

            {/* Description & Feature List */}
            <div className="flex flex-1 flex-col justify-center p-6 lg:p-10 lg:pl-12">
               <div className="mb-4 flex justify-end lg:mb-12">
                  <button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200/50 text-nav-link hover:bg-gray-200">
                    <X className="h-4 w-4" />
                  </button>
               </div>
               
               <h3 className="mb-8 text-3xl font-semibold leading-tight text-heading">
                Online <br />
                Consultation
               </h3>
               
               <div className="space-y-6">
                  {[
                    { title: 'Your Gateway To Smarter, Patient-Friendly Telehealth', active: true },
                    { title: 'Safe & Protected', active: false },
                    { title: '24/7 Service', active: false },
                  ].map((item, i) => (
                    <div key={item.title} className="flex items-center justify-between border-b border-gray-200 pb-4">
                      <span className={`text-sm font-semibold ${item.active ? 'text-brand-primary max-w-[200px]' : 'text-nav-link'}`}>
                        {item.title}
                      </span>
                      <div className={`flex h-8 w-8 items-center justify-center rounded-full border ${
                        item.active ? 'bg-brand-primary border-brand-primary text-white' : 'border-gray-300 text-nav-link'
                      }`}>
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </div>
                  ))}
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Committed To Your Oral Health Section */}
      <section id="commitment" className="mx-auto mt-24 max-w-7xl pb-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col overflow-hidden rounded-[32px] bg-[#F4FAFB] p-8 md:p-12 lg:flex-row lg:gap-16"
        >
          {/* Left Content */}
          <div className="flex flex-col justify-center lg:w-[40%]">
            <h2 className="mb-6 text-4xl font-semibold leading-tight tracking-tight text-heading lg:text-[40px]">
              Committed To Your <br />
              Oral Health
            </h2>
            <p className="mb-10 max-w-md text-sm leading-relaxed text-body-teal">
              We strive to provide exceptional dental care through advanced technology, personalized treatments, and a compassionate approach, ensuring your oral health is always our top priority for a brighter, healthier smile.
            </p>
            
            <ul className="space-y-4">
              {[
                'Advanced Dental Care For Every Smile',
                'Personalized Treatments Tailored To You',
                'Modern Technology For Better Results',
                'Comfort, Safety, And Quality Guaranteed',
                'Your Smile, Our Responsibility',
              ].map((item, i) => (
                <motion.li 
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-secondary text-brand-primary">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </div>
                  <span className="text-sm font-medium text-brand-primary">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Right Masonry Mosaic */}
          <div className="mt-12 w-full lg:mt-0 lg:w-[60%]">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:gap-4">
              {/* Column 1 */}
              <div className="flex flex-col gap-3 md:gap-4">
                <motion.div whileHover={{ scale: 1.02 }} className="h-48 overflow-hidden rounded-2xl bg-gray-200">
                  <img src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=400&auto=format&fit=crop" alt="Dental exam" className="h-full w-full object-cover" referrerPolicy="no-referrer" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="h-64 overflow-hidden rounded-2xl bg-gray-200">
                  <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=400&auto=format&fit=crop" alt="Doctor patient" className="h-full w-full object-cover" referrerPolicy="no-referrer" />
                </motion.div>
              </div>
              
              {/* Column 2 */}
              <div className="flex flex-col gap-3 md:gap-4 lg:pt-8">
                <motion.div whileHover={{ scale: 1.02 }} className="h-64 overflow-hidden rounded-2xl bg-gray-200">
                  <img src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=400&auto=format&fit=crop" alt="Smile checkup" className="h-full w-full object-cover" referrerPolicy="no-referrer" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="h-40 overflow-hidden rounded-2xl bg-gray-200">
                  <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=400&auto=format&fit=crop" alt="Dental tools" className="h-full w-full object-cover" referrerPolicy="no-referrer" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="h-24 overflow-hidden rounded-2xl bg-gray-200">
                  <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=400&auto=format&fit=crop" alt="Clinic focus" className="h-full w-full object-cover" referrerPolicy="no-referrer" />
                </motion.div>
              </div>

              {/* Column 3 */}
              <div className="flex flex-col gap-3 md:gap-4 pt-4">
                <motion.div whileHover={{ scale: 1.02 }} className="h-40 overflow-hidden rounded-2xl bg-gray-200">
                  <img src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=400&auto=format&fit=crop" alt="Friendly dentist" className="h-full w-full object-cover" referrerPolicy="no-referrer" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="h-72 overflow-hidden rounded-2xl bg-gray-200">
                  <img src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=400&auto=format&fit=crop" alt="Dental procedure" className="h-full w-full object-cover" referrerPolicy="no-referrer" />
                </motion.div>
              </div>

              {/* Column 4 */}
              <div className="flex flex-col gap-3 md:gap-4 lg:pt-12">
                <motion.div whileHover={{ scale: 1.02 }} className="h-32 overflow-hidden rounded-2xl bg-gray-200">
                  <img src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=400&auto=format&fit=crop" alt="Modern clinic" className="h-full w-full object-cover" referrerPolicy="no-referrer" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="h-56 overflow-hidden rounded-2xl bg-gray-200">
                  <img src="https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=400&auto=format&fit=crop" alt="Lab tech" className="h-full w-full object-cover" referrerPolicy="no-referrer" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="h-32 overflow-hidden rounded-2xl bg-gray-200">
                   <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=400&auto=format&fit=crop" alt="Microscope" className="h-full w-full object-cover" referrerPolicy="no-referrer" />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Comprehensive Dental Services Section */}
      <section id="services" className="mx-auto max-w-7xl pb-24 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-16"
        >
          <h2 className="mb-4 text-4xl font-semibold tracking-tight text-heading">
            Comprehensive Dental Services <br />
            For A Healthy Smile
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-body-teal">
            Whether you need routine check-ups, cosmetic enhancements, or advanced dental solutions, our expert team provides comprehensive care to keep your smile healthy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Card 1: General Dentistry */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-start rounded-[32px] bg-[#F4FAFB] p-8 text-left transition-transform hover:scale-[1.02]"
          >
            <h3 className="mb-4 text-xl font-semibold text-heading">General Dentistry</h3>
            <p className="mb-8 text-xs leading-relaxed text-body-teal">
              Complete check-ups, professional cleaning, and preventive care to keep your teeth healthy and strong.
            </p>
            <div className="relative mt-auto w-full overflow-hidden rounded-2xl">
               <img src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=500&auto=format&fit=crop" alt="General dentistry" className="h-48 w-full object-cover" referrerPolicy="no-referrer" />
               <div className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-brand-primary text-white">
                  <ArrowRight className="h-4 w-4" />
               </div>
            </div>
          </motion.div>

          {/* Card 2: Cosmetic Dentistry */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-start rounded-[32px] bg-[#F4FAFB] p-8 text-left transition-transform hover:scale-[1.02]"
          >
            <h3 className="mb-4 text-xl font-semibold text-heading">Cosmetic Dentistry</h3>
            <p className="mb-8 text-xs leading-relaxed text-body-teal">
              Enhance your smile with whitening, veneers, and aesthetic treatments tailored to your needs.
            </p>
            <div className="relative mt-auto w-full overflow-hidden rounded-2xl">
               <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=500&auto=format&fit=crop" alt="Cosmetic dentistry" className="h-48 w-full object-cover" referrerPolicy="no-referrer" />
               <div className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-brand-primary text-white">
                  <ArrowRight className="h-4 w-4" />
               </div>
            </div>
          </motion.div>

          {/* Card 3: More Services */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col items-start rounded-[32px] bg-brand-accent-pink/50 p-8 text-left transition-transform hover:scale-[1.02]"
          >
            <h3 className="mb-10 text-xl font-semibold leading-tight text-heading">
              More Services For Your <br />
              Perfect Smile
            </h3>
            
            <div className="relative mt-auto w-full overflow-hidden rounded-2xl mb-8">
               <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=400&auto=format&fit=crop" alt="Happy smile" className="h-48 w-full object-cover" referrerPolicy="no-referrer" />
            </div>

            <button className="rounded-full bg-[#6A4D71] px-6 py-2.5 text-xs font-semibold text-white shadow-lg transition-transform hover:scale-105 active:scale-95">
              Explore More Service
            </button>
          </motion.div>
        </div>
      </section>

      {/* Experts Section */}
      <section id="experts" className="relative -mx-4 overflow-hidden bg-bg-hero-panel px-4 py-20 md:-mx-8 md:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-2 text-4xl font-semibold tracking-tight text-heading">Meet Our Experts Doctors</h2>
            <p className="text-sm font-medium text-brand-primary">Finest Industry Experts</p>
          </motion.div>

          <div className="relative">
            {/* Navigation Arrows */}
            <div className="absolute top-1/2 left-0 right-0 z-10 flex -translate-y-1/2 justify-between lg:px-4">
               <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-primary shadow-lg transition-transform hover:scale-110 active:scale-95">
                  <ChevronLeft className="h-6 w-6" />
               </button>
               <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-primary shadow-lg transition-transform hover:scale-110 active:scale-95">
                  <ChevronRight className="h-6 w-6" />
               </button>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {doctors.map((doctor, i) => (
                <motion.div
                  key={doctor.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative h-[400px] overflow-hidden rounded-[24px] bg-[#BEE9F0]"
                >
                  <img src={doctor.image} alt={doctor.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
                  
                  <div className="absolute inset-x-0 bottom-6 flex justify-center px-4">
                    <div className="flex w-full items-center justify-between rounded-2xl bg-white p-4 shadow-xl">
                      <div>
                        <h4 className="text-sm font-bold text-heading">{doctor.name}</h4>
                        <p className="text-[10px] font-medium text-nav-link">{doctor.title}</p>
                      </div>
                      <div className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${doctor.active ? 'bg-brand-primary text-white' : 'bg-gray-100 text-nav-link'}`}>
                        <Plus className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="mx-auto max-w-7xl py-24">
        <div className="mb-16 flex flex-col items-center justify-between gap-6 lg:flex-row lg:items-end">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center text-4xl font-semibold leading-tight tracking-tight text-heading lg:text-left lg:max-w-md"
          >
            Healing Stories From Our Patients
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center text-xs font-medium leading-relaxed text-nav-link lg:text-right lg:max-w-sm"
          >
            Authentic Experiences Shared By Real Patients Who Found Healing, Comfort, And Trust Through Our Expert Care — Transforming Lives, One Treatment At A Time.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col gap-8"
            >
              <p className="text-sm font-semibold leading-relaxed text-heading">
                {t.quote}
              </p>
              
              <div className="h-[1px] w-full border-t border-dashed border-gray-300" />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 overflow-hidden rounded-full ring-2 ring-brand-secondary">
                    <img src={t.avatar} alt={t.author} className="h-full w-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-heading">{t.author}</h4>
                    <p className="text-[10px] font-medium text-nav-link">{t.role}</p>
                  </div>
                </div>
                <div className="text-brand-primary">
                  <Quote className="h-6 w-6 fill-brand-primary opacity-20" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Carousel Dots */}
        <div className="mt-16 flex justify-center gap-2">
          {[0, 1, 2].map((dot) => (
            <div key={dot} className={`h-2 w-2 rounded-full ${dot === 1 ? 'bg-brand-primary w-4' : 'bg-gray-300'}`} />
          ))}
        </div>
      </section>

      {/* CTA Get In Touch Section */}
      <section id="cta" className="mx-auto mb-20 max-w-7xl px-4">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="relative overflow-hidden rounded-[40px] bg-bg-hero-panel px-8 py-16 text-center"
        >
          {/* Abstract background shapes */}
          <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 opacity-10">
            <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M200 10C305 10 390 95 390 200C390 305 305 390 200 390C95 390 10 305 10 200C10 95 95 10 200 10ZM200 50C117 50 50 117 50 200C50 283 117 350 200 350C283 350 350 283 350 200C350 117 283 50 200 50Z" fill="currentColor" />
               <path d="M200 100C255 100 300 145 300 200C300 255 255 300 200 300C145 300 100 255 100 200C100 145 145 100 200 100Z" fill="currentColor" />
            </svg>
          </div>
          <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 opacity-10">
            <svg width="300" height="300" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M200 10C305 10 390 95 390 200C390 305 305 390 200 390C95 390 10 305 10 200C10 95 95 10 200 10Z" fill="currentColor" />
            </svg>
          </div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-4xl font-semibold tracking-tight text-heading"
          >
            Get In Touch With Us
          </motion.h2>

          <div className="mb-8 flex flex-col items-center">
            {/* Avatar Stack */}
            <div className="flex items-center -space-x-4">
              {[
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop"
              ].map((src, i) => (
                <div key={i} className="h-20 w-20 overflow-hidden rounded-full border-4 border-white ring-2 ring-brand-primary/20">
                  <img src={src} alt="Patient" className="h-full w-full object-cover" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs font-bold text-brand-primary">120k+ Satisfied Patient</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-brand-primary px-10 py-4 font-semibold text-white shadow-xl"
            >
              Book Appointment
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full border-2 border-white bg-transparent px-10 py-4 font-semibold text-brand-primary shadow-sm hover:bg-white/10"
            >
              Get Started Today
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Global Footer Section */}
      <footer className="relative -mx-4 overflow-hidden rounded-t-[40px] bg-brand-primary px-8 pt-20 pb-10 md:-mx-8 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.5fr_1fr_1.2fr_1.2fr]">
            
            {/* Branding & Newsletter */}
            <div>
              <div className="mb-6 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white rotate-45">
                  <Plus className="h-5 w-5 text-brand-primary -rotate-45" />
                </div>
                <span className="text-2xl font-bold tracking-tight text-white">Denty</span>
              </div>
              <p className="mb-8 text-sm text-brand-secondary/80">Caring For You Every Step Of The Way.</p>
              
              <div className="relative mb-8 max-w-md">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full rounded-full bg-white/10 px-6 py-4 text-sm text-white placeholder-white/50 border border-white/20 outline-none focus:ring-2 focus:ring-white/30"
                />
                <button className="absolute top-1.5 right-1.5 rounded-full bg-white px-6 py-2.5 text-xs font-bold text-brand-primary transition-transform hover:scale-105 active:scale-95">
                  Subscribe
                </button>
              </div>

              <div className="flex gap-3">
                {[Linkedin, Instagram, Facebook, Twitter].map((Icon, i) => (
                  <button key={i} className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white hover:text-brand-primary">
                    <Icon className="h-4 w-4" />
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-8 text-lg font-semibold text-white">Quick Links</h4>
              <ul className="space-y-4">
                {['Home', 'About', 'Services', 'Doctors', 'Appointments'].map((link) => (
                  <li key={link}><a href="#" className="text-sm font-medium text-brand-secondary/70 hover:text-white transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="mb-8 text-lg font-semibold text-white">Solutions</h4>
              <ul className="space-y-4">
                {['Preventive Care', 'Cosmetic Dentistry', 'Orthodontics', 'Dental Implants', 'Teeth Whitening'].map((link) => (
                  <li key={link}><a href="#" className="text-sm font-medium text-brand-secondary/70 hover:text-white transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>

            {/* Features */}
            <div>
              <h4 className="mb-8 text-lg font-semibold text-white">Features</h4>
              <ul className="space-y-4">
                {['Expert Care', 'Advanced Technology', 'Affordable Plans'].map((link) => (
                  <li key={link}><a href="#" className="text-sm font-medium text-brand-secondary/70 hover:text-white transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative mt-20 flex flex-col items-center justify-between gap-8 border-t border-white/10 pt-10 lg:flex-row">
            {/* Massive Watermark */}
            <div className="absolute inset-0 -top-20 flex select-none items-center justify-center pointer-events-none opacity-[0.03]">
               <span className="text-[200px] font-bold text-white">Denty</span>
            </div>

            <p className="z-10 text-[10px] uppercase tracking-widest text-brand-secondary/40">
              © 2026 Denty Dental Care. All rights reserved.
            </p>

            <div className="z-10 flex gap-8">
              {['Privacy Policy', 'Terms & Conditions', 'Cookies Settings'].map((link) => (
                <a key={link} href="#" className="text-xs font-medium text-brand-secondary/60 hover:text-white transition-colors">{link}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
