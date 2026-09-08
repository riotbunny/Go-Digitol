import React from 'react';
import { Scale, CheckCircle2, XCircle, AlertCircle, ArrowUpRight } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const CRITERIA = [
  {
    feature: 'Core Success Metric',
    traditional: 'Vanity impressions & raw clicks',
    freelancers: 'Basic website traffic snapshots',
    digitol: '100% Verified Closed Deals & Contract Revenue',
    highlight: true
  },
  {
    feature: 'Contract Terms',
    traditional: '12-Month Lock-in Retainers',
    freelancers: 'Hourly billing with scope creep',
    digitol: 'Month-to-Month After Initial 90-Day Sprint',
    highlight: true
  },
  {
    feature: 'Team Seniority',
    traditional: 'Sold by executives, handed to offshored juniors',
    freelancers: 'Single generalist (single point of failure)',
    digitol: 'Dedicated Senior Strategists & Technical Engineers Only',
    highlight: true
  },
  {
    feature: 'Data & Tracking Accuracy',
    traditional: 'Third-party cookie estimates & blind attribution',
    freelancers: 'Basic Google Analytics standard setup',
    digitol: 'Server-Side CAPI + 2-Way CRM Webhook Attribution',
    highlight: true
  },
  {
    feature: 'Speed to Live Campaign',
    traditional: '6 to 8 weeks bureaucratic onboarding',
    freelancers: 'Unpredictable freelance turnaround',
    digitol: '7 Business Day Turnkey Onboarding Sprint',
    highlight: true
  },
  {
    feature: 'Data & Account Ownership',
    traditional: 'Agency holds ad accounts & creative hostage',
    freelancers: 'Scattered personal logins & loss of assets',
    digitol: '100% Client-Owned First-Party Ad Accounts & CRM Data',
    highlight: true
  },
  {
    feature: 'Proprietary Technology',
    traditional: 'Manual PDF reports delivered weeks late',
    freelancers: 'Static spreadsheets with zero attribution',
    digitol: 'Live 24/7 Digitol Intelligence Executive Dashboard',
    highlight: true
  }
];

export default function ComparisonMatrix({ onOpenModal }) {
  return (
    <section id="comparison" className="py-28 px-6 bg-neutral-950 relative border-t border-white/10 digitol-grid">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.04] border border-white/15 rounded-none font-mono text-[10px] tracking-[0.25em] text-neutral-300 uppercase mb-4">
            <Scale size={13} className="text-white" />
            <span>TRANSPARENCY AUDIT // THE DIGITOL DIFFERENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white mb-4">
            WHY MODERN ENTERPRISES <span className="text-neutral-400">CHOOSE DIGITOL</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Compare our revenue-first operational model against traditional marketing agencies and fragmented freelancer arrangements.
          </p>
        </div>

        {/* Comparison Table / Card Container */}
        <SpotlightCard className="p-4 sm:p-8 bg-black/90 border-white/20 overflow-x-auto">
          <div className="min-w-[700px]">
            {/* Header Row */}
            <div className="grid grid-cols-12 gap-4 pb-6 border-b border-white/15 font-mono text-xs uppercase tracking-widest text-neutral-400 items-center">
              <div className="col-span-4 text-left font-bold text-neutral-300">OPERATIONAL STANDARD</div>
              <div className="col-span-2 text-center text-neutral-500">FREELANCERS</div>
              <div className="col-span-3 text-center text-neutral-400">TRADITIONAL AGENCIES</div>
              <div className="col-span-3 text-center text-emerald-400 font-bold bg-emerald-500/10 py-2 border border-emerald-500/30">
                ★ DIGITOL REVENUE ENGINE
              </div>
            </div>

            {/* Criteria Rows */}
            <div className="divide-y divide-white/10 font-mono text-xs">
              {CRITERIA.map((c, i) => (
                <div key={i} className="grid grid-cols-12 gap-4 py-4 items-center hover:bg-white/[0.02] transition-colors">
                  {/* Feature */}
                  <div className="col-span-4 text-left text-white font-bold tracking-wide">
                    {c.feature}
                  </div>

                  {/* Freelancers */}
                  <div className="col-span-2 text-center text-neutral-500 font-sans text-xs flex flex-col items-center gap-1">
                    <XCircle size={14} className="text-neutral-600 shrink-0" />
                    <span>{c.freelancers}</span>
                  </div>

                  {/* Traditional Agencies */}
                  <div className="col-span-3 text-center text-neutral-400 font-sans text-xs flex flex-col items-center gap-1">
                    <AlertCircle size={14} className="text-amber-500/80 shrink-0" />
                    <span>{c.traditional}</span>
                  </div>

                  {/* Digitol */}
                  <div className="col-span-3 text-center text-white font-bold bg-emerald-500/5 border border-emerald-500/20 p-2.5 rounded-sm flex flex-col items-center gap-1">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                    <span className="text-emerald-300 text-xs font-mono">{c.digitol}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SpotlightCard>

        {/* Bottom Call to Action */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onOpenModal && onOpenModal()}
            className="bg-white text-black hover:bg-neutral-200 text-xs font-bold uppercase tracking-[0.2em] px-8 py-4 border border-white transition-all shadow-[0_0_25px_rgba(255,255,255,0.2)] active:scale-95 inline-flex items-center gap-2"
          >
            <span>EXPERIENCE THE DIGITOL ADVANTAGE →</span>
          </button>
        </div>
      </div>
    </section>
  );
}
