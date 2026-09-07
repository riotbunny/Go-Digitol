import React from 'react';
import {
  Scale,
  Stethoscope,
  Building2,
  Wrench,
  Cpu,
  ShieldCheck,
  Zap,
  TrendingUp,
  Award,
  Layers
} from 'lucide-react';

const CLIENTS = [
  { name: 'APEX LEGAL PARTNERS', industry: 'NATIONAL LITIGATION', icon: Scale, metric: '+$4.2M REVENUE' },
  { name: 'VERTEX HEALTHCARE', industry: 'MULTI-CLINIC MEDICAL', icon: Stethoscope, metric: '+340% PATIENTS' },
  { name: 'NOVA INDUSTRIAL CORP', industry: 'B2B MANUFACTURING', icon: Cpu, metric: '4.8x ROAS' },
  { name: 'HORIZON HOME SYSTEMS', industry: 'COMMERCIAL HVAC', icon: Wrench, metric: '+$1.8M PIPELINE' },
  { name: 'VANGUARD WEALTH', industry: 'CAPITAL MANAGEMENT', icon: Building2, metric: '100% ATTRIBUTION' },
  { name: 'SOLIS ROBOTICS', industry: 'AUTONOMOUS TECH', icon: Zap, metric: '#1 AI SEARCH' },
  { name: 'CYBERSHIELD DEFENSE', industry: 'ENTERPRISE SAAS', icon: ShieldCheck, metric: '+290% SQLs' },
  { name: 'SUMMIT LOGISTICS', industry: 'SUPPLY CHAIN', icon: Layers, metric: '<0.8s CRO FUNNEL' },
  { name: 'ELEVATE DENTAL GROUP', industry: 'REGIONAL PRACTICES', icon: Award, metric: '+410 NEW LEADS/MO' },
  { name: 'BEACON ENERGY GROUP', industry: 'SOLAR INFRASTRUCTURE', icon: TrendingUp, metric: '5.2x PIPELINE LIFT' },
];

export default function ClientLogoMarquee() {
  return (
    <section className="relative py-14 bg-black border-y border-white/10 overflow-hidden">
      {/* Subtle Background Mesh */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 font-mono text-[10px] tracking-[0.25em] text-neutral-400 uppercase">
          <span className="flex items-center gap-2 text-white">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            ENTERPRISE CLIENT TRUST // PROVEN REVENUE GENERATION
          </span>
          <span className="text-neutral-400">$50M+ MANAGED PIPELINE</span>
        </div>
      </div>

      {/* Marquee Track Container */}
      <div className="relative w-full overflow-hidden mask-fade">
        <div className="animate-marquee-infinite flex gap-4 items-center">
          {/* First set of logos */}
          {CLIENTS.concat(CLIENTS).map((client, idx) => {
            const Icon = client.icon;
            return (
              <div
                key={`${client.name}-${idx}`}
                className="group flex items-center gap-3.5 px-5 py-3.5 bg-neutral-950/70 border border-white/10 rounded-sm hover:border-white/30 hover:bg-neutral-900/80 transition-all duration-300 min-w-[260px] cursor-default"
              >
                <div className="w-8 h-8 rounded-sm bg-neutral-900 border border-white/10 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:border-white/40 transition-colors">
                  <Icon size={16} />
                </div>
                <div>
                  <div className="text-xs font-bold tracking-wider text-neutral-200 group-hover:text-white transition-colors uppercase">
                    {client.name}
                  </div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="font-mono text-[9px] text-neutral-400 tracking-widest uppercase">
                      {client.industry}
                    </span>
                    <span className="text-neutral-700 text-[9px]">•</span>
                    <span className="font-mono text-[9px] text-emerald-400 font-semibold tracking-wider">
                      {client.metric}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
