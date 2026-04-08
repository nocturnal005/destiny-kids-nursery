/* ── Main JavaScript ─────────────────────────────────────────────────────
   Destiny Kids Nursery — Core interactions
   Nav scroll, scroll reveal, mobile menu, counters
   Defensive: all DOM lookups are null-guarded for sub-page reuse.
──────────────────────────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {

  // ═══════════════════════════════════════════════════════════════════
  // SCROLL REVEAL — IntersectionObserver
  // ═══════════════════════════════════════════════════════════════════
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  // ═══════════════════════════════════════════════════════════════════
  // NAVIGATION — Scroll shrink + glassmorphism intensify
  // ═══════════════════════════════════════════════════════════════════
  const nav = document.getElementById('mainNav');

  window.addEventListener('scroll', () => {
    if (!nav) return;
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  // ═══════════════════════════════════════════════════════════════════
  // MOBILE MENU — Hamburger toggle
  // ═══════════════════════════════════════════════════════════════════
  const hamburger  = document.getElementById('navHamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    mobileMenu.querySelectorAll('.nav__link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ═══════════════════════════════════════════════════════════════════
  // COUNTER ANIMATION — Count up when visible
  // ═══════════════════════════════════════════════════════════════════
  function animateCounter(el, target, duration = 2000) {
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased    = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      el.textContent = Math.floor(eased * target);
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = target;
      }
    };

    requestAnimationFrame(tick);
  }

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el        = entry.target;
      const targetVal = parseInt(el.dataset.target, 10);
      if (!isNaN(targetVal)) animateCounter(el, targetVal);
      counterObserver.unobserve(el);
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.counter').forEach(el => counterObserver.observe(el));

  // ═══════════════════════════════════════════════════════════════════
  // SMOOTH SCROLL — Anchor links
  // ═══════════════════════════════════════════════════════════════════
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const id = this.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ═══════════════════════════════════════════════════════════════════
  // NEWSLETTER FORM — Submit feedback
  // ═══════════════════════════════════════════════════════════════════
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = newsletterForm.querySelector('.loop-input');
      const btn   = newsletterForm.querySelector('.loop-btn');
      if (!input || !btn || !input.value.trim()) return;

      btn.textContent     = 'Subscribed! ✓';
      btn.style.background = 'var(--accent-green)';
      input.value          = '';

      setTimeout(() => {
        btn.textContent     = 'Subscribe';
        btn.style.background = '';
      }, 3000);
    });
  }
  // ═══════════════════════════════════════════════════════════════════
  // TESTIMONIAL CAROUSEL — Auto-rotate + dot navigation
  // ═══════════════════════════════════════════════════════════════════
  const testiSlides = document.querySelectorAll('.testi-slide');
  const testiDots   = document.querySelectorAll('.testi-dot');

  if (testiSlides.length > 0) {
    let currentTesti = 0;

    function showTesti(n) {
      testiSlides.forEach(s => s.classList.remove('active'));
      testiDots.forEach(d => d.classList.remove('active'));
      currentTesti = n;
      testiSlides[n].classList.add('active');
      testiDots[n].classList.add('active');
    }

    testiDots.forEach(dot => {
      dot.addEventListener('click', () => {
        showTesti(parseInt(dot.dataset.slide, 10));
      });
    });

    setInterval(() => {
      showTesti((currentTesti + 1) % testiSlides.length);
    }, 5000);
  }

});
