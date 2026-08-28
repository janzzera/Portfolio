/**
 * Portfolio — Logic & Micro-Interactions
 * John Argie Hista — Full-Stack Dev
 */

(function () {
  'use strict';

  // Email constant
  const EMAIL_ADDRESS = 'johnhista1@gmail.com';

  // DOM Elements
  const liveClockEl = document.getElementById('live-clock');
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const toastEl = document.getElementById('toast');
  const topNav = document.getElementById('top-nav');
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const sections = document.querySelectorAll('.intro-section, .content-section');

  let toastTimeout = null;

  /* --------------------------------------------------------------------------
     1. Live Manila Clock (GMT+8)
     -------------------------------------------------------------------------- */
  function updateLiveClock() {
    if (!liveClockEl) return;
    try {
      const now = new Date();
      // Format to GMT+8 (Asia/Manila)
      const options = {
        timeZone: 'Asia/Manila',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      const timeFormatter = new Intl.DateTimeFormat([], options);
      liveClockEl.textContent = `${timeFormatter.format(now)} GMT+8`;
    } catch (e) {
      // Fallback
      const d = new Date();
      liveClockEl.textContent = `${String(d.getUTCHours() + 8).padStart(2, '0')}:${String(d.getUTCMinutes()).padStart(2, '0')} GMT+8`;
    }
  }

  setInterval(updateLiveClock, 1000);
  updateLiveClock();

  /* --------------------------------------------------------------------------
     2. Copy Email with Toast Feedback
     -------------------------------------------------------------------------- */
  function showToast(message) {
    if (!toastEl) return;
    
    if (message) {
      const span = toastEl.querySelector('span');
      if (span) span.innerHTML = message;
    }

    toastEl.classList.add('show');
    toastEl.setAttribute('aria-hidden', 'false');

    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toastEl.classList.remove('show');
      toastEl.setAttribute('aria-hidden', 'true');
    }, 3200);
  }

  async function copyEmailToClipboard() {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(EMAIL_ADDRESS);
      } else {
        // Fallback for non-https / older contexts
        const textArea = document.createElement('textarea');
        textArea.value = EMAIL_ADDRESS;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      showToast(`Email copied to clipboard: <strong>${EMAIL_ADDRESS}</strong>`);
    } catch (err) {
      showToast(`Contact directly: <strong>${EMAIL_ADDRESS}</strong>`);
    }
  }

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', copyEmailToClipboard);
  }

  /* --------------------------------------------------------------------------
     3. Keyboard Shortcuts (P = Projects, S = Stack, C = Copy Email)
     -------------------------------------------------------------------------- */
  window.addEventListener('keydown', (e) => {
    // Ignore if user is currently typing in an input or textarea
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) {
      return;
    }

    const key = e.key.toLowerCase();
    
    if (key === 'p') {
      e.preventDefault();
      document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
    } else if (key === 's') {
      e.preventDefault();
      document.getElementById('stack')?.scrollIntoView({ behavior: 'smooth' });
    } else if (key === 'c') {
      e.preventDefault();
      copyEmailToClipboard();
    }
  });

  /* --------------------------------------------------------------------------
     4. Scroll-Based Nav Background
     -------------------------------------------------------------------------- */
  function updateNavOnScroll() {
    if (!topNav) return;
    if (window.scrollY > 10) {
      topNav.classList.add('scrolled');
    } else {
      topNav.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateNavOnScroll, { passive: true });
  updateNavOnScroll();

  /* --------------------------------------------------------------------------
     5. Mobile Menu Toggle
     -------------------------------------------------------------------------- */
  function closeMobileMenu() {
    if (!mobileMenu || !mobileMenuToggle) return;
    mobileMenu.classList.remove('open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    mobileMenuToggle.classList.remove('open');
    mobileMenuToggle.setAttribute('aria-expanded', 'false');
  }

  function toggleMobileMenu() {
    if (!mobileMenu || !mobileMenuToggle) return;
    const isOpen = mobileMenu.classList.contains('open');

    if (isOpen) {
      closeMobileMenu();
    } else {
      mobileMenu.classList.add('open');
      mobileMenu.setAttribute('aria-hidden', 'false');
      mobileMenuToggle.classList.add('open');
      mobileMenuToggle.setAttribute('aria-expanded', 'true');
    }
  }

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', toggleMobileMenu);
  }

  // Close mobile menu when a link is clicked
  mobileNavLinks.forEach((link) => {
    link.addEventListener('click', closeMobileMenu);
  });

  /* --------------------------------------------------------------------------
     6. Intersection Observer for Active Nav Section
     -------------------------------------------------------------------------- */
  function setActiveLink(sectionId) {
    // Update desktop nav
    navLinks.forEach((link) => {
      if (link.getAttribute('data-section') === sectionId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Update mobile nav
    mobileNavLinks.forEach((link) => {
      if (link.getAttribute('data-section') === sectionId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  if ('IntersectionObserver' in window && navLinks.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          setActiveLink(id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      sectionObserver.observe(section);
    });
  }
})();
