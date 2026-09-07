import React, { useState, useRef, useCallback } from 'react';
import {
  TrendingUp,
  TrendingDown,
  Gauge,
  Search,
  CheckCircle2,
  XCircle,
  MousePointerClick,
  DollarSign,
  ArrowRight,
  ShieldCheck,
  Zap
} from 'lucide-react';
import SpotlightCard from './SpotlightCard';

export default function BeforeAfterComparison() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pos = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(pos);
  }, []);

  const handlePointerDown = () => {
    setIsDragging(true);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleClick = (e) => {
    handleMove(e.clientX);
  };

  return (
    <section className="py-24 px-6 relative bg-black starlink-grid">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.04] border border-white/15 rounded-none font-mono text-[10px] tracking-[0.25em] text-neutral-300 uppercase mb-4">
            <Zap size={13} className="text-white" />
            <span>INTERACTIVE PERFORMANCE AUDIT // BEFORE VS. AFTER</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white mb-4">
            THE ANATOMY OF A <span className="text-neutral-400">REVENUE OVERHAUL</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Drag the interactive slider to compare legacy agency setups against Digitol&apos;s high-performance closed-loop revenue engine.
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <SpotlightCard className="p-4 sm:p-8 bg-neutral-950/90 border border-white/20">
          {/* Quick preset buttons */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10 font-mono text-[10px] uppercase tracking-widest text-neutral-400">
            <div className="flex items-center gap-3">
              <span className="text-white font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                INTERACTIVE REVEAL SLIDER
              </span>
              <span className="hidden sm:inline text-neutral-600">|</span>
              <span className="hidden sm:inline">DRAG DIVIDER OR CLICK ANYWHERE</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSliderPosition(20)}
                className="px-2.5 py-1 bg-white/5 border border-white/10 hover:border-white/30 text-neutral-300 hover:text-white transition-colors"
              >
                VIEW LEGACY (20%)
              </button>
              <button
                onClick={() => setSliderPosition(50)}
                className="px-2.5 py-1 bg-white/10 border border-white/20 hover:border-white/40 text-white transition-colors"
              >
                SPLIT (50%)
              </button>
              <button
                onClick={() => setSliderPosition(80)}
                className="px-2.5 py-1 bg-white/5 border border-white/10 hover:border-white/30 text-neutral-300 hover:text-white transition-colors"
              >
                VIEW DIGITOL (80%)
              </button>
            </div>
          </div>

          {/* Dual Comparison Board */}
          <div
            ref={containerRef}
            onClick={handleClick}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
            className="relative select-none cursor-ew-resize overflow-hidden rounded-sm border border-white/15 bg-neutral-950 min-h-[440px] flex items-stretch"
          >
            {/* RIGHT SIDE: AFTER DIGITOL (FULL BACKGROUND) */}
            <div className="w-full p-6 sm:p-10 bg-gradient-to-br from-neutral-950 via-neutral-900 to-black flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/15">
                  <div className="flex items-center gap-2.5 font-mono text-xs tracking-widest text-emerald-400 font-bold uppercase">
                    <CheckCircle2 size={16} className="text-emerald-400" />
                    <span>AFTER DIGITOL // REVENUE ENGINE</span>
                  </div>
                  <span className="font-mono text-[10px] px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 uppercase">
                    OPTIMAL PERFORMANCE
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                  <div className="p-4 bg-white/[0.03] border border-emerald-500/30 rounded-sm">
                    <div className="flex items-center justify-between text-neutral-400 font-mono text-[10px] tracking-wider mb-1">
                      <span>PAGE LOAD SPEED</span>
                      <span className="text-emerald-400 font-bold">99/100 SPEED</span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold font-mono text-white">0.64 SEC</div>
                    <div className="text-[11px] text-neutral-400 mt-1">Sub-second Core Web Vitals, zero bounce penalty</div>
                  </div>

                  <div className="p-4 bg-white/[0.03] border border-emerald-500/30 rounded-sm">
                    <div className="flex items-center justify-between text-neutral-400 font-mono text-[10px] tracking-wider mb-1">
                      <span>CONVERSION RATE</span>
                      <span className="text-emerald-400 font-bold">+240% LIFT</span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold font-mono text-white">8.42%</div>
                    <div className="text-[11px] text-neutral-400 mt-1">High-intent interactive funnels + instant capture</div>
                  </div>

                  <div className="p-4 bg-white/[0.03] border border-emerald-500/30 rounded-sm">
                    <div className="flex items-center justify-between text-neutral-400 font-mono text-[10px] tracking-wider mb-1">
                      <span>PAID ADS ROAS</span>
                      <span className="text-emerald-400 font-bold">4.2x ROAS</span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold font-mono text-white">$4.20 : $1.00</div>
                    <div className="text-[11px] text-neutral-400 mt-1">Server-side CAPI tracking + continuous bid sculpting</div>
                  </div>

                  <div className="p-4 bg-white/[0.03] border border-emerald-500/30 rounded-sm">
                    <div className="flex items-center justify-between text-neutral-400 font-mono text-[10px] tracking-wider mb-1">
                      <span>SEARCH DOMINANCE</span>
                      <span className="text-emerald-400 font-bold">GEO &amp; MAPS #1</span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold font-mono text-white">#1 RANKINGS</div>
                    <div className="text-[11px] text-neutral-400 mt-1">Dominant in AI search overviews &amp; local pack</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-neutral-300">
                <span className="flex items-center gap-2 text-emerald-400">
                  <ShieldCheck size={16} />
                  100% VERIFIED CLOSED-LOOP REVENUE ATTRIBUTION
                </span>
                <span className="text-white font-bold tracking-wider">MONTHLY NET GROWTH: +$48,500</span>
              </div>
            </div>

            {/* LEFT SIDE: BEFORE DIGITOL (CLIPPED OVERLAY) */}
            <div
              className="absolute top-0 bottom-0 left-0 bg-neutral-950 border-r border-white/40 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="w-[800px] sm:w-[1100px] p-6 sm:p-10 bg-neutral-950/95 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-red-500/20">
                    <div className="flex items-center gap-2.5 font-mono text-xs tracking-widest text-red-400 font-bold uppercase">
                      <XCircle size={16} className="text-red-400" />
                      <span>LEGACY SETUP // BEFORE DIGITOL</span>
                    </div>
                    <span className="font-mono text-[10px] px-2 py-0.5 bg-red-500/10 border border-red-500/30 text-red-300 uppercase">
                      LOST REVENUE
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                    <div className="p-4 bg-red-950/10 border border-red-500/20 rounded-sm">
                      <div className="flex items-center justify-between text-neutral-500 font-mono text-[10px] tracking-wider mb-1">
                        <span>PAGE LOAD SPEED</span>
                        <span className="text-red-400 font-bold">FAIL</span>
                      </div>
                      <div className="text-2xl sm:text-3xl font-bold font-mono text-red-300">4.82 SEC</div>
                      <div className="text-[11px] text-neutral-500 mt-1">Heavy plugins, high bounce rate, penalizing SEO</div>
                    </div>

                    <div className="p-4 bg-red-950/10 border border-red-500/20 rounded-sm">
                      <div className="flex items-center justify-between text-neutral-500 font-mono text-[10px] tracking-wider mb-1">
                        <span>CONVERSION RATE</span>
                        <span className="text-red-400 font-bold">LOW</span>
                      </div>
                      <div className="text-2xl sm:text-3xl font-bold font-mono text-red-300">1.25%</div>
                      <div className="text-[11px] text-neutral-500 mt-1">Generic web forms, zero follow-up automation</div>
                    </div>

                    <div className="p-4 bg-red-950/10 border border-red-500/20 rounded-sm">
                      <div className="flex items-center justify-between text-neutral-500 font-mono text-[10px] tracking-wider mb-1">
                        <span>PAID ADS ROAS</span>
                        <span className="text-red-400 font-bold">UNTRACKED</span>
                      </div>
                      <div className="text-2xl sm:text-3xl font-bold font-mono text-red-300">0.9x ROAS</div>
                      <div className="text-[11px] text-neutral-500 mt-1">Wasted ad budget, no conversion API sync</div>
                    </div>

                    <div className="p-4 bg-red-950/10 border border-red-500/20 rounded-sm">
                      <div className="flex items-center justify-between text-neutral-500 font-mono text-[10px] tracking-wider mb-1">
                        <span>SEARCH DOMINANCE</span>
                        <span className="text-red-400 font-bold">INVISIBLE</span>
                      </div>
                      <div className="text-2xl sm:text-3xl font-bold font-mono text-red-300">PAGE 3+</div>
                      <div className="text-[11px] text-neutral-500 mt-1">Zero presence on AI search &amp; buried local map listings</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-red-500/20 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-neutral-400">
                  <span className="flex items-center gap-2 text-red-400">
                    <TrendingDown size={16} />
                    ~68% OF QUALIFIED LEADS FALLING THROUGH CRACKS
                  </span>
                  <span className="text-red-300 font-bold tracking-wider">MONTHLY OPPORTUNITY LOSS: -$32,000</span>
                </div>
              </div>
            </div>

            {/* DRAGGABLE DIVIDER HANDLE */}
            <div
              onPointerDown={handlePointerDown}
              className="absolute top-0 bottom-0 z-30 flex items-center justify-center -ml-4 w-8 cursor-ew-resize group"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Glowing vertical line */}
              <div className="w-[2px] h-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)]" />
              
              {/* Center thumb badge */}
              <div className="absolute w-9 h-9 rounded-full bg-black border-2 border-white flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.8)] text-white text-xs font-mono font-bold group-hover:scale-110 transition-transform">
                <span>↔</span>
              </div>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}
