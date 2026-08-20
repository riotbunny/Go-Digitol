/**
 * DIGITOL AGENCY - MAIN JAVASCRIPT
 * Interactivity, Mobile Nav, FAQ Accordion, and AI Growth ROI Calculator
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initFaqAccordion();
  initRoiCalculator();
  initStickyHeader();
});

/* Mobile Navigation Toggle */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('show');
      const isExpanded = navMenu.classList.contains('show');
      toggleBtn.setAttribute('aria-expanded', isExpanded);
    });

    // Close menu when clicking outside or clicking a nav link
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
  });
}

/* Interactive FAQ Accordion */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });

      // Toggle current item
      item.classList.toggle('active', !isActive);
    });
  });
}

/* Interactive AI ROI & Revenue Loss Calculator (CRO Feature) */
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

    // Update slider label indicators
    if (leadsValDisplay) {
      leadsValDisplay.textContent = `${monthlyLeads.toLocaleString()} leads/mo`;
    }
    if (valueValDisplay) {
      valueValDisplay.textContent = formatCurrency(customerValue);
    }

    // CRO Model Assumptions:
    // 1. Average business leaks ~35% of inbound leads (missed calls, delayed replies >5min, cold CRM)
    // 2. Digitol AI Voice/Chat & SMS Reactivation converts ~16% of these lost leads into closed sales
    const leakedLeads = monthlyLeads * 0.35;
    const recoveredClients = leakedLeads * 0.16;
    const monthlyRecoveredRevenue = Math.round(recoveredClients * customerValue);
    const annualImpact = monthlyRecoveredRevenue * 12;

    resultDisplay.textContent = `+${formatCurrency(monthlyRecoveredRevenue)}/mo`;
    if (annualDisplay) {
      annualDisplay.textContent = `Estimated Annual Gain: +${formatCurrency(annualImpact)}`;
    }
  }

  leadsSlider.addEventListener('input', updateCalculations);
  valueSlider.addEventListener('input', updateCalculations);

  // Initial run
  updateCalculations();
}

/* Toast Notifications */
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

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

window.showToast = showToast;
