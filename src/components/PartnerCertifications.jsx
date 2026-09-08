import React from 'react';
import { ShieldCheck, Award, CheckCircle2 } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const PARTNERS = [
  {
    name: 'GOOGLE PREMIER PARTNER',
    badge: 'TOP 3% NATIONWIDE',
    desc: 'Certified Google Search, YouTube & Local Services Ads management',
    highlight: 'PREMIER'
  },
  {
    name: 'META CERTIFIED MEDIA COMPANY',
    badge: 'ADVANCED CAPI',
    desc: 'Server-side Conversion API & precision demographic lead generation',
    highlight: 'CERTIFIED'
  },
  {
    name: 'HUBSPOT PLATINUM AGENCY',
    badge: 'CRM AUTOMATION',
    desc: 'Closed-loop multi-touch attribution & automated sales nurture workflows',
    highlight: 'PLATINUM'
  },
  {
    name: 'SHOPIFY PLUS PARTNER',
    badge: 'ENTERPRISE CRO',
    desc: 'High-speed conversion architecture & friction-free checkout funnels',
    highlight: 'ENTERPRISE'
  },
  {
    name: 'SALESFORCE PARTNER',
    badge: '2-WAY PIPELINE SYNC',
    desc: 'Deep enterprise CRM data synchronization & lead scoring integrations',
    highlight: 'INTEGRATED'
  },
  {
    name: 'CORE WEB VITALS CERTIFIED',
    badge: 'SUB-SECOND SPEED',
    desc: 'Guaranteed 95+ PageSpeed scores and modern technical SEO architecture',
    highlight: 'VERIFIED'
  }
];

export default function PartnerCertifications() {
  return (
    <section className="py-16 px-6 bg-black border-t border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] text-emerald-400 uppercase mb-1">
              <ShieldCheck size={13} />
              <span>OFFICIAL PARTNERSHIPS &amp; TECHNICAL CERTIFICATIONS</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
              VERIFIED TECHNICAL ECOSYSTEM PARTNERS
            </h3>
          </div>
          <div className="font-mono text-xs text-neutral-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>100% FIRST-PARTY INTEGRATIONS</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {PARTNERS.map((p, idx) => (
            <SpotlightCard
              key={idx}
              className="p-4 bg-neutral-950/90 border-white/15 flex flex-col justify-between hover:border-white/40 transition-all text-left group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[9px] px-1.5 py-0.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 uppercase tracking-widest font-bold">
                    {p.badge}
                  </span>
                  <Award size={13} className="text-neutral-500 group-hover:text-emerald-400 transition-colors" />
                </div>
                <div className="font-mono font-bold text-xs text-white uppercase tracking-wider mb-1.5 leading-snug group-hover:text-emerald-300 transition-colors">
                  {p.name}
                </div>
                <p className="text-[11px] text-neutral-400 leading-relaxed font-sans hidden sm:block">
                  {p.desc}
                </p>
              </div>
              <div className="pt-3 mt-3 border-t border-white/10 flex items-center gap-1.5 font-mono text-[9px] text-neutral-500 uppercase tracking-widest">
                <CheckCircle2 size={10} className="text-emerald-400" />
                <span>OFFICIALLY VERIFIED</span>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
