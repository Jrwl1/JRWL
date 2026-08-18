(() => {
  const STORAGE_KEY = 'jrwl-lang';
  const SUPPORTED_LANGUAGES = ['en', 'fi', 'sv'];

  const translations = {
    en: {
      'meta.title': 'John Lindström | Software developer',
      'meta.description':
        'John Lindström is a software developer in Turku working with TypeScript, React, Node.js, and PostgreSQL.',
      'meta.summary': 'Current technical skills, personal projects, and contact details.',
      'a11y.skip': 'Skip to content',
      'header.homeAria': 'JRWL home',
      'header.navAria': 'Primary navigation',
      'header.languageAria': 'Language',
      'nav.skills': 'Stack',
      'nav.projects': 'Projects',
      'nav.fit': 'Fit',
      'nav.contact': 'Contact',
      'hero.summary': 'Software developer in Turku.',
      'hero.currentWork': 'Currently building greenfield B2B web products.',
      'hero.availability': 'Open to backend and full-stack roles.',
      'hero.email': 'Email me',
      'skills.title': 'Current stack',
      'skills.center': 'Current stack',
      'skills.core': 'Core',
      'skills.application': 'Application',
      'skills.delivery': 'Testing and delivery',
      'skills.cms': 'Web and CMS',
      'projects.title': 'Personal projects',
      'projects.note': 'A few things I build outside work.',
      'projects.vesinvest': 'Planning tool for water utilities.',
      'projects.pnyx': 'Political promise tracker.',
      'projects.probocons': 'Company website.',
      'projects.yhdessa': 'Multilingual speech therapy site.',
      'status.live': 'Live',
      'status.building': 'In development',
      'status.prototype': 'Prototype',
      'fit.title': 'Best fit',
      'fit.products': 'B2B products with real users.',
      'fit.work': 'Backend-heavy full-stack work.',
      'fit.teams': 'Small teams with clear ownership.',
      'contact.title': 'Contact',
      'contact.location': 'Turku, Finland',
      'footer.copy': '© 2026',
    },
    fi: {
      'meta.title': 'John Lindström | Ohjelmistokehittäjä',
      'meta.description':
        'John Lindström on turkulainen ohjelmistokehittäjä, joka työskentelee TypeScriptin, Reactin, Node.js:n ja PostgreSQL:n parissa.',
      'meta.summary': 'Ajantasainen tekninen osaaminen, omat projektit ja yhteystiedot.',
      'a11y.skip': 'Siirry sisältöön',
      'header.homeAria': 'JRWL-etusivu',
      'header.navAria': 'Päänavigaatio',
      'header.languageAria': 'Kieli',
      'nav.skills': 'Teknologiat',
      'nav.projects': 'Projektit',
      'nav.fit': 'Sopivuus',
      'nav.contact': 'Yhteys',
      'hero.summary': 'Ohjelmistokehittäjä Turussa.',
      'hero.currentWork': 'Rakennan tällä hetkellä uusia B2B-verkkotuotteita.',
      'hero.availability': 'Avoin backend- ja full-stack-rooleihin.',
      'hero.email': 'Lähetä sähköpostia',
      'skills.title': 'Nykyinen teknologiapino',
      'skills.center': 'Nykyinen teknologiapino',
      'skills.core': 'Ydin',
      'skills.application': 'Sovellukset',
      'skills.delivery': 'Testaus ja julkaisu',
      'skills.cms': 'Web ja sisällönhallinta',
      'projects.title': 'Omat projektit',
      'projects.note': 'Muutama vapaa-ajalla rakentamani projekti.',
      'projects.vesinvest': 'Vesihuollon suunnittelutyökalu.',
      'projects.pnyx': 'Poliittisten lupausten seurantatyökalu.',
      'projects.probocons': 'Yrityksen verkkosivusto.',
      'projects.yhdessa': 'Monikielinen puheterapiasivusto.',
      'status.live': 'Tuotannossa',
      'status.building': 'Kehityksessä',
      'status.prototype': 'Prototyyppi',
      'fit.title': 'Paras ympäristö',
      'fit.products': 'B2B-ohjelmistot, joilla on oikeita käyttäjiä.',
      'fit.work': 'Backend-painotteinen full-stack-kehitys.',
      'fit.teams': 'Pienet tiimit ja selkeä vastuu.',
      'contact.title': 'Yhteystiedot',
      'contact.location': 'Turku, Suomi',
      'footer.copy': '© 2026',
    },
    sv: {
      'meta.title': 'John Lindström | Mjukvaruutvecklare',
      'meta.description':
        'John Lindström är mjukvaruutvecklare i Åbo och arbetar med TypeScript, React, Node.js och PostgreSQL.',
      'meta.summary': 'Aktuella tekniska kunskaper, egna projekt och kontaktuppgifter.',
      'a11y.skip': 'Gå till innehållet',
      'header.homeAria': 'JRWL startsida',
      'header.navAria': 'Huvudnavigation',
      'header.languageAria': 'Språk',
      'nav.skills': 'Teknik',
      'nav.projects': 'Projekt',
      'nav.fit': 'Passar',
      'nav.contact': 'Kontakt',
      'hero.summary': 'Mjukvaruutvecklare i Åbo.',
      'hero.currentWork': 'Bygger just nu nya B2B-webbprodukter.',
      'hero.availability': 'Öppen för backend- och fullstackroller.',
      'hero.email': 'Skicka e-post',
      'skills.title': 'Nuvarande teknikstack',
      'skills.center': 'Nuvarande teknikstack',
      'skills.core': 'Kärna',
      'skills.application': 'Applikation',
      'skills.delivery': 'Testning och leverans',
      'skills.cms': 'Webb och CMS',
      'projects.title': 'Egna projekt',
      'projects.note': 'Några projekt som jag bygger utanför arbetet.',
      'projects.vesinvest': 'Planeringsverktyg för vattenbolag.',
      'projects.pnyx': 'Verktyg för att följa politiska löften.',
      'projects.probocons': 'Företagswebbplats.',
      'projects.yhdessa': 'Flerspråkig webbplats för talterapi.',
      'status.live': 'Lanserad',
      'status.building': 'Under utveckling',
      'status.prototype': 'Prototyp',
      'fit.title': 'Passar bäst',
      'fit.products': 'B2B-programvara med riktiga användare.',
      'fit.work': 'Backendtung fullstackutveckling.',
      'fit.teams': 'Små team med tydligt ansvar.',
      'contact.title': 'Kontakt',
      'contact.location': 'Åbo, Finland',
      'footer.copy': '© 2026',
    },
  };

  function readStoredLanguage() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch {
      return null;
    }
  }

  function storeLanguage(language) {
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // Language switching still works when storage is unavailable.
    }
  }

  function applyLanguage(language) {
    const selected = SUPPORTED_LANGUAGES.includes(language) ? language : 'en';
    const dictionary = translations[selected];

    document.documentElement.lang = selected;
    document.title = dictionary['meta.title'];

    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const value = dictionary[element.dataset.i18n];
      if (value) element.textContent = value;
    });

    document.querySelectorAll('[data-i18n-content]').forEach((element) => {
      const value = dictionary[element.dataset.i18nContent];
      if (value) element.setAttribute('content', value);
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
      const value = dictionary[element.dataset.i18nAriaLabel];
      if (value) element.setAttribute('aria-label', value);
    });

    document.querySelectorAll('[data-lang]').forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.lang === selected));
    });

    storeLanguage(selected);
  }

  document.querySelectorAll('[data-lang]').forEach((button) => {
    button.addEventListener('click', () => applyLanguage(button.dataset.lang));
  });

  const storedLanguage = readStoredLanguage();
  const browserLanguage = navigator.language.slice(0, 2).toLowerCase();
  applyLanguage(
    SUPPORTED_LANGUAGES.includes(storedLanguage)
      ? storedLanguage
      : SUPPORTED_LANGUAGES.includes(browserLanguage)
        ? browserLanguage
        : 'en',
  );

  const sectionLinks = [...document.querySelectorAll('[data-section-link]')];
  const trackedSections = ['skills', 'projects', 'fit']
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  function setActiveSection(sectionId) {
    sectionLinks.forEach((link) => {
      if (link.dataset.sectionLink === sectionId) {
        link.setAttribute('aria-current', 'location');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  function updateActiveSection() {
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 48) {
      setActiveSection('contact');
      return;
    }

    const activationLine = window.innerHeight * 0.3;
    const active = trackedSections.filter((section) => section.getBoundingClientRect().top <= activationLine).at(-1);
    setActiveSection(active?.id ?? '');
  }

  let scrollFrame = 0;
  window.addEventListener(
    'scroll',
    () => {
      if (scrollFrame) return;
      scrollFrame = requestAnimationFrame(() => {
        updateActiveSection();
        scrollFrame = 0;
      });
    },
    { passive: true },
  );

  sectionLinks.forEach((link) => {
    link.addEventListener('click', () => setActiveSection(link.dataset.sectionLink));
  });

  updateActiveSection();
})();
