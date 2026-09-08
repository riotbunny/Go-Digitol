import React from 'react';
import { Layers, Zap, Target, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const PHASES = [
  {
    phase: '01',
    days: 'DAYS 01 – 07',
    tag: 'CALIBRATION & AUDIT',
    title: 'TECHNICAL ARCHITECTURE & TRACKING FOUNDATION',
    desc: 'We conduct a sub-second Core Web Vitals audit, deploy server-side CAPI tracking, and connect 2-way CRM webhooks for 100% closed-loop lead attribution.',
    items: [
      'Full technical SEO, page speed & server response audit',
      'Server-side Conversion API (CAPI) & first-party tracking sync',
      '2-way CRM webhook integration (HubSpot, Salesforce, GHL)',
      'Dynamic call tracking & source phone number insertion'
    ],
    deliverable: 'Technical Baseline & Tracking Dossier'
  },
  {
    phase: '02',
    days: 'DAYS 08 – 21',
    tag: 'FUNNELS & SCULPTING',
    title: 'HIGH-INTENT FUNNELS & KEYWORD MAPPING',
    desc: 'We build conversion-engineered landing pages and map high-intent commercial search keywords across both Google organic search and AI search overviews.',
    items: [
      'Sub-second custom CRO landing page & funnel deployment',
      'Commercial buyer-intent keyword architecture & gap analysis',
      'AI Search Optimization (GEO) for ChatGPT & Gemini citations',
      'Negative keyword sculpting to eliminate initial ad waste'
    ],
    deliverable: 'Live Conversion Engine & Target Blueprint'
  },
  {
    phase: '03',
    days: 'DAYS 22 – 45',
    tag: 'BID SCULPTING & SCALE',
    title: 'MULTI-CHANNEL CAMPAIGN ACCELERATION',
    desc: 'We launch precision Google Ads, Meta paid media, and local search campaigns with continuous algorithmic bid adjustments to drive down Cost Per Acquisition (CPA).',
    items: [
      'Google Search, Local Service Ads & Meta paid campaign launch',
      'Daily negative keyword pruning & conversion bid tuning',
      'Dynamic lead scoring & automatic speed-to-lead notification',
      'A/B split testing of ad copy, visual assets, and CTAs'
    ],
    deliverable: 'Cost-Per-Acquisition Optimization Report'
  },
  {
    phase: '04',
    days: 'DAYS 45 – 90+',
    tag: 'DOMINANCE & REVENUE',
    title: 'PIPELINE SCALING & ATTRIBUTION REPORTING',
    desc: 'With baseline CAC established, we scale high-performing channels, acquire high-authority industry backlinks, and grant 24/7 executive reporting access.',
    items: [
      'Continuous multivariate CRO testing on checkout & booking forms',
      'High-authority editorial backlink acquisition & digital PR',
      'Live 24/7 client executive reporting portal with contract ROI',
      'Quarterly growth roadmap & multi-location expansion plan'
    ],
    deliverable: '90-Day Revenue Acceleration Summary'
  }
];

export default function RoadmapTimeline({ onOpenModal }) {
  return (
    <section id="how-it-works" className="py-28 px-6 bg-black relative border-t border-white/10 digitol-grid">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.04] border border-white/15 rounded-none font-mono text-[10px] tracking-[0.25em] text-neutral-300 uppercase mb-4">
            <Layers size={13} className="text-white" />
            <span>THE 90-DAY REVENUE PLAYBOOK // HOW IT WORKS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white mb-4">
            FROM DAY 1 TO <span className="text-neutral-400">MARKET DOMINANCE</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Enterprise marketing without ambiguity. Here is the structured 4-phase execution framework our senior growth engineers follow to generate measurable pipeline revenue.
          </p>
        </div>

        {/* 4-Phase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PHASES.map((p, idx) => (
            <SpotlightCard
              key={idx}
              className="p-6 sm:p-8 bg-neutral-950/90 border-white/15 flex flex-col justify-between hover:border-white/40 transition-all text-left relative group"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 font-mono">
                  <span className="text-2xl font-bold text-white tracking-tight">{p.phase}</span>
                  <div className="text-right">
                    <span className="text-[10px] px-2 py-0.5 bg-white/10 border border-white/20 text-white uppercase tracking-wider block font-bold">
                      {p.days}
                    </span>
                    <span className="text-[9px] text-emerald-400 uppercase tracking-widest mt-1 block">
                      {p.tag}
                    </span>
                  </div>
                </div>

                <h3 className="text-base font-bold uppercase tracking-tight text-white mb-3 group-hover:text-emerald-300 transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs text-neutral-400 font-sans leading-relaxed mb-6">
                  {p.desc}
                </p>

                {/* Checklist */}
                <div className="space-y-2.5 pt-2 border-t border-white/10">
                  {p.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-300">
                      <CheckCircle2 size={13} className="text-emerald-400 mt-0.5 shrink-0" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverable Badge */}
              <div className="pt-6 mt-6 border-t border-white/10 font-mono text-[10px]">
                <div className="text-neutral-500 uppercase tracking-widest mb-1">KEY DELIVERABLE:</div>
                <div className="text-emerald-300 font-bold tracking-wider">{p.deliverable}</div>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-16 p-6 sm:p-8 bg-neutral-950 border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-xs">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-white font-bold tracking-wider uppercase text-sm">
              READY TO ACCELERATE YOUR REVENUE PIPELINE?
            </div>
            <div className="text-neutral-400 text-xs font-sans">
              Get a custom 90-day growth forecast tailored to your industry and competitors.
            </div>
          </div>
          <button
            onClick={() => onOpenModal && onOpenModal()}
            className="bg-white text-black hover:bg-neutral-200 text-xs font-bold uppercase tracking-[0.2em] px-8 py-3.5 border border-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] shrink-0 active:scale-95 flex items-center gap-2"
          >
            <span>CLAIM 90-DAY PROPOSAL</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
