/**
 * DIGITOL AGENCY - BREADCRUMB MULTI-STEP LEAD FUNNEL
 * High-Converting Progressive Lead Qualification Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('breadcrumb-funnel');
  if (!form) return;

  let currentStep = 1;
  const totalSteps = 4;

  const stepPanes = form.querySelectorAll('.step-pane');
  const progressBar = document.getElementById('progress-bar-fill');
  const progressStepText = document.getElementById('progress-step-text');
  const progressPercent = document.getElementById('progress-percent');
  const backBtn = document.getElementById('btn-prev-step');
  const nextBtn = document.getElementById('btn-next-step');
  const submitBtn = document.getElementById('btn-submit-funnel');

  // Initialize option selection card clicks
  setupOptionCards();

  // Navigation handlers
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      if (currentStep > 1) {
        goToStep(currentStep - 1);
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (validateCurrentStep(currentStep)) {
        if (currentStep < totalSteps) {
          goToStep(currentStep + 1);
        }
      }
    });
  }

  // Final Form Submission
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!validateCurrentStep(4)) {
      return;
    }

    // Prepare payload
    const formData = new FormData(form);
    const payload = {};
    formData.forEach((value, key) => {
      payload[key] = value;
    });

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>⚡ Securing Your Strategy Slot...</span>';
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (response.ok && data.status === 'success') {
        // Successful booking
        if (window.showToast) {
          window.showToast('Strategy Audit reserved! Redirecting...', 'success');
        }
        setTimeout(() => {
          window.location.href = data.redirect_url || '/thank-you';
        }, 600);
      } else {
        const errorMsg = (data.errors && data.errors.join('<br>')) || data.message || 'Error booking audit. Please verify your details.';
        if (window.showToast) {
          window.showToast(errorMsg, 'error');
        }
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<span>Claim Your Free AI Growth Audit →</span>';
        }
      }
    } catch (err) {
      console.error('Submission error:', err);
      // Graceful fallback: submit standard form
      form.removeEventListener('submit', arguments.callee);
      form.submit();
    }
  });

  function setupOptionCards() {
    form.querySelectorAll('.option-card').forEach(card => {
      card.addEventListener('click', () => {
        const radio = card.querySelector('input[type="radio"]');
        const parentGroup = card.closest('.options-grid');

        if (parentGroup) {
          parentGroup.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
        }

        card.classList.add('selected');
        if (radio) {
          radio.checked = true;
        }

        // Low friction auto-advance for micro-commitment steps
        if (currentStep < totalSteps) {
          setTimeout(() => {
            goToStep(currentStep + 1);
          }, 240);
        }
      });
    });
  }

  function goToStep(stepNumber) {
    stepPanes.forEach(pane => {
      pane.classList.remove('active');
      if (parseInt(pane.getAttribute('data-step'), 10) === stepNumber) {
        pane.classList.add('active');
      }
    });

    currentStep = stepNumber;
    updateProgressUI();

    // Scroll smoothly to form top on mobile
    const cardRect = form.getBoundingClientRect();
    if (cardRect.top < 0) {
      form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function updateProgressUI() {
    const percent = Math.round((currentStep / totalSteps) * 100);

    if (progressBar) {
      progressBar.style.width = `${percent}%`;
    }
    if (progressStepText) {
      progressStepText.textContent = `Step ${currentStep} of ${totalSteps}`;
    }
    if (progressPercent) {
      progressPercent.textContent = `${percent}% Complete`;
    }

    // Toggle Back button
    if (backBtn) {
      if (currentStep === 1) {
        backBtn.classList.add('hidden');
      } else {
        backBtn.classList.remove('hidden');
      }
    }

    // Toggle Next vs Submit button
    if (currentStep === totalSteps) {
      if (nextBtn) nextBtn.style.display = 'none';
      if (submitBtn) submitBtn.style.display = 'inline-flex';
    } else {
      if (nextBtn) nextBtn.style.display = 'inline-flex';
      if (submitBtn) submitBtn.style.display = 'none';
    }
  }

  function validateCurrentStep(step) {
    const currentPane = form.querySelector(`.step-pane[data-step="${step}"]`);
    if (!currentPane) return true;

    if (step <= 3) {
      const selectedRadio = currentPane.querySelector('input[type="radio"]:checked');
      if (!selectedRadio) {
        if (window.showToast) {
          window.showToast('Please select an option to continue.', 'error');
        }
        return false;
      }
      return true;
    }

    if (step === 4) {
      const nameInput = form.querySelector('input[name="name"]');
      const emailInput = form.querySelector('input[name="email"]');
      const phoneInput = form.querySelector('input[name="phone"]');

      if (!nameInput || !nameInput.value.trim() || nameInput.value.trim().length < 2) {
        if (window.showToast) {
          window.showToast('Please enter your full name.', 'error');
        }
        nameInput.focus();
        return false;
      }

      const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
      if (!emailInput || !emailRegex.test(emailInput.value.trim())) {
        if (window.showToast) {
          window.showToast('Please enter a valid work email address.', 'error');
        }
        emailInput.focus();
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
      }

      return true;
    }

    return true;
  }

  // Initialize UI
  updateProgressUI();
});
