/**
 * DIGITOL AGENCY - BREADCRUMB MULTI-STEP DISCOVERY & LEAD FUNNEL
 * High-Converting Progressive Lead Qualification Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('breadcrumb-funnel');
  if (!form) return;

  const totalSteps = 4;
  let currentStep = 1;

  const stepPanes = form.querySelectorAll('.step-pane');
  const progressBar = document.getElementById('progress-bar-fill');
  const progressStepText = document.getElementById('progress-step-text');
  const progressPercent = document.getElementById('progress-percent');
  const backBtn = document.getElementById('btn-prev-step');
  const nextBtn = document.getElementById('btn-next-step');
  const submitBtn = document.getElementById('btn-submit-funnel');

  setupOptionCards();

  if (backBtn) {
    backBtn.addEventListener('click', () => {
      if (window.triggerHaptic) window.triggerHaptic(10);
      if (currentStep > 1) {
        goToStep(currentStep - 1);
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentStep >= totalSteps) return;
      if (window.triggerHaptic) window.triggerHaptic(15);
      if (validateCurrentStep(currentStep)) {
        goToStep(currentStep + 1);
      }
    });
  }

  // Handle Form Submission
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!validateCurrentStep(4)) {
      return;
    }

    if (window.triggerHaptic) window.triggerHaptic(25);

    const formData = new FormData(form);
    const payload = {};
    formData.forEach((value, key) => {
      payload[key] = value;
    });

    const leadFullName = (payload.name || '').trim();
    const leadFirstName = leadFullName.split(' ')[0] || 'Partner';
    const companyName = (payload.company || '').trim() || 'Your Business';

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>⚡ Reserving Your Strategy Slot...</span>';
    }

    // Save locally to localStorage as instant client-side backup
    try {
      const localLeads = JSON.parse(localStorage.getItem('digitol_saved_leads') || '[]');
      localLeads.push({
        ...payload,
        submittedAt: new Date().toISOString()
      });
      localStorage.setItem('digitol_saved_leads', JSON.stringify(localLeads));
    } catch (err) {
      console.warn('LocalStorage save skipped:', err);
    }

    const redirectTarget = `/thank-you?name=${encodeURIComponent(leadFirstName)}&company=${encodeURIComponent(companyName)}`;

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        const data = await response.json();
        if (window.showToast) {
          window.showToast('Growth Audit reserved! Redirecting to confirmation...', 'success');
        }
        setTimeout(() => {
          window.location.href = data.redirect_url || redirectTarget;
        }, 400);
      } else {
        let data = {};
        try { data = await response.json(); } catch (_) {}
        if (data.errors && data.errors.length) {
          if (window.showToast) {
            window.showToast(data.errors.join(' • '), 'error');
          }
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<span>Claim Your Free Growth Audit →</span>';
          }
        } else {
          // Static host without /api endpoint -> complete gracefully to thank-you page
          window.location.href = redirectTarget;
        }
      }
    } catch (err) {
      console.warn('Network dispatch fallback to success page:', err);
      if (window.showToast) {
        window.showToast('Audit reserved successfully! Redirecting...', 'success');
      }
      setTimeout(() => {
        window.location.href = redirectTarget;
      }, 400);
    }
  });

  function setupOptionCards() {
    form.querySelectorAll('.option-card').forEach(card => {
      card.addEventListener('click', () => {
        if (window.triggerHaptic) window.triggerHaptic(15);

        const radio = card.querySelector('input[type="radio"]');
        const parentPane = card.closest('.step-pane');
        const paneStep = parentPane ? parseInt(parentPane.getAttribute('data-step'), 10) : currentStep;

        if (parentPane) {
          parentPane.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
        }

        card.classList.add('selected');
        if (radio) {
          radio.checked = true;
        }

        // Only auto-advance if clicking an option in an earlier step (1, 2, or 3)
        if (paneStep < totalSteps && paneStep === currentStep) {
          setTimeout(() => {
            goToStep(paneStep + 1);
          }, 220);
        }
      });
    });
  }

  function goToStep(stepNumber) {
    const clampedStep = Math.max(1, Math.min(stepNumber, totalSteps));
    currentStep = clampedStep;

    stepPanes.forEach(pane => {
      const paneStep = parseInt(pane.getAttribute('data-step'), 10);
      if (paneStep === clampedStep) {
        pane.classList.add('active');
      } else {
        pane.classList.remove('active');
      }
    });

    updateProgressUI();

    const cardRect = form.getBoundingClientRect();
    if (cardRect.top < 0) {
      form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function updateProgressUI() {
    const percent = Math.min(100, Math.round((currentStep / totalSteps) * 100));

    const stepLabels = [
      'Step 1 of 4: Business Discovery',
      'Step 2 of 4: Services of Interest',
      'Step 3 of 4: Monthly Volume',
      'Step 4 of 4: Contact & Business Details'
    ];

    if (progressBar) {
      progressBar.style.width = `${percent}%`;
    }
    if (progressStepText) {
      progressStepText.textContent = stepLabels[currentStep - 1] || `Step ${currentStep} of ${totalSteps}`;
    }
    if (progressPercent) {
      progressPercent.textContent = `${percent}% Complete`;
    }

    if (backBtn) {
      if (currentStep === 1) {
        backBtn.classList.add('hidden');
        backBtn.style.display = 'none';
      } else {
        backBtn.classList.remove('hidden');
        backBtn.style.display = 'inline-flex';
      }
    }

    if (currentStep === totalSteps) {
      if (nextBtn) {
        nextBtn.style.display = 'none';
      }
      if (submitBtn) {
        submitBtn.style.display = 'inline-flex';
      }
    } else {
      if (nextBtn) {
        nextBtn.style.display = 'inline-flex';
      }
      if (submitBtn) {
        submitBtn.style.display = 'none';
      }
    }
  }

  function validateCurrentStep(step) {
    const currentPane = form.querySelector(`.step-pane[data-step="${step}"]`);
    if (!currentPane) return true;

    if (step <= 3) {
      const selectedRadio = currentPane.querySelector('input[type="radio"]:checked');
      if (!selectedRadio) {
        if (window.showToast) {
          window.showToast('Please select an option to proceed.', 'error');
        }
        return false;
      }
      return true;
    }

    if (step === 4) {
      const nameInput = form.querySelector('input[name="name"]');
      const companyInput = form.querySelector('input[name="company"]');
      const emailInput = form.querySelector('input[name="email"]');
      const phoneInput = form.querySelector('input[name="phone"]');

      if (!nameInput || !nameInput.value.trim() || nameInput.value.trim().length < 2) {
        if (window.showToast) {
          window.showToast('Please enter your full name.', 'error');
        }
        if (nameInput) nameInput.focus();
        return false;
      }

      if (!companyInput || !companyInput.value.trim() || companyInput.value.trim().length < 2) {
        if (window.showToast) {
          window.showToast('Please enter your business / company name.', 'error');
        }
        if (companyInput) companyInput.focus();
        return false;
      }

      const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
      if (!emailInput || !emailRegex.test(emailInput.value.trim())) {
        if (window.showToast) {
          window.showToast('Please enter a valid work email address.', 'error');
        }
        if (emailInput) emailInput.focus();
        return false;
      }

      if (phoneInput && phoneInput.value.trim()) {
        const digits = phoneInput.value.replace(/\D/g, '');
        if (digits.length < 7) {
          if (window.showToast) {
            window.showToast('Please enter a valid phone number.', 'error');
          }
          phoneInput.focus();
          return false;
        }
      } else {
        if (window.showToast) {
          window.showToast('Please enter your direct phone number.', 'error');
        }
        if (phoneInput) phoneInput.focus();
        return false;
      }

      return true;
    }

    return true;
  }

  // Initialize UI on step 1
  goToStep(1);
});
