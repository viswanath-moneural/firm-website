/* ════════════════════════════════════════════
   MOEURAL.COM — Main JavaScript
   ════════════════════════════════════════════ */

/* ── CUSTOM CURSOR ── */
(function initCursor() {
  const cursor     = document.getElementById('cursor');
  const cursorRing = document.getElementById('cursorRing');
  if (!cursor || !cursorRing) return;

  let mouseX = 0, mouseY = 0;
  let ringX  = 0, ringY  = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top  = mouseY + 'px';
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    cursorRing.style.left = ringX + 'px';
    cursorRing.style.top  = ringY + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  // Hover effect on interactive elements
  const hoverEls = document.querySelectorAll(
    'a, button, .service-card, .industry-card, .pricing-card, .process-step'
  );
  hoverEls.forEach(el => {
    el.addEventListener('mouseenter', () => cursorRing.classList.add('hovering'));
    el.addEventListener('mouseleave', () => cursorRing.classList.remove('hovering'));
  });

  // Hide on mobile
  document.addEventListener('touchstart', () => {
    cursor.style.display     = 'none';
    cursorRing.style.display = 'none';
  });
})();


/* ── NAV SCROLL EFFECT ── */
(function initNav() {
  const nav = document.getElementById('nav');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }, { passive: true });
})();


/* ── HAMBURGER / MOBILE MENU ── */
function closeMobileMenu() {
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (hamburger)  hamburger.classList.remove('open');
  if (mobileMenu) mobileMenu.classList.remove('open');
}

(function initHamburger() {
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });
})();


/* ── SCROLL REVEAL ── */
(function initReveal() {
  // Add reveal class to key elements
  const targets = document.querySelectorAll(
    '.service-card, .process-step, .industry-card, ' +
    '.pricing-card, .why-point, .stat, .section-header'
  );

  targets.forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = (i % 4) * 0.08 + 's';
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12 });

  targets.forEach(el => observer.observe(el));
})();


/* ── TERMINAL TYPEWRITER EFFECT ── */
(function initTerminal() {
  const lines = document.querySelectorAll('.t-line');
  if (!lines.length) return;

  lines.forEach((line, i) => {
    line.style.opacity = '0';
    setTimeout(() => {
      line.style.transition = 'opacity 0.4s ease';
      line.style.opacity    = '1';
    }, 600 + i * 500);
  });
})();


/* ── CONTACT FORM ── */
function handleSubmit(e) {
  e.preventDefault();

  const btn          = e.target.querySelector('.form-submit');
  const submitText   = btn.querySelector('.submit-text');
  const submitLoader = btn.querySelector('.submit-loading');

  // Show loading state
  btn.disabled              = true;
  submitText.style.display  = 'none';
  submitLoader.style.display = 'inline';

  // Simulate form submission (replace with real endpoint)
  setTimeout(() => {
    btn.disabled              = false;
    submitText.style.display  = 'inline';
    submitLoader.style.display = 'none';

    // Show success
    btn.textContent = '✓ Message Sent!';
    btn.style.background = '#059669';

    setTimeout(() => {
      btn.innerHTML = '<span class="submit-text">Send Message →</span><span class="submit-loading" style="display:none">Sending…</span>';
      btn.style.background = '';
      e.target.reset();
    }, 3000);
  }, 1500);
}


/* ── SMOOTH ANCHOR SCROLL ── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();
    const navH = parseInt(getComputedStyle(document.documentElement)
                  .getPropertyValue('--nav-h'));
    const top = target.getBoundingClientRect().top + window.scrollY - navH;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});


/* ── ACTIVE NAV LINK HIGHLIGHT ── */
(function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top) current = section.getAttribute('id');
    });

    navLinks.forEach(link => {
      link.style.color = '';
      if (link.getAttribute('href') === '#' + current) {
        link.style.color = 'var(--white)';
      }
    });
  }, { passive: true });
})();
