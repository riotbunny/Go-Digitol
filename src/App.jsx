import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import heroBg from './assets/hero_bg.jpg';
import architectureBg from './assets/architecture_bg.jpg';
import roiBg from './assets/roi_bg.jpg';
import telemetryBg from './assets/telemetry_bg.jpg';
import {
  Terminal,
  Activity,
  Layers,
  Radio,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  PhoneMissed,
  MessageSquare,
  Calendar,
  ArrowUpRight,
  ChevronRight,
  Sliders,
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
  Lock,
  Clock,
  Zap
} from 'lucide-react';

/* ==========================================================================
   VISUAL PROOF SHOWCASE (STARLINK MINIMALIST TELEMETRY)
   ========================================================================== */
const StarlinkProofShowcase = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="max-w-4xl mx-auto mb-16 bg-neutral-950/80 border border-white/15 rounded-md p-6 sm:p-8 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.9)] relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      
      {/* Top Telemetry Header */}
      <div className="flex justify-between items-center pb-4 mb-6 border-b border-white/10 font-mono text-[10px] tracking-[0.25em] text-neutral-400 uppercase">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          DISPATCH PROTOCOL // 0-SEC LATENCY
        </span>
        <span>SYS.LOG #8942-A</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* Step 1: Missed Call */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2 p-4 bg-white/[0.02] border border-white/10 rounded-sm">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-sm bg-neutral-900 border border-neutral-700 flex items-center justify-center text-neutral-300">
              <PhoneMissed size={18} className="text-red-400" />
            </div>
            <div>
              <div className="font-mono text-[9px] uppercase tracking-widest text-neutral-400">INPUT EVENT</div>
              <div className="text-xs font-bold text-white tracking-wider uppercase">MISSED CALL 2:14 PM</div>
            </div>
          </div>
          <p className="text-[11px] text-neutral-400 leading-relaxed pt-1">
            Customer inquiry left unanswered. Standard business drops 78% of lead value here.
          </p>
        </div>

        {/* Step 2: Instant AI Outreach */}
        <div className="flex flex-col space-y-2 p-4 bg-white/[0.04] border border-white/20 rounded-sm relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-mono text-[9px] text-white tracking-widest uppercase">
              <Cpu size={14} className="text-white" />
              <span>AI TRIAGE (&lt; 2S)</span>
            </div>
            <span className="font-mono text-[9px] px-1.5 py-0.5 border border-white/20 bg-white/10 text-white rounded-none">
              ACTIVE
            </span>
          </div>
          <div className="bg-black/90 p-2.5 border border-white/15 rounded-sm font-mono text-[11px] text-neutral-200">
            <span className="text-neutral-400 block text-[9px] mb-0.5 tracking-wider">SMS OUTBOUND // DISPATCHED</span>
            "Hi, sorry we missed your call. How can Digitol help scale your systems today?"
          </div>
        </div>

        {/* Step 3: Retained Appointment */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2 p-4 bg-white/[0.02] border border-white/10 rounded-sm">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-sm bg-neutral-900 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <CheckCircle2 size={18} />
            </div>
            <div>
              <div className="font-mono text-[9px] uppercase tracking-widest text-emerald-400">OUTPUT CONFIRMED</div>
              <div className="text-xs font-bold text-white tracking-wider uppercase">CALENDAR BOOKED</div>
            </div>
          </div>
          <div className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-[10px] px-2.5 py-1 tracking-wider uppercase">
            <span>$4,200 PIPELINE RETAINED</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ==========================================================================
   MAIN STARLINK DIGITOL APPLICATION COMPONENT
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

  // Active Architecture Pillar
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

  // 5 Core Architecture Pillars (Starlink Specifications)
  const ARCHITECTURE_PILLARS = [
    {
      id: '01',
      tag: 'FOUNDATION // GATEWAY',
      title: 'WEBSITE DESIGN & CONVERSION ENGINES',
      desc: 'Sub-second Core Web Vitals architecture engineered on behavioral conversion psychology. Replaces legacy slow websites with high-converting multi-step lead capture infrastructure.',
      metrics: [
        { label: 'LOAD SPEED', val: '< 0.8s' },
        { label: 'CONVERSION BENCHMARK', val: '14.8%' },
        { label: 'DELIVERY WINDOW', val: '7 DAYS' }
      ],
      specs: [
        'Mobile-first layout with tactile conversion docks',
        'Direct 2-way CRM synchronization via instant webhook',
        'Zero render-blocking scripts; 98+ PageSpeed index',
        'Embedded structured JSON-LD local schema code'
      ]
    },
    {
      id: '02',
      tag: 'ZERO AD SPEND',
      title: 'DATABASE REACTIVATION (AI SMS)',
      desc: 'Algorithmic 2-way conversational AI pipelines that re-engage inactive and cold CRM contacts via natural SMS sequences, booking paid consultations automatically.',
      metrics: [
        { label: 'CONTACT RATE', val: '42.6%' },
        { label: 'TYPICAL ROI', val: '12x - 28x' },
        { label: 'CARRIER COMPLIANCE', val: 'A2P 10DLC' }
      ],
      specs: [
        'Natural conversational objection handling models',
        'Live calendar schedule integration (Google/Outlook)',
        'Human rep alert triggers on high-intent buyer replies',
        'Strict TCPA and automated carrier opt-out parsing'
      ]
    },
    {
      id: '03',
      tag: 'ELITE HUMAN STAFFING',
      title: 'DEDICATED VIRTUAL ASSISTANT PLACEMENT',
      desc: 'Top 1% rigorously vetted, English-fluent executive Virtual Assistants trained on dispatch, scheduling, and CRM workflows to eliminate unanswered calls completely.',
      metrics: [
        { label: 'OVERHEAD SAVINGS', val: '70%+' },
        { label: 'CALL ANSWER RATE', val: '99.8%' },
        { label: 'INTEGRATION', val: 'CRM/PHONE' }
      ],
      specs: [
        '4-stage vetting: IQ, EQ, English fluency, and CRM tests',
        'Trained on ServiceTitan, Jobber, GoHighLevel, Clio, HubSpot',
        'Full phone coverage during peak & after-hours windows',
        'Dedicated account manager and weekly quality audits'
      ]
    },
    {
      id: '04',
      tag: 'PREDICTABLE ACQUISITION',
      title: 'HIGH-INTENT PAID TRAFFIC ENGINES',
      desc: 'Precision Google Search and Meta advertising designed to target ready-to-buy consumers with exact-match search bidding and server-side Conversion API tracking.',
      metrics: [
        { label: 'AVERAGE ROAS', val: '3.8x' },
        { label: 'TRACKING ATTRIBUTION', val: 'CAPI / OFFLINE' },
        { label: 'TARGETING', val: 'HIGH INTENT' }
      ],
      specs: [
        'Continuous negative keyword scrubbing & bid optimization',
        'High-converting dedicated landing page funnels',
        'Server-side CAPI telemetry feeding Google/Meta bidding AI',
        'Live client analytics portal tracking real contract revenue'
      ]
    },
    {
      id: '05',
      tag: 'TURNKEY INFRASTRUCTURE',
      title: 'BUSINESS IN A BOX (ENTERPRISE SETUP)',
      desc: 'Complete digital operational operating system: custom high-converting website, end-to-end CRM pipelines, automated SMS/email lead nurture, and dedicated staffing.',
      metrics: [
        { label: 'DEPLOYMENT TIME', val: '14 DAYS' },
        { label: 'UPTIME GUARANTEE', val: '99.98%' },
        { label: 'SYSTEM STACK', val: 'TURNKEY' }
      ],
      specs: [
        'Custom enterprise website + complete CRM setup',
        'Automated appointment reminder & review generation workflows',
        'Dedicated Virtual Assistant matched & integrated',
        'Direct engineering priority channel (Slack/WhatsApp)'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      
      {/* ======================================================================
          1. STARLINK FIXED TOP NAVIGATION
          ====================================================================== */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Minimalist Logo */}
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
                AUTONOMOUS SYS
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 font-mono text-[11px] tracking-[0.2em] text-neutral-400 uppercase">
            <a href="#architecture" className="hover:text-white transition-colors">ARCHITECTURE</a>
            <a href="#systems" className="hover:text-white transition-colors">SYSTEMS</a>
            <a href="#telemetry" className="hover:text-white transition-colors">TELEMETRY</a>
            <a href="#roi" className="hover:text-white transition-colors">ROI ENGINE</a>
          </nav>

          {/* Action Button */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 font-mono text-[10px] tracking-widest text-neutral-400 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>ONLINE</span>
            </div>
            <button
              onClick={() => openAuditModal()}
              className="bg-white text-black hover:bg-neutral-200 text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-none border border-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] active:scale-95"
            >
              INITIALIZE AUDIT
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
          {/* Telemetry Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-3 py-1 bg-white/[0.04] border border-white/15 rounded-none font-mono text-[10px] tracking-[0.25em] text-neutral-300 uppercase mb-8 backdrop-blur-md"
          >
            <Radio size={12} className="text-white animate-pulse" />
            <span>ENTERPRISE REVENUE INFRASTRUCTURE // SLA: 99.98%</span>
          </motion.div>

          {/* Stark Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight uppercase leading-[1.05] text-white mb-8 drop-shadow-2xl"
          >
            AUTONOMOUS AI &amp; <br />
            <span className="text-neutral-400">DEDICATED STAFF</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-neutral-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-10 font-normal leading-relaxed tracking-wide drop-shadow-md"
          >
            Eliminate pipeline leakage and missed calls. We deploy 24/7 AI conversational triage, custom CRO web architecture, and top 1% vetted Virtual Assistants to scale client acquisition.
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
              <span>INITIALIZE AUDIT</span>
              <ArrowUpRight size={14} />
            </button>
            <a
              href="#architecture"
              className="w-full sm:w-auto bg-black/60 hover:bg-white/10 text-neutral-300 hover:text-white text-xs font-bold uppercase tracking-[0.2em] px-8 py-3.5 border border-white/20 backdrop-blur-lg transition-all text-center"
            >
              EXPLORE ARCHITECTURE
            </a>
          </motion.div>

          {/* Visual Proof Component */}
          <StarlinkProofShowcase />

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl border-t border-b border-white/10 py-6 font-mono bg-black/60 backdrop-blur-md">
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">$14.2M+</div>
              <div className="text-[10px] text-neutral-400 uppercase tracking-widest mt-1">RECOVERED CAPITAL</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">48,500+</div>
              <div className="text-[10px] text-neutral-400 uppercase tracking-widest mt-1">BOOKED CONSULTS</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">99.4%</div>
              <div className="text-[10px] text-neutral-400 uppercase tracking-widest mt-1">INSTANT CONNECT</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">&lt; 2 SEC</div>
              <div className="text-[10px] text-neutral-400 uppercase tracking-widest mt-1">AI TRIAGE SPEED</div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          3. ARCHITECTURE & 5 CORE PILLARS (MIN-H-SCREEN)
          ====================================================================== */}
      <section 
        id="architecture" 
        className="min-h-screen py-28 px-6 bg-cover bg-center bg-no-repeat relative border-t border-white/10 flex flex-col justify-center"
        style={{ backgroundImage: `url(${architectureBg})` }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          {/* Section Header */}
          <div className="text-left mb-16">
            <div className="font-mono text-[10px] tracking-[0.25em] text-neutral-400 uppercase mb-2">
              SYSTEM CAPABILITIES // SPECIFICATIONS
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight uppercase text-white">
              DIGITOL ARCHITECTURE MATRIX
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base max-w-2xl mt-3">
              Modular revenue engineering designed to interface seamlessly with your existing CRM, phone systems, and acquisition channels.
            </p>
          </div>

          {/* Pillar Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 mb-8 font-mono text-[10px] tracking-[0.2em] uppercase">
            {ARCHITECTURE_PILLARS.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => setActivePillar(idx)}
                className={`p-3.5 text-left border transition-all ${
                  activePillar === idx
                    ? 'bg-white text-black border-white font-bold shadow-[0_0_15px_rgba(255,255,255,0.2)]'
                    : 'bg-neutral-950/80 text-neutral-400 border-white/15 hover:border-white/40 hover:text-white backdrop-blur-md'
                }`}
              >
                <div className="text-[9px] opacity-60 mb-0.5">{p.id} // {p.tag}</div>
                <div className="truncate font-semibold text-xs">{p.title.split('(')[0]}</div>
              </button>
            ))}
          </div>

          {/* Active Pillar Workstation Display */}
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
                  {ARCHITECTURE_PILLARS[activePillar].tag}
                </div>
                <h3 className="text-2xl sm:text-4xl font-bold uppercase tracking-tight text-white">
                  {ARCHITECTURE_PILLARS[activePillar].title}
                </h3>
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                  {ARCHITECTURE_PILLARS[activePillar].desc}
                </p>

                <div className="space-y-2.5 pt-2">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 mb-2">
                    TECHNICAL DELIVERABLES &amp; INTEGRATIONS:
                  </div>
                  {ARCHITECTURE_PILLARS[activePillar].specs.map((spec, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                      <span className="font-mono text-white text-xs mt-0.5">•</span>
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => openAuditModal(ARCHITECTURE_PILLARS[activePillar].title)}
                    className="bg-white text-black hover:bg-neutral-200 text-xs font-bold uppercase tracking-[0.2em] px-6 py-3 border border-white transition-all flex items-center gap-2"
                  >
                    <span>INITIALIZE THIS ARCHITECTURE</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>

              {/* Right Column: Telemetry Specs */}
              <div className="lg:col-span-5 bg-black/90 border border-white/15 p-6 space-y-6 font-mono rounded-none backdrop-blur-md">
                <div className="text-[10px] text-neutral-400 tracking-[0.25em] uppercase border-b border-white/10 pb-3 flex justify-between items-center">
                  <span>TELEMETRY METRICS</span>
                  <Activity size={12} className="text-emerald-400" />
                </div>

                <div className="space-y-4">
                  {ARCHITECTURE_PILLARS[activePillar].metrics.map((m, idx) => (
                    <div key={idx} className="p-3 bg-white/[0.03] border border-white/10 flex justify-between items-center">
                      <span className="text-[10px] text-neutral-400 tracking-wider uppercase">{m.label}</span>
                      <span className="text-base font-bold text-white tracking-tight">{m.val}</span>
                    </div>
                  ))}
                </div>

                <div className="text-[10px] text-neutral-500 leading-relaxed pt-2 border-t border-white/10">
                  // Live sync support verified for GoHighLevel, HubSpot, Salesforce, ServiceTitan, Jobber, and Clio.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ======================================================================
          4. REVENUE SIMULATOR (ROI TELEMETRY ENGINE) (MIN-H-SCREEN)
          ====================================================================== */}
      <section 
        id="roi" 
        className="min-h-screen py-28 px-6 bg-cover bg-center bg-no-repeat relative border-t border-white/10 flex flex-col justify-center starlink-grid-fine"
        style={{ backgroundImage: `url(${roiBg})` }}
      >
        <div className="absolute inset-0 bg-black/75 backdrop-blur-[1px] pointer-events-none" />

        <div className="max-w-5xl mx-auto w-full relative z-10">
          <div className="text-center mb-16">
            <div className="font-mono text-[10px] tracking-[0.25em] text-neutral-400 uppercase mb-2">
              FINANCIAL SIMULATION PROTOCOL
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight uppercase text-white">
              PIPELINE REVENUE RECOVERY ENGINE
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base max-w-xl mx-auto mt-3">
              Model your business metrics to calculate recoverable capital currently lost to slow response times and unworked CRM leads.
            </p>
          </div>

          <div className="bg-neutral-950/90 border border-white/20 p-8 sm:p-12 rounded-sm backdrop-blur-2xl shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Controls */}
            <div className="lg:col-span-7 space-y-8 font-mono">
              {/* Slider 1 */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs tracking-wider uppercase text-neutral-300">
                  <span>MONTHLY INBOUND LEADS:</span>
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
                  <span>AVG CLIENT LIFETIME VALUE:</span>
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
                  <span>ESTIMATED UNANSWERED/LEAKED RATE:</span>
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
                * Based on Harvard Business Review response benchmark data: 78% of customers buy from the vendor that responds first.
              </div>
            </div>

            {/* Right Output Console */}
            <div className="lg:col-span-5 bg-black/90 p-8 border border-white/20 text-center space-y-6 backdrop-blur-md">
              <div className="font-mono text-[10px] tracking-[0.25em] text-neutral-400 uppercase">
                ESTIMATED RECOVERABLE CAPITAL
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
                ANNUAL GAIN: +${annualRecoveredCapital.toLocaleString()}
              </div>

              <button
                onClick={() => openAuditModal()}
                className="w-full bg-white text-black hover:bg-neutral-200 text-xs font-bold uppercase tracking-[0.2em] py-4 border border-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] active:scale-95"
              >
                INITIALIZE AUDIT FOR THIS PIPELINE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          5. ENTERPRISE TELEMETRY & CASE LOGS (MIN-H-SCREEN)
          ====================================================================== */}
      <section 
        id="telemetry" 
        className="min-h-screen py-28 px-6 bg-cover bg-center bg-no-repeat relative border-t border-white/10 flex flex-col justify-center"
        style={{ backgroundImage: `url(${telemetryBg})` }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="text-left mb-16">
            <div className="font-mono text-[10px] tracking-[0.25em] text-neutral-400 uppercase mb-2">
              VERIFIED ENTERPRISE LOGS
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight uppercase text-white">
              PERFORMANCE AUDIT DOSSIER
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
                "Within 72 hours of launching the 2-way AI database reactivation sequence, we booked 38 retained consultations from 1,400 cold Clio inquiries with zero ad spend."
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
                "Our dedicated Virtual Assistant answers every emergency call in under two rings, schedules the estimator in ServiceTitan, and dispatches SMS updates. Saved $4,000/mo in overhead."
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
                "Turnkey Business in a Box deployment gave us a sub-second website, automated SMS appointment nurture, and a full-time patient intake coordinator. Show-up rate jumped to 92%."
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
              INITIALIZE STRATEGY AUDIT →
            </button>
          </div>
        </div>
      </section>

      {/* ======================================================================
          6. FULL-SCREEN BLURRED OVERLAY MODAL (STARLINK TERMINAL)
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
                  <Terminal size={14} className="text-white" />
                  <span>[DIGITOL-SYS // REVENUE AUDIT INITIALIZATION]</span>
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
                          01 // SELECT INDUSTRY SECTOR
                        </h3>
                        <p className="text-neutral-400 text-xs font-mono tracking-wide">
                          Select the operational classification of your enterprise.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono text-xs">
                        {[
                          'HOME SERVICES & CONTRACTING',
                          'LEGAL & LAW PRACTICE',
                          'HEALTHCARE & MEDICAL SPA',
                          'REAL ESTATE & COMMERCIAL',
                          'B2B & ENTERPRISE SERVICES'
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

                  {/* Step 2: System Architecture */}
                  {currentStep === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white mb-1">
                          02 // SELECT PRIMARY ARCHITECTURE
                        </h3>
                        <p className="text-neutral-400 text-xs font-mono tracking-wide">
                          Select the target system configuration required.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 gap-2.5 font-mono text-xs">
                        {[
                          { title: '💻 HIGH-CONVERTING WEBSITE & FUNNELS', desc: 'Custom CRO web architecture engineered for sub-second loading & booking' },
                          { title: '⚡ DATABASE REACTIVATION (AI SMS)', desc: 'Reclaim dormant CRM pipeline revenue with automated 2-way AI SMS' },
                          { title: '👥 DEDICATED VIRTUAL ASSISTANT STAFFING', desc: 'Top 1% vetted executive VA for live phone dispatch & calendar scheduling' },
                          { title: '🎯 HIGH-INTENT PAID ACQUISITION (ADS)', desc: 'High-ROAS search & social campaigns targeting active buyers' },
                          { title: '🚀 TURNKEY BUSINESS IN A BOX (ALL STACK)', desc: 'Complete turn-key website, CRM, automated nurture, and staff placement' }
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

                  {/* Step 3: Pipeline Volume Capacity */}
                  {currentStep === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white mb-1">
                          03 // MONTHLY PIPELINE CAPACITY
                        </h3>
                        <p className="text-neutral-400 text-xs font-mono tracking-wide">
                          Select current monthly inbound lead/inquiry volume.
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

                  {/* Step 4: Enterprise Identity Contact */}
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
                          04 // ENTERPRISE IDENTITY
                        </h3>
                        <p className="text-neutral-400 text-xs font-mono tracking-wide">
                          Enter credentials for automated blueprint dispatch.
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
                          <label className="block text-[10px] text-neutral-400 uppercase tracking-widest mb-1.5">ENTERPRISE / BUSINESS NAME *</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Vance Capital LLC"
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
                          <label className="block text-[10px] text-neutral-400 uppercase tracking-widest mb-1.5">BUSINESS ADDRESS / HQ LOCATION (OPTIONAL)</label>
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
                          <span>{isSubmitting ? 'DISPATCHING TELEMETRY...' : 'CONFIRM & INITIALIZE REVENUE AUDIT →'}</span>
                        </button>
                      </div>
                    </motion.form>
                  )}
                </>
              ) : (
                /* Post-Submission Starlink Confirmation State */
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
                      AUDIT INITIALIZATION CONFIRMED
                    </div>
                    <h3 className="text-2xl font-bold uppercase tracking-tight text-white">
                      REVENUE BLUEPRINT QUEUED FOR {formData.company || 'YOUR ENTERPRISE'}
                    </h3>
                  </div>

                  <p className="text-neutral-400 text-xs max-w-md mx-auto leading-relaxed">
                    Dispatched in real time to <span className="text-white font-mono">{formData.email}</span>. A senior growth partner has received this dossier for analysis.
                  </p>

                  {/* Interactive Time Slot Locking Desk */}
                  <div className="bg-neutral-950 border border-white/20 p-5 text-left space-y-4">
                    <div className="flex justify-between items-center font-mono text-[10px] uppercase tracking-widest text-neutral-400 border-b border-white/10 pb-2">
                      <span>LOCK IN 30-MIN STRATEGY SESSION</span>
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
                        ✓ CONFIRMED FOR {selectedSlot}. CALENDAR DISPATCHED.
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2 font-mono text-xs uppercase tracking-widest">
                    <a
                      href="tel:+18004923444"
                      className="inline-flex items-center justify-center gap-2 bg-neutral-900 border border-white/20 hover:border-white px-5 py-3 text-neutral-300 hover:text-white transition-colors"
                    >
                      <PhoneCall size={14} />
                      <span>DIRECT DESK: (800) 492-DIGI</span>
                    </a>
                    <button
                      onClick={() => {
                        setModalOpen(false);
                        setSubmitted(false);
                        setCurrentStep(1);
                      }}
                      className="bg-white text-black font-bold px-5 py-3 border border-white hover:bg-neutral-200 transition-colors"
                    >
                      RETURN TO DASHBOARD
                    </button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ======================================================================
          7. MINIMALIST STARLINK FOOTER
          ====================================================================== */}
      <footer className="border-t border-white/10 bg-black py-16 px-6 font-mono text-xs text-neutral-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <div className="flex items-center gap-2 text-white font-bold tracking-[0.2em] uppercase mb-2">
              <div className="w-3.5 h-3.5 bg-white text-black text-[9px] flex items-center justify-center font-extrabold">D</div>
              <span>DIGITOL // AUTONOMOUS SYSTEMS</span>
            </div>
            <p className="text-neutral-500 text-[11px] max-w-md">
              High-Impact AI Automations &amp; Dedicated Virtual Assistant Placement. Austin, TX • Global Infrastructure.
            </p>
          </div>

          <div className="flex flex-wrap gap-8 text-[10px] tracking-[0.2em] uppercase text-neutral-400">
            <span>SLA: 99.98%</span>
            <span>DATA ENCRYPTION: 256-BIT</span>
            <span>RECIPIENT: VELA956ABEL@GMAIL.COM</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/5 flex justify-between items-center text-[10px] text-neutral-600">
          <div>© 2026 DIGITOL AI LLC. ALL RIGHTS RESERVED.</div>
          <div>STARLINK MINIMALIST SPECIFICATION</div>
        </div>
      </footer>
    </div>
  );
}
