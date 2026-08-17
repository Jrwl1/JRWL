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
      'nav.skills': 'Skills',
      'nav.projects': 'Projects',
      'nav.about': 'Background',
      'nav.contact': 'Contact',
      'hero.summary':
        'I’m a software developer in Turku working with TypeScript, React, Node.js and PostgreSQL.',
      'hero.availability': 'Open to backend and full-stack roles.',
      'hero.email': 'Email me',
      'hero.stackAria': 'Primary technical stack',
      'skills.title': 'Technical skills',
      'skills.application': 'Application development',
      'skills.delivery': 'Testing and delivery',
      'skills.cms': 'Web and CMS',
      'projects.title': 'Personal projects',
      'projects.note': 'A few things I build outside work.',
      'projects.vesipolku': 'Planning tool for water utilities.',
      'projects.pnyx': 'Political promise tracker.',
      'projects.probocons': 'Company website.',
      'projects.yhdessa': 'Multilingual speech therapy site.',
      'status.live': 'Live',
      'status.building': 'In development',
      'status.prototype': 'Prototype',
      'about.title': 'Background',
      'about.copy':
        'Before software, I worked at sea and completed reserve officer training. I still value solid procedures and clear ownership, especially in production.',
      'contact.title': 'Contact',
      'contact.location': 'Turku, Finland',
      'footer.copy': '© 2026 John Lindström',
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
      'nav.skills': 'Osaaminen',
      'nav.projects': 'Projektit',
      'nav.about': 'Tausta',
      'nav.contact': 'Yhteys',
      'hero.summary':
        'Olen ohjelmistokehittäjä Turussa. Työskentelen TypeScriptin, Reactin, Node.js:n ja PostgreSQL:n parissa.',
      'hero.availability': 'Avoin backend- ja full-stack-rooleihin.',
      'hero.email': 'Lähetä sähköpostia',
      'hero.stackAria': 'Keskeinen tekninen osaaminen',
      'skills.title': 'Tekninen osaaminen',
      'skills.application': 'Sovelluskehitys',
      'skills.delivery': 'Testaus ja julkaisu',
      'skills.cms': 'Web ja sisällönhallinta',
      'projects.title': 'Omat projektit',
      'projects.note': 'Muutama vapaa-ajalla rakentamani projekti.',
      'projects.vesipolku': 'Vesihuollon suunnittelutyökalu.',
      'projects.pnyx': 'Poliittisten lupausten seurantatyökalu.',
      'projects.probocons': 'Yrityksen verkkosivusto.',
      'projects.yhdessa': 'Monikielinen puheterapiasivusto.',
      'status.live': 'Tuotannossa',
      'status.building': 'Kehityksessä',
      'status.prototype': 'Prototyyppi',
      'about.title': 'Tausta',
      'about.copy':
        'Ennen ohjelmistoalaa työskentelin merellä ja suoritin reserviupseerikoulutuksen. Arvostan yhä selkeitä toimintatapoja ja vastuunjakoa, etenkin tuotannossa.',
      'contact.title': 'Yhteystiedot',
      'contact.location': 'Turku, Suomi',
      'footer.copy': '© 2026 John Lindström',
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
      'nav.skills': 'Kunskaper',
      'nav.projects': 'Projekt',
      'nav.about': 'Bakgrund',
      'nav.contact': 'Kontakt',
      'hero.summary':
        'Jag är mjukvaruutvecklare i Åbo och arbetar med TypeScript, React, Node.js och PostgreSQL.',
      'hero.availability': 'Öppen för backend- och fullstackroller.',
      'hero.email': 'Skicka e-post',
      'hero.stackAria': 'Primär teknisk kompetens',
      'skills.title': 'Tekniska kunskaper',
      'skills.application': 'Applikationsutveckling',
      'skills.delivery': 'Testning och leverans',
      'skills.cms': 'Webb och CMS',
      'projects.title': 'Egna projekt',
      'projects.note': 'Några projekt som jag bygger utanför arbetet.',
      'projects.vesipolku': 'Planeringsverktyg för vattenbolag.',
      'projects.pnyx': 'Verktyg för att följa politiska löften.',
      'projects.probocons': 'Företagswebbplats.',
      'projects.yhdessa': 'Flerspråkig webbplats för talterapi.',
      'status.live': 'Lanserad',
      'status.building': 'Under utveckling',
      'status.prototype': 'Prototyp',
      'about.title': 'Bakgrund',
      'about.copy':
        'Innan jag började med mjukvara arbetade jag till sjöss och genomförde reservofficersutbildning. Jag värdesätter fortfarande tydliga rutiner och tydligt ansvar, särskilt i produktion.',
      'contact.title': 'Kontakt',
      'contact.location': 'Åbo, Finland',
      'footer.copy': '© 2026 John Lindström',
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
  const trackedSections = ['skills', 'projects', 'about']
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
