(() => {
  const root = document.documentElement;
  root.classList.add('js-ready');

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');

  const LANGUAGE_STORAGE_KEY = 'jrwl-lang';
  const SUPPORTED_LANGUAGES = ['en', 'fi', 'sv'];

  const I18N = {
    en: {
      'meta.description':
        'Portfolio of John Lindström, a software developer shipping production web apps. Current work includes Vesipolku, PNYX, and website projects.',
      'meta.siteName': 'John Lindström',
      'meta.ogTitle': 'John Lindström - Software Developer',
      'meta.ogDescription':
        'Software developer building and maintaining web systems with TypeScript, React, and Node.js. Vesipolku is live; PNYX is in development.',
      'meta.twitterTitle': 'John Lindström - Software Developer',
      'meta.twitterDescription':
        'I build and maintain web products end-to-end: schema, APIs, frontend, deploys, and handover docs.',
      'header.brandAria': 'JRWL home',
      'header.brandAlt': 'JRWL logo',
      'header.navAria': 'Primary section navigation',
      'lang.selectorAria': 'Language selector',
      'nav.home': 'Home',
      'nav.projects': 'Projects',
      'nav.skills': 'Skills',
      'nav.about': 'About',
      'nav.contact': 'Contact',
      'hero.kicker': 'Software Developer | Turku, Finland',
      'hero.title': 'I ship web software that stays reliable in production.',
      'hero.lead':
        'I build and run web products end-to-end: schema, APIs, frontend, deploys, and maintenance. Vesipolku is live and used for long-range utility pricing and investment planning.',
      'hero.ctaPrimary': 'Open vesipolku.jrwl.io',
      'hero.ctaSecondary': 'View projects',
      'hero.metricsAria': 'Project status metrics',
      'hero.metric1Value': '1',
      'hero.metric1Label': 'Built and maintained independently',
      'hero.metric2Value': '2',
      'hero.metric2Label': 'Apps live in production',
      'hero.metric3Value': '3',
      'hero.metric3Label': 'Projects in active development',
      'hero.logoAlt': 'JRWL full logo',
      'projects.title': 'Selected projects',
      'projects.lead': 'Two live apps, two static prototypes, and one product in development.',
      'projects.vesipolkuAria': 'Open vesipolku.jrwl.io',
      'projects.vesipolkuTag': 'Water utility finance platform',
      'projects.vesipolkuDesc':
        'Vesipolku imports utility company data from a public API, models long-term investment scenarios, and calculates tariff levels plus yearly increases.',
      'projects.pnyxAria': 'PNYX project in development',
      'projects.pnyxTag': 'Accountability platform',
      'projects.pnyxDesc':
        'PNYX tracks political promises with source links, milestone checkpoints, and status history.',
      'projects.proboconsAria': 'Open probocons.surge.sh prototype',
      'projects.proboconsTag': 'Static company website',
      'projects.proboconsDesc':
        "Static website I built for a relative's company, ProboCons Oy. It presents services clearly and makes contact easy.",
      'projects.yhdessaAria': 'Open yhdessa-web.vercel.app prototype',
      'projects.yhdessaTag': 'Speech therapy website',
      'projects.yhdessaDesc':
        'Static site prototype for a speech therapy service with multilingual pages and direct contact flow.',
      'projects.landingAria': 'Return to top',
      'projects.landingName': 'JRWL Landing Page',
      'projects.landingTag': 'Portfolio and contact hub',
      'projects.landingDesc': 'This is my portfolio site: project status, live links, and direct contact details.',
      'status.live': 'Live',
      'status.inDevelopment': 'In development',
      'status.prototype': 'Prototype',
      'skills.title': 'Technical skills',
      'skills.core.title': 'Core languages',
      'skills.coreAria': 'Core programming languages',
      'skills.core.one': 'TypeScript',
      'skills.core.two': 'JavaScript',
      'skills.core.three': 'C#',
      'skills.frameworks.title': 'Frameworks and platforms',
      'skills.frameworksAria': 'Frameworks and platforms',
      'skills.frameworks.one': 'React',
      'skills.frameworks.two': 'Next.js',
      'skills.frameworks.three': 'NestJS',
      'skills.frameworks.four': 'Express',
      'skills.frameworks.five': 'Unity (XR)',
      'skills.data.title': 'Databases and data',
      'skills.dataAria': 'Databases and data tools',
      'skills.data.one': 'PostgreSQL + Prisma',
      'skills.data.two': 'MongoDB + Mongoose',
      'skills.data.three': 'MySQL',
      'skills.workflow.title': 'Workflow and delivery',
      'skills.workflowAria': 'Workflow and delivery stack',
      'skills.workflow.one': 'pnpm workspaces + Turborepo',
      'skills.workflow.two': 'Git/GitHub + structured commits',
      'skills.workflow.three': 'ESLint + Prettier + Husky',
      'skills.workflow.four': 'Jest + Vitest + Playwright',
      'skills.workflow.five': 'Vercel, Railway, Surge, self-managed VPS',
      'about.title': 'How I work',
      'about.lead':
        'I ship in short iterations, keep scope tight, and build for maintainability from day one. Most of my work is solo, so reliability, clear documentation, and clean handover are part of the process, not an afterthought.',
      'about.point1':
        'I break features into small, deployable slices and keep progress visible in commit history.',
      'about.point2':
        'I keep strict boundaries between frontend, backend, and data so changes stay predictable and low risk.',
      'about.point3':
        'I write setup and handover docs so another developer can run, ship, and maintain the project without tribal knowledge.',
      'contact.title': 'Background and contact',
      'contact.lead':
        'Before software, I worked in safety-critical maritime roles and completed reserve officer training. It taught me procedure discipline, ownership, and decision-making when mistakes have real consequences.',
      'contact.listAria': 'Direct contact details',
      'contact.location': 'Turku, Finland',
      'contact.openTo': 'Open to junior backend or full-stack roles.',
      'footer.linksAria': 'Contact links',
      'footer.github': 'GitHub',
      'footer.githubAria': 'GitHub profile',
      'footer.email': 'Email',
      'footer.emailAria': 'Email John Lindström',
      'footer.phone': 'Phone',
      'footer.phoneAria': 'Call John Lindström',
      'footer.copyright': '© 2026 John Lindström. All rights reserved.',
    },
    fi: {
      'meta.description':
        'John Lindströmin portfolio: ohjelmistokehittäjä, joka toimittaa tuotantokäyttöön web-sovelluksia. Nykyiset työt: Vesipolku, PNYX ja verkkosivuprojektit.',
      'meta.siteName': 'John Lindström',
      'meta.ogTitle': 'John Lindström - Ohjelmistokehittäjä',
      'meta.ogDescription':
        'Ohjelmistokehittäjä, joka rakentaa ja ylläpitää web-järjestelmiä TypeScriptillä, Reactilla ja Node.js:llä. Vesipolku on tuotannossa, PNYX kehityksessä.',
      'meta.twitterTitle': 'John Lindström - Ohjelmistokehittäjä',
      'meta.twitterDescription':
        'Rakennan tuotteita päästä päähän: skeema, API:t, frontend, julkaisut ja ylläpito.',
      'header.brandAria': 'JRWL etusivu',
      'header.brandAlt': 'JRWL-logo',
      'header.navAria': 'Sivun päävalikko',
      'lang.selectorAria': 'Kielen valinta',
      'nav.home': 'Etusivu',
      'nav.projects': 'Projektit',
      'nav.skills': 'Osaaminen',
      'nav.about': 'Minusta',
      'nav.contact': 'Yhteystiedot',
      'hero.kicker': 'Ohjelmistokehittäjä | Turku, Suomi',
      'hero.title': 'Toimitan web-ohjelmistoja, jotka kestävät tuotannossa.',
      'hero.lead':
        'Rakennan ja ylläpidän web-tuotteita päästä päähän: tietomalli, API:t, frontend, julkaisut ja ylläpito. Vesipolku on tuotannossa ja sitä käytetään vesihuollon pitkän aikavälin hinnoittelun ja investointien suunnittelussa.',
      'hero.ctaPrimary': 'Avaa vesipolku.jrwl.io',
      'hero.ctaSecondary': 'Katso projektit',
      'hero.metricsAria': 'Projektien tilamittarit',
      'hero.metric1Value': '1',
      'hero.metric1Label': 'Rakennettu ja ylläpidetty itsenäisesti',
      'hero.metric2Value': '2',
      'hero.metric2Label': 'Sovellusta tuotannossa',
      'hero.metric3Value': '3',
      'hero.metric3Label': 'Projektia aktiivisesti työn alla',
      'hero.logoAlt': 'JRWL-kokolukituslogo',
      'projects.title': 'Valitut projektit',
      'projects.lead': 'Kaksi tuotannossa olevaa sovellusta, kaksi staattista prototyyppiä ja yksi kehityksessä oleva tuote.',
      'projects.vesipolkuAria': 'Avaa vesipolku.jrwl.io',
      'projects.vesipolkuTag': 'Vesihuollon taloussuunnittelu',
      'projects.vesipolkuDesc':
        'Vesipolku hakee vesihuoltoyhtiön dataa julkisesta API:sta, mallintaa pitkän aikavälin investointiskenaarioita ja laskee nykyisen tariffitason sekä vuosittaiset korotustarpeet.',
      'projects.pnyxAria': 'PNYX-projekti kehityksessä',
      'projects.pnyxTag': 'Vastuullisuusalusta',
      'projects.pnyxDesc':
        'PNYX seuraa poliittisia lupauksia lähdelinkkien, välitavoitteiden ja tilahistorian avulla.',
      'projects.proboconsAria': 'Avaa probocons.surge.sh-prototyyppi',
      'projects.proboconsTag': 'Staattinen yrityssivusto',
      'projects.proboconsDesc':
        'Staattinen esittelysivu sukulaisen yritykselle, ProboCons Oy:lle. Sivu kertoo palvelut selkeästi ja tekee yhteydenotosta helppoa.',
      'projects.yhdessaAria': 'Avaa yhdessa-web.vercel.app-prototyyppi',
      'projects.yhdessaTag': 'Puheterapian verkkosivu',
      'projects.yhdessaDesc':
        'Staattinen puheterapiapalvelun sivustoprototyyppi, jossa on monikieliset sivut ja suora yhteydenottopolku.',
      'projects.landingAria': 'Palaa ylös',
      'projects.landingName': 'JRWL-portfoliosivu',
      'projects.landingTag': 'Portfolio ja yhteystiedot',
      'projects.landingDesc': 'Tämä on portfoliosivuni: projektien tila, julkaistut linkit ja suorat yhteystiedot.',
      'status.live': 'Tuotannossa',
      'status.inDevelopment': 'Kehityksessä',
      'status.prototype': 'Prototyyppi',
      'skills.title': 'Tekninen osaaminen',
      'skills.core.title': 'Ydinkielet',
      'skills.coreAria': 'Ydinohjelmointikielet',
      'skills.core.one': 'TypeScript',
      'skills.core.two': 'JavaScript',
      'skills.core.three': 'C#',
      'skills.frameworks.title': 'Kehykset ja alustat',
      'skills.frameworksAria': 'Kehykset ja alustat',
      'skills.frameworks.one': 'React',
      'skills.frameworks.two': 'Next.js',
      'skills.frameworks.three': 'NestJS',
      'skills.frameworks.four': 'Express',
      'skills.frameworks.five': 'Unity (XR)',
      'skills.data.title': 'Tietokannat ja data',
      'skills.dataAria': 'Tietokannat ja datatyökalut',
      'skills.data.one': 'PostgreSQL + Prisma',
      'skills.data.two': 'MongoDB + Mongoose',
      'skills.data.three': 'MySQL',
      'skills.workflow.title': 'Työnkulku ja toimitus',
      'skills.workflowAria': 'Työnkulun ja toimituksen työkalut',
      'skills.workflow.one': 'pnpm-työtilat + Turborepo',
      'skills.workflow.two': 'Git/GitHub + jäsennellyt commitit',
      'skills.workflow.three': 'ESLint + Prettier + Husky',
      'skills.workflow.four': 'Jest + Vitest + Playwright',
      'skills.workflow.five': 'Vercel, Railway, Surge, oma VPS-tuotantopalvelin',
      'about.title': 'Työskentelytapani',
      'about.lead':
        'Toimitan pienissä iteraatioissa, rajaan laajuuden tiukasti ja rakennan ylläpidettävyyttä alusta asti. Suurin osa työstäni on soolona tehtyä, joten luotettavuus, selkeä dokumentaatio ja siisti luovutus kuuluvat prosessiin alusta lähtien.',
      'about.point1':
        'Pilkon ominaisuudet pieniin julkaistaviin osiin ja pidän etenemisen näkyvänä commit-historiassa.',
      'about.point2':
        'Pidän frontendin, backendin ja datan rajat selkeinä, jotta muutokset pysyvät ennustettavina ja matalariskisinä.',
      'about.point3':
        'Kirjoitan käyttöönotto- ja luovutusdokumentaation niin, että seuraava kehittäjä voi ajaa, julkaista ja ylläpitää projektia ilman hiljaista tietoa.',
      'contact.title': 'Tausta ja yhteystiedot',
      'contact.lead':
        'Ennen ohjelmistokehitystä työskentelin turvallisuuskriittisissä merialan tehtävissä ja suoritin reserviupseerikoulutuksen. Se opetti prosessikuria, vastuunottoa ja päätöksentekoa tilanteissa, joissa virheillä on oikeita seurauksia.',
      'contact.listAria': 'Suorat yhteystiedot',
      'contact.location': 'Turku, Suomi',
      'contact.openTo': 'Avoin junior backend- tai full-stack-rooleihin.',
      'footer.linksAria': 'Yhteyslinkit',
      'footer.github': 'GitHub',
      'footer.githubAria': 'GitHub-profiili',
      'footer.email': 'Sähköposti',
      'footer.emailAria': 'Lähetä sähköpostia John Lindströmille',
      'footer.phone': 'Puhelin',
      'footer.phoneAria': 'Soita John Lindströmille',
      'footer.copyright': '© 2026 John Lindström. Kaikki oikeudet pidätetään.',
    },
    sv: {
      'meta.description':
        'Portfolio för John Lindström: mjukvaruutvecklare som levererar webbappar i produktion. Aktuellt: Vesipolku, PNYX och webbplatsprojekt.',
      'meta.siteName': 'John Lindström',
      'meta.ogTitle': 'John Lindström - Mjukvaruutvecklare',
      'meta.ogDescription':
        'Mjukvaruutvecklare som bygger och underhåller webbsystem med TypeScript, React och Node.js. Vesipolku är live, PNYX är under utveckling.',
      'meta.twitterTitle': 'John Lindström - Mjukvaruutvecklare',
      'meta.twitterDescription':
        'Jag bygger produkter end-to-end: schema, API:er, frontend, deploy och underhåll.',
      'header.brandAria': 'JRWL startsida',
      'header.brandAlt': 'JRWL-logotyp',
      'header.navAria': 'Primär sektionsnavigering',
      'lang.selectorAria': 'Språkval',
      'nav.home': 'Hem',
      'nav.projects': 'Projekt',
      'nav.skills': 'Kompetens',
      'nav.about': 'Om mig',
      'nav.contact': 'Kontakt',
      'hero.kicker': 'Mjukvaruutvecklare | Åbo, Finland',
      'hero.title': 'Jag levererar webbprogramvara som håller i produktion.',
      'hero.lead':
        'Jag bygger och driver webbprodukter end-to-end: datamodell, API:er, frontend, deploy och underhåll. Vesipolku är live och används för långsiktig planering av taxor och investeringar inom vattenverk.',
      'hero.ctaPrimary': 'Öppna vesipolku.jrwl.io',
      'hero.ctaSecondary': 'Visa projekt',
      'hero.metricsAria': 'Mätvärden för projektstatus',
      'hero.metric1Value': '1',
      'hero.metric1Label': 'Byggd och underhållen självständigt',
      'hero.metric2Value': '2',
      'hero.metric2Label': 'Appar i produktion',
      'hero.metric3Value': '3',
      'hero.metric3Label': 'Projekt under aktiv utveckling',
      'hero.logoAlt': 'JRWL full logotyp',
      'projects.title': 'Utvalda projekt',
      'projects.lead': 'Två liveappar, två statiska prototyper och en produkt under utveckling.',
      'projects.vesipolkuAria': 'Öppna vesipolku.jrwl.io',
      'projects.vesipolkuTag': 'Ekonomiplattform för vattenverk',
      'projects.vesipolkuDesc':
        'Vesipolku importerar bolagsdata från ett offentligt API, modellerar långsiktiga investeringsscenarier och räknar ut nuvarande taxenivå samt årliga höjningar.',
      'projects.pnyxAria': 'PNYX-projekt under utveckling',
      'projects.pnyxTag': 'Ansvarsplattform',
      'projects.pnyxDesc':
        'PNYX följer politiska löften med källänkar, milstolpar och statushistorik.',
      'projects.proboconsAria': 'Öppna probocons.surge.sh-prototyp',
      'projects.proboconsTag': 'Statisk företagswebbplats',
      'projects.proboconsDesc':
        'Statisk presentationssajt för en släktings företag, ProboCons Oy. Fokus är tydlig serviceinfo och enkel kontakt.',
      'projects.yhdessaAria': 'Öppna yhdessa-web.vercel.app-prototyp',
      'projects.yhdessaTag': 'Webbplats för talterapi',
      'projects.yhdessaDesc':
        'Statisk prototyp för en talterapitjänst med flerspråkiga sidor och en direkt kontaktväg.',
      'projects.landingAria': 'Tillbaka till toppen',
      'projects.landingName': 'JRWL-portfoliosida',
      'projects.landingTag': 'Portfolio och kontaktnav',
      'projects.landingDesc': 'Det här är min portfoliosajt: projektstatus, publicerade länkar och direktkontakt.',
      'status.live': 'I drift',
      'status.inDevelopment': 'Under utveckling',
      'status.prototype': 'Prototyp',
      'skills.title': 'Tekniska färdigheter',
      'skills.core.title': 'Kärnspråk',
      'skills.coreAria': 'Kärnprogrammeringsspråk',
      'skills.core.one': 'TypeScript',
      'skills.core.two': 'JavaScript',
      'skills.core.three': 'C#',
      'skills.frameworks.title': 'Ramverk och plattformar',
      'skills.frameworksAria': 'Ramverk och plattformar',
      'skills.frameworks.one': 'React',
      'skills.frameworks.two': 'Next.js',
      'skills.frameworks.three': 'NestJS',
      'skills.frameworks.four': 'Express',
      'skills.frameworks.five': 'Unity (XR)',
      'skills.data.title': 'Databaser och data',
      'skills.dataAria': 'Databaser och dataverktyg',
      'skills.data.one': 'PostgreSQL + Prisma',
      'skills.data.two': 'MongoDB + Mongoose',
      'skills.data.three': 'MySQL',
      'skills.workflow.title': 'Arbetsflöde och leverans',
      'skills.workflowAria': 'Arbetsflödes- och leveransstack',
      'skills.workflow.one': 'pnpm-workspaces + Turborepo',
      'skills.workflow.two': 'Git/GitHub + strukturerade commits',
      'skills.workflow.three': 'ESLint + Prettier + Husky',
      'skills.workflow.four': 'Jest + Vitest + Playwright',
      'skills.workflow.five': 'Vercel, Railway, Surge, egen VPS-produktionsserver',
      'about.title': 'Så arbetar jag',
      'about.lead':
        'Jag levererar i korta iterationer, håller omfattningen tydlig och bygger för underhållbarhet från start. Det mesta jag gör är soloarbete, så driftsäkerhet, tydlig dokumentation och ren överlämning är en del av processen från dag ett.',
      'about.point1':
        'Jag bryter ner funktioner i små delar som går att driftsätta och håller framsteg synliga i commit-historiken.',
      'about.point2':
        'Jag håller tydliga gränser mellan frontend, backend och data så att ändringar blir förutsägbara och låg risk.',
      'about.point3':
        'Jag skriver setup- och överlämningsdokumentation så att nästa utvecklare kan köra, driftsätta och underhålla projektet utan tyst kunskap.',
      'contact.title': 'Bakgrund och kontakt',
      'contact.lead':
        'Före mjukvaruutveckling arbetade jag i säkerhetskritiska maritima roller och genomförde reservofficersutbildning. Det lärde mig processdisciplin, ansvarstagande och beslutsfattande när misstag får verkliga konsekvenser.',
      'contact.listAria': 'Direkta kontaktuppgifter',
      'contact.location': 'Åbo, Finland',
      'contact.openTo': 'Öppen för juniora backend- eller fullstack-roller.',
      'footer.linksAria': 'Kontaktlänkar',
      'footer.github': 'GitHub',
      'footer.githubAria': 'GitHub-profil',
      'footer.email': 'E-post',
      'footer.emailAria': 'Skicka e-post till John Lindström',
      'footer.phone': 'Telefon',
      'footer.phoneAria': 'Ring John Lindström',
      'footer.copyright': '© 2026 John Lindström. Alla rättigheter förbehållna.',
    },
  };

  const translate = (lang, key) => I18N[lang]?.[key] ?? I18N.en[key] ?? key;

  const applyTranslations = (lang) => {
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach((node) => {
      const key = node.dataset.i18n;
      if (!key) return;
      node.textContent = translate(lang, key);
    });

    const attributeBindings = [
      ['[data-i18n-aria-label]', 'aria-label', 'i18nAriaLabel'],
      ['[data-i18n-alt]', 'alt', 'i18nAlt'],
      ['[data-i18n-content]', 'content', 'i18nContent'],
    ];

    attributeBindings.forEach(([selector, attr, dataKey]) => {
      document.querySelectorAll(selector).forEach((node) => {
        const key = node.dataset[dataKey];
        if (!key) return;
        node.setAttribute(attr, translate(lang, key));
      });
    });

    document.querySelectorAll('.lang-btn[data-lang]').forEach((button) => {
      const active = button.dataset.lang === lang;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  };

  const getInitialLanguage = () => {
    try {
      const saved = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
      if (saved && SUPPORTED_LANGUAGES.includes(saved)) {
        return saved;
      }
    } catch (_error) {
      // Ignore storage errors and fall back to browser language.
    }

    const browser = (navigator.language || 'en').toLowerCase();
    if (browser.startsWith('fi')) return 'fi';
    if (browser.startsWith('sv')) return 'sv';
    return 'en';
  };

  const initLanguageSelector = () => {
    const languageButtons = Array.from(document.querySelectorAll('.lang-btn[data-lang]'));
    if (languageButtons.length === 0) return;

    const setLanguage = (candidate) => {
      const lang = SUPPORTED_LANGUAGES.includes(candidate) ? candidate : 'en';
      applyTranslations(lang);

      try {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
      } catch (_error) {
        // Ignore storage errors; translations still work in-session.
      }
    };

    languageButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const candidate = button.dataset.lang || 'en';
        setLanguage(candidate);
      });
    });

    setLanguage(getInitialLanguage());
  };

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
    initLanguageSelector();
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
