/**
 * DIGITOL AGENCY - MAIN JAVASCRIPT & MOBILE AUTOMATIONS
 * Live AI Sandbox Simulator, Sticky Mobile Dock, ROI Calculator, and Event Stream Ticker
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initFaqAccordion();
  initRoiCalculator();
  initStickyHeader();
  initAiSandboxSimulator();
  initLiveEventTicker();
  initMobileDockScroll();
  initHapticFeedback();
});

/* Mobile Navigation Toggle */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      triggerHaptic(15);
      navMenu.classList.toggle('show');
      const isExpanded = navMenu.classList.contains('show');
      toggleBtn.setAttribute('aria-expanded', isExpanded);
    });

    document.addEventListener('click', (e) => {
      if (!toggleBtn.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('show');
      }
    });

    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('show');
      });
    });
  }
}

/* Sticky Header Shadow on Scroll */
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

/* ==========================================================================
   INTERACTIVE LIVE AI SANDBOX SIMULATOR (SHOWCASE AGENCY CAPABILITIES)
   ========================================================================== */

const AI_SCENARIOS = {
  voice: {
    title: 'Voice AI Receptionist Call',
    status: 'Call In Progress • Latency: 420ms',
    messages: [
      { sender: 'user', text: 'Caller: "Hi, I have a leak in my roof from last night\'s storm. Can someone come out for an estimate today?"' },
      { sender: 'ai', text: 'Digitol Voice AI: "I can absolutely help with that right away. We have an emergency estimator in your area between 2:00 PM and 4:00 PM today. Does that window work for you?"' },
      { sender: 'user', text: 'Caller: "Yes, 2:30 PM is perfect. My address is 742 Evergreen Terrace."' },
      { sender: 'ai', text: 'Digitol Voice AI: "All set! You\'re confirmed for 2:30 PM today. I\'ve just sent a calendar invite and SMS confirmation with your estimator\'s details."' }
    ],
    actionText: '✓ Booked $4,500 Estimate • Syncing to CRM in 0.8s'
  },
  sms: {
    title: 'Dormant CRM SMS Reactivation',
    status: 'Automated 2-Way AI SMS • Lead age: 14 Months',
    messages: [
      { sender: 'ai', text: 'Digitol AI: "Hey Michael! Quick question — were you still looking to upgrade your legal practice management software, or did you already get that sorted?"' },
      { sender: 'user', text: 'Lead: "Hey, we put it on pause last year because of pricing. Why do you ask?"' },
      { sender: 'ai', text: 'Digitol AI: "Totally understand. We actually launched a dedicated small firm tier that cuts setup by 60%. I can send a 3-minute video breakdown or grab 10 mins this Thursday?"' },
      { sender: 'user', text: 'Lead: "Let\'s do Thursday at 11 AM."' },
      { sender: 'ai', text: 'Digitol AI: "Booked! Just sent a calendar invite to your email. Talk Thursday at 11 AM!"' }
    ],
    actionText: '✓ Reactivated $12,000 Opportunity from Cold CRM'
  },
  ads: {
    title: 'Instant Google Ads Lead Qualifier',
    status: 'Speed to Lead: 1.8 Seconds',
    messages: [
      { sender: 'user', text: 'Prospect submitted form: "Need comprehensive dental implants consultation."' },
      { sender: 'ai', text: 'Digitol AI (SMS <2s): "Hi Jennifer, thanks for reaching out to Zenith Dental! Dr. Kim has 2 consultation slots open tomorrow at 10 AM or 3 PM. Which one fits your schedule?"' },
      { sender: 'user', text: 'Prospect: "3 PM tomorrow works great for me!"' },
      { sender: 'ai', text: 'Digitol AI: "You\'re locked in for 3:00 PM tomorrow with Dr. Kim. Here\'s the clinic location and pre-consult checklist: [Link]"' }
    ],
    actionText: '✓ High-Ticket Patient Scheduled & Verified'
  }
};

function initAiSandboxSimulator() {
  const chips = document.querySelectorAll('.scenario-chip');
  const chatContainer = document.getElementById('sandbox-chat-stream');
  const statusEl = document.getElementById('sandbox-status-text');
  const actionTextEl = document.getElementById('sandbox-action-text');

  if (!chips.length || !chatContainer) return;

  let currentTimeout = null;

  function renderScenario(scenarioKey) {
    const data = AI_SCENARIOS[scenarioKey];
    if (!data) return;

    if (currentTimeout) clearTimeout(currentTimeout);

    if (statusEl) statusEl.textContent = data.status;
    if (actionTextEl) actionTextEl.textContent = data.actionText;

    chatContainer.innerHTML = '';

    // Render messages with animated typing delay
    data.messages.forEach((msg, index) => {
      setTimeout(() => {
        const bubble = document.createElement('div');
        bubble.className = `chat-bubble bubble-${msg.sender}`;

        if (msg.sender === 'ai') {
          bubble.innerHTML = `
            <div class="ai-bubble-tag">
              <span class="pulse-dot" style="width:5px; height:5px;"></span>
              Digitol Autonomous AI
            </div>
            <div>${msg.text}</div>
          `;
        } else {
          bubble.textContent = msg.text;
        }

        chatContainer.appendChild(bubble);
        chatContainer.scrollTop = chatContainer.scrollHeight;
        triggerHaptic(8);
      }, (index + 1) * 450);
    });
  }

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      triggerHaptic(15);
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const scenarioKey = chip.getAttribute('data-scenario');
      renderScenario(scenarioKey);
    });
  });

  // Initial load with voice scenario
  renderScenario('voice');
}

/* ==========================================================================
   LIVE REAL-TIME SOCIAL PROOF EVENT STREAM (TICKER)
   ========================================================================== */

const RECENT_AUTOMATIONS = [
  { icon: '📞', text: 'Voice AI answered in 1.4s & booked a $4,200 job', company: 'Solis Home Services • 12s ago' },
  { icon: '💬', text: 'Cold CRM lead reactivated ($8,500 contract)', company: 'Apex Legal Group • 2m ago' },
  { icon: '🎯', text: 'Google Ads inbound qualified & scheduled', company: 'Zenith MedSpa • 4m ago' },
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
      <button style="background:none; border:none; color:#64748b; cursor:pointer; font-size:1rem; padding:0.2rem;" aria-label="Dismiss">×</button>
    `;

    const closeBtn = tickerEl.querySelector('button');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        tickerEl.style.display = 'none';
      });
    }

    index = (index + 1) % RECENT_AUTOMATIONS.length;
  }

  updateTicker();
  setInterval(updateTicker, 8000);
}

/* ==========================================================================
   MOBILE STICKY CONVERSION DOCK
   ========================================================================== */

function initMobileDockScroll() {
  const dock = document.querySelector('.mobile-conversion-dock');
  if (!dock) return;

  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > lastScroll && currentScroll > 300) {
      // Scrolling down: subtle slide down to give reading room
      dock.style.transform = 'translateY(15px)';
      dock.style.opacity = '0.9';
    } else {
      // Scrolling up: instant accessible conversion trigger
      dock.style.transform = 'translateY(0)';
      dock.style.opacity = '1';
    }
    lastScroll = currentScroll;
  }, { passive: true });
}

/* ==========================================================================
   INTERACTIVE FAQ ACCORDION
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

/* ==========================================================================
   INTERACTIVE AI ROI CALCULATOR (CRO FEATURE)
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
   HAPTIC FEEDBACK & TOAST ALERTS
   ========================================================================== */

function triggerHaptic(duration = 10) {
  if (typeof window !== 'undefined' && window.navigator && window.navigator.vibrate) {
    try {
      window.navigator.vibrate(duration);
    } catch (e) {
      // Silent ignore on unsupported environments
    }
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
  document.querySelectorAll('.btn, .option-card, .scenario-chip').forEach(el => {
    el.addEventListener('click', () => triggerHaptic(12));
  });
}

window.showToast = showToast;
window.triggerHaptic = triggerHaptic;
