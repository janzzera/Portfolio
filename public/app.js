(function () {
  'use strict';

  const EMAIL_ADDRESS = 'johnhista1@gmail.com';

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

  function updateLiveClock() {
    if (!liveClockEl) return;
    try {
      const now = new Date();
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
      const d = new Date();
      liveClockEl.textContent = `${String(d.getUTCHours() + 8).padStart(2, '0')}:${String(d.getUTCMinutes()).padStart(2, '0')} GMT+8`;
    }
  }

  setInterval(updateLiveClock, 1000);
  updateLiveClock();

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

  window.addEventListener('keydown', (e) => {
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

  mobileNavLinks.forEach((link) => {
    link.addEventListener('click', closeMobileMenu);
  });

  function setActiveLink(sectionId) {
    navLinks.forEach((link) => {
      if (link.getAttribute('data-section') === sectionId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

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

  const projectDetails = document.querySelectorAll('.project-details');
  projectDetails.forEach((details) => {
    details.addEventListener('toggle', () => {
      if (details.open) {
        projectDetails.forEach((other) => {
          if (other !== details && other.open) {
            other.removeAttribute('open');
          }
        });
      }
    });
  });

  document.querySelectorAll('[data-carousel]').forEach((carousel) => {
    const track = carousel.querySelector('.carousel-track');
    const slides = carousel.querySelectorAll('.carousel-slide');
    const dotsContainer = carousel.querySelector('.carousel-dots');
    const prevBtn = carousel.querySelector('.carousel-prev');
    const nextBtn = carousel.querySelector('.carousel-next');
    let currentIndex = 0;

    if (!track || slides.length === 0) return;

    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.classList.add('carousel-dot');
      dot.setAttribute('aria-label', `Go to screenshot ${i + 1}`);
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(i));
      dotsContainer.appendChild(dot);
    });

    function goToSlide(index) {
      currentIndex = index;

      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === currentIndex);
      });

      const dots = dotsContainer.querySelectorAll('.carousel-dot');
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        goToSlide(currentIndex > 0 ? currentIndex - 1 : slides.length - 1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        goToSlide(currentIndex < slides.length - 1 ? currentIndex + 1 : 0);
      });
    }
  });
})();
