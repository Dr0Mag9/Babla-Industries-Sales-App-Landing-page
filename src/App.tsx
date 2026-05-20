import { motion } from 'motion/react';
import {
  ShieldCheck,
  MapPin,
  Package,
  Users,
  FileText,
  Bell,
  RefreshCw,
  UserCircle,
  Activity,
  Download,
  ChevronRight,
  HelpCircle,
  Lock,
  LayoutDashboard,
  Menu,
  X,
  ArrowRight,
  Fingerprint,
  Phone,
  Mail,
  AlertCircle,
  ShieldAlert
} from 'lucide-react';
import { useState } from 'react';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Screenshots', href: '#screenshots' },
    { name: 'Security', href: '#security' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Support', href: '#support' },
  ];

  const features = [
    {
      icon: Fingerprint,
      title: 'Secure Staff Login',
      description: 'Admin-provisioned accounts with restricted access tailored to each assigned role.'
    },
    {
      icon: LayoutDashboard,
      title: 'Dashboard Overview',
      description: 'Quickly view live metrics, pending orders, stock alerts, and daily summaries.'
    },
    {
      icon: Activity,
      title: 'Live Duty Tracking',
      description: 'Clock in to duty to provide real-time updates and status for managers.'
    },
    {
      icon: MapPin,
      title: 'Location Visibility',
      description: 'Map-based verification ensures field routes and visits are properly logged.'
    },
    {
      icon: Package,
      title: 'Product Catalog',
      description: 'Browse current inventory, check stock levels, and verify pricing before checkout.'
    },
    {
      icon: FileText,
      title: 'Order Management',
      description: 'Create, review, and submit orders directly from the field with immediate sync.'
    },
    {
      icon: Users,
      title: 'Customer Records',
      description: 'Access historical visit records, follow-up tasks, and pipeline stages.'
    },
    {
      icon: RefreshCw,
      title: 'Offline Sync',
      description: 'Work seamlessly offline and sync changes automatically once connection returns.'
    },
    {
      icon: Bell,
      title: 'Notifications',
      description: 'Receive important broadcast alerts, order approvals, and low stock warnings.'
    },
  ];

  const steps = [
    { title: 'Install & Setup', description: 'Download the app from the secure portal and install it on your device.' },
    { title: 'Sign In', description: 'Log in using the official credentials provided by your system administrator.' },
    { title: 'Allow Access', description: 'Grant necessary permissions for location, camera, and notifications.' },
    { title: 'Start Duty', description: 'Begin your shift on the dashboard to enable route planning and tracking.' },
    { title: 'Field Operations', description: 'Visit customers, browse the catalog, log orders, and upload documents.' },
    { title: 'Sync & Complete', description: 'Sync offline data, review daily progress, and sign out at shift end.' },
  ];

  const faqs = [
    {
      q: "Who can log in to the app?",
      a: "Only authorized staff members of Babla Group of Industries with admin-provided accounts can access the platform."
    },
    {
      q: "Can I create my own account?",
      a: "No, self-registration is disabled for security reasons. Your account must be provisioned by a manager or administrator."
    },
    {
      q: "What should I do if I forget my password?",
      a: "Contact the internal support team or your direct administrator to request a secure password reset."
    },
    {
      q: "Can I use the app offline?",
      a: "Yes. The app queues all work locally when you lose internet connection. Once you regain signal, navigate to the dashboard and tap 'Sync Now'."
    },
    {
      q: "Who can see my location?",
      a: "Your location is visible only to authorized managers and administrators, and solely during your active on-duty hours to verify field routes."
    },
    {
      q: "How do I upload documents?",
      a: "During an active task or order, step into the attachments section to use your device camera or file picker to upload receipts and photos."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-['Inter'] text-slate-900 scroll-smooth selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <header className="fixed top-0 w-full bg-white/70 backdrop-blur-xl border-b border-slate-100 px-6 py-5 flex items-center justify-between shrink-0 z-50 transition-all duration-300">
        <div className="max-w-7xl w-full mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <img src="/assets/apk/logo.png" alt="Babla Group Logo" className="relative w-11 h-11 object-contain bg-white rounded-xl shadow-sm border border-slate-100 p-1" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight leading-none text-slate-900">Babla Group</span>
              <span className="text-xs text-blue-600 font-semibold uppercase tracking-wider leading-none mt-1">Of Industries</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex gap-8 text-sm font-semibold tracking-wide text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-blue-600 transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <div className="text-xs font-semibold text-slate-500 border border-slate-200 px-4 py-1.5 rounded-full">
              Enterprise Portal
            </div>
            <a
              href="/assets/apk/BablaSalesApp.apk"
              download="BablaSalesApp.apk"
              className="bg-blue-600 text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-blue-700 transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              Download App
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-2xl lg:hidden overflow-hidden"
          >
            <div className="px-6 py-8 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-sm font-bold uppercase tracking-wider text-slate-600 hover:text-blue-600"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-100">
                <a
                  href="/assets/apk/BablaSalesApp.apk"
                  download="BablaSalesApp.apk"
                  className="block w-full text-center bg-blue-600 text-white font-bold py-4 rounded-xl"
                >
                  Download APK
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 bg-white overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-blue-50 rounded-full blur-[120px] opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-slate-50 rounded-full blur-[100px] opacity-50 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:w-1/2"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-8 border border-blue-100 shadow-sm">
                <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                Official Internal Release v1.1.1
              </div>
              <h1 className="text-5xl lg:text-7xl font-['Playfair_Display'] font-black text-slate-900 mb-8 leading-[1.1]">
                Empowering the <br />
                <span className="italic text-blue-600">Future of Sales.</span>
              </h1>
              <p className="text-lg text-slate-600 font-normal mb-10 max-w-xl leading-relaxed">
                A high-precision mobile command center designed for the elite sales force of Babla Group of Industries. Integrated logistics, real-time tracking, and seamless order orchestration.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <a
                  href="/assets/apk/BablaSalesApp.apk"
                  download="BablaSalesApp.apk"
                  className="group relative bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all hover:bg-blue-600 hover:shadow-[0_20px_50px_-20px_rgba(37,99,235,0.5)] active:scale-95 flex items-center justify-center overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Download className="w-5 h-5 group-hover:animate-bounce" />
                    Download APK
                  </span>
                </a>
                <a
                  href="#support"
                  className="bg-white text-slate-900 border border-slate-200 px-10 py-5 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all hover:bg-slate-50 hover:border-slate-300 flex items-center justify-center gap-2 shadow-sm"
                >
                  Internal Guide
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              </div>
              <div className="mt-12 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 shadow-sm overflow-hidden flex items-center justify-center text-xs font-bold text-slate-500">
                      U{i}
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-blue-600 shadow-sm flex items-center justify-center text-xs font-bold text-white">
                    +2k
                  </div>
                </div>
                <div className="text-sm font-medium text-slate-500">
                  Active Field Personnel
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="lg:w-1/2 perspective-1000"
            >
              <div className="relative max-w-[400px] mx-auto group">
                {/* Glow behind phone */}
                <div className="absolute inset-0 bg-blue-500 blur-[100px] opacity-20 scale-110 group-hover:opacity-30 transition-opacity"></div>

                {/* 3D Phone Mockup Frame */}
                <div className="relative z-10 bg-[#0f172a] rounded-[3.5rem] p-4 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] border-[12px] border-slate-900 overflow-hidden ring-1 ring-white/10">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-slate-900 rounded-b-3xl z-20"></div>

                  {/* App Screen Content */}
                  <div className="relative bg-slate-100 h-[600px] rounded-[2.5rem] overflow-hidden flex flex-col items-center justify-center">
                    <img
                      src="/assets/Babla Group Of Industries .png"
                      alt="App Interface Preview"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8 text-white">
                      <p className="text-xs font-semibold uppercase tracking-wider mb-2 opacity-90">Dashboard v2.4</p>
                      <h4 className="text-2xl font-['Playfair_Display'] font-bold leading-tight">Elite Sales Performance Management</h4>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-12 top-1/4 bg-white p-4 rounded-2xl shadow-2xl border border-slate-100 hidden lg:block"
                >
                  <Activity className="text-blue-600 w-8 h-8" />
                </motion.div>
                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -left-12 bottom-1/4 bg-white p-4 rounded-2xl shadow-2xl border border-slate-100 hidden lg:block"
                >
                  <MapPin className="text-blue-600 w-8 h-8" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section id="overview" className="py-32 bg-slate-50/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-4">Strategic Framework</h2>
            <h3 className="text-4xl lg:text-5xl font-['Playfair_Display'] font-bold text-slate-900 mb-6">Designed for Operational Excellence</h3>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
              Babla Group of Industries has built more than just an app; we've engineered a digital ecosystem that streamlines the entire sales lifecycle from the field to the boardroom.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {[
              { icon: LayoutDashboard, title: 'Operations Dashboard', desc: 'Real-time visibility into field activities, order flows, and performance KPIs through a centralized portal.' },
              { icon: Package, title: 'Intelligent Inventory', desc: 'Dynamic product catalog with live stock synchronization across all regional distribution centers.' },
              { icon: Activity, title: 'Precision Tracking', desc: 'Military-grade location verification and attendance logging ensuring total operational accountability.' }
            ].map((item, i) => (
              <div key={i} className="group bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-20 gap-8 flex-wrap lg:flex-nowrap">
            <div className="max-w-2xl">
              <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">Functional Capability</h2>
              <h3 className="text-4xl font-['Playfair_Display'] font-bold text-slate-900 mb-4">Core Ecosystem Features</h3>
              <p className="text-lg text-slate-600">Engineered for reliability, security, and extreme efficiency in high-pressure field environments.</p>
            </div>
            <a href="#download" className="text-blue-600 font-semibold text-sm flex items-center gap-2 group border-b-2 border-transparent hover:border-blue-600 pb-1 transition-all">
              Explore All Features <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="group relative p-8 rounded-3xl border border-slate-100 bg-slate-50/30 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform shrink-0">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 leading-tight">{feature.title}</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Interface Tour */}
      <section id="screenshots" className="py-32 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center mb-24">
            <h2 className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-3">Experience</h2>
            <h3 className="text-4xl lg:text-5xl font-['Playfair_Display'] font-bold mb-6">Next-Generation UI</h3>
            <p className="text-slate-300 max-w-2xl text-lg leading-relaxed">
              A meticulously crafted mobile interface that eliminates friction, enabling our teams to focus on what matters: **building relationships.**
            </p>
          </div>

          <div className="flex gap-12 overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar">
            {[
              { id: 1, label: 'Authentication', title: 'Secure Gateway', img: '/assets/Babla Group Of Industries (2).png' },
              { id: 2, label: 'Dashboard', title: 'Intelligence Hub', img: '/assets/Babla Group Of Industries (3).png' },
              { id: 3, label: 'Catalog', title: 'Market Access', img: '/assets/Babla Group Of Industries (4).png' },
              { id: 4, label: 'Logging', title: 'Data Integrity', img: '/assets/Babla Group Of Industries (5).png' }
            ].map((screen) => (
              <div key={screen.id} className="snap-center shrink-0 w-[300px] group">
                <div className="aspect-[9/19] bg-[#1a2234] rounded-[3rem] border-[8px] border-[#0a101f] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] relative">
                  <img
                    src={screen.img}
                    alt={screen.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      e.currentTarget.src = `https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=600&h=1200`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
                    <p className="text-xs font-semibold uppercase tracking-wider text-blue-300 mb-1">{screen.label}</p>
                    <h4 className="text-xl font-bold text-white">{screen.title}</h4>
                  </div>
                </div>
                <p className="text-center mt-6 text-sm font-semibold text-slate-400 group-hover:text-blue-400 transition-colors">
                  Module 0{screen.id}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section id="how-it-works" className="py-32 bg-slate-50/50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">01. How to Use</h2>
            <h3 className="text-4xl font-['Playfair_Display'] font-bold text-slate-900 mb-6">Standardized Field Workflow</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              A simplified daily journey for our 200+ team members. Follow these steps to standardize your field work.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6 bg-white p-8 rounded-3xl shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-slate-100 items-start group hover:-translate-y-1 transition-all">
                <span className="flex items-center justify-center w-12 h-12 bg-blue-50 text-blue-600 font-bold text-xl rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                  {index + 1}
                </span>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security and Access */}
      <section id="security" className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-4">03. Security & Compliance</h2>

          <div className="bg-red-50 border border-red-100 p-8 rounded-3xl mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
              <ShieldAlert className="w-64 h-64 text-red-600" />
            </div>
            <div className="relative z-10">
              <ShieldAlert className="w-12 h-12 text-red-600 mx-auto mb-6" />
              <p className="text-base text-red-800 font-bold mb-3 uppercase tracking-wide">Authorized Access Only</p>
              <p className="text-base text-red-700 leading-relaxed max-w-2xl mx-auto">
                This application is for official Babla Group staff only. All activity, including location tracking and data entry, is logged for administrative review and operational integrity. Accounts are provisioned exclusively by central IT.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 text-left">
            <div className="bg-slate-50/50 p-8 rounded-3xl border border-slate-100 flex gap-5">
              <Lock className="w-8 h-8 text-blue-600 shrink-0" />
              <div>
                <h4 className="font-bold text-slate-900 text-base mb-2">Controlled Credentials</h4>
                <p className="text-sm text-slate-600 leading-relaxed">Passwords and accounts are managed by IT. Do not share your login details with anyone.</p>
              </div>
            </div>
            <div className="bg-slate-50/50 p-8 rounded-3xl border border-slate-100 flex gap-5">
              <MapPin className="w-8 h-8 text-blue-600 shrink-0" />
              <div>
                <h4 className="font-bold text-slate-900 text-base mb-2">Data Privacy</h4>
                <p className="text-sm text-slate-600 leading-relaxed">Location tracking and document uploads are utilized securely and solely for internal company logistics.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roles and Access */}
      <section id="roles" className="py-32 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">04. Internal Audience</h2>
              <h3 className="text-4xl font-['Playfair_Display'] font-bold text-slate-900 mb-6">Roles and Access</h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Each role sees the same business platform but uses it with different responsibilities.
              </p>

              <div className="space-y-4">
                {[
                  { role: 'Admin', desc: 'Creates staff accounts, monitors all activity, reviews reports, and oversees the entire sales workflow.' },
                  { role: 'SO', desc: 'Handles day-to-day sales tasks, visits customers, creates orders, and updates field activity.' },
                  { role: 'RSM', desc: 'Reviews regional activity, tracks field progress, and validates team performance.' },
                  { role: 'ASM', desc: 'Monitors area operations, sales performance, and staff execution.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-5 p-6 rounded-3xl bg-slate-50 border border-slate-100 items-start hover:bg-white hover:shadow-lg hover:border-blue-100 transition-all group">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <UserCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-slate-900 mb-1">{item.role}</h4>
                      <p className="text-base text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="bg-slate-900 p-12 rounded-[3rem] border border-slate-800 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-600 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-8 border border-blue-500/30">
                    <ShieldCheck className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-6">Access Rules</h3>
                  <ul className="space-y-5">
                    <li className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      </div>
                      <p className="text-slate-300 text-base leading-relaxed">Only administrators create accounts and assign credentials.</p>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      </div>
                      <p className="text-slate-300 text-base leading-relaxed">Staff should never share their username or password.</p>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      </div>
                      <p className="text-slate-300 text-base leading-relaxed">The app may request location, camera, files, and notification permissions when a function needs them.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-32 bg-slate-50/50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">Quick Help</h2>
            <h3 className="text-4xl font-['Playfair_Display'] font-bold text-slate-900 mb-6">Frequently Asked Questions</h3>
            <p className="text-lg text-slate-600">Practical answers for daily operations and troubleshooting.</p>
          </div>

          <div className="bg-white p-8 rounded-[2.5rem] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-slate-100 space-y-6">
            {faqs.map((faq, index) => (
              <details key={index} className="border-b border-slate-100 pb-6 group last:border-0 last:pb-0">
                <summary className="font-bold text-lg cursor-pointer list-none flex justify-between items-center text-slate-900">
                  {faq.q}
                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-open:bg-blue-50 transition-colors shrink-0">
                    <ChevronRight className="w-5 h-5 text-slate-400 group-open:rotate-90 group-open:text-blue-600 transition-transform" />
                  </div>
                </summary>
                <p className="mt-4 text-base text-slate-600 leading-relaxed pr-12">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section id="download" className="py-32 bg-slate-900 text-center relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute inset-x-0 top-0 h-px bg-white/10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-5xl lg:text-6xl font-['Playfair_Display'] font-bold text-white mb-8">Ready to hit the field?</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Install the official application to access your daily tasks, product catalog, and reporting tools.
          </p>
          <a
            href="/assets/apk/BablaSalesApp.apk"
            download="BablaSalesApp.apk"
            className="inline-flex h-16 items-center justify-center gap-4 rounded-2xl bg-blue-600 px-12 text-lg font-bold text-white shadow-[0_20px_50px_-20px_rgba(37,99,235,0.5)] hover:bg-blue-500 transition hover:scale-105 active:scale-95"
          >
            <Download className="w-6 h-6" />
            Download App Now
          </a>
          <p className="mt-8 text-sm text-slate-400 font-medium tracking-wide">
            Strictly for authorized Babla Group staff only.
          </p>
        </div>
      </section>

      {/* Internal Support Section */}
      <section id="support" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-900 rounded-[4rem] p-12 lg:p-24 overflow-hidden relative group">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[150px] opacity-10 group-hover:opacity-20 transition-opacity"></div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1">
                <h2 className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-4">Staff Support</h2>
                <h3 className="text-4xl lg:text-5xl font-['Playfair_Display'] font-bold text-white mb-6 leading-tight">
                  Global IT & Strategic <br /> Training Hub
                </h3>
                <p className="text-lg text-slate-300 mb-12 max-w-xl leading-relaxed">
                  Every Babla Industries officer is equipped with total support. Access deep training resources or contact our specialist IT team for technical assistance.
                </p>

                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-blue-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Direct Email</h4>
                      <a href="mailto:designimcbuldana@gmail.com" className="text-base font-semibold text-white hover:text-blue-400 transition-colors">
                        designimcbuldana@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-blue-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">HQ Hotline</h4>
                      <a href="tel:+919822229440" className="text-base font-semibold text-white hover:text-blue-400 transition-colors">
                        +91 98222 29440
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-auto">
                <div className="bg-white/5 backdrop-blur-sm p-10 rounded-[3rem] border border-white/10 flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center mb-8 shadow-2xl shadow-blue-600/30">
                    <FileText className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-white font-bold text-xl mb-3">Operations Manual</h4>
                  <p className="text-slate-300 text-sm mb-8 max-w-[220px] leading-relaxed">
                    Download the comprehensive v1.1.1 operational guidelines for your daily workflows.
                  </p>
                  <a
                    href="/assets/BABLA GROUP OF  INDUSTRIES - SALES APP.pdf"
                    download="BABLA GROUP OF INDUSTRIES - SALES APP.pdf"
                    className="block w-full text-center bg-blue-600 text-white font-semibold text-sm py-4 px-8 rounded-xl hover:bg-blue-500 transition-all active:scale-95 shadow-lg"
                  >
                    Download PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-500">
            <div>
              &copy; 2026 Babla Group Of Industries. Strategic Asset. Developed By{' '}
              <a
                href="http://digitalgrowthgurus.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-semibold"
              >
                Digital Growth Gurus
              </a>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-3 h-3 text-blue-600" />
              Encrypted Corporate Gateway
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

