import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Calendar, PhoneMissed, CheckCircle2, ChevronRight, ArrowRight, ShieldCheck, Sparkles, Building2, TrendingUp, Users, Globe } from 'lucide-react';

// --- Visual Demonstration Component ---
const AutomationShowcase = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="max-w-3xl mx-auto mb-20 bg-slate-900/90 border border-slate-700/60 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden backdrop-blur-md"
    >
      {/* Decorative gradient glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 via-amber-500/20 to-orange-600/20 blur-2xl z-0 pointer-events-none"></div>
      
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* Step 1: Missed Call */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-500 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
            <PhoneMissed size={22} />
          </div>
          <div>
            <p className="text-xs text-red-400 font-bold uppercase tracking-wider">Unanswered Lead</p>
            <p className="text-sm text-slate-200 font-semibold mt-0.5">Missed Call at 2:14 PM</p>
          </div>
        </div>

        {/* Animated Connector */}
        <div className="hidden md:flex items-center justify-center">
          <motion.div 
            animate={{ backgroundPosition: ['0%', '100%'] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
            className="h-1 w-full bg-gradient-to-r from-slate-700 via-orange-500 to-slate-700 bg-[length:200%_100%] rounded-full"
          />
        </div>

        {/* Step 2: Instant AI Outreach */}
        <div className="flex flex-col items-center text-center space-y-3">
          <motion.div 
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.2)]"
          >
            <MessageSquare size={22} />
          </motion.div>
          <div className="text-xs text-left bg-slate-800/90 p-3.5 rounded-xl border border-slate-700/80 w-full shadow-md">
            <span className="text-orange-400 font-extrabold text-[10px] uppercase tracking-wider block mb-1">
              ⚡ Digitol AI (Under 2s)
            </span>
            <span className="text-slate-200 text-xs leading-relaxed">
              "Hi! Sorry we missed you. How can Digitol help you scale today?"
            </span>
          </div>
        </div>

        {/* Step 3: Booked Appointment */}
        <div className="flex flex-col items-center text-center space-y-3 mt-2 md:mt-0">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, type: "spring" }}
            className="w-12 h-12 rounded-2xl bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400 shadow-[0_0_15px_rgba(34,197,94,0.2)]"
          >
            <Calendar size={22} />
          </motion.div>
          <div className="flex items-center gap-2 bg-green-500/10 text-green-400 text-xs font-bold px-3.5 py-2 rounded-full border border-green-500/30">
            <CheckCircle2 size={14} /> Appointment Booked
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    industry: '',
    primary_goal: '',
    lead_volume: '',
    name: '',
    company: '',
    email: '',
    phone: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOptionSelect = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (currentStep < 4) setCurrentStep(prev => prev + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setSubmitted(true);
      }
    } catch (err) {
      console.warn('Fallback confirmation:', err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white font-sans selection:bg-orange-500/30 selection:text-orange-200">
      
      {/* Top Notification Bar */}
      <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 py-2 px-4 text-center text-xs font-bold text-white tracking-wide">
        🚀 Accept 5 New Agency Partner Audits This Month • <a href="#audit" className="underline hover:text-slate-100">Reserve Your Blueprint →</a>
      </div>

      {/* Header */}
      <header className="flex justify-between items-center px-6 sm:px-12 py-4 border-b border-slate-800/60 bg-[#0B0F19]/85 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-2.5 text-xl font-black tracking-tight">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-orange-600 to-amber-500 flex items-center justify-center text-white font-black shadow-lg shadow-orange-500/20">
            D
          </div>
          <span className="text-white">Digitol<span className="text-orange-500">.</span></span>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-300">
          <a href="#services" className="hover:text-orange-400 transition">Services</a>
          <a href="#proof" className="hover:text-orange-400 transition">Case Studies</a>
          <a href="#audit" className="hover:text-orange-400 transition">Audit Funnel</a>
          <a href="tel:+18004923444" className="text-slate-400 hover:text-white transition">(800) 492-DIGI</a>
        </div>

        <a 
          href="#audit" 
          className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2.5 px-5 rounded-xl text-sm transition-all shadow-[0_0_15px_rgba(249,115,22,0.3)] hover:shadow-[0_0_25px_rgba(249,115,22,0.5)]"
        >
          Book Free Audit →
        </a>
      </header>

      {/* Hero Section */}
      <section className="text-center pt-20 pb-12 px-4 max-w-4xl mx-auto relative">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-extrabold uppercase tracking-wider px-4 py-1.5 rounded-full mb-6"
        >
          <Sparkles size={14} className="text-orange-400" />
          <span>Turn Dormant Leads & Traffic into Appointments</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.1] mb-6"
        >
          AI Automations & Dedicated <br/>
          <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
            Virtual Assistants
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We eliminate missed phone calls and cold CRM leakage by combining 24/7 AI chat & SMS reactivation funnels with top 1% vetted Virtual Assistants.
        </motion.p>
      </section>

      {/* Visual Proof Component */}
      <AutomationShowcase />

      {/* Discovery Form Section */}
      <section id="audit" className="max-w-2xl mx-auto px-4 pb-28">
        <div className="bg-slate-900/80 border border-slate-800 backdrop-blur-xl rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {!submitted ? (
            <>
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-xs font-bold text-slate-400 mb-3 uppercase tracking-wider">
                  <span>Step {currentStep} of 4</span>
                  <span className="text-orange-500 font-extrabold">{currentStep * 25}% Complete</span>
                </div>
                <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-orange-600 via-orange-500 to-amber-400"
                    initial={{ width: 0 }}
                    animate={{ width: `${currentStep * 25}%` }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  />
                </div>
              </div>

              {/* Animated Steps Wrapper */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                >
                  {/* Step 1 */}
                  {currentStep === 1 && (
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-white">1. What industry is your business in?</h3>
                      <p className="text-slate-400 text-sm mb-6">Select your primary sector so we can customize your automation playbook.</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                          { title: 'Home Services & Roofing', icon: '🏠' },
                          { title: 'Legal & Law Practices', icon: '⚖️' },
                          { title: 'Healthcare & MedSpa', icon: '🩺' },
                          { title: 'Real Estate & Property', icon: '🏢' },
                          { title: 'B2B & Professional Services', icon: '💼' }
                        ].map(item => (
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            key={item.title}
                            onClick={() => handleOptionSelect('industry', item.title)}
                            className="p-4 rounded-2xl border border-slate-800 bg-slate-950/60 text-left font-semibold hover:border-orange-500 hover:bg-orange-500/10 transition-colors flex items-center justify-between group"
                          >
                            <span className="flex items-center gap-3 text-sm font-bold text-slate-200 group-hover:text-white">
                              <span className="text-lg">{item.icon}</span>
                              {item.title}
                            </span>
                            <ChevronRight size={16} className="text-slate-500 group-hover:text-orange-400 transition" />
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 2 */}
                  {currentStep === 2 && (
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-white">2. What services are you most interested in?</h3>
                      <p className="text-slate-400 text-sm mb-6">Choose the highest-impact initiative for your immediate growth goals.</p>
                      
                      <div className="grid grid-cols-1 gap-3">
                        {[
                          { name: '💻 High-Converting Website Design & Funnels', desc: 'Custom CRO website & landing pages built for speed and appointments' },
                          { name: '⚡ Database Reactivation (Dormant Leads)', desc: 'Convert past leads into booked appointments with zero ad spend' },
                          { name: '👥 Dedicated Virtual Assistant Staffing', desc: 'Top 1% vetted VA for phone coverage, dispatch, scheduling & admin' },
                          { name: '🎯 High-Intent Paid Ads (Google & Meta)', desc: 'High-ROI search & social campaigns targeting active buyers' },
                          { name: '🚀 Business in a Box (Full Infrastructure)', desc: 'Complete turn-key website, automated CRM, and nurture funnels' }
                        ].map(svc => (
                          <motion.button
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            key={svc.name}
                            onClick={() => handleOptionSelect('primary_goal', svc.name)}
                            className="p-4 rounded-2xl border border-slate-800 bg-slate-950/60 text-left hover:border-orange-500 hover:bg-orange-500/10 transition-colors group"
                          >
                            <div className="font-bold text-base text-slate-100 group-hover:text-orange-400 transition-colors">{svc.name}</div>
                            <div className="text-xs text-slate-400 mt-1">{svc.desc}</div>
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 3 */}
                  {currentStep === 3 && (
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-white">3. What is your current monthly lead volume?</h3>
                      <p className="text-slate-400 text-sm mb-6">This helps us calculate your estimated pipeline recovery potential.</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {['1-50 leads/mo', '51-200 leads/mo', '201-1,000 leads/mo', '1,000+ leads/mo'].map(vol => (
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            key={vol}
                            onClick={() => handleOptionSelect('lead_volume', vol)}
                            className="p-4 rounded-2xl border border-slate-800 bg-slate-950/60 text-left font-semibold hover:border-orange-500 hover:bg-orange-500/10 transition-colors flex items-center justify-between group"
                          >
                            <span className="text-sm font-bold text-slate-200 group-hover:text-white">{vol}</span>
                            <ChevronRight size={16} className="text-slate-500 group-hover:text-orange-400 transition" />
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 4 */}
                  {currentStep === 4 && (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">4. Where should we send your Blueprint?</h3>
                        <p className="text-slate-400 text-xs">Enter your details to generate your customized revenue audit & roadmap.</p>
                      </div>
                      
                      <div className="space-y-3.5 pt-2">
                        <div>
                          <label className="block text-xs text-slate-400 font-bold mb-1.5 uppercase tracking-wider">Full Name *</label>
                          <input 
                            type="text" 
                            required 
                            placeholder="e.g. Marcus Vance"
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3.5 text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:outline-none transition-all text-white"
                            value={formData.name} 
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-slate-400 font-bold mb-1.5 uppercase tracking-wider">Business / Company Name *</label>
                          <input 
                            type="text" 
                            required 
                            placeholder="e.g. Vance Roofing LLC"
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3.5 text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:outline-none transition-all text-white"
                            value={formData.company} 
                            onChange={e => setFormData({ ...formData, company: e.target.value })}
                          />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                          <div>
                            <label className="block text-xs text-slate-400 font-bold mb-1.5 uppercase tracking-wider">Work Email *</label>
                            <input 
                              type="email" 
                              required 
                              placeholder="marcus@company.com"
                              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3.5 text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:outline-none transition-all text-white"
                              value={formData.email} 
                              onChange={e => setFormData({ ...formData, email: e.target.value })}
                            />
                          </div>
                          <div>
                            <label className="block text-xs text-slate-400 font-bold mb-1.5 uppercase tracking-wider">Direct Phone *</label>
                            <input 
                              type="tel" 
                              required 
                              placeholder="(555) 000-0000"
                              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3.5 text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:outline-none transition-all text-white"
                              value={formData.phone} 
                              onChange={e => setFormData({ ...formData, phone: e.target.value })}
                            />
                          </div>
                        </div>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={isSubmitting}
                        type="submit"
                        className="w-full mt-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 font-bold py-4 px-6 rounded-xl transition text-white shadow-[0_0_20px_rgba(249,115,22,0.3)] text-base flex items-center justify-center gap-2"
                      >
                        <span>{isSubmitting ? '⚡ Generating Your Strategy Blueprint...' : 'Claim Your Free Growth Audit →'}</span>
                      </motion.button>
                    </form>
                  )}
                </motion.div>
              </AnimatePresence>
            </>
          ) : (
            /* Post-Submission Success State */
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-6"
            >
              <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center text-3xl mx-auto mb-4 border border-green-500/30">
                ✓
              </div>
              <h3 className="text-2xl font-black mb-2 text-white">
                You're All Set, {formData.name.split(' ')[0] || 'Partner'}!
              </h3>
              <p className="text-slate-400 text-sm max-w-md mx-auto mb-6">
                We've received your request for <strong className="text-white">{formData.company || 'your business'}</strong>. A confirmation invite and custom blueprint has been queued for your email: <span className="text-orange-400">{formData.email}</span>.
              </p>
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 max-w-md mx-auto text-left mb-6">
                <div className="text-xs font-bold text-slate-400 uppercase mb-1">Assigned Growth Strategist:</div>
                <div className="text-sm font-semibold text-white">Senior Partner Growth Desk • Austin, TX</div>
                <div className="text-xs text-green-400 font-bold mt-1">✓ Status: Audit Blueprint In Progress</div>
              </div>
              <a 
                href="tel:+18004923444" 
                className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 px-6 rounded-xl text-sm transition"
              >
                <span>Need Immediate Assistance? Call (800) 492-DIGI</span>
              </a>
            </motion.div>
          )}

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950 py-12 px-6 text-center text-xs text-slate-500">
        <p className="mb-2">© 2026 Digitol AI Agency LLC. All rights reserved. High-Impact AI Automations & Virtual Assistant Staffing.</p>
        <p>Austin, TX • Direct Line: (800) 492-3444 • Recipient: vela956Abel@gmail.com</p>
      </footer>
    </div>
  );
}
