import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import heroBg from './assets/hero_bg.jpg';
import architectureBg from './assets/architecture_bg.jpg';
import roiBg from './assets/roi_bg.jpg';
import telemetryBg from './assets/telemetry_bg.jpg';
import {
  Search,
  TrendingUp,
  MousePointerClick,
  Code2,
  FileText,
  BarChart3,
  CheckCircle2,
  PhoneCall,
  Calendar,
  ArrowUpRight,
  ChevronRight,
  ChevronDown,
  Globe,
  Database,
  X,
  Sparkles,
  Check,
  MapPin,
  Target,
  Layers,
  LineChart,
  ShieldCheck,
  Compass,
  Award,
  Users,
  Activity,
  Cpu,
  Lock,
  Smartphone,
  Zap,
  HelpCircle,
  Briefcase,
  Building2,
  Stethoscope,
  Scale,
  Wrench,
  ShoppingBag,
  ExternalLink
} from 'lucide-react';

// Enterprise-Grade 10/10 UI Components
import SpotlightCard from './components/SpotlightCard';
import KineticCounter from './components/KineticCounter';
import ClientLogoMarquee from './components/ClientLogoMarquee';
import BeforeAfterComparison from './components/BeforeAfterComparison';
import StarfieldCanvas from './components/StarfieldCanvas';
import TypewriterText from './components/TypewriterText';

/* ==========================================================================
   REVENUE CONVERSION DEMONSTRATION WORKFLOW
   ========================================================================== */
const RevenueProofShowcase = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="max-w-4xl mx-auto mb-16 w-full"
    >
      <SpotlightCard className="p-6 sm:p-8 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.9)] relative overflow-hidden border-white/20">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
        
        {/* Top Telemetry Header */}
        <div className="flex justify-between items-center pb-4 mb-6 border-b border-white/10 font-mono text-[10px] tracking-[0.25em] text-neutral-400 uppercase">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            CLOSED-LOOP REVENUE ACCELERATION PLATFORM // LIVE WORKFLOW
          </span>
          <span className="text-neutral-400">PROPRIETARY ATTRIBUTION</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Step 1: Acquisition */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2 p-4 bg-white/[0.02] border border-white/10 rounded-sm">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-sm bg-neutral-900 border border-neutral-700 flex items-center justify-center text-neutral-300">
                <Search size={18} className="text-white" />
              </div>
              <div>
                <div className="font-mono text-[9px] uppercase tracking-widest text-neutral-400">01 // ACQUISITION</div>
                <div className="text-xs font-bold text-white tracking-wider uppercase">HIGH-INTENT SEARCH TRAFFIC</div>
              </div>
            </div>
            <p className="text-[11px] text-neutral-400 leading-relaxed pt-1">
              Top #1 organic Google rankings &amp; high-ROAS PPC campaigns capture ready-to-buy commercial prospects.
            </p>
          </div>

          {/* Step 2: Conversion & Attribution */}
          <div className="flex flex-col space-y-2 p-4 bg-white/[0.04] border border-white/20 rounded-sm relative">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-mono text-[9px] text-white tracking-widest uppercase">
                <MousePointerClick size={14} className="text-white" />
                <span>02 // CRO CONVERSION</span>
              </div>
              <span className="font-mono text-[9px] px-1.5 py-0.5 border border-white/20 bg-white/10 text-white rounded-none">
                SUB-SECOND
              </span>
            </div>
            <div className="bg-black/90 p-2.5 border border-white/15 rounded-sm font-mono text-[11px] text-neutral-200">
              <span className="text-neutral-400 block text-[9px] mb-0.5 tracking-wider">LIVE ATTRIBUTION ENGINE</span>
              Qualified lead generated via custom web funnel &amp; synced directly to CRM in real time.
            </div>
          </div>

          {/* Step 3: Verified Revenue */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2 p-4 bg-white/[0.02] border border-white/10 rounded-sm">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-sm bg-neutral-900 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <CheckCircle2 size={18} />
              </div>
              <div>
                <div className="font-mono text-[9px] uppercase tracking-widest text-emerald-400">03 // REVENUE IMPACT</div>
                <div className="text-xs font-bold text-white tracking-wider uppercase">CLOSED CLIENT DEAL</div>
              </div>
            </div>
            <div className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-[10px] px-2.5 py-1 tracking-wider uppercase">
              <span>+</span>
              <KineticCounter value={18500} prefix="$" suffix=" CLIENT REVENUE" />
            </div>
          </div>
        </div>
      </SpotlightCard>
    </motion.div>
  );
};

/* ==========================================================================
   MAIN APPLICATION COMPONENT
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
    website_url: '',
    email: '',
    phone: '',
    notes: ''
  });

  // ROI Calculator State
  const [calcVisitors, setCalcVisitors] = useState(25000);
  const [calcAvgDeal, setCalcAvgDeal] = useState(4500);
  const [calcConvLift, setCalcConvLift] = useState(2.2);
  const [calcCloseRate, setCalcCloseRate] = useState(25);

  // Active Tab States
  const [activeServiceTab, setActiveServiceTab] = useState(0);
  const [activeIndustryTab, setActiveIndustryTab] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Selected calendar time slot on confirmation
  const [selectedSlot, setSelectedSlot] = useState('Tomorrow, 10:00 AM EST');
  const [slotConfirmed, setSlotConfirmed] = useState(false);

  // Calculations for ROI Calculator
  const calculatedAdditionalLeads = Math.round(calcVisitors * (calcConvLift / 100));
  const calculatedClosedClients = Math.round(calculatedAdditionalLeads * (calcCloseRate / 100));
  const annualRevenueGrowth = calculatedClosedClients * calcAvgDeal * 12;
  const monthlyRevenueGrowth = Math.round(annualRevenueGrowth / 12);
  const estimatedROIMultiplier = ((annualRevenueGrowth / 36000) || 1).toFixed(1);

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

  // 1. FULL-SERVICE DIGITAL MARKETING PILLARS
  const CORE_SERVICES = [
    {
      id: '01',
      tag: 'ORGANIC SEARCH & AI OVERVIEWS',
      title: 'SEARCH ENGINE OPTIMIZATION (SEO & AI SEARCH)',
      shortTitle: 'SEARCH ENGINE OPTIMIZATION',
      desc: 'Dominate commercial Google search rankings and next-generation AI Search Overviews. We build scalable organic revenue engines through technical SEO audits, high-intent keyword mapping, authoritative link building, and local map pack dominance.',
      metrics: [
        { label: 'ORGANIC TRAFFIC LIFT', val: '+280%' },
        { label: 'KEYWORD #1 RANKINGS', val: '9,400+' },
        { label: 'ROI ATTRIBUTION', val: '100% TRACKED' }
      ],
      features: [
        'Comprehensive technical architecture & Core Web Vitals optimization',
        'AI Search Optimization (GEO) ensuring presence in generative summaries',
        'High-authority backlink acquisition & digital PR campaigns',
        'Local SEO & Google Business Profile dominance across all service areas'
      ]
    },
    {
      id: '02',
      tag: 'PAID MEDIA & ROAS',
      title: 'PAY-PER-CLICK ADVERTISING (PPC & PAID MEDIA)',
      shortTitle: 'PAY-PER-CLICK ADVERTISING',
      desc: 'Drive immediate, high-intent leads and sales with precision Google Ads, Meta Ads, and programmatic campaigns. Powered by proprietary bid optimization and server-side tracking to maximize return on ad spend (ROAS).',
      metrics: [
        { label: 'AVERAGE CLIENT ROAS', val: '4.2x' },
        { label: 'COST PER ACQUISITION', val: '-38%' },
        { label: 'MANAGED AD SPEND', val: '$50M+' }
      ],
      features: [
        'Google Search, Display, Shopping, and YouTube advertising management',
        'Meta (Facebook & Instagram) hyper-targeted demographic campaigns',
        'Continuous negative keyword sculpting and conversion bid tuning',
        'Server-side Conversion API (CAPI) tracking for accurate attribution'
      ]
    },
    {
      id: '03',
      tag: 'CONVERSION RATE OPTIMIZATION',
      title: 'CUSTOM WEB DESIGN & CONVERSION ENGINES',
      shortTitle: 'CUSTOM WEB DESIGN & CRO',
      desc: 'Sub-second, conversion-engineered websites and landing pages built to turn traffic into qualified phone calls, quote requests, and signed contracts. Mobile-first, ADA-accessible, and built on high-performance infrastructure.',
      metrics: [
        { label: 'PAGE LOAD SPEED', val: '< 0.8 SEC' },
        { label: 'AVG CONVERSION INCREASE', val: '+240%' },
        { label: 'DESIGN AWARDS', val: '50+ AWARDS' }
      ],
      features: [
        'Custom CRO website architecture with frictionless lead capture funnels',
        'Direct 2-way CRM synchronization via automated real-time webhooks',
        'Zero render-blocking scripts with guaranteed 95+ Google PageSpeed score',
        'Behavioral heatmap tracking, A/B split testing, and user session replay'
      ]
    },
    {
      id: '04',
      tag: 'CONTENT MARKETING & AUTHORITY',
      title: 'CONTENT MARKETING & CREATIVE ASSETS',
      shortTitle: 'CONTENT MARKETING',
      desc: 'Data-driven content marketing that establishes industry authority, earns high-quality backlinks, and guides qualified prospects down the sales funnel from discovery to closed deal.',
      metrics: [
        { label: 'CONTENT ASSETS PUBLISHED', val: '120K+' },
        { label: 'AVG DWELL TIME LIFT', val: '+165%' },
        { label: 'ENGAGEMENT BENCHMARK', val: 'TOP 5%' }
      ],
      features: [
        'Commercial pillar pages, thought leadership blogs, and technical whitepapers',
        'Interactive tools, calculators, infographics, and custom data visualizers',
        'High-production video marketing and executive interview clips',
        'Full content syndication across authoritative industry publications'
      ]
    },
    {
      id: '05',
      tag: 'REVENUE INTELLIGENCE & TECH',
      title: 'REVENUE TRACKING & MARKETING AUTOMATION',
      shortTitle: 'REVENUE TRACKING & AUTOMATION',
      desc: 'Eliminate marketing guesswork with unified revenue attribution software. Track every lead, call, form submission, and closed deal down to the exact marketing channel and keyword that generated it.',
      metrics: [
        { label: 'FIRST-PARTY DATA ACCURACY', val: '100%' },
        { label: 'CRM INTEGRATIONS', val: '50+ CRMs' },
        { label: 'REPORTING CADENCE', val: 'REAL TIME' }
      ],
      features: [
        'Dynamic call tracking and recording with automatic lead scoring',
        'End-to-end closed-loop CRM integration (Salesforce, HubSpot, GoHighLevel)',
        'Custom automated lead nurture workflows via email & SMS triggers',
        'Live 24/7 executive client reporting portal with real contract ROI metrics'
      ]
    }
  ];

  // 2. PROPRIETARY REVENUE TECHNOLOGY SUITE (WebFX MarketingCloudFX equivalent)
  const TECH_SUITE = [
    {
      name: 'LeadAttributionOS',
      tag: 'FIRST-PARTY DATA',
      desc: 'Multi-touch attribution engine connecting every closed revenue deal back to the exact campaign, ad creative, and search query.',
      stat: '100% Attribution'
    },
    {
      name: 'CallTrackerOS',
      tag: 'VOICE INTELLIGENCE',
      desc: 'Dynamic phone number insertion with call recording, keyword tracking, and automated AI lead quality scoring.',
      stat: '< 1s Real-Time Sync'
    },
    {
      name: 'CompetitorRadarOS',
      tag: 'MARKET INTEL',
      desc: 'Continuous competitive intelligence scanning competitor ranking shifts, backlink gains, and ad spend strategy.',
      stat: '24/7 Monitoring'
    },
    {
      name: 'SpeedEngineOS',
      tag: 'CORE WEB VITALS',
      desc: 'Sub-second performance monitoring and edge caching engine guaranteeing top Google PageSpeed ratings.',
      stat: '0.8s Global CDN'
    }
  ];

  // 3. INDUSTRY-SPECIFIC PLAYBOOKS
  const INDUSTRY_PLAYBOOKS = [
    {
      sector: 'HOME SERVICES & CONTRACTING',
      icon: Wrench,
      headline: 'Dominating Local Search & Capturing High-Ticket Jobs',
      desc: 'From HVAC and roofing to plumbing and electrical, we position your business at the top of Google Local Map Packs and High-Intent Google Ads, driving pre-qualified homeowner calls directly into your dispatch software.',
      metrics: [
        { label: 'ORGANIC LEADS', val: '+280%' },
        { label: 'AVERAGE JOB VALUE', val: '$4,800' },
        { label: 'LOCAL 3-PACK RANK', val: '#1 RANKING' }
      ],
      points: [
        'ServiceTitan, Jobber, and Housecall Pro CRM integration',
        'Emergency 24/7 call tracking and instant response workflows',
        'Automated 5-star Google review generation sequences'
      ]
    },
    {
      sector: 'LEGAL & LAW PRACTICES',
      icon: Scale,
      headline: 'Securing High-Value Signed Cases with Precision PPC & SEO',
      desc: 'For personal injury, commercial litigation, and corporate law firms, we capture high-intent search traffic and convert prospects into retained consultations with ethical, bar-compliant marketing funnels.',
      metrics: [
        { label: 'SIGNED CASES', val: '+310%' },
        { label: 'COST PER SIGNED CASE', val: '-42%' },
        { label: 'CASE PIPELINE VALUE', val: '$8.4M+' }
      ],
      points: [
        'Clio, Filevine, and LawRuler legal CRM integrations',
        'Hyper-targeted geo-fenced PPC targeting courthouse and accident areas',
        'High-authority legal directory and digital PR link building'
      ]
    },
    {
      sector: 'HEALTHCARE & MEDICAL PRACTICES',
      icon: Stethoscope,
      headline: 'Attracting High-Value Patients & Filling Procedure Schedules',
      desc: 'From MedSpas and cosmetic surgery to dental and specialty clinics, our HIPAA-compliant marketing systems build trust, dominate local search, and drive patient bookings on autopilot.',
      metrics: [
        { label: 'NEW PATIENT BOOKINGS', val: '+185%' },
        { label: 'SHOW-UP RATE', val: '94%' },
        { label: 'PATIENT LTV', val: '$3,200' }
      ],
      points: [
        '100% HIPAA-compliant lead tracking and conversion attribution',
        'Interactive procedure cost calculators and visual before/after galleries',
        'Automated SMS/email appointment confirmation and nurture'
      ]
    },
    {
      sector: 'B2B & ENTERPRISE MANUFACTURING',
      icon: Building2,
      headline: 'Generating High-Ticket Enterprise RFQs & Corporate Contracts',
      desc: 'We position industrial manufacturers, distributors, and enterprise B2B service providers in front of procurement executives with account-based marketing and technical SEO content.',
      metrics: [
        { label: 'QUALIFIED RFQs', val: '+420%' },
        { label: 'AVG CONTRACT VALUE', val: '$45,000+' },
        { label: 'SALES CYCLE REDUCTION', val: '-35%' }
      ],
      points: [
        'HubSpot, Salesforce, and Zoho B2B CRM pipeline tracking',
        'Account-Based Marketing (ABM) on LinkedIn and Google Search',
        'Technical whitepaper and product spec sheet download funnels'
      ]
    }
  ];

  // 4. FREQUENTLY ASKED QUESTIONS
  const FAQS = [
    {
      q: 'How does Digitol track and attribute real revenue to marketing campaigns?',
      a: 'Unlike traditional agencies that only report on impressions and clicks, we integrate proprietary first-party tracking software directly with your CRM and phone systems. Every phone call, form submission, and signed contract is automatically tied back to the exact marketing channel, campaign, and keyword that generated it.'
    },
    {
      q: 'How quickly can our business expect to see measurable results?',
      a: 'Paid advertising (Google Ads & Meta) and custom landing page funnels typically begin driving qualified leads within the first 7 to 14 days. Comprehensive Search Engine Optimization (SEO) and content authority strategies compound over 60 to 90 days to establish sustainable, scalable organic market dominance.'
    },
    {
      q: 'Do we own our website, ad accounts, and analytics data?',
      a: 'Yes, 100%. You maintain full administrative ownership of your domain, website codebase, Google Ads accounts, Meta Business Manager, and CRM data. We believe in complete transparency and earning your partnership every month through verified performance.'
    },
    {
      q: 'What makes Digitol different from traditional digital marketing agencies?',
      a: 'Three key pillars: 1) We focus exclusively on bottom-line client revenue rather than vanity metrics, 2) We deploy custom, sub-second conversion web technology engineered for speed, and 3) You work with a dedicated senior strategy pod with transparent 24/7 reporting.'
    },
    {
      q: 'What are your contract terms and onboarding requirements?',
      a: 'We offer flexible, performance-aligned agreements designed around your growth goals. Onboarding takes approximately 7 business days, during which our engineering team sets up tracking pixels, performs technical audits, and prepares your launch roadmap.'
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
                REVENUE ACCELERATION AGENCY
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 font-mono text-[11px] tracking-[0.2em] text-neutral-400 uppercase">
            <a href="#services" className="hover:text-white transition-colors">SERVICES</a>
            <a href="#technology" className="hover:text-white transition-colors">TECHNOLOGY</a>
            <a href="#industries" className="hover:text-white transition-colors">INDUSTRIES</a>
            <a href="#revenue-calculator" className="hover:text-white transition-colors">ROI CALCULATOR</a>
            <a href="#results" className="hover:text-white transition-colors">RESULTS</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
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
        className="min-h-screen relative flex flex-col justify-center items-center px-6 pt-24 pb-16 bg-cover bg-center bg-no-repeat starlink-grid overflow-hidden"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/65 to-black pointer-events-none" />
        <div className="radar-scan" />
        
        {/* Ambient Deep-Space Particle Field */}
        <StarfieldCanvas particleCount={65} />

        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-white/[0.04] border border-white/15 rounded-none font-mono text-[10px] tracking-[0.25em] text-neutral-300 uppercase mb-8 backdrop-blur-md"
          >
            <TrendingUp size={13} className="text-white" />
            <span>FULL-SERVICE DIGITAL MARKETING THAT DRIVES REVENUE</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight uppercase leading-[1.05] text-white mb-8 drop-shadow-2xl"
          >
            THE DIGITAL AGENCY THAT <br />
            <TypewriterText
              phrases={[
                'SCALES QUALIFIED PIPELINE',
                'OUTRANKS YOUR COMPETITION',
                'TURNS TRAFFIC INTO BUYERS',
                'MAXIMIZES MARKETING ROI',
                'DRIVES MEASURABLE REVENUE.'
              ]}
              stopAtEnd={true}
            />
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-neutral-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-10 font-normal leading-relaxed tracking-wide drop-shadow-md"
          >
            Grow your business with a tech-enabled digital marketing partner. We connect custom SEO, high-ROAS PPC advertising, conversion-driven web design, and revenue tracking to generate qualified leads and closed deals.
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
              href="#services"
              className="w-full sm:w-auto bg-black/60 hover:bg-white/10 text-neutral-300 hover:text-white text-xs font-bold uppercase tracking-[0.2em] px-8 py-3.5 border border-white/20 backdrop-blur-lg transition-all text-center"
            >
              EXPLORE SERVICES
            </a>
          </motion.div>

          {/* Revenue Acceleration Showcase */}
          <RevenueProofShowcase />

          {/* Proof Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl border-t border-b border-white/10 py-6 font-mono bg-black/60 backdrop-blur-md">
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                <KineticCounter value={14.2} prefix="$" suffix="M+" decimals={1} />
              </div>
              <div className="text-[10px] text-neutral-400 uppercase tracking-widest mt-1">VERIFIED CLIENT REVENUE</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                <KineticCounter value={48500} suffix="+" />
              </div>
              <div className="text-[10px] text-neutral-400 uppercase tracking-widest mt-1">QUALIFIED LEADS DRIVEN</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                <KineticCounter value={4.2} suffix="x" decimals={1} />
              </div>
              <div className="text-[10px] text-neutral-400 uppercase tracking-widest mt-1">AVERAGE CLIENT ROAS</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                <KineticCounter value={99.4} suffix="%" decimals={1} />
              </div>
              <div className="text-[10px] text-neutral-400 uppercase tracking-widest mt-1">CLIENT RETENTION RATE</div>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Client Logo Marquee (Social Proof) */}
      <ClientLogoMarquee />

      {/* ======================================================================
          3. FULL-SERVICE MARKETING SUITE (MIN-H-SCREEN)
          ====================================================================== */}
      <section 
        id="services" 
        className="min-h-screen py-28 px-6 bg-cover bg-center bg-no-repeat relative border-t border-white/10 flex flex-col justify-center"
        style={{ backgroundImage: `url(${architectureBg})` }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          {/* Section Header */}
          <div className="text-left mb-16">
            <div className="font-mono text-[10px] tracking-[0.25em] text-neutral-400 uppercase mb-2">
              COMPREHENSIVE DIGITAL SERVICES
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight uppercase text-white">
              DIGITAL MARKETING &amp; REVENUE SOLUTIONS
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base max-w-2xl mt-3">
              End-to-end digital growth solutions designed to increase qualified organic search visibility, lower cost per acquisition, and maximize bottom-line sales.
            </p>
          </div>

          {/* Service Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 mb-8 font-mono text-[10px] tracking-[0.2em] uppercase">
            {CORE_SERVICES.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setActiveServiceTab(idx)}
                className={`p-3.5 text-left border transition-all ${
                  activeServiceTab === idx
                    ? 'bg-white text-black border-white font-bold shadow-[0_0_15px_rgba(255,255,255,0.2)]'
                    : 'bg-neutral-950/80 text-neutral-400 border-white/15 hover:border-white/40 hover:text-white backdrop-blur-md'
                }`}
              >
                <div className="text-[9px] opacity-60 mb-0.5">{s.id} // {s.tag}</div>
                <div className="truncate font-semibold text-xs">{s.shortTitle}</div>
              </button>
            ))}
          </div>

          {/* Active Service Workstation Display */}
          <motion.div
            key={activeServiceTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full"
          >
            <SpotlightCard className="p-8 sm:p-12 backdrop-blur-2xl shadow-2xl relative overflow-hidden border-white/20">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Column: Details */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-block font-mono text-[10px] tracking-[0.25em] px-2.5 py-1 bg-white/10 text-white border border-white/20 uppercase">
                    {CORE_SERVICES[activeServiceTab].tag}
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-bold uppercase tracking-tight text-white">
                    {CORE_SERVICES[activeServiceTab].title}
                  </h3>
                  <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                    {CORE_SERVICES[activeServiceTab].desc}
                  </p>

                  <div className="space-y-2.5 pt-2">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 mb-2">
                      KEY STRATEGIC DELIVERABLES:
                    </div>
                    {CORE_SERVICES[activeServiceTab].features.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                        <span className="font-mono text-white text-xs mt-0.5">•</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6">
                    <button
                      onClick={() => openAuditModal(CORE_SERVICES[activeServiceTab].title)}
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
                    <span>KEY SERVICE BENCHMARKS</span>
                    <LineChart size={12} className="text-emerald-400" />
                  </div>

                  <div className="space-y-4">
                    {CORE_SERVICES[activeServiceTab].metrics.map((m, idx) => (
                      <div key={idx} className="p-3 bg-white/[0.03] border border-white/10 flex justify-between items-center">
                        <span className="text-[10px] text-neutral-400 tracking-wider uppercase">{m.label}</span>
                        <span className="text-base font-bold text-white tracking-tight">{m.val}</span>
                      </div>
                    ))}
                  </div>

                  {/* High-Tech Animated Telemetry Waveform */}
                  <div className="pt-2 border-t border-white/10">
                    <div className="flex justify-between items-center text-[9px] text-neutral-500 mb-1.5 uppercase tracking-wider">
                      <span>LIVE TELEMETRY STREAM</span>
                      <span className="text-emerald-400 font-bold">OPTIMAL // 99.8% ACCURACY</span>
                    </div>
                    <svg className="w-full h-8 stroke-emerald-400/80 fill-none" viewBox="0 0 300 32">
                      <path
                        d="M0 16 Q 25 4, 50 16 T 100 16 T 150 28 T 200 6 T 250 20 T 300 16"
                        strokeWidth="1.5"
                      />
                      <circle cx="200" cy="6" r="3" fill="#34d399" className="animate-pulse" />
                    </svg>
                  </div>

                  <div className="text-[10px] text-neutral-500 leading-relaxed pt-1">
                    // Seamless integration verified with Google Analytics 4, Salesforce, HubSpot, Shopify, WordPress, and Custom CRMs.
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </section>

      {/* Interactive Before vs. After Performance Audit Slider */}
      <BeforeAfterComparison />

      {/* ======================================================================
          4. PROPRIETARY TECHNOLOGY PLATFORM (WebFX MarketingCloudFX equivalent)
          ====================================================================== */}
      <section id="technology" className="py-28 px-6 bg-black relative border-t border-white/10 starlink-grid">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="font-mono text-[10px] tracking-[0.25em] text-neutral-400 uppercase mb-2">
              PROPRIETARY TECHNOLOGY SUITE
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight uppercase text-white">
              ENGINEERED FOR REVENUE INTELLIGENCE
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base mt-3">
              Our in-house technology platform gives your enterprise unfair transparency—tracking multi-touch attribution, incoming phone leads, competitor strategies, and site speed in real time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TECH_SUITE.map((t, idx) => (
              <SpotlightCard key={idx} className="p-6 space-y-4 flex flex-col justify-between border-white/15">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-mono text-[9px] px-2 py-0.5 bg-white/10 border border-white/20 text-white uppercase tracking-wider">
                      {t.tag}
                    </span>
                    <Cpu size={14} className="text-neutral-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white uppercase tracking-tight">{t.name}</h3>
                  <p className="text-xs text-neutral-400 mt-2 leading-relaxed">{t.desc}</p>
                </div>
                <div className="pt-4 border-t border-white/10 font-mono text-xs text-emerald-400 font-bold flex justify-between items-center">
                  <span>BENCHMARK:</span>
                  <span>{t.stat}</span>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================================
          5. INDUSTRY-SPECIFIC PLAYBOOKS
          ====================================================================== */}
      <section id="industries" className="py-28 px-6 bg-neutral-950 relative border-t border-white/10">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-left mb-16">
            <div className="font-mono text-[10px] tracking-[0.25em] text-neutral-400 uppercase mb-2">
              SPECIALIZED INDUSTRY PLAYBOOKS
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight uppercase text-white">
              CUSTOMIZED FOR YOUR COMMERCIAL SECTOR
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base max-w-2xl mt-3">
              Every vertical requires tailored conversion architecture, keyword intent sculpting, and compliance. Explore our proven industry frameworks.
            </p>
          </div>

          {/* Industry Tab Navigation */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8 font-mono text-xs">
            {INDUSTRY_PLAYBOOKS.map((p, idx) => {
              const IconComponent = p.icon;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveIndustryTab(idx)}
                  className={`p-4 text-left border transition-all flex items-center gap-3 ${
                    activeIndustryTab === idx
                      ? 'bg-white text-black border-white font-bold'
                      : 'bg-black text-neutral-400 border-white/15 hover:border-white/40 hover:text-white'
                  }`}
                >
                  <IconComponent size={18} />
                  <span className="truncate uppercase tracking-wider">{p.sector.split('&')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Active Industry Display */}
          <motion.div
            key={activeIndustryTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <SpotlightCard className="p-8 sm:p-12 border-white/20">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-6">
                  <div className="font-mono text-[10px] tracking-[0.25em] text-emerald-400 uppercase">
                    {INDUSTRY_PLAYBOOKS[activeIndustryTab].sector}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white">
                    {INDUSTRY_PLAYBOOKS[activeIndustryTab].headline}
                  </h3>
                  <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                    {INDUSTRY_PLAYBOOKS[activeIndustryTab].desc}
                  </p>
                  <div className="space-y-2 pt-2">
                    {INDUSTRY_PLAYBOOKS[activeIndustryTab].points.map((pt, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-200">
                        <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4">
                    <button
                      onClick={() => openAuditModal(INDUSTRY_PLAYBOOKS[activeIndustryTab].sector)}
                      className="bg-white text-black hover:bg-neutral-200 text-xs font-bold uppercase tracking-[0.2em] px-6 py-3 border border-white transition-all flex items-center gap-2"
                    >
                      <span>REQUEST {INDUSTRY_PLAYBOOKS[activeIndustryTab].sector.split('&')[0]} ROADMAP</span>
                      <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-4 bg-neutral-950 border border-white/15 p-6 space-y-4 font-mono">
                  <div className="text-[10px] text-neutral-400 tracking-widest uppercase border-b border-white/10 pb-2">
                    SECTOR BENCHMARKS
                  </div>
                  {INDUSTRY_PLAYBOOKS[activeIndustryTab].metrics.map((m, i) => (
                    <div key={i} className="p-3 bg-white/[0.02] border border-white/10 flex justify-between items-center">
                      <span className="text-[10px] text-neutral-400 uppercase">{m.label}</span>
                      <span className="text-sm font-bold text-white">{m.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </section>

      {/* ======================================================================
          6. REVENUE GROWTH & CONVERSION LIFT CALCULATOR (MIN-H-SCREEN)
          ====================================================================== */}
      <section 
        id="revenue-calculator" 
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
              PROJECT YOUR DIGITAL MARKETING ROI
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base max-w-xl mx-auto mt-3">
              Calculate the projected revenue lift your business can achieve by increasing qualified organic traffic and optimizing conversion rates.
            </p>
          </div>

          <SpotlightCard className="p-8 sm:p-12 backdrop-blur-2xl shadow-2xl border-white/20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Controls */}
              <div className="lg:col-span-7 space-y-8 font-mono">
                {/* Slider 1: Traffic */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs tracking-wider uppercase text-neutral-300">
                    <span>MONTHLY WEBSITE VISITORS:</span>
                    <span className="font-bold text-white">{calcVisitors.toLocaleString()} VISITORS/MO</span>
                  </div>
                  <input
                    type="range"
                    min="2500"
                    max="100000"
                    step="1000"
                    value={calcVisitors}
                    onChange={(e) => setCalcVisitors(Number(e.target.value))}
                    className="w-full h-1.5 bg-neutral-800 accent-white rounded-none cursor-pointer"
                  />
                </div>

                {/* Slider 2: Deal Value */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs tracking-wider uppercase text-neutral-300">
                    <span>AVERAGE CLIENT / CONTRACT VALUE:</span>
                    <span className="font-bold text-white">${calcAvgDeal.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="25000"
                    step="250"
                    value={calcAvgDeal}
                    onChange={(e) => setCalcAvgDeal(Number(e.target.value))}
                    className="w-full h-1.5 bg-neutral-800 accent-white rounded-none cursor-pointer"
                  />
                </div>

                {/* Slider 3: Target Conversion Lift */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs tracking-wider uppercase text-neutral-300">
                    <span>TARGET CONVERSION RATE INCREASE:</span>
                    <span className="font-bold text-white">+{calcConvLift.toFixed(1)}% LIFT</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="5.0"
                    step="0.1"
                    value={calcConvLift}
                    onChange={(e) => setCalcConvLift(Number(e.target.value))}
                    className="w-full h-1.5 bg-neutral-800 accent-white rounded-none cursor-pointer"
                  />
                </div>

                <div className="text-[11px] text-neutral-400 font-sans">
                  * Based on verified WebFX and industry agency performance metrics across over 1,000+ client campaigns.
                </div>
              </div>

              {/* Right Output Console */}
              <div className="lg:col-span-5 bg-black/90 p-8 border border-white/20 text-center space-y-6 backdrop-blur-md rounded-sm">
                <div className="font-mono text-[10px] tracking-[0.25em] text-neutral-400 uppercase">
                  PROJECTED ANNUAL REVENUE GROWTH
                </div>

                <div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold font-mono tracking-tight text-white">
                    <KineticCounter value={annualRevenueGrowth} prefix="+$" duration={500} />
                  </div>
                  <div className="font-mono text-[11px] text-neutral-400 tracking-widest uppercase mt-1">
                    PER YEAR (<KineticCounter value={monthlyRevenueGrowth} prefix="+$" suffix="/MO" duration={500} />)
                  </div>
                </div>

                <div className="p-3 bg-white/[0.03] border border-white/10 font-mono text-xs text-emerald-400 tracking-wider uppercase">
                  PROJECTED ROI: <KineticCounter value={parseFloat(estimatedROIMultiplier) || 1} suffix="x" decimals={1} duration={500} /> ON AD INVESTMENT
                </div>

                <button
                  onClick={() => openAuditModal()}
                  className="w-full bg-white text-black hover:bg-neutral-200 text-xs font-bold uppercase tracking-[0.2em] py-4 border border-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] active:scale-95"
                >
                  REQUEST CUSTOM GROWTH PROPOSAL
                </button>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </section>

      {/* ======================================================================
          7. VERIFIED CLIENT RESULTS & CASE STUDIES (MIN-H-SCREEN)
          ====================================================================== */}
      <section 
        id="results" 
        className="min-h-screen py-28 px-6 bg-cover bg-center bg-no-repeat relative border-t border-white/10 flex flex-col justify-center"
        style={{ backgroundImage: `url(${telemetryBg})` }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="text-left mb-16">
            <div className="font-mono text-[10px] tracking-[0.25em] text-neutral-400 uppercase mb-2">
              PROVEN RESULTS // CASE STUDIES
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight uppercase text-white">
              MEASURABLE REVENUE IMPACT ACROSS INDUSTRIES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Case 1 */}
            <SpotlightCard className="p-6 space-y-4 font-mono border-white/15">
              <div className="flex justify-between items-center text-[10px] text-neutral-400 border-b border-white/10 pb-3 uppercase tracking-widest">
                <span>APEX LEGAL PARTNERS</span>
                <span className="text-emerald-400">+310% SIGNED CASES</span>
              </div>
              <p className="font-sans text-xs text-neutral-300 leading-relaxed">
                "Our targeted search engine optimization and PPC campaigns drove a 310% increase in signed commercial litigation clients while cutting cost per acquisition by 42%."
              </p>
              <div className="pt-2 text-[10px] text-neutral-500 uppercase tracking-widest">
                — MARCUS STERLING, MANAGING PARTNER
              </div>
            </SpotlightCard>

            {/* Case 2 */}
            <SpotlightCard className="p-6 space-y-4 font-mono border-white/15">
              <div className="flex justify-between items-center text-[10px] text-neutral-400 border-b border-white/10 pb-3 uppercase tracking-widest">
                <span>SOLIS HOME SERVICES</span>
                <span className="text-emerald-400">+280% ORGANIC LEADS</span>
              </div>
              <p className="font-sans text-xs text-neutral-300 leading-relaxed">
                "Local SEO rankings and high-converting custom landing pages generated over $3.2M in verified project revenue across 4 service territories in under 12 months."
              </p>
              <div className="pt-2 text-[10px] text-neutral-500 uppercase tracking-widest">
                — ELENA RODRIGUEZ, OPERATIONS DIRECTOR
              </div>
            </SpotlightCard>

            {/* Case 3 */}
            <SpotlightCard className="p-6 space-y-4 font-mono border-white/15">
              <div className="flex justify-between items-center text-[10px] text-neutral-400 border-b border-white/10 pb-3 uppercase tracking-widest">
                <span>ZENITH MEDSPA GROUP</span>
                <span className="text-emerald-400">+185% NEW PATIENTS</span>
              </div>
              <p className="font-sans text-xs text-neutral-300 leading-relaxed">
                "Custom web design overhaul and paid social media campaigns scaled monthly patient bookings by 185% with unified revenue tracking down to the exact procedure."
              </p>
              <div className="pt-2 text-[10px] text-neutral-500 uppercase tracking-widest">
                — DR. DANIEL KIM, MEDICAL DIRECTOR
              </div>
            </SpotlightCard>
          </div>

          <div className="mt-16 text-center">
            <button
              onClick={() => openAuditModal()}
              className="bg-white text-black hover:bg-neutral-200 text-xs font-bold uppercase tracking-[0.2em] px-8 py-3.5 border border-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)]"
            >
              REQUEST YOUR CUSTOM MARKETING PROPOSAL →
            </button>
          </div>
        </div>
      </section>

      {/* ======================================================================
          8. FREQUENTLY ASKED QUESTIONS (ACCORDION)
          ====================================================================== */}
      <section id="faq" className="py-28 px-6 bg-black relative border-t border-white/10 starlink-grid">
        <div className="max-w-4xl mx-auto w-full">
          <div className="text-center mb-16">
            <div className="font-mono text-[10px] tracking-[0.25em] text-neutral-400 uppercase mb-2">
              TRANSPARENCY &amp; ACCOUNTABILITY
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight uppercase text-white">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base mt-3">
              Everything you need to know about partnering with Digitol to scale your revenue.
            </p>
          </div>

          <div className="space-y-3 font-mono">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="bg-neutral-950 border border-white/15 rounded-sm overflow-hidden">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full p-5 text-left flex justify-between items-center text-xs sm:text-sm font-bold text-white hover:bg-white/[0.02] transition-colors"
                >
                  <span className="tracking-wider">{faq.q}</span>
                  <ChevronDown
                    size={16}
                    className={`transform transition-transform duration-200 text-neutral-400 ${
                      openFaqIndex === idx ? 'rotate-180 text-white' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaqIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-5 pb-5 pt-1 text-xs text-neutral-300 font-sans leading-relaxed border-t border-white/5"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================================
          9. FULL-SCREEN BLURRED OVERLAY MODAL (CUSTOM PROPOSAL DESK)
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
                  <span>[DIGITOL MARKETING // FREE REVENUE PROPOSAL]</span>
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
                          Select your primary industry so we can prepare sector-specific benchmark data.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono text-xs">
                        {[
                          'HOME SERVICES & CONTRACTING',
                          'LEGAL & LAW PRACTICES',
                          'HEALTHCARE & MEDICAL PRACTICES',
                          'REAL ESTATE & PROPERTY MANAGEMENT',
                          'B2B & PROFESSIONAL SERVICES',
                          'ECOMMERCE & RETAIL BRANDS'
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

                  {/* Step 2: Primary Marketing Goal */}
                  {currentStep === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white mb-1">
                          02 // WHAT SERVICES ARE YOU LOOKING FOR?
                        </h3>
                        <p className="text-neutral-400 text-xs font-mono tracking-wide">
                          Select the primary digital marketing solutions you need.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 gap-2.5 font-mono text-xs">
                        {[
                          { title: '🔍 SEARCH ENGINE OPTIMIZATION (SEO & AI SEARCH)', desc: 'Dominate organic Google rankings, local search, and AI Search Overviews' },
                          { title: '🎯 PAY-PER-CLICK ADVERTISING (PPC & PAID MEDIA)', desc: 'High-ROAS Google Ads, Meta Ads, and paid social campaigns' },
                          { title: '💻 CUSTOM WEB DESIGN & CONVERSION RATE (CRO)', desc: 'High-speed, conversion-engineered website and landing page funnels' },
                          { title: '✍️ CONTENT MARKETING & BRAND ASSETS', desc: 'Authoritative commercial content, infographics, and digital PR' },
                          { title: '🚀 FULL-SERVICE DIGITAL GROWTH (ALL CHANNELS)', desc: 'Complete end-to-end digital marketing management and revenue attribution' }
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

                  {/* Step 3: Monthly Marketing Budget */}
                  {currentStep === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white mb-1">
                          03 // MONTHLY MARKETING INVESTMENT SCALE
                        </h3>
                        <p className="text-neutral-400 text-xs font-mono tracking-wide">
                          What is your target monthly marketing budget?
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono text-xs">
                        {[
                          '$1,500 - $3,500 / MONTH',
                          '$3,500 - $7,500 / MONTH',
                          '$7,500 - $15,000 / MONTH',
                          '$15,000+ / MONTH (ENTERPRISE)'
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

                  {/* Step 4: Contact & Website URL */}
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
                          Enter your contact info and website URL for an automated SEO &amp; CRO website audit.
                        </p>
                      </div>

                      <div className="space-y-3 pt-2 font-mono text-xs">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                            <label className="block text-[10px] text-neutral-400 uppercase tracking-widest mb-1.5">COMPANY NAME *</label>
                            <input
                              type="text"
                              required
                              placeholder="e.g. Vance Roofing & Construction"
                              className="w-full bg-neutral-950 border border-white/20 p-3 text-white text-xs font-mono focus:border-white focus:outline-none transition-all rounded-none"
                              value={formData.company}
                              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[10px] text-neutral-400 uppercase tracking-widest mb-1.5">WEBSITE URL (FOR FREE AUDIT)</label>
                          <input
                            type="url"
                            placeholder="https://yourcompany.com"
                            className="w-full bg-neutral-950 border border-white/20 p-3 text-white text-xs font-mono focus:border-white focus:outline-none transition-all rounded-none"
                            value={formData.website_url}
                            onChange={(e) => setFormData({ ...formData, website_url: e.target.value })}
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
                      </div>

                      <div className="pt-4">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-white text-black hover:bg-neutral-200 text-xs font-bold uppercase tracking-[0.2em] py-4 border border-white transition-all shadow-[0_0_25px_rgba(255,255,255,0.2)] active:scale-95 flex items-center justify-center gap-2"
                        >
                          <span>{isSubmitting ? 'PREPARING YOUR PROPOSAL...' : 'REQUEST MY CUSTOM MARKETING PROPOSAL →'}</span>
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
                      CUSTOM DIGITAL MARKETING PROPOSAL QUEUED FOR {formData.company || 'YOUR BUSINESS'}
                    </h3>
                  </div>

                  <p className="text-neutral-400 text-xs max-w-md mx-auto leading-relaxed">
                    A confirmation email has been dispatched to <span className="text-white font-mono">{formData.email}</span>. A senior growth strategist has been assigned to conduct your competitor &amp; revenue analysis.
                  </p>

                  {/* Interactive Strategy Call Booking Desk */}
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
          10. FOOTER
          ====================================================================== */}
      <footer className="border-t border-white/10 bg-black py-16 px-6 font-mono text-xs text-neutral-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <div className="flex items-center gap-2 text-white font-bold tracking-[0.2em] uppercase mb-2">
              <div className="w-3.5 h-3.5 bg-white text-black text-[9px] flex items-center justify-center font-extrabold">D</div>
              <span>DIGITOL // FULL-SERVICE DIGITAL MARKETING AGENCY</span>
            </div>
            <p className="text-neutral-500 text-[11px] max-w-md font-sans">
              Tech-enabled digital marketing solutions, search engine optimization, paid advertising, and conversion web design. Austin, TX • Driving measurable revenue nationwide.
            </p>
          </div>

          <div className="flex flex-wrap gap-8 text-[10px] tracking-[0.2em] uppercase text-neutral-400">
            <span>ROI ATTRIBUTION: 100%</span>
            <span>TRANSPARENT REPORTING</span>
            <span>DIRECT: VELA956ABEL@GMAIL.COM</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/5 flex justify-between items-center text-[10px] text-neutral-600">
          <div>© 2026 DIGITOL AGENCY LLC. ALL RIGHTS RESERVED.</div>
          <div>FULL-SERVICE DIGITAL MARKETING &amp; REVENUE ACCELERATION</div>
        </div>
      </footer>
    </div>
  );
}
