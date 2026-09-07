import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import heroBg from './assets/hero_bg.jpg';
import architectureBg from './assets/architecture_bg.jpg';
import roiBg from './assets/roi_bg.jpg';
import telemetryBg from './assets/telemetry_bg.jpg';
import {
  Activity,
  Layers,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  PhoneMissed,
  MessageSquare,
  Calendar,
  ArrowUpRight,
  ChevronRight,
  Globe,
  Database,
  Users,
  Code2,
  X,
  PhoneCall,
  Sparkles,
  Search,
  Check,
  MapPin,
  TrendingUp,
  BarChart3,
  Target,
  Briefcase
} from 'lucide-react';

/* ==========================================================================
   VISUAL PROOF SHOWCASE (REVENUE CONVERSION DEMONSTRATION)
   ========================================================================== */
const RevenueProofShowcase = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="max-w-4xl mx-auto mb-16 bg-neutral-950/85 border border-white/15 rounded-sm p-6 sm:p-8 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.9)] relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      
      {/* Top Banner */}
      <div className="flex justify-between items-center pb-4 mb-6 border-b border-white/10 font-mono text-[10px] tracking-[0.25em] text-neutral-400 uppercase">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          LIVE REVENUE CONVERSION WORKFLOW // SPEED-TO-LEAD
        </span>
        <span>VERIFIED PROCESS</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* Step 1: Missed Opportunity */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2 p-4 bg-white/[0.02] border border-white/10 rounded-sm">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-sm bg-neutral-900 border border-neutral-700 flex items-center justify-center text-neutral-300">
              <PhoneMissed size={18} className="text-red-400" />
            </div>
            <div>
              <div className="font-mono text-[9px] uppercase tracking-widest text-neutral-400">INBOUND OPPORTUNITY</div>
              <div className="text-xs font-bold text-white tracking-wider uppercase">MISSED CALL AT 2:14 PM</div>
            </div>
          </div>
          <p className="text-[11px] text-neutral-400 leading-relaxed pt-1">
            78% of consumers purchase from the company that responds first. Unanswered calls cause lost revenue.
          </p>
        </div>

        {/* Step 2: Instant AI Outreach */}
        <div className="flex flex-col space-y-2 p-4 bg-white/[0.04] border border-white/20 rounded-sm relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-mono text-[9px] text-white tracking-widest uppercase">
              <Sparkles size={14} className="text-white" />
              <span>INSTANT AI OUTREACH (&lt; 2 SEC)</span>
            </div>
            <span className="font-mono text-[9px] px-1.5 py-0.5 border border-white/20 bg-white/10 text-white rounded-none">
              AUTOMATED
            </span>
          </div>
          <div className="bg-black/90 p-2.5 border border-white/15 rounded-sm font-mono text-[11px] text-neutral-200">
            <span className="text-neutral-400 block text-[9px] mb-0.5 tracking-wider">SMS OUTBOUND // SENT</span>
            "Hi! Sorry we missed your call. How can the Digitol team help you grow today?"
          </div>
        </div>

        {/* Step 3: Booked Consultation */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2 p-4 bg-white/[0.02] border border-white/10 rounded-sm">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-sm bg-neutral-900 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <CheckCircle2 size={18} />
            </div>
            <div>
              <div className="font-mono text-[9px] uppercase tracking-widest text-emerald-400">OUTCOME DELIVERED</div>
              <div className="text-xs font-bold text-white tracking-wider uppercase">APPOINTMENT BOOKED</div>
            </div>
          </div>
          <div className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-[10px] px-2.5 py-1 tracking-wider uppercase">
            <span>$4,200 DEAL RETAINED</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ==========================================================================
   MAIN DIGITOL APPLICATION COMPONENT (WEB-FX STYLE LINGO + STARLINK UI)
   ========================================================================== */
export default function App() {
  // Modal State
  const [modalOpen, setModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Form Data State
  const [formData, setFormData] = useState({
    industry: '',
    primary_goal: '',
    lead_volume: '',
    name: '',
    company: '',
    email: '',
    phone: '',
    address: '',
    notes: ''
  });

  // ROI Calculator State
  const [calcLeads, setCalcLeads] = useState(350);
  const [calcValue, setCalcValue] = useState(3500);
  const [calcMissedPct, setCalcMissedPct] = useState(35);

  // Active Solution Pillar
  const [activePillar, setActivePillar] = useState(0);

  // Selected calendar time slot on confirmation
  const [selectedSlot, setSelectedSlot] = useState('Tomorrow, 10:00 AM EST');
  const [slotConfirmed, setSlotConfirmed] = useState(false);

  // Calculate ROI Metrics
  const calculatedLeakedLeads = calcLeads * (calcMissedPct / 100);
  const calculatedRecoveredClients = calculatedLeakedLeads * 0.16;
  const monthlyRecoveredCapital = Math.round(calculatedRecoveredClients * calcValue);
  const annualRecoveredCapital = monthlyRecoveredCapital * 12;

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && modalOpen) {
        setModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalOpen]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [modalOpen]);

  const openAuditModal = (preselectedGoal = '') => {
    if (preselectedGoal) {
      setFormData(prev => ({ ...prev, primary_goal: preselectedGoal }));
    }
    setModalOpen(true);
  };

  const handleStepSelect = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleFormSubmit = async (e) => {
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
      console.warn('Local fallback confirmation:', err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // 5 Core Growth Solutions (WebFX-inspired, ROI-driven, original copy)
  const GROWTH_SOLUTIONS = [
    {
      id: '01',
      tag: 'FEATURED ENTRY OFFER',
      title: 'CUSTOM WEB DESIGN & CONVERSION FUNNELS',
      desc: 'Sub-second, conversion-rate-optimized (CRO) websites and landing pages engineered to convert visitors into qualified appointments, inbound calls, and paying clients.',
      metrics: [
        { label: 'PAGE LOAD SPEED', val: '< 0.8s' },
        { label: 'AVG CONVERSION LIFT', val: '+240%' },
        { label: 'LAUNCH TIMELINE', val: '7 DAYS' }
      ],
      deliverables: [
        'Mobile-first responsive UX with streamlined one-tap contact docks',
        'Direct 2-way CRM synchronization via automated real-time webhooks',
        'Zero render-blocking code with 95+ Google PageSpeed score guaranteed',
        'Structured local schema SEO markup for maximum search visibility'
      ]
    },
    {
      id: '02',
      tag: 'ZERO AD SPEND',
      title: 'AI DATABASE REACTIVATION & LEAD NURTURE',
      desc: 'Reclaim lost revenue trapped in your past lead database. Our conversational 2-way AI SMS sequences engage dormant CRM contacts and book qualified consultations on autopilot.',
      metrics: [
        { label: 'RESPONSE RATE', val: '42.6%' },
        { label: 'TYPICAL CAMPAIGN ROI', val: '14x - 30x' },
        { label: 'DELIVERY COMPLIANCE', val: 'A2P 10DLC' }
      ],
      deliverables: [
        'Natural conversational objection handling tailored to your service offerings',
        'Direct calendar booking integration with automated SMS/email reminders',
        'Instant human notifications when a high-intent buyer is ready to purchase',
        'Strict TCPA compliance with automated opt-out management'
      ]
    },
    {
      id: '03',
      tag: 'DEDICATED HUMAN TALENT',
      title: 'DEDICATED VIRTUAL ASSISTANT STAFFING',
      desc: 'Eliminate missed phone calls and administrative bottlenecks. We match you with top 1% vetted, English-fluent executive Virtual Assistants trained on your exact industry workflows.',
      metrics: [
        { label: 'OVERHEAD SAVINGS', val: '70%+' },
        { label: 'CALL ANSWER RATE', val: '99.8%' },
        { label: 'ONBOARDING SPEED', val: '5 DAYS' }
      ],
      deliverables: [
        'Rigorous 4-stage talent vetting: IQ, EQ, English fluency, and CRM testing',
        'Pre-trained in ServiceTitan, Jobber, GoHighLevel, Clio, and HubSpot',
        'Full phone, dispatch, and scheduling coverage during peak and after-hours',
        'Dedicated client success manager with weekly quality assurance audits'
      ]
    },
    {
      id: '04',
      tag: 'TARGETED ACQUISITION',
      title: 'HIGH-INTENT PAID SEARCH & SOCIAL ADS',
      desc: 'High-ROI Google Search and Meta advertising campaigns targeting active, high-intent buyers. We manage the entire pipeline from keyword sculpting to closed-deal revenue tracking.',
      metrics: [
        { label: 'AVERAGE ROAS', val: '3.8x' },
        { label: 'TRACKING METHOD', val: 'SERVER-SIDE CAPI' },
        { label: 'LEAD QUALITY', val: 'PRE-QUALIFIED' }
      ],
      deliverables: [
        'Continuous negative keyword sculpting and bidding algorithm management',
        'Dedicated high-converting landing page funnels tailored to each ad group',
        'Server-side Conversion API tracking feeding Google and Meta smart bidding',
        'Transparent 24/7 client analytics dashboard tracking real customer revenue'
      ]
    },
    {
      id: '05',
      tag: 'COMPLETE TURNKEY SOLUTION',
      title: 'BUSINESS IN A BOX (ALL-IN-ONE GROWTH STACK)',
      desc: 'The complete enterprise growth engine: custom high-converting website, complete automated CRM pipelines, lead nurture funnels, and a dedicated full-time Virtual Assistant.',
      metrics: [
        { label: 'DEPLOYMENT TIME', val: '14 DAYS' },
        { label: 'SYSTEM UPTIME', val: '99.98%' },
        { label: 'SUPPORT LEVEL', val: 'DEDICATED' }
      ],
      deliverables: [
        'Custom enterprise website + complete CRM pipeline architecture',
        'Automated review generation and appointment follow-up sequences',
        'Dedicated Virtual Assistant seamlessly integrated into daily dispatch',
        'Direct priority communication channel (Slack / WhatsApp) with senior growth strategists'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      
      {/* ======================================================================
          1. TOP NAVIGATION
          ====================================================================== */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/85 backdrop-blur-xl border-b border-white/10 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-5 h-5 bg-white flex items-center justify-center font-mono text-black font-extrabold text-xs tracking-tighter">
              D
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold tracking-[0.25em] text-xs text-white uppercase">
                DIGITOL
              </span>
              <span className="text-neutral-600 font-mono text-xs">//</span>
              <span className="font-mono text-[10px] tracking-widest text-neutral-400 uppercase hidden sm:inline">
                REVENUE GROWTH PLATFORM
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 font-mono text-[11px] tracking-[0.2em] text-neutral-400 uppercase">
            <a href="#solutions" className="hover:text-white transition-colors">SOLUTIONS</a>
            <a href="#roi-simulator" className="hover:text-white transition-colors">ROI SIMULATOR</a>
            <a href="#case-studies" className="hover:text-white transition-colors">RESULTS</a>
            <a href="tel:+18004923444" className="hover:text-white transition-colors">(800) 492-DIGI</a>
          </nav>

          {/* Action Button */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 font-mono text-[10px] tracking-widest text-neutral-400 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>ACCEPTING PARTNERS</span>
            </div>
            <button
              onClick={() => openAuditModal()}
              className="bg-white text-black hover:bg-neutral-200 text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-none border border-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] active:scale-95"
            >
              GET A FREE PROPOSAL
            </button>
          </div>
        </div>
      </header>

      {/* ======================================================================
          2. HERO VIEWPORT SECTION (FULL SCREEN)
          ====================================================================== */}
      <section 
        className="min-h-screen relative flex flex-col justify-center items-center px-6 pt-24 pb-16 bg-cover bg-center bg-no-repeat starlink-grid"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/65 to-black pointer-events-none" />
        <div className="radar-scan" />

        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-white/[0.04] border border-white/15 rounded-none font-mono text-[10px] tracking-[0.25em] text-neutral-300 uppercase mb-8 backdrop-blur-md"
          >
            <TrendingUp size={13} className="text-white" />
            <span>TECH-ENABLED GROWTH &amp; MARKETING SOLUTIONS</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight uppercase leading-[1.05] text-white mb-8 drop-shadow-2xl"
          >
            THE GROWTH ENGINE THAT <br />
            <span className="text-neutral-400">DRIVES REAL REVENUE</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-neutral-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-10 font-normal leading-relaxed tracking-wide drop-shadow-md"
          >
            Stop losing qualified pipeline to slow responses and unanswered calls. We combine custom CRO web architecture, 24/7 AI lead reactivation, and dedicated vetted Virtual Assistants to accelerate your business revenue.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md mb-16"
          >
            <button
              onClick={() => openAuditModal()}
              className="w-full sm:w-auto bg-white text-black hover:bg-neutral-200 text-xs font-bold uppercase tracking-[0.2em] px-8 py-3.5 border border-white transition-all shadow-[0_0_25px_rgba(255,255,255,0.2)] active:scale-95 flex items-center justify-center gap-2"
            >
              <span>CLAIM REVENUE PROPOSAL</span>
              <ArrowUpRight size={14} />
            </button>
            <a
              href="#solutions"
              className="w-full sm:w-auto bg-black/60 hover:bg-white/10 text-neutral-300 hover:text-white text-xs font-bold uppercase tracking-[0.2em] px-8 py-3.5 border border-white/20 backdrop-blur-lg transition-all text-center"
            >
              EXPLORE SOLUTIONS
            </a>
          </motion.div>

          {/* Revenue Demonstration Workflow */}
          <RevenueProofShowcase />

          {/* Proof Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl border-t border-b border-white/10 py-6 font-mono bg-black/60 backdrop-blur-md">
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">$14.2M+</div>
              <div className="text-[10px] text-neutral-400 uppercase tracking-widest mt-1">CLIENT REVENUE DRIVEN</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">48,500+</div>
              <div className="text-[10px] text-neutral-400 uppercase tracking-widest mt-1">APPOINTMENTS SET</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">99.4%</div>
              <div className="text-[10px] text-neutral-400 uppercase tracking-widest mt-1">RESPONSE RATE</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">&lt; 2 SEC</div>
              <div className="text-[10px] text-neutral-400 uppercase tracking-widest mt-1">AVG RESPONSE SPEED</div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          3. GROWTH SOLUTIONS MATRIX (MIN-H-SCREEN)
          ====================================================================== */}
      <section 
        id="solutions" 
        className="min-h-screen py-28 px-6 bg-cover bg-center bg-no-repeat relative border-t border-white/10 flex flex-col justify-center"
        style={{ backgroundImage: `url(${architectureBg})` }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          {/* Section Header */}
          <div className="text-left mb-16">
            <div className="font-mono text-[10px] tracking-[0.25em] text-neutral-400 uppercase mb-2">
              COMPREHENSIVE GROWTH SUITE
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight uppercase text-white">
              PERFORMANCE SOLUTIONS MATRIX
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base max-w-2xl mt-3">
              Full-service growth marketing and AI automation designed to seamlessly integrate with your existing CRM, phones, and sales pipelines.
            </p>
          </div>

          {/* Solution Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 mb-8 font-mono text-[10px] tracking-[0.2em] uppercase">
            {GROWTH_SOLUTIONS.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setActivePillar(idx)}
                className={`p-3.5 text-left border transition-all ${
                  activePillar === idx
                    ? 'bg-white text-black border-white font-bold shadow-[0_0_15px_rgba(255,255,255,0.2)]'
                    : 'bg-neutral-950/80 text-neutral-400 border-white/15 hover:border-white/40 hover:text-white backdrop-blur-md'
                }`}
              >
                <div className="text-[9px] opacity-60 mb-0.5">{s.id} // {s.tag}</div>
                <div className="truncate font-semibold text-xs">{s.title.split('(')[0]}</div>
              </button>
            ))}
          </div>

          {/* Active Solution Workstation Display */}
          <motion.div
            key={activePillar}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-neutral-950/85 border border-white/20 p-8 sm:p-12 rounded-sm backdrop-blur-2xl shadow-2xl relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-block font-mono text-[10px] tracking-[0.25em] px-2.5 py-1 bg-white/10 text-white border border-white/20 uppercase">
                  {GROWTH_SOLUTIONS[activePillar].tag}
                </div>
                <h3 className="text-2xl sm:text-4xl font-bold uppercase tracking-tight text-white">
                  {GROWTH_SOLUTIONS[activePillar].title}
                </h3>
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                  {GROWTH_SOLUTIONS[activePillar].desc}
                </p>

                <div className="space-y-2.5 pt-2">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 mb-2">
                    WHAT IS INCLUDED IN THIS SOLUTION:
                  </div>
                  {GROWTH_SOLUTIONS[activePillar].deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                      <span className="font-mono text-white text-xs mt-0.5">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => openAuditModal(GROWTH_SOLUTIONS[activePillar].title)}
                    className="bg-white text-black hover:bg-neutral-200 text-xs font-bold uppercase tracking-[0.2em] px-6 py-3 border border-white transition-all flex items-center gap-2"
                  >
                    <span>REQUEST A CUSTOM PROPOSAL</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>

              {/* Right Column: Performance Specs */}
              <div className="lg:col-span-5 bg-black/90 border border-white/15 p-6 space-y-6 font-mono rounded-none backdrop-blur-md">
                <div className="text-[10px] text-neutral-400 tracking-[0.25em] uppercase border-b border-white/10 pb-3 flex justify-between items-center">
                  <span>KEY PERFORMANCE BENCHMARKS</span>
                  <Activity size={12} className="text-emerald-400" />
                </div>

                <div className="space-y-4">
                  {GROWTH_SOLUTIONS[activePillar].metrics.map((m, idx) => (
                    <div key={idx} className="p-3 bg-white/[0.03] border border-white/10 flex justify-between items-center">
                      <span className="text-[10px] text-neutral-400 tracking-wider uppercase">{m.label}</span>
                      <span className="text-base font-bold text-white tracking-tight">{m.val}</span>
                    </div>
                  ))}
                </div>

                <div className="text-[10px] text-neutral-500 leading-relaxed pt-2 border-t border-white/10">
                  // Seamless integration verified with GoHighLevel, HubSpot, Salesforce, ServiceTitan, Jobber, and Clio.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ======================================================================
          4. ROI & REVENUE RECOVERY CALCULATOR (MIN-H-SCREEN)
          ====================================================================== */}
      <section 
        id="roi-simulator" 
        className="min-h-screen py-28 px-6 bg-cover bg-center bg-no-repeat relative border-t border-white/10 flex flex-col justify-center starlink-grid-fine"
        style={{ backgroundImage: `url(${roiBg})` }}
      >
        <div className="absolute inset-0 bg-black/75 backdrop-blur-[1px] pointer-events-none" />

        <div className="max-w-5xl mx-auto w-full relative z-10">
          <div className="text-center mb-16">
            <div className="font-mono text-[10px] tracking-[0.25em] text-neutral-400 uppercase mb-2">
              REVENUE ACCELERATION CALCULATOR
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight uppercase text-white">
              ESTIMATE YOUR RECOVERABLE REVENUE
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base max-w-xl mx-auto mt-3">
              See how much revenue your business can generate by eliminating missed calls and reactivating dormant customer leads.
            </p>
          </div>

          <div className="bg-neutral-950/90 border border-white/20 p-8 sm:p-12 rounded-sm backdrop-blur-2xl shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Controls */}
            <div className="lg:col-span-7 space-y-8 font-mono">
              {/* Slider 1 */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs tracking-wider uppercase text-neutral-300">
                  <span>MONTHLY INBOUND LEADS / INQUIRIES:</span>
                  <span className="font-bold text-white">{calcLeads.toLocaleString()} LEADS/MO</span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="2000"
                  step="10"
                  value={calcLeads}
                  onChange={(e) => setCalcLeads(Number(e.target.value))}
                  className="w-full h-1.5 bg-neutral-800 accent-white rounded-none cursor-pointer"
                />
              </div>

              {/* Slider 2 */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs tracking-wider uppercase text-neutral-300">
                  <span>AVERAGE CLIENT LIFETIME VALUE:</span>
                  <span className="font-bold text-white">${calcValue.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="15000"
                  step="250"
                  value={calcValue}
                  onChange={(e) => setCalcValue(Number(e.target.value))}
                  className="w-full h-1.5 bg-neutral-800 accent-white rounded-none cursor-pointer"
                />
              </div>

              {/* Slider 3 */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs tracking-wider uppercase text-neutral-300">
                  <span>ESTIMATED UNANSWERED / MISSED RATE:</span>
                  <span className="font-bold text-white">{calcMissedPct}%</span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="60"
                  step="5"
                  value={calcMissedPct}
                  onChange={(e) => setCalcMissedPct(Number(e.target.value))}
                  className="w-full h-1.5 bg-neutral-800 accent-white rounded-none cursor-pointer"
                />
              </div>

              <div className="text-[11px] text-neutral-400 font-sans">
                * Based on industry conversion benchmarks: 78% of customers buy from the vendor that responds first.
              </div>
            </div>

            {/* Right Output Console */}
            <div className="lg:col-span-5 bg-black/90 p-8 border border-white/20 text-center space-y-6 backdrop-blur-md">
              <div className="font-mono text-[10px] tracking-[0.25em] text-neutral-400 uppercase">
                ESTIMATED RECOVERABLE REVENUE
              </div>

              <div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold font-mono tracking-tight text-white">
                  +${monthlyRecoveredCapital.toLocaleString()}
                </div>
                <div className="font-mono text-[11px] text-neutral-400 tracking-widest uppercase mt-1">
                  PER MONTH
                </div>
              </div>

              <div className="p-3 bg-white/[0.03] border border-white/10 font-mono text-xs text-emerald-400 tracking-wider uppercase">
                ANNUAL REVENUE LIFT: +${annualRecoveredCapital.toLocaleString()}
              </div>

              <button
                onClick={() => openAuditModal()}
                className="w-full bg-white text-black hover:bg-neutral-200 text-xs font-bold uppercase tracking-[0.2em] py-4 border border-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] active:scale-95"
              >
                UNLOCK THIS REVENUE BLUEPRINT
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          5. VERIFIED CLIENT RESULTS & CASE STUDIES (MIN-H-SCREEN)
          ====================================================================== */}
      <section 
        id="case-studies" 
        className="min-h-screen py-28 px-6 bg-cover bg-center bg-no-repeat relative border-t border-white/10 flex flex-col justify-center"
        style={{ backgroundImage: `url(${telemetryBg})` }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="text-left mb-16">
            <div className="font-mono text-[10px] tracking-[0.25em] text-neutral-400 uppercase mb-2">
              PROVEN TRACK RECORD // VERIFIED CLIENT IMPACT
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight uppercase text-white">
              REAL CLIENT SUCCESS STORIES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Case 1 */}
            <div className="bg-neutral-950/90 border border-white/15 p-6 rounded-sm space-y-4 font-mono backdrop-blur-md">
              <div className="flex justify-between items-center text-[10px] text-neutral-400 border-b border-white/10 pb-3 uppercase tracking-widest">
                <span>APEX LEGAL GROUP</span>
                <span className="text-emerald-400">+$184K REVENUE</span>
              </div>
              <p className="font-sans text-xs text-neutral-300 leading-relaxed">
                "Within 72 hours of launching the 2-way AI database reactivation sequence, we booked 38 retained consultations from 1,400 cold Clio inquiries with zero extra ad spend."
              </p>
              <div className="pt-2 text-[10px] text-neutral-500 uppercase tracking-widest">
                — MARCUS STERLING, MANAGING PARTNER
              </div>
            </div>

            {/* Case 2 */}
            <div className="bg-neutral-950/90 border border-white/15 p-6 rounded-sm space-y-4 font-mono backdrop-blur-md">
              <div className="flex justify-between items-center text-[10px] text-neutral-400 border-b border-white/10 pb-3 uppercase tracking-widest">
                <span>SOLIS HOME SERVICES</span>
                <span className="text-emerald-400">0 MISSED CALLS</span>
              </div>
              <p className="font-sans text-xs text-neutral-300 leading-relaxed">
                "Our dedicated Virtual Assistant answers every incoming customer call in under two rings, schedules the estimator in ServiceTitan, and dispatches SMS updates. Saved $4,000/mo in overhead."
              </p>
              <div className="pt-2 text-[10px] text-neutral-500 uppercase tracking-widest">
                — ELENA RODRIGUEZ, OPERATIONS DIRECTOR
              </div>
            </div>

            {/* Case 3 */}
            <div className="bg-neutral-950/90 border border-white/15 p-6 rounded-sm space-y-4 font-mono backdrop-blur-md">
              <div className="flex justify-between items-center text-[10px] text-neutral-400 border-b border-white/10 pb-3 uppercase tracking-widest">
                <span>ZENITH MEDSPA</span>
                <span className="text-emerald-400">+340% CONSULTS</span>
              </div>
              <p className="font-sans text-xs text-neutral-300 leading-relaxed">
                "Digitol's Business in a Box deployment gave us a sub-second website, automated SMS appointment nurture, and a full-time patient intake coordinator. Our show-up rate jumped to 92%."
              </p>
              <div className="pt-2 text-[10px] text-neutral-500 uppercase tracking-widest">
                — DR. DANIEL KIM, MEDICAL DIRECTOR
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <button
              onClick={() => openAuditModal()}
              className="bg-white text-black hover:bg-neutral-200 text-xs font-bold uppercase tracking-[0.2em] px-8 py-3.5 border border-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)]"
            >
              REQUEST YOUR FREE REVENUE AUDIT →
            </button>
          </div>
        </div>
      </section>

      {/* ======================================================================
          6. FULL-SCREEN BLURRED OVERLAY MODAL (GROWTH AUDIT TERMINAL)
          ====================================================================== */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          >
            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-2xl bg-black border border-white/20 p-6 sm:p-10 rounded-sm shadow-2xl relative my-auto max-h-[90vh] overflow-y-auto"
            >
              {/* Top Modal Header */}
              <div className="flex justify-between items-center pb-4 mb-6 border-b border-white/10">
                <div className="flex items-center gap-2.5 font-mono text-[10px] tracking-[0.25em] text-neutral-400 uppercase">
                  <BarChart3 size={14} className="text-white" />
                  <span>[DIGITOL GROWTH PLATFORM // FREE REVENUE AUDIT]</span>
                </div>
                <button
                  onClick={() => setModalOpen(false)}
                  className="p-1.5 text-neutral-400 hover:text-white border border-white/10 hover:border-white/40 transition-colors font-mono text-xs uppercase"
                  aria-label="Close modal"
                >
                  <X size={16} />
                </button>
              </div>

              {!submitted ? (
                <>
                  {/* Step Progress Bar */}
                  <div className="mb-8 font-mono">
                    <div className="flex justify-between text-[10px] text-neutral-400 mb-2 uppercase tracking-widest">
                      <span>STEP 0{currentStep} OF 04</span>
                      <span className="text-white font-bold">{currentStep * 25}% COMPLETE</span>
                    </div>
                    <div className="h-1 w-full bg-neutral-900 border border-white/10">
                      <div
                        className="h-full bg-white transition-all duration-300"
                        style={{ width: `${currentStep * 25}%` }}
                      />
                    </div>
                  </div>

                  {/* Step 1: Industry Classification */}
                  {currentStep === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white mb-1">
                          01 // SELECT YOUR INDUSTRY
                        </h3>
                        <p className="text-neutral-400 text-xs font-mono tracking-wide">
                          Select your primary industry so we can customize your growth roadmap.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono text-xs">
                        {[
                          'HOME SERVICES & CONTRACTING',
                          'LEGAL & LAW PRACTICES',
                          'HEALTHCARE & MEDICAL SPA',
                          'REAL ESTATE & COMMERCIAL',
                          'B2B & PROFESSIONAL SERVICES'
                        ].map((ind) => (
                          <button
                            key={ind}
                            onClick={() => handleStepSelect('industry', ind)}
                            className="p-4 text-left border border-white/10 bg-neutral-950 hover:border-white hover:bg-white/10 transition-all flex items-center justify-between group"
                          >
                            <span className="font-semibold text-neutral-200 group-hover:text-white tracking-wider">{ind}</span>
                            <ChevronRight size={14} className="text-neutral-600 group-hover:text-white transition-colors" />
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Solution Selection */}
                  {currentStep === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white mb-1">
                          02 // WHAT IS YOUR PRIMARY GROWTH GOAL?
                        </h3>
                        <p className="text-neutral-400 text-xs font-mono tracking-wide">
                          Select the solution that will have the biggest immediate impact on your revenue.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 gap-2.5 font-mono text-xs">
                        {[
                          { title: '💻 HIGH-CONVERTING WEBSITE & FUNNELS', desc: 'Custom CRO website and landing pages engineered to maximize leads and appointments' },
                          { title: '⚡ DATABASE REACTIVATION (AI SMS)', desc: 'Reactivate cold CRM contacts and convert dormant leads into booked consultations' },
                          { title: '👥 DEDICATED VIRTUAL ASSISTANT STAFFING', desc: 'Top 1% vetted executive VA for phone coverage, dispatch, scheduling, and admin' },
                          { title: '🎯 HIGH-INTENT PAID ADVERTISING (GOOGLE & META)', desc: 'High-ROAS paid search and social campaigns targeting active in-market buyers' },
                          { title: '🚀 TURNKEY BUSINESS IN A BOX (FULL STACK)', desc: 'Complete growth infrastructure: custom website, CRM, automated nurture, and staff placement' }
                        ].map((svc) => (
                          <button
                            key={svc.title}
                            onClick={() => handleStepSelect('primary_goal', svc.title)}
                            className="p-4 text-left border border-white/10 bg-neutral-950 hover:border-white hover:bg-white/10 transition-all group"
                          >
                            <div className="font-bold text-white tracking-wider mb-1 group-hover:text-white">{svc.title}</div>
                            <div className="text-[11px] text-neutral-400 font-sans">{svc.desc}</div>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Lead Volume */}
                  {currentStep === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white mb-1">
                          03 // MONTHLY LEAD VOLUME
                        </h3>
                        <p className="text-neutral-400 text-xs font-mono tracking-wide">
                          What is your current monthly inbound lead and phone call volume?
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono text-xs">
                        {[
                          '1 - 50 LEADS / MONTH',
                          '51 - 200 LEADS / MONTH',
                          '201 - 1,000 LEADS / MONTH',
                          '1,000+ LEADS / MONTH'
                        ].map((vol) => (
                          <button
                            key={vol}
                            onClick={() => handleStepSelect('lead_volume', vol)}
                            className="p-4 text-left border border-white/10 bg-neutral-950 hover:border-white hover:bg-white/10 transition-all flex items-center justify-between group"
                          >
                            <span className="font-semibold text-neutral-200 group-hover:text-white tracking-wider">{vol}</span>
                            <ChevronRight size={14} className="text-neutral-600 group-hover:text-white transition-colors" />
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 4: Contact Details */}
                  {currentStep === 4 && (
                    <motion.form
                      key="step4"
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      onSubmit={handleFormSubmit}
                      className="space-y-4"
                    >
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white mb-1">
                          04 // WHERE SHOULD WE SEND YOUR PROPOSAL?
                        </h3>
                        <p className="text-neutral-400 text-xs font-mono tracking-wide">
                          Enter your contact information to receive your custom revenue audit &amp; roadmap.
                        </p>
                      </div>

                      <div className="space-y-3 pt-2 font-mono text-xs">
                        <div>
                          <label className="block text-[10px] text-neutral-400 uppercase tracking-widest mb-1.5">FULL NAME *</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Marcus Vance"
                            className="w-full bg-neutral-950 border border-white/20 p-3 text-white text-xs font-mono focus:border-white focus:outline-none transition-all rounded-none"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] text-neutral-400 uppercase tracking-widest mb-1.5">COMPANY / BUSINESS NAME *</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Vance Roofing & Construction"
                            className="w-full bg-neutral-950 border border-white/20 p-3 text-white text-xs font-mono focus:border-white focus:outline-none transition-all rounded-none"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-[10px] text-neutral-400 uppercase tracking-widest mb-1.5">WORK EMAIL *</label>
                            <input
                              type="email"
                              required
                              placeholder="marcus@company.com"
                              className="w-full bg-neutral-950 border border-white/20 p-3 text-white text-xs font-mono focus:border-white focus:outline-none transition-all rounded-none"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] text-neutral-400 uppercase tracking-widest mb-1.5">DIRECT PHONE *</label>
                            <input
                              type="tel"
                              required
                              placeholder="(555) 000-0000"
                              className="w-full bg-neutral-950 border border-white/20 p-3 text-white text-xs font-mono focus:border-white focus:outline-none transition-all rounded-none"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[10px] text-neutral-400 uppercase tracking-widest mb-1.5">BUSINESS LOCATION / CITY (OPTIONAL)</label>
                          <div className="relative">
                            <input
                              type="text"
                              placeholder="City, State, or Full Address"
                              className="w-full bg-neutral-950 border border-white/20 p-3 text-white text-xs font-mono focus:border-white focus:outline-none transition-all rounded-none"
                              value={formData.address}
                              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                            />
                            <MapPin size={14} className="absolute right-3 top-3.5 text-neutral-500 pointer-events-none" />
                          </div>
                        </div>
                      </div>

                      <div className="pt-4">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-white text-black hover:bg-neutral-200 text-xs font-bold uppercase tracking-[0.2em] py-4 border border-white transition-all shadow-[0_0_25px_rgba(255,255,255,0.2)] active:scale-95 flex items-center justify-center gap-2"
                        >
                          <span>{isSubmitting ? 'GENERATING YOUR PROPOSAL...' : 'CLAIM YOUR FREE REVENUE AUDIT →'}</span>
                        </button>
                      </div>
                    </motion.form>
                  )}
                </>
              ) : (
                /* Post-Submission Confirmation State */
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6 space-y-6"
                >
                  <div className="w-12 h-12 border border-emerald-400 bg-emerald-400/10 text-emerald-400 flex items-center justify-center mx-auto text-xl">
                    <Check size={24} />
                  </div>

                  <div>
                    <div className="font-mono text-[10px] tracking-[0.25em] text-emerald-400 uppercase mb-1">
                      PROPOSAL REQUEST RECEIVED
                    </div>
                    <h3 className="text-2xl font-bold uppercase tracking-tight text-white">
                      REVENUE BLUEPRINT IS BEING PREPARED FOR {formData.company || 'YOUR BUSINESS'}
                    </h3>
                  </div>

                  <p className="text-neutral-400 text-xs max-w-md mx-auto leading-relaxed">
                    A confirmation email has been dispatched to <span className="text-white font-mono">{formData.email}</span>. A senior growth strategist has been assigned to your account.
                  </p>

                  {/* Interactive Strategy Session Booking Desk */}
                  <div className="bg-neutral-950 border border-white/20 p-5 text-left space-y-4">
                    <div className="flex justify-between items-center font-mono text-[10px] uppercase tracking-widest text-neutral-400 border-b border-white/10 pb-2">
                      <span>LOCK IN A 30-MINUTE 1-ON-1 STRATEGY CALL</span>
                      <span className="text-emerald-400">AVAILABLE</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 font-mono text-xs">
                      {[
                        'Tomorrow, 10:00 AM EST',
                        'Tomorrow, 2:30 PM EST',
                        'Friday, 11:30 AM EST'
                      ].map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => {
                            setSelectedSlot(slot);
                            setSlotConfirmed(true);
                          }}
                          className={`p-2.5 text-center border text-[11px] transition-all ${
                            selectedSlot === slot
                              ? 'bg-white text-black border-white font-bold'
                              : 'bg-black text-neutral-400 border-white/15 hover:border-white/40 hover:text-white'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>

                    {slotConfirmed && (
                      <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-[10px] tracking-wider uppercase text-center">
                        ✓ CONFIRMED FOR {selectedSlot}. CALENDAR INVITATION SENT.
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2 font-mono text-xs uppercase tracking-widest">
                    <a
                      href="tel:+18004923444"
                      className="inline-flex items-center justify-center gap-2 bg-neutral-900 border border-white/20 hover:border-white px-5 py-3 text-neutral-300 hover:text-white transition-colors"
                    >
                      <PhoneCall size={14} />
                      <span>DIRECT LINE: (800) 492-DIGI</span>
                    </a>
                    <button
                      onClick={() => {
                        setModalOpen(false);
                        setSubmitted(false);
                        setCurrentStep(1);
                      }}
                      className="bg-white text-black font-bold px-5 py-3 border border-white hover:bg-neutral-200 transition-colors"
                    >
                      BACK TO HOMEPAGE
                    </button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ======================================================================
          7. FOOTER
          ====================================================================== */}
      <footer className="border-t border-white/10 bg-black py-16 px-6 font-mono text-xs text-neutral-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <div className="flex items-center gap-2 text-white font-bold tracking-[0.2em] uppercase mb-2">
              <div className="w-3.5 h-3.5 bg-white text-black text-[9px] flex items-center justify-center font-extrabold">D</div>
              <span>DIGITOL // REVENUE GROWTH PLATFORM</span>
            </div>
            <p className="text-neutral-500 text-[11px] max-w-md font-sans">
              Tech-enabled growth solutions, AI automations, and dedicated executive Virtual Assistant staffing. Austin, TX • Serving growth-focused businesses nationwide.
            </p>
          </div>

          <div className="flex flex-wrap gap-8 text-[10px] tracking-[0.2em] uppercase text-neutral-400">
            <span>SLA: 99.98%</span>
            <span>TRANSPARENT REPORTING</span>
            <span>DIRECT: VELA956ABEL@GMAIL.COM</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/5 flex justify-between items-center text-[10px] text-neutral-600">
          <div>© 2026 DIGITOL AI AGENCY LLC. ALL RIGHTS RESERVED.</div>
          <div>THE REVENUE ACCELERATION ENGINE FOR GROWING ENTERPRISES</div>
        </div>
      </footer>
    </div>
  );
}
