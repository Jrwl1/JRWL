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
        'Portfolio of John Lindström, a junior software developer building reliable web systems. Current work includes Vesipolku, PNYX, and active web prototypes.',
      'meta.siteName': 'John Lindström',
      'meta.ogTitle': 'John Lindström - Junior Software Developer',
      'meta.ogDescription':
        'Junior software developer focused on dependable, long-lived systems. Building Vesipolku and other products.',
      'meta.twitterTitle': 'John Lindström - Junior Software Developer',
      'meta.twitterDescription':
        'Portfolio site for a junior software developer building practical products with structure, ownership, and long-term thinking.',
      'header.brandAria': 'JRWL home',
      'header.brandAlt': 'JRWL logo',
      'header.navAria': 'Primary section navigation',
      'lang.selectorAria': 'Language selector',
      'nav.home': 'Home',
      'nav.projects': 'Projects',
      'nav.skills': 'Skills',
      'nav.about': 'About',
      'nav.contact': 'Contact',
      'hero.kicker': 'Junior Software Developer | Turku, Finland',
      'hero.title': 'I build software that holds up in real use.',
      'hero.lead':
        "I'm a solo developer building practical web products. My current live app, Vesipolku, helps water utility finance teams model long-term investments and pricing decisions.",
      'hero.ctaPrimary': 'Open vesipolku.jrwl.io',
      'hero.ctaSecondary': 'View projects',
      'hero.metricsAria': 'Project status metrics',
      'hero.metric1Value': '1',
      'hero.metric1Label': 'Built and maintained independently',
      'hero.metric2Value': '1',
      'hero.metric2Label': 'App live in production',
      'hero.metric3Value': '3',
      'hero.metric3Label': 'Projects in active development',
      'hero.logoAlt': 'JRWL full logo',
      'projects.title': 'Selected projects',
      'projects.lead': 'One live app, one product in development, and two website prototypes online.',
      'projects.vesipolkuAria': 'Open vesipolku.jrwl.io',
      'projects.vesipolkuTag': 'Water utility finance platform',
      'projects.vesipolkuDesc':
        'Vesipolku helps water utility finance teams import company data through a public API, model future investment scenarios, and estimate both current pricing and yearly increases needed to fund them.',
      'projects.pnyxAria': 'PNYX project in development',
      'projects.pnyxTag': 'Political accountability platform',
      'projects.pnyxDesc':
        'PNYX tracks political promises with sources and timeline status so accountability stays visible in practice.',
      'projects.proboconsAria': 'Open probocons.surge.sh prototype',
      'projects.proboconsTag': 'Consulting website',
      'projects.proboconsDesc':
        'Finnish consulting site prototype for ProboCons Oy, focused on occupational healthcare service contract development, pricing insight, and direct contact workflow.',
      'projects.yhdessaAria': 'Open yhdessa-web.vercel.app prototype',
      'projects.yhdessaTag': 'Speech therapy website',
      'projects.yhdessaDesc':
        'Finnish speech therapy service website prototype with multilingual navigation, service presentation, and direct contact flow.',
      'projects.landingAria': 'Return to top',
      'projects.landingName': 'JRWL Landing Page',
      'projects.landingTag': 'Portfolio and contact hub',
      'projects.landingDesc': 'This site is my portfolio home: current work, status, and direct contact.',
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
        'I am a junior software developer with hands-on delivery experience from university projects and independent builds. I work calmly, communicate clearly, and build systems that stay reliable after release.',
      'about.point1': 'I ship in small iterations and keep progress visible through readable commits.',
      'about.point2': 'I separate frontend, backend, and data logic so changes stay predictable.',
      'about.point3': 'I document setup and handover so projects can be maintained by others.',
      'contact.title': 'Background and contact',
      'contact.lead':
        'Before software, I worked in safety-critical maritime roles and completed reserve officer training. It taught me procedure discipline, ownership, and decision-making when mistakes have real consequences.',
      'contact.listAria': 'Direct contact details',
      'contact.location': 'Turku, Finland',
      'contact.openTo': 'Open to junior software developer roles.',
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
        'John Lindströmin portfolio: junior ohjelmistokehittäjä, joka rakentaa luotettavia verkkosovelluksia. Nykyiset työt: Vesipolku, PNYX ja aktiiviset verkkoprototyypit.',
      'meta.siteName': 'John Lindström',
      'meta.ogTitle': 'John Lindström - Junior ohjelmistokehittäjä',
      'meta.ogDescription':
        'Junior ohjelmistokehittäjä, joka rakentaa luotettavia ja pitkäikäisiä järjestelmiä. Rakenteilla Vesipolku ja muita tuotteita.',
      'meta.twitterTitle': 'John Lindström - Junior ohjelmistokehittäjä',
      'meta.twitterDescription':
        'Portfoliosivu junior ohjelmistokehittäjälle, joka rakentaa käytännöllisiä tuotteita rakenteella, vastuulla ja pitkäjänteisellä ajattelulla.',
      'header.brandAria': 'JRWL etusivu',
      'header.brandAlt': 'JRWL-logo',
      'header.navAria': 'Sivun päävalikko',
      'lang.selectorAria': 'Kielen valinta',
      'nav.home': 'Etusivu',
      'nav.projects': 'Projektit',
      'nav.skills': 'Osaaminen',
      'nav.about': 'Minusta',
      'nav.contact': 'Yhteystiedot',
      'hero.kicker': 'Junior ohjelmistokehittäjä | Turku, Suomi',
      'hero.title': 'Rakennan ohjelmistoja, jotka toimivat oikeassa käytössä.',
      'hero.lead':
        'Olen yksin työskentelevä kehittäjä, joka rakentaa käytännöllisiä verkkotuotteita. Tuotannossa oleva sovellukseni Vesipolku auttaa vesihuoltoyhtiöiden taloustiimejä mallintamaan pitkäjänteisiä investointeja ja hinnoittelupäätöksiä.',
      'hero.ctaPrimary': 'Avaa vesipolku.jrwl.io',
      'hero.ctaSecondary': 'Katso projektit',
      'hero.metricsAria': 'Projektien tilamittarit',
      'hero.metric1Value': '1',
      'hero.metric1Label': 'Rakennettu ja ylläpidetty itsenäisesti',
      'hero.metric2Value': '1',
      'hero.metric2Label': 'Sovellus tuotannossa',
      'hero.metric3Value': '3',
      'hero.metric3Label': 'Projektia aktiivisesti työn alla',
      'hero.logoAlt': 'JRWL-kokolukituslogo',
      'projects.title': 'Valitut projektit',
      'projects.lead': 'Yksi tuotannossa oleva sovellus, yksi ydintuote kehityksessä ja kaksi verkkosivuprototyyppiä verkossa.',
      'projects.vesipolkuAria': 'Avaa vesipolku.jrwl.io',
      'projects.vesipolkuTag': 'Vesihuollon taloussuunnittelu',
      'projects.vesipolkuDesc':
        'Vesipolku auttaa vesihuoltoyhtiöiden taloustiimejä tuomaan yritysdataa julkisen API:n kautta, mallintamaan tulevia investointiskenaarioita ja arvioimaan sekä nykyisen hinnan että vuosittaiset korotukset investointien rahoittamiseksi.',
      'projects.pnyxAria': 'PNYX-projekti kehityksessä',
      'projects.pnyxTag': 'Poliittinen vastuullisuusalusta',
      'projects.pnyxDesc':
        'PNYX seuraa poliittisia lupauksia lähteineen ja aikajanalla, jotta vastuullisuus näkyy käytännössä eikä jää puheen tasolle.',
      'projects.proboconsAria': 'Avaa probocons.surge.sh-prototyyppi',
      'projects.proboconsTag': 'Konsultoinnin verkkosivu',
      'projects.proboconsDesc':
        'Suomenkielinen ProboCons Oy:n konsultointisivuston prototyyppi, jonka painotus on työterveyspalveluiden sopimuskehityksessä, hinnoittelun näkymissä ja yhteydenotossa.',
      'projects.yhdessaAria': 'Avaa yhdessa-web.vercel.app-prototyyppi',
      'projects.yhdessaTag': 'Puheterapian verkkosivu',
      'projects.yhdessaDesc':
        'Suomenkielinen puheterapiapalvelun verkkosivun prototyyppi, jossa on monikielinen navigaatio, palveluesittely ja suora yhteydenottopolku.',
      'projects.landingAria': 'Palaa ylös',
      'projects.landingName': 'JRWL-portfoliosivu',
      'projects.landingTag': 'Portfolio ja yhteystiedot',
      'projects.landingDesc': 'Tämä sivu on portfolioni etusivu: ajankohtaiset työt, projektien tila ja suorat yhteystiedot.',
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
        'Olen junior ohjelmistokehittäjä, jolla on käytännön toimituskokemusta sekä yliopistoprojekteista että omista projekteista. Työskentelen rauhallisesti, viestin selkeästi ja rakennan järjestelmiä, jotka pysyvät luotettavina myös julkaisun jälkeen.',
      'about.point1': 'Toimitan pienissä iteraatioissa ja pidän edistymisen näkyvänä selkeillä commit-viesteillä.',
      'about.point2': 'Erotan frontend-, backend- ja datalogiikan, jotta muutokset pysyvät ennustettavina.',
      'about.point3': 'Dokumentoin käyttöönoton ja luovutuksen, jotta projektit ovat ylläpidettävissä myös muille.',
      'contact.title': 'Tausta ja yhteystiedot',
      'contact.lead':
        'Ennen ohjelmistokehitystä työskentelin turvallisuuskriittisissä merialan tehtävissä ja suoritin reserviupseerikoulutuksen. Se opetti prosessikuria, vastuunottoa ja päätöksentekoa tilanteissa, joissa virheillä on oikeita seurauksia.',
      'contact.listAria': 'Suorat yhteystiedot',
      'contact.location': 'Turku, Suomi',
      'contact.openTo': 'Avoin junior-ohjelmistokehittäjän rooleihin.',
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
        'Portfolio för John Lindström, en junior mjukvaruutvecklare som bygger tillförlitliga webbsystem. Aktuellt arbete: Vesipolku, PNYX och aktiva webbprototyper.',
      'meta.siteName': 'John Lindström',
      'meta.ogTitle': 'John Lindström - Junior mjukvaruutvecklare',
      'meta.ogDescription':
        'Junior mjukvaruutvecklare med fokus på tillförlitliga och långlivade system. Bygger Vesipolku och andra produkter.',
      'meta.twitterTitle': 'John Lindström - Junior mjukvaruutvecklare',
      'meta.twitterDescription':
        'Portfoliosida för en junior mjukvaruutvecklare som bygger praktiska produkter med struktur, ansvar och långsiktigt tänkande.',
      'header.brandAria': 'JRWL startsida',
      'header.brandAlt': 'JRWL-logotyp',
      'header.navAria': 'Primär sektionsnavigering',
      'lang.selectorAria': 'Språkval',
      'nav.home': 'Hem',
      'nav.projects': 'Projekt',
      'nav.skills': 'Kompetens',
      'nav.about': 'Om mig',
      'nav.contact': 'Kontakt',
      'hero.kicker': 'Junior mjukvaruutvecklare | Åbo, Finland',
      'hero.title': 'Jag bygger programvara som håller i verklig användning.',
      'hero.lead':
        'Jag bygger självständigt praktiska webbprodukter. Min nuvarande live-app, Vesipolku, hjälper ekonomiteam i vattenverk att modellera långsiktiga investeringar och prisbeslut.',
      'hero.ctaPrimary': 'Öppna vesipolku.jrwl.io',
      'hero.ctaSecondary': 'Visa projekt',
      'hero.metricsAria': 'Mätvärden för projektstatus',
      'hero.metric1Value': '1',
      'hero.metric1Label': 'Byggd och underhållen självständigt',
      'hero.metric2Value': '1',
      'hero.metric2Label': 'App i produktion',
      'hero.metric3Value': '3',
      'hero.metric3Label': 'Projekt under aktiv utveckling',
      'hero.logoAlt': 'JRWL full logotyp',
      'projects.title': 'Utvalda projekt',
      'projects.lead': 'En app i produktion, en kärnprodukt under utveckling och två webbplatsprototyper online.',
      'projects.vesipolkuAria': 'Öppna vesipolku.jrwl.io',
      'projects.vesipolkuTag': 'Ekonomiplattform för vattenverk',
      'projects.vesipolkuDesc':
        'Vesipolku hjälper ekonomiteam i vattenverk att importera bolagsdata via ett offentligt API, modellera framtida investeringsscenarier och uppskatta både dagens prisnivå och årliga höjningar som krävs för finansiering.',
      'projects.pnyxAria': 'PNYX-projekt under utveckling',
      'projects.pnyxTag': 'Politisk ansvarsplattform',
      'projects.pnyxDesc':
        'PNYX följer politiska löften med källor och tidslinjestatus, så att ansvar blir synligt i praktiken.',
      'projects.proboconsAria': 'Öppna probocons.surge.sh-prototyp',
      'projects.proboconsTag': 'Konsultwebbplats',
      'projects.proboconsDesc':
        'Finskspråkig prototyp av konsultwebbplats för ProboCons Oy med fokus på utveckling av avtal för företagshälsovård, prisinsikter och direkt kontaktflöde.',
      'projects.yhdessaAria': 'Öppna yhdessa-web.vercel.app-prototyp',
      'projects.yhdessaTag': 'Webbplats för talterapi',
      'projects.yhdessaDesc':
        'Finskspråkig prototyp av webbplats för talterapitjänster med flerspråkig navigering, tjänstepresentation och direkt kontaktflöde.',
      'projects.landingAria': 'Tillbaka till toppen',
      'projects.landingName': 'JRWL-portfoliosida',
      'projects.landingTag': 'Portfolio och kontaktnav',
      'projects.landingDesc': 'Den här sidan är min portfolio-startsida: aktuella projekt, status och direkta kontaktvägar.',
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
        'Jag är junior mjukvaruutvecklare med praktisk leveranserfarenhet från universitetsprojekt och egna byggen. Jag arbetar lugnt, kommunicerar tydligt och bygger system som förblir tillförlitliga efter release.',
      'about.point1': 'Jag levererar i små iterationer och håller framsteg synliga med tydliga commits.',
      'about.point2': 'Jag separerar frontend-, backend- och datalogik så att ändringar blir förutsägbara.',
      'about.point3': 'Jag dokumenterar uppsättning och överlämning så att projekt kan underhållas av andra.',
      'contact.title': 'Bakgrund och kontakt',
      'contact.lead':
        'Före mjukvaruutveckling arbetade jag i säkerhetskritiska maritima roller och genomförde reservofficersutbildning. Det lärde mig processdisciplin, ansvarstagande och beslutsfattande när misstag får verkliga konsekvenser.',
      'contact.listAria': 'Direkta kontaktuppgifter',
      'contact.location': 'Åbo, Finland',
      'contact.openTo': 'Öppen för roller som junior mjukvaruutvecklare.',
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
