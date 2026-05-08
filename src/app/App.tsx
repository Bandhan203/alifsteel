import { motion } from 'motion/react';
import { useState } from 'react';
import imgWarehouseView1 from '../imports/Html→Body-1/2a53d438f688305c612dff3be1257acdfd26a9b0.png';
import imgFacilityView from '../imports/Html→Body-1/3ca2956628c37371ec1fe28742abcdaff543166d.png';
import imgProductImage1 from '../imports/Html→Body-1/b4f5892b30afdffc01e58948c326545017619fa0.png';
import imgProductionStock from '../imports/Html→Body-1/c9a5804adf5e69ac235b6ab3eccd59675bde7337.png';
import imgProductImage3 from '../imports/Html→Body-1/d69bab64075af79fad0bf49b6dd29299ce293ef2.png';
import imgAlifLogoSmall from '../imports/Html→Body-1/d74d545a5d9248647132c2c5961bcd9f84ea9d1b.png';
import imgProductImage2 from '../imports/Html→Body-1/dbc91cb3bc2af6cbc704640aad61be07f5ae01a5.png';
import svgPaths from '../imports/Html→Body-1/svg-qz78m2vtk9';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } },
};

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const navLinks = ['HOME', 'ABOUT', 'PRODUCTS', 'GALLERY', 'TEAM MEMBERS', 'CONTACT US'];
  const features = [
    {
      svgPath: svgPaths.p1528bd00,
      title: 'Superb Weather Resistance',
      desc: 'Built to withstand the harshest environmental conditions without degrading.',
    },
    {
      svgPath: svgPaths.p48d5200,
      title: 'Excellent Insulation',
      desc: 'Superior thermal properties to maintain optimal internal temperatures.',
    },
    {
      svgPath: null,
      customPath: 'M5 13L9 17L19 7',
      title: 'Easy Handling',
      desc: 'Designed for efficient transportation and streamlined installation processes.',
    },
    {
      svgPath: svgPaths.p1c4d6800,
      title: 'High Elasticity',
      desc: 'Flexible enough for varied architectural requirements while maintaining strength.',
    },
    {
      svgPath: svgPaths.p156ae100,
      title: 'Tough & Durable',
      desc: 'Long-lasting structural integrity for demanding industrial applications.',
    },
    {
      svgPath: svgPaths.p24991e60,
      title: 'Prime Quality',
      desc: 'Manufactured using premium grade materials and rigorous quality control.',
    },
  ];

  const stats = [
    { value: '64', label: 'DISTRICT COVERAGE', suffix: '' },
    { value: '500', label: 'EMPLOYEES', suffix: '+' },
    { value: '120', label: 'DEALERS', suffix: '+' },
    { value: '24', label: 'SUPPORT', suffix: '/7' },
  ];

  const products = [
    { img: imgProductImage1, title: 'Corrugated Sheets' },
    { img: imgProductImage2, title: 'Coating Process' },
    { img: imgProductImage3, title: 'Red Profile Sheets' },
    { img: imgWarehouseView1, title: 'Modern Facility' },
    { img: imgFacilityView, title: 'Factory Aerial View' },
    { img: imgProductionStock, title: 'Coil Storage' },
  ];

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* ── NAVIGATION ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/90 border-b border-[#f3f4f6]">
        <div className="max-w-[1280px] mx-auto px-8 h-[80px] flex items-center justify-between">
          {/* Logo */}
          <div className="h-12 w-[185px] relative">
            <img src={imgAlifLogoSmall} alt="Alif Steel Mills" className="h-full w-full object-contain" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0">
            {navLinks.map((link, i) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                className={`pl-8 text-[14px] tracking-[0.35px] font-medium transition-colors hover:text-[#2e7d32] ${
                  i === 0
                    ? 'text-[#2e7d32] border-b-2 border-[#e5e7eb] pb-1.5'
                    : 'text-[#4b5563]'
                }`}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 text-[#4b5563]"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-[#f3f4f6] px-8 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-[14px] tracking-[0.35px] font-medium text-[#4b5563] hover:text-[#2e7d32] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ── HERO SECTION ── */}
      <section id="home" className="pt-[80px] relative overflow-hidden" style={{ minHeight: '92vh' }}>
        {/* Full-bleed background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1770198770388-a0d37db043ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGZhY3RvcnklMjBpbmR1c3RyaWFsJTIwcGxhbnQlMjBibHVlJTIwc2t5fGVufDF8fHx8MTc3ODE2NjUyMnww&ixlib=rb-4.1.0&q=80&w=1920"
            alt="Steel plant"
            className="w-full h-full object-cover object-center"
          />
          {/* Left-side white gradient so text is readable */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, rgba(255,255,255,0.94) 0%, rgba(255,255,255,0.85) 32%, rgba(255,255,255,0.35) 58%, rgba(255,255,255,0) 100%)',
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1280px] mx-auto px-8 flex items-center" style={{ minHeight: 'calc(92vh - 80px)' }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6 max-w-[540px]"
          >
            <div
              className="text-[52px] leading-[62px] tracking-[-1px]"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}
            >
              <p className="text-[#111827] mb-0">Building</p>
              <p className="text-[#111827] mb-0">
                <span className="text-[#2e7d32]">Excellence</span>
                <span> in Steel</span>
              </p>
            </div>

            <p className="text-[#374151] text-[17px] leading-[28px]">
              Quality, Durability, and Innovation in Every Sheet.
            </p>

            <div className="pt-2">
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: '0 8px 30px rgba(46,125,50,0.35)' }}
                whileTap={{ scale: 0.97 }}
                className="bg-[#2e7d32] text-white px-8 py-4 rounded-md text-[16px] font-semibold shadow-lg hover:bg-[#256427] transition-colors"
              >
                Explore Our Products
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT US SECTION ── */}
      <section id="about" className="bg-white py-20 px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">

            {/* Left: Single image with logo card overlay */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative shrink-0 w-full lg:w-[420px]"
            >
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={imgWarehouseView1}
                  alt="Steel coils warehouse"
                  className="w-full h-[380px] object-cover"
                />
              </div>
              {/* Alif logo card – bottom-right */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl px-6 py-4 shadow-2xl border border-[#f3f4f6] z-10 flex flex-col gap-1">
                <img src={imgAlifLogoSmall} alt="Alif Logo" className="h-10 w-auto object-contain" />
                <p className="text-[#4b5563] text-[13px] font-semibold">Est. 2014</p>
              </div>
            </motion.div>

            {/* Right: Text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col gap-5 flex-1 lg:pl-8 pt-8 lg:pt-0"
            >
              <span className="text-[#4b5563] text-[13px] font-bold tracking-[0.7px] uppercase">ABOUT US</span>

              <h2
                className="text-[#111827] text-[34px] leading-[42px] tracking-[-0.5px]"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}
              >
                About Us
              </h2>

              <p className="text-[#4b5563] text-[16px] leading-[26px]">
                Alif Steel Mills Ltd. is a company renowned with high durability and Innovation in Every Sheet.
                This accommodating maintains the neatness and deliver steel processing plasms.
              </p>

              <p className="text-[#4b5563] text-[16px] leading-[26px]">
                Our refined typography in show a monthly steel colossal with company minimal steel productas, and
                demiculates range and centuries. Within asistib or our complie-ce, our steel company, anostae
                looix increatine a compatis of incellaner and every product.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CORE FEATURES SECTION ── */}
      <section id="features" className="bg-[#111827] py-24 px-8">
        <div className="max-w-[1280px] mx-auto">
          {/* Header */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="flex flex-col gap-4 mb-16"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-[#1f2937] px-4 py-1.5 rounded-full self-start">
              <div className="w-2 h-2 rounded-full bg-[#2e7d32]" />
              <span className="text-[#d1d5db] text-[14px] font-bold tracking-[0.7px] uppercase">WHY CHOOSE US</span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-white text-[32px] leading-[40px] tracking-[-0.32px]"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
            >
              Engineered for Perfection
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-[#9ca3af] text-[18px] leading-[28px] max-w-[672px]">
              Our core features define the quality and reliability of our steel products.
            </motion.p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((f, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="relative pl-7 border-l-2 border-[#1f2937] flex flex-col gap-3"
              >
                {/* Icon box */}
                <div className="bg-[#1f2937] rounded-xl w-12 h-12 flex items-center justify-center shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d={f.svgPath ?? f.customPath}
                      stroke="#2E7D32"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <h3
                  className="text-white text-[24px] leading-[32px] pt-3"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
                >
                  {f.title}
                </h3>

                <p className="text-[#9ca3af] text-[16px] leading-[26px]">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PRODUCT SHOWCASE SECTION ── */}
      <section id="products" className="bg-white py-24 px-8">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
          {/* Header */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="flex flex-col items-center gap-4"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-[#f3f4f6] px-4 py-1.5 rounded-full">
              <div className="w-2 h-2 rounded-full bg-[#2e7d32]" />
              <span className="text-[#4b5563] text-[14px] font-bold tracking-[0.7px] uppercase">OUR PORTFOLIO</span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-[#111827] text-[32px] leading-[40px] tracking-[-0.32px] text-center"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
            >
              Featured Products &amp; Facilities
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-[#4b5563] text-[18px] leading-[28px] text-center max-w-[672px]">
              Explore our range of high-quality steel products and state-of-the-art manufacturing facilities.
            </motion.p>
          </motion.div>

          {/* Products Grid */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {products.map((p, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-2xl shadow-sm cursor-pointer"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(17,24,39,0.8)] via-[rgba(17,24,39,0)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p
                    className="text-white text-[18px] leading-[28px]"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
                  >
                    {p.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View Gallery Button */}
          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-white text-[#374151] text-[16px] font-semibold px-8 py-3 rounded-full border border-[#d1d5db] hover:bg-gray-50 transition-colors shadow-sm"
            >
              View Full Gallery
            </motion.button>
          </div>
        </div>
      </section>

      {/* ── STATS SECTION ── */}
      <section className="bg-[#2e7d32] py-20 px-8 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none" />
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`flex flex-col gap-2 items-start ${i > 0 ? 'lg:border-l lg:border-white/20 lg:pl-12' : ''}`}
              >
                <div className="flex items-end gap-1">
                  <span
                    className="text-white text-[60px] leading-[60px]"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}
                  >
                    {s.value}
                  </span>
                  {s.suffix && (
                    <span
                      className="text-white text-[30px] leading-[36px] pb-2"
                      style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}
                    >
                      {s.suffix}
                    </span>
                  )}
                </div>
                <p className="text-[#dcfce7] text-[14px] font-medium tracking-[0.7px] uppercase">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT SECTION ── */}
      <section id="contact-us" className="bg-[#f9fafb] py-24 px-8">
        <div className="max-w-[1280px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="grid lg:grid-cols-2">
              {/* Left: Dark info panel */}
              <div className="bg-[#111827] px-16 py-20 flex flex-col justify-center">
                {/* GET IN TOUCH badge */}
                <div className="inline-flex items-center gap-2 bg-[#1f2937] px-4 py-1.5 rounded-full self-start mb-6">
                  <div className="w-2 h-2 rounded-full bg-[#2e7d32]" />
                  <span className="text-[#d1d5db] text-[14px] font-bold tracking-[0.7px] uppercase">GET IN TOUCH</span>
                </div>

                <h2
                  className="text-white text-[32px] leading-[40px] tracking-[-0.32px] mb-6"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
                >
                  Let's Build Something Great Together
                </h2>

                <p className="text-[#9ca3af] text-[18px] leading-[28px] mb-12">
                  Have questions about our products or need a custom quote? Fill out the form, and our dedicated team
                  will get back to you promptly.
                </p>

                {/* Contact items */}
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#1f2937] rounded-full w-12 h-12 flex items-center justify-center shrink-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d={svgPaths.pe96c750} stroke="#2E7D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <p
                        className="text-white text-[16px] leading-[24px]"
                        style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
                      >
                        Email Us
                      </p>
                      <p className="text-[#9ca3af] text-[16px] leading-[24px]">info@alifsteel.com.bd</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-[#1f2937] rounded-full w-12 h-12 flex items-center justify-center shrink-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d={svgPaths.p467c778} stroke="#2E7D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <p
                        className="text-white text-[16px] leading-[24px]"
                        style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
                      >
                        Call Us
                      </p>
                      <p className="text-[#9ca3af] text-[16px] leading-[24px]">+880 1708-445610</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Form */}
              <div className="bg-white px-16 pt-16 pb-20">
                <form
                  className="flex flex-col gap-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert('Message sent!');
                  }}
                >
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-[#374151] text-[14px] font-medium">Name / Company</label>
                      <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl px-4 py-4">
                        <input
                          type="text"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-transparent text-[16px] text-[#111827] placeholder-[#6b7280] outline-none"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[#374151] text-[14px] font-medium">Phone Number</label>
                      <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl px-4 py-4">
                        <input
                          type="tel"
                          placeholder="+880 1..."
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-transparent text-[16px] text-[#111827] placeholder-[#6b7280] outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[#374151] text-[14px] font-medium">Email Address</label>
                    <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl px-4 py-4">
                      <input
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-transparent text-[16px] text-[#111827] placeholder-[#6b7280] outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[#374151] text-[14px] font-medium">Your Message</label>
                    <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl px-4 py-4">
                      <textarea
                        placeholder="How can we help you?"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-transparent text-[16px] text-[#111827] placeholder-[#6b7280] outline-none resize-none"
                      />
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-[#2e7d32] text-white text-[16px] font-semibold py-4 rounded-xl w-full hover:bg-[#256427] transition-colors shadow-sm"
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#111827] border-t border-[#1f2937] py-16 px-8">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
          {/* Top row */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-[#1f2937]">
            {/* Brand */}
            <div className="flex flex-col gap-6">
              <div className="bg-white rounded-xl p-3 inline-block w-[185px]">
                <img src={imgAlifLogoSmall} alt="Alif Steel Mills" className="h-12 w-full object-contain" />
              </div>
              <p className="text-[#9ca3af] text-[14px] leading-[22px]">
                ALIF STEEL MILLS LTD established in the year 2014, is a proud and promising company manufacturing
                best quality color steel.
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col gap-6">
              <h4
                className="text-white text-[14px] tracking-[0.7px] uppercase"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
              >
                QUICK LINKS
              </h4>
              <ul className="flex flex-col gap-3">
                {['Home', 'About Us', 'Our Products', 'Gallery', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[#9ca3af] text-[14px] leading-[20px] hover:text-[#2e7d32] transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Locations – spans 2 cols */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <h4
                className="text-white text-[14px] tracking-[0.7px] uppercase"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
              >
                LOCATIONS
              </h4>
              <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <p className="text-[#d1d5db] text-[14px] font-bold leading-[20px]">Corporate Office:</p>
                  <p className="text-[#9ca3af] text-[14px] leading-[22px]">
                    Alif Tower (6th - 8th floor)
                    <br />
                    House # 49, Road # 03, Sector # 03
                    <br />
                    Uttara Model Town, Dhaka - 1230
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-[#d1d5db] text-[14px] font-bold leading-[20px]">Factory Location:</p>
                  <p className="text-[#9ca3af] text-[14px] leading-[22px]">
                    Pouni, Elenga
                    <br />
                    Kalihati, Tangail
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[#9ca3af] text-[14px] leading-[20px]">
              © 2024 Alif Steel Mills Ltd. All rights reserved.
            </p>
            <p className="text-[#9ca3af] text-[14px] leading-[20px]">
              Developed by CODETREE
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}