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
   4. INTERACTIVE LIVE AI & VA SANDBOX SIMULATOR (WITH LIVE TYPING DOTS)
   ========================================================================== */

const AI_SCENARIOS = {
  voice: {
    status: 'Live Inbound Call Handled by Dedicated VA',
    actionText: '✓ Booked $4,500 Estimate • Logged in CRM by Dedicated VA',
    messages: [
      { sender: 'user', text: 'Caller: "Hi, I have a leak in my roof from last night\'s storm. Can someone come out for an estimate today?"' },
      { sender: 'ai', text: 'Dedicated VA (Maria): "Hi, thank you for calling Solis Roofing! This is Maria. I can definitely help with that. We have an emergency estimator in your area between 2:00 PM and 4:00 PM today. Does that window work for you?"' },
      { sender: 'user', text: 'Caller: "Yes, 2:30 PM is perfect. My address is 742 Evergreen Terrace."' },
      { sender: 'ai', text: 'Dedicated VA (Maria): "All set! You\'re locked in for 2:30 PM today with our lead inspector. I\'ve just dispatched the job in our CRM and sent an SMS confirmation to your mobile."' }
    ]
  },
  sms: {
    status: 'Automated 2-Way AI SMS • Lead age: 14 Months',
    actionText: '✓ Reactivated $12,000 Opportunity from Cold CRM',
    messages: [
      { sender: 'ai', text: 'Digitol AI: "Hey Michael! Quick question — were you still looking to upgrade your legal practice management software, or did you already get that sorted?"' },
      { sender: 'user', text: 'Lead: "Hey, we put it on pause last year because of pricing. Why do you ask?"' },
      { sender: 'ai', text: 'Digitol AI: "Totally understand. We actually launched a dedicated small firm tier that cuts setup by 60%. I can send a 3-minute video breakdown or grab 10 mins this Thursday?"' },
      { sender: 'user', text: 'Lead: "Let\'s do Thursday at 11 AM."' },
      { sender: 'ai', text: 'Digitol AI: "Booked! Just sent a calendar invite to your email. Our team will speak with you Thursday at 11 AM!"' }
    ]
  },
  ads: {
    status: 'Speed to Lead: < 2 Seconds (Instant Qualification)',
    actionText: '✓ Patient Scheduled & Dispatched to Dedicated VA',
    messages: [
      { sender: 'user', text: 'Prospect submitted web form: "Need comprehensive dental implants consultation."' },
      { sender: 'ai', text: 'Digitol AI (SMS <2s): "Hi Jennifer, thanks for reaching out to Zenith Dental! Dr. Kim has 2 consultation slots open tomorrow at 10 AM or 3 PM. Which one fits your schedule?"' },
      { sender: 'user', text: 'Prospect: "3 PM tomorrow works great for me!"' },
      { sender: 'ai', text: 'Dedicated VA Desk: "Confirmed! Our patient intake coordinator Maria has added you to tomorrow\'s schedule at 3:00 PM. Here\'s the clinic location: [Link]"' }
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
              <span>Digitol Growth Team</span>
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
   6. LIVE REAL-TIME SOCIAL PROOF EVENT STREAM (TICKER)
   ========================================================================== */

const RECENT_AUTOMATIONS = [
  { icon: '👥', text: 'Dedicated Virtual Assistant answered call & booked $4,200 job', company: 'Solis Home Services • 12s ago' },
  { icon: '💬', text: 'Cold CRM lead reactivated ($8,500 contract) via AI SMS', company: 'Apex Legal Group • 2m ago' },
  { icon: '🎯', text: 'Google Ads inbound qualified & scheduled with VA desk', company: 'Zenith MedSpa • 4m ago' },
  { icon: '⚡', text: '24/7 AI chat answered after-hours emergency inquiry', company: 'ProFlow Plumbing • 7m ago' },
  { icon: '🚀', text: 'Business in a Box website & CRM launched live', company: 'Horizon Realty • 11m ago' }
];

function initLiveEventTicker() {
  let tickerEl = document.querySelector('.live-event-ticker');
  if (!tickerEl) {
    tickerEl = document.createElement('div');
    tickerEl.className = 'live-event-ticker';
    document.body.appendChild(tickerEl);
  }

  let index = 0;

  function updateTicker() {
    const item = RECENT_AUTOMATIONS[index];
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

    index = (index + 1) % RECENT_AUTOMATIONS.length;
  }

  // Show after 1.5s delay
  setTimeout(() => {
    updateTicker();
    setInterval(updateTicker, 7000);
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
