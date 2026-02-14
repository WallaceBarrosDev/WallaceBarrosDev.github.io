(function() {
  const heroBtn = document.getElementById('heroBtn');
  if (heroBtn) {
    heroBtn.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.getElementById('visao');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  const topBtn = document.querySelector('a[href="#heroBtn"]');
  if (topBtn) {
    topBtn.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  if ('IntersectionObserver' in window) {
    const cards = document.querySelectorAll('.card, .event-card');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.transition = 'box-shadow 0.3s ease, transform 0.2s';
          entry.target.style.boxShadow = '0 0 0 2px #2ea043, 0 20px 30px -15px #2ea04380';
          setTimeout(() => {
            entry.target.style.boxShadow = '';
          }, 600);
        }
      });
    }, { threshold: 0.3 });
    cards.forEach(card => observer.observe(card));
  }

  document.querySelectorAll('a[href^="#"]:not(.scroll-link)').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === "#" || href === "#heroBtn") return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.querySelector('.site-nav');
  if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = siteNav.classList.toggle('open');
      navToggle.classList.toggle('is-open', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    siteNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        siteNav.classList.remove('open');
        navToggle.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
})();
