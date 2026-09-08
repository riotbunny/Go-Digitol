/**
 * DIGITOL AGENCY - MAIN JAVASCRIPT & ANIMATION ENGINE
 * Interactive AI & VA Sandbox Simulator, Scroll Reveals, Animated Number Counters,
 * Live Activity Stream Cycling, Mobile Hamburger Drawer, and Social Proof Ticker
 */

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initAnimatedCounters();
  initLiveLeadStreamPulse();
  initAiSandboxSimulator();
  initRoiCalculator();
  initMobileHamburgerDrawer();
  initFaqAccordion();
  initStickyHeader();
  initLiveEventTicker();
  initMobileDockScroll();
  initHapticFeedback();
});

/* ==========================================================================
   1. SCROLL-DRIVEN ENTRY REVEAL ANIMATIONS (INTERSECTION OBSERVER)
   ========================================================================== */

function initScrollReveal() {
  const elementsToReveal = document.querySelectorAll(
    '.hero-visual-card, .service-card, .step-card, .testimonial-card, .calculator-card, .matrix-table-wrapper, .faq-item, .trust-box, .stat-box'
  );

  elementsToReveal.forEach((el, index) => {
    el.classList.add('reveal-on-scroll');
    // Stagger delay based on sibling index
    const stagger = (index % 3) * 0.12;
    el.style.transitionDelay = `${stagger}s`;
  });

  if (!('IntersectionObserver' in window)) {
    elementsToReveal.forEach(el => el.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  });

  elementsToReveal.forEach(el => observer.observe(el));
}

/* ==========================================================================
   2. ANIMATED NUMBER COUNTERS (STATS STRIP)
   ========================================================================== */

function initAnimatedCounters() {
  const statBoxes = document.querySelectorAll('.stat-box');
  if (!statBoxes.length) return;

  const targetStats = [
    { prefix: '$', value: 14.2, suffix: 'M+', decimals: 1 },
    { prefix: '', value: 48500, suffix: '+', decimals: 0 },
    { prefix: '', value: 99.4, suffix: '%', decimals: 1 },
    { prefix: '< ', value: 2, suffix: 's', decimals: 0 }
  ];

  let animated = false;

  function runCounters() {
    if (animated) return;
    animated = true;

    statBoxes.forEach((box, i) => {
      const numberEl = box.querySelector('.stat-number');
      const target = targetStats[i];
      if (!numberEl || !target) return;

      const duration = 1600; // ms
      const startTime = performance.now();

      function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease-out cubic curve
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentVal = target.value * easeOut;

        let formattedVal = target.decimals > 0
          ? currentVal.toFixed(target.decimals)
          : Math.floor(currentVal).toLocaleString();

        numberEl.innerHTML = `${target.prefix}${formattedVal}<span class="stat-accent">${target.suffix}</span>`;

        if (progress < 1) {
          requestAnimationFrame(update);
        }
      }

      requestAnimationFrame(update);
    });
  }

  const statsSection = document.querySelector('.proof-strip');
  if (statsSection && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        runCounters();
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    observer.observe(statsSection);
  } else {
    runCounters();
  }
}

/* ==========================================================================
   3. HERO LIVE ACTIVITY STREAM PULSE & AUTO-HIGHLIGHT
   ========================================================================== */

function initLiveLeadStreamPulse() {
  const streamItems = document.querySelectorAll('.lead-stream .stream-item');
  if (!streamItems.length) return;

  let activeIndex = 0;

  setInterval(() => {
    streamItems.forEach((item, idx) => {
      if (idx === activeIndex) {
        item.classList.add('stream-highlight');
      } else {
        item.classList.remove('stream-highlight');
      }
    });

    activeIndex = (activeIndex + 1) % streamItems.length;
  }, 2800);
}

/* ==========================================================================
   4. INTERACTIVE LIVE REVENUE ENGINE SIMULATOR (WITH LIVE TYPING DOTS)
   ========================================================================== */

const AI_SCENARIOS = {
  voice: {
    status: 'Programmatic SEO & Sub-Second Edge Landing Page',
    actionText: '✓ $14,500 Replacement Scope Synced Directly to AccuLynx',
    messages: [
      { sender: 'user', text: 'Google Search: "emergency commercial flat roof replacement austin tx"' },
      { sender: 'ai', text: 'Digitol Edge Engine (<0.8s): Served hyper-local landing page with instant storm damage appraisal calculator & aerial roof scope screening.' },
      { sender: 'user', text: 'Property Owner submitted: "Need full TPO tear-off on 18,000 sq ft warehouse. Hail damage from last week."' },
      { sender: 'ai', text: 'Digitol Dispatch Webhook: "Estimate claim auto-logged in AccuLynx, priority lead alert pushed to Marcus Sterling, commercial estimator dispatched."' }
    ]
  },
  sms: {
    status: 'Automated 2-Way CRM Database Reactivation (90-Day Recall)',
    actionText: '✓ $8,400 Cosmetic Treatment Package Booked in Zenoti',
    messages: [
      { sender: 'ai', text: 'Digitol CRM Engine: "Hi Amanda! Quick reminder from Aura MedSpa — your 90-day neurotoxin renewal window is coming up next week. Dr. Lauren reserved 2 VIP slots for Thursday or Friday. Would you like to lock one in?"' },
      { sender: 'user', text: 'Patient: "Yes! Can we do Friday at 2:30 PM? Also want to add RF microneedling."' },
      { sender: 'ai', text: 'Digitol CRM Engine: "Done! Friday at 2:30 PM is confirmed. $150 deposit credited, treatment protocol synced into Zenoti EHR."' }
    ]
  },
  ads: {
    status: 'Bar-Compliant Legal PPC & 24/7 Intake Qualification',
    actionText: '✓ Catastrophic MVA Retained Case Synced to Clio & Filevine',
    messages: [
      { sender: 'user', text: 'High-Intent Google Search: "commercial trucking collision attorney near me"' },
      { sender: 'ai', text: 'Digitol Speed-to-Intake (<2s): "Thank you for contacting Sterling Injury Law. To connect you immediately with our senior intake attorney, was anyone injured in the collision?"' },
      { sender: 'user', text: 'Injured Party: "Yes, 18-wheeler rear-ended my vehicle on I-35, suffered spinal fractures."' },
      { sender: 'ai', text: 'Digitol Bar-Compliant Intake: "Retainer agreement dispatched via secure DocuSign, case brief auto-populated into Clio Manage and assigned to Lead Trial Counsel."' }
    ]
  }
};

function initAiSandboxSimulator() {
  const chips = document.querySelectorAll('.scenario-chip');
  const chatContainer = document.getElementById('sandbox-chat-stream');
  const statusEl = document.getElementById('sandbox-status-text');
  const actionTextEl = document.getElementById('sandbox-action-text');

  if (!chips.length || !chatContainer) return;

  let activeTimeouts = [];
  let userInteracted = false;
  const scenarioKeys = ['voice', 'sms', 'ads'];
  let autoIndex = 0;

  function clearAllTimeouts() {
    activeTimeouts.forEach(t => clearTimeout(t));
    activeTimeouts = [];
  }

  function renderScenario(scenarioKey) {
    const data = AI_SCENARIOS[scenarioKey];
    if (!data) return;

    clearAllTimeouts();

    if (statusEl) statusEl.textContent = data.status;
    if (actionTextEl) actionTextEl.textContent = data.actionText;

    chatContainer.innerHTML = '';

    // Create typing indicator
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'chat-bubble bubble-ai typing-bubble';
    typingIndicator.innerHTML = `
      <div class="typing-dots-container">
        <span class="type-dot"></span>
        <span class="type-dot"></span>
        <span class="type-dot"></span>
      </div>
    `;

    data.messages.forEach((msg, index) => {
      // Step 1: Show typing dots before AI or User bubble
      const typingTimer = setTimeout(() => {
        chatContainer.appendChild(typingIndicator);
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }, index * 1100);
      activeTimeouts.push(typingTimer);

      // Step 2: Replace with actual message
      const msgTimer = setTimeout(() => {
        if (typingIndicator.parentNode) {
          typingIndicator.remove();
        }

        const bubble = document.createElement('div');
        bubble.className = `chat-bubble bubble-${msg.sender}`;

        if (msg.sender === 'ai') {
          bubble.innerHTML = `
            <div class="ai-bubble-tag">
              <span class="pulse-dot" style="width:5px; height:5px;"></span>
              <span>Digitol Revenue Engine</span>
            </div>
            <div>${msg.text}</div>
          `;
        } else {
          bubble.textContent = msg.text;
        }

        chatContainer.appendChild(bubble);
        chatContainer.scrollTop = chatContainer.scrollHeight;
        triggerHaptic(8);
      }, index * 1100 + 450);
      activeTimeouts.push(msgTimer);
    });
  }

  chips.forEach((chip, i) => {
    chip.addEventListener('click', () => {
      userInteracted = true;
      triggerHaptic(15);
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const scenarioKey = chip.getAttribute('data-scenario');
      autoIndex = i;
      renderScenario(scenarioKey);
    });
  });

  // Start initial scenario
  renderScenario('voice');

  // Auto-cycle every 9 seconds if user hasn't manually clicked
  setInterval(() => {
    if (!userInteracted) {
      autoIndex = (autoIndex + 1) % scenarioKeys.length;
      chips.forEach(c => c.classList.remove('active'));
      if (chips[autoIndex]) {
        chips[autoIndex].classList.add('active');
        renderScenario(scenarioKeys[autoIndex]);
      }
    }
  }, 9000);
}

/* ==========================================================================
   5. MOBILE HAMBURGER & OFF-CANVAS SLIDE DRAWER
   ========================================================================== */

function initMobileHamburgerDrawer() {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const drawer = document.getElementById('mobile-nav-drawer');
  const backdrop = document.getElementById('mobile-drawer-backdrop');
  const closeBtn = document.getElementById('drawer-close-btn');

  if (!hamburgerBtn || !drawer || !backdrop) return;

  function openDrawer() {
    triggerHaptic(15);
    hamburgerBtn.classList.add('active');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    drawer.classList.add('active');
    drawer.setAttribute('aria-hidden', 'false');
    backdrop.classList.add('active');
    backdrop.setAttribute('aria-hidden', 'false');
    document.body.classList.add('menu-open');
  }

  function closeDrawer() {
    triggerHaptic(10);
    hamburgerBtn.classList.remove('active');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    drawer.classList.remove('active');
    drawer.setAttribute('aria-hidden', 'true');
    backdrop.classList.remove('active');
    backdrop.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('menu-open');
  }

  hamburgerBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (drawer.classList.contains('active')) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);

  drawer.querySelectorAll('.drawer-link, .drawer-cta-box a').forEach(link => {
    link.addEventListener('click', () => {
      setTimeout(closeDrawer, 120);
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('active')) {
      closeDrawer();
    }
  });

  // Swipe-to-close touch gesture
  let touchStartX = 0;
  let touchEndX = 0;

  drawer.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  drawer.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchEndX - touchStartX > 50) {
      closeDrawer();
    }
  }, { passive: true });
}

/* ==========================================================================
   6. CONTEXTUAL & INDUSTRY-ISOLATED SOCIAL PROOF STREAM (TICKER & TOAST)
   ========================================================================== */

const INDUSTRY_AUTOMATIONS = {
  'roofing-contractors': [
    { icon: '🏠', text: '$14,500 Full Shingle Tear-Off & Replacement captured via Google LSAs', company: 'Solis Roofing & Restoration • 18s ago' },
    { icon: '⚡', text: 'Storm Surge Paid Ad Engine deployed across 12 hail-hit ZIP codes', company: 'Apex Storm Restorations • 2m ago' },
    { icon: '🏗️', text: '$52,000 Commercial TPO Flat Roof scope logged & synced to AccuLynx', company: 'Titan Commercial Roofing • 5m ago' },
    { icon: '📷', text: 'CompanyCam photo report generated & auto-dispatched to insurance adjuster', company: 'Vanguard Roof Systems • 9m ago' }
  ],
  'personal-injury-law': [
    { icon: '⚖️', text: '$32,000 MVA Catastrophic Injury Retainer signed via High-Authority Legal SEO', company: 'Sterling Trial Law • 2m ago' },
    { icon: '🚛', text: 'Commercial 18-Wheeler Trucking Collision case screened & synced to Clio', company: 'Vance & Partners Litigation • 5m ago' },
    { icon: '📜', text: 'Bar-compliant intake funnel filtered property damage vs bodily injury retainer', company: 'Beacon Injury Counsel • 8m ago' },
    { icon: '🏛️', text: 'Courthouse-geofenced PPC campaign converted 3 high-value retainers in 48h', company: 'Capital Justice Law Group • 14m ago' }
  ],
  'medspas-cosmetics': [
    { icon: '💆', text: '$4,200 Neurotoxin & Morpheus8 Package booked via Zero-Pixel PHI Intake', company: 'Aura Aesthetics MedSpa • 3m ago' },
    { icon: '💉', text: '90-Day Patient Recall flow reactivated $16,800 in treatment deposits', company: 'Luxe Cosmetic Clinic • 6m ago' },
    { icon: '✨', text: 'Full-Face Dermal Filler consultation scheduled & synced to Zenoti EHR', company: 'Elysian Aesthetic Lounge • 11m ago' },
    { icon: '🛡️', text: 'HIPAA-compliant server-side CAPI tracking verified with zero client pixel leaks', company: 'Radiance Skin Institute • 17m ago' }
  ],
  'hvac-plumbing': [
    { icon: '❄️', text: '$9,800 Inverter Heat Pump Replacement dispatched via ServiceTitan CAPI', company: 'Apex Air & Plumbing • 4m ago' },
    { icon: '🔧', text: 'Emergency Sewer Line Hydro-Jetting inquiry captured via Missed-Call Text-Back', company: 'ProFlow Emergency Trades • 7m ago' },
    { icon: '📋', text: 'Seasonal Maintenance Club membership renewal sequence signed 140 homeowners', company: 'BlueWave Climate Systems • 12m ago' },
    { icon: '📞', text: 'Sub-5-second automated callback converted $6,400 furnace replacement', company: 'Metro Heating & Cooling • 19m ago' }
  ],
  'b2b-manufacturing': [
    { icon: '⚙️', text: '$65,000 Precision CNC Aerospace RFQ submitted via CAD Portal', company: 'TX Aero Dynamics • 6m ago' },
    { icon: '🏭', text: 'AS9100 / ITAR Precision Machining contract signed ($180k EAU) via ABM', company: 'Vanguard Machining • 12m ago' },
    { icon: '📐', text: 'STEP/IGES 3D blueprint uploaded & routed to HubSpot Enterprise', company: 'Precision Components Mfg • 18m ago' },
    { icon: '💼', text: 'LinkedIn ABM campaign engaged Tier-1 Defense Procurement directors', company: 'Titan Industrial Systems • 25m ago' }
  ],
  'ecommerce-brands': [
    { icon: '📦', text: 'Shopify Plus 5.2x ROAS Meta CAPI campaign scaled past $140k/mo', company: 'Luxe DTC Botanicals • 5m ago' },
    { icon: '💌', text: 'Klaviyo Post-Purchase Upsell Flow generated $24,500 incremental revenue', company: 'Velvet Silk Co • 10m ago' },
    { icon: '⚡', text: 'Headless checkout optimization increased mobile conversion rate by +42%', company: 'PureGlow Organics • 16m ago' },
    { icon: '📊', text: 'First-Party CAPI 9.4/10 Event Match Quality unlocked 38% lower CAC', company: 'Apex Apparel Brand • 22m ago' }
  ],
  'commercial-real-estate': [
    { icon: '🏢', text: 'Class-A Office Space Triple Net (NNN) lease inquiry ($120k RSF) captured', company: 'Metropolitan CRE Group • 7m ago' },
    { icon: '🔍', text: 'Industrial Logistics Warehouse Matterport 3D tour booked by tenant rep broker', company: 'Apex Logistics Realty • 14m ago' },
    { icon: '📝', text: 'Letter of Intent (LOI) signed on 45,000 sq ft suburban distribution center', company: 'Pinnacle Commercial • 21m ago' },
    { icon: '📈', text: 'LoopNet arbitrage campaign pre-leased 92% of new mixed-use development', company: 'Vanguard Realty Partners • 30m ago' }
  ],
  'dental-practices': [
    { icon: '🦷', text: 'All-on-4 Full-Arch Implant Consultation ($24,000 case) scheduled in Dentrix', company: 'Brownsville Cosmetic Dentistry • 4m ago' },
    { icon: '✨', text: 'Porcelain Veneers Smile Makeover package financing approved via Sunbit', company: 'Beacon Hill Dental Arts • 9m ago' },
    { icon: '😁', text: 'Clear Aligner (Invisalign) hyper-local search campaign booked 18 consultations', company: 'Apex Cosmetic Orthodontics • 15m ago' },
    { icon: '📅', text: 'Automated hygiene recall flow achieved 93% verified show-up rate', company: 'Summit Dental Group • 23m ago' }
  ]
};

const GENERAL_AUTOMATIONS = [
  { icon: '🏠', text: '$14,500 Full Roof Replacement captured via Google LSAs & synced to AccuLynx', company: 'Solis Roofing & Restoration • 18s ago' },
  { icon: '⚖️', text: '$32,000 MVA Catastrophic Injury Retainer signed via Legal SEO Funnel', company: 'Sterling Trial Law • 2m ago' },
  { icon: '💆', text: '$4,200 Neurotoxin & Morpheus8 Package booked via Zero-Pixel PHI Intake', company: 'Aura Aesthetics MedSpa • 5m ago' },
  { icon: '❄️', text: '$9,800 Inverter Heat Pump Replacement dispatched via ServiceTitan CAPI', company: 'Apex Air & Plumbing • 8m ago' },
  { icon: '⚙️', text: '$65,000 Precision CNC Aerospace RFQ submitted via CAD Portal', company: 'TX Aero Dynamics • 12m ago' },
  { icon: '📦', text: 'Shopify Plus 5.2x ROAS Meta CAPI campaign scaled past $140k/mo', company: 'Luxe DTC Botanicals • 16m ago' },
  { icon: '🏢', text: 'Class-A Office Space Triple Net (NNN) lease inquiry ($120k RSF) captured', company: 'Metropolitan CRE Group • 21m ago' },
  { icon: '🦷', text: 'All-on-4 Full-Arch Implant Consultation ($24,000 case) scheduled in Dentrix', company: 'Brownsville Cosmetic Dentistry • 27m ago' }
];

function getContextualAutomations() {
  if (typeof window === 'undefined') return GENERAL_AUTOMATIONS;
  const path = window.location.pathname.toLowerCase();
  
  for (const [slug, items] of Object.entries(INDUSTRY_AUTOMATIONS)) {
    if (path.includes(slug)) {
      return items;
    }
  }
  return GENERAL_AUTOMATIONS;
}

function initLiveEventTicker() {
  let tickerEl = document.querySelector('.live-event-ticker');
  if (!tickerEl) {
    tickerEl = document.createElement('div');
    tickerEl.className = 'live-event-ticker';
    document.body.appendChild(tickerEl);
  }

  const automations = getContextualAutomations();
  if (!automations || !automations.length) return;

  let index = 0;

  function updateTicker() {
    const item = automations[index];
    tickerEl.innerHTML = `
      <div class="ticker-icon">${item.icon}</div>
      <div class="ticker-text">
        <strong>${item.text}</strong>
        <span>${item.company}</span>
      </div>
      <button style="background:none; border:none; color:#64748b; cursor:pointer; font-size:1rem; padding:0.2rem; line-height:1;" aria-label="Dismiss">×</button>
    `;

    const closeBtn = tickerEl.querySelector('button');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        tickerEl.style.display = 'none';
      });
    }

    index = (index + 1) % automations.length;
  }

  // Show after 1.5s delay
  setTimeout(() => {
    updateTicker();
    setInterval(updateTicker, 6500);
  }, 1500);
}

/* ==========================================================================
   7. INTERACTIVE AI & VA ROI CALCULATOR
   ========================================================================== */

function initRoiCalculator() {
  const leadsSlider = document.getElementById('calc-leads');
  const valueSlider = document.getElementById('calc-value');
  const leadsValDisplay = document.getElementById('calc-leads-val');
  const valueValDisplay = document.getElementById('calc-value-val');
  const resultDisplay = document.getElementById('calc-result-revenue');
  const annualDisplay = document.getElementById('calc-annual-impact');

  if (!leadsSlider || !valueSlider || !resultDisplay) return;

  function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(amount);
  }

  function updateCalculations() {
    const monthlyLeads = parseInt(leadsSlider.value, 10);
    const customerValue = parseInt(valueSlider.value, 10);

    if (leadsValDisplay) {
      leadsValDisplay.textContent = `${monthlyLeads.toLocaleString()} leads/mo`;
    }
    if (valueValDisplay) {
      valueValDisplay.textContent = formatCurrency(customerValue);
    }

    const leakedLeads = monthlyLeads * 0.35;
    const recoveredClients = leakedLeads * 0.16;
    const monthlyRecoveredRevenue = Math.round(recoveredClients * customerValue);
    const annualImpact = monthlyRecoveredRevenue * 12;

    resultDisplay.textContent = `+${formatCurrency(monthlyRecoveredRevenue)}/mo`;
    if (annualDisplay) {
      annualDisplay.textContent = `Estimated Annual Gain: +${formatCurrency(annualImpact)}`;
    }
  }

  leadsSlider.addEventListener('input', () => {
    triggerHaptic(5);
    updateCalculations();
  });
  
  valueSlider.addEventListener('input', () => {
    triggerHaptic(5);
    updateCalculations();
  });

  updateCalculations();
}

/* ==========================================================================
   8. FAQ ACCORDION
   ========================================================================== */

function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      triggerHaptic(12);
      const isActive = item.classList.contains('active');

      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });

      item.classList.toggle('active', !isActive);
    });
  });
}

/* Sticky Header */
function initStickyHeader() {
  const header = document.querySelector('.header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.style.boxShadow = '0 4px 20px -2px rgba(15, 23, 42, 0.08)';
    } else {
      header.style.boxShadow = 'none';
    }
  }, { passive: true });
}

/* Mobile Sticky Dock */
function initMobileDockScroll() {
  const dock = document.querySelector('.mobile-conversion-dock');
  if (!dock) return;

  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > lastScroll && currentScroll > 300) {
      dock.style.transform = 'translateY(15px)';
      dock.style.opacity = '0.92';
    } else {
      dock.style.transform = 'translateY(0)';
      dock.style.opacity = '1';
    }
    lastScroll = currentScroll;
  }, { passive: true });
}

/* Haptics & Toasts */
function triggerHaptic(duration = 10) {
  if (typeof window !== 'undefined' && window.navigator && window.navigator.vibrate) {
    try {
      window.navigator.vibrate(duration);
    } catch (e) {}
  }
}

function showToast(message, type = 'info') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span>${type === 'error' ? '⚠️' : '⚡'}</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  triggerHaptic(20);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

function initHapticFeedback() {
  document.querySelectorAll('.btn, .option-card, .scenario-chip, .drawer-link').forEach(el => {
    el.addEventListener('click', () => triggerHaptic(12));
  });
}

window.showToast = showToast;
window.triggerHaptic = triggerHaptic;
