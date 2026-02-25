(() => {
  const root = document.documentElement;
  root.classList.add('js-ready');

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');

  const getDelay = (el) => {
    const raw = Number(el.dataset.revealDelay);
    return Number.isNaN(raw) ? 0 : raw;
  };

  const initReveals = () => {
    const revealTargets = document.querySelectorAll('.reveal');
    if (revealTargets.length === 0) return;

    if (!('IntersectionObserver' in window) || prefersReduced.matches) {
      revealTargets.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const node = entry.target;
          node.style.setProperty('--reveal-delay', `${getDelay(node)}ms`);
          node.classList.add('is-visible');
          observer.unobserve(node);
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -8% 0px',
      },
    );

    revealTargets.forEach((el) => observer.observe(el));
  };

  const initTiltCards = () => {
    if (!(window.PointerEvent && !prefersReduced.matches && finePointer.matches)) {
      return;
    }

    const cards = document.querySelectorAll('[data-tilt]');
    if (cards.length === 0) return;

    const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

    cards.forEach((card) => {
      const content = card;

      const onPointerMove = (event) => {
        const bounds = card.getBoundingClientRect();
        const x = event.clientX - bounds.left;
        const y = event.clientY - bounds.top;

        const xNorm = (x / bounds.width - 0.5) * 2;
        const yNorm = (y / bounds.height - 0.5) * 2;

        const rotateX = clamp(yNorm * 3.2, -4, 4);
        const rotateY = clamp(xNorm * -4, -4, 4);
        const translateX = clamp(-xNorm * 6, -6, 6);
        const translateY = clamp(-yNorm * 4, -4, 4);

        content.style.transform =
          `translate3d(${translateX}px, ${translateY}px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      };

      const onPointerLeave = () => {
        content.style.transition = 'transform 260ms cubic-bezier(0.2, 0.7, 0.3, 1)';
        content.style.transform = '';

        window.setTimeout(() => {
          content.style.transition = '';
        }, 280);
      };

      card.addEventListener('pointermove', onPointerMove);
      card.addEventListener('pointerleave', onPointerLeave);
      card.addEventListener('focusin', () => {
        card.style.borderColor = 'color-mix(in srgb, var(--accent) 28%, var(--line))';
      });
      card.addEventListener('focusout', () => {
        card.style.borderColor = '';
      });
    });
  };

  const initSubtleParallax = () => {
    const hero = document.querySelector('[data-parallax]');
    const badge = hero ? hero.querySelector('.hero-logo, .hero-badge') : null;
    const map = hero ? hero.querySelector('.hero-map') : null;

    if (!hero || !badge || !map) return;
    if (!(window.PointerEvent && !prefersReduced.matches && finePointer.matches)) return;

    let raf = null;

    const updateParallax = (event) => {
      if (raf) {
        return;
      }

      raf = window.requestAnimationFrame(() => {
        const bounds = hero.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;

        badge.style.transform = `translate(${x * -12}px, ${y * -8}px) scale(1.01)`;
        map.style.transform = `translate(${x * 22}px, ${y * 10}px) rotate(${x * 4}deg)`;
        raf = null;
      });
    };

    const resetParallax = () => {
      if (raf) {
        window.cancelAnimationFrame(raf);
        raf = null;
      }

      badge.style.transform = '';
      map.style.transform = 'rotate(12deg)';
    };

    hero.addEventListener('pointermove', updateParallax);
    hero.addEventListener('pointerleave', resetParallax);
    hero.addEventListener('pointercancel', resetParallax);
  };

  const initPulse = () => {
    if (prefersReduced.matches) return;

    const pulses = document.querySelectorAll('[data-pulse]');
    if (pulses.length === 0) return;

    let pointer = 0;
    window.setInterval(() => {
      const target = pulses[pointer % pulses.length];
      target.classList.add('cta-pulse');
      window.setTimeout(() => {
        target.classList.remove('cta-pulse');
      }, 1050);
      pointer += 1;
    }, 2600);
  };

  const initSectionNav = () => {
    const links = Array.from(document.querySelectorAll('.header-link[data-scroll]'));
    if (links.length === 0) return;

    const header = document.querySelector('.site-header');

    const sections = links
      .map((link) => {
        const id = link.getAttribute('href');
        if (!id || !id.startsWith('#')) return null;
        return document.querySelector(id);
      })
      .filter((node, idx, arr) => node && arr.indexOf(node) === idx);

    const setActive = (id) => {
      links.forEach((link) => {
        link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
      });
    };

    links.forEach((link) => {
      link.addEventListener('click', (event) => {
        const href = link.getAttribute('href');
        if (!href || !href.startsWith('#')) return;

        const target = document.querySelector(href);
        if (!target) return;

        event.preventDefault();
        setActive(target.id);

        const topOffset = (header ? header.getBoundingClientRect().height : 0) + 16;
        const targetTop = window.scrollY + target.getBoundingClientRect().top - topOffset;

        window.scrollTo({
          top: targetTop,
          behavior: prefersReduced.matches ? 'auto' : 'smooth',
        });

        target.classList.remove('section-flash');
        void target.offsetWidth;
        target.classList.add('section-flash');

        window.setTimeout(() => {
          target.classList.remove('section-flash');
        }, 900);

        window.history.replaceState(null, '', href);
      });
    });

    if ('IntersectionObserver' in window && sections.length > 0) {
      const observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

          if (visible[0]) {
            setActive(visible[0].target.id);
          }
        },
        {
          rootMargin: '-35% 0px -55% 0px',
          threshold: [0.15, 0.35, 0.6],
        },
      );

      sections.forEach((section) => observer.observe(section));
    }

    const initial = window.location.hash?.replace('#', '') || 'hero';
    setActive(initial);
  };

  const initInteractions = () => {
    initSectionNav();
    initReveals();
    initTiltCards();
    initSubtleParallax();
    initPulse();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initInteractions, { once: true });
  } else {
    initInteractions();
  }
})();
