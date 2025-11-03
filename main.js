// --- Tema persistente ---
(function initTheme(){
  const ls = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (ls === 'dark' || (!ls && prefersDark)) document.documentElement.classList.add('dark');
})();

// --- Menu mobile ---
const btnMenu = document.getElementById('btnMenu');
const navMobile = document.getElementById('navMobile');
const navOverlay = document.getElementById('navOverlay');
btnMenu?.addEventListener('click', () => {
  const isHidden = navMobile.classList.toggle('hidden');
  btnMenu.setAttribute('aria-expanded', String(!isHidden));
  document.body.classList.toggle('overflow-hidden', !isHidden);
});
navOverlay?.addEventListener('click', () => {
  navMobile.classList.add('hidden');
  btnMenu?.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('overflow-hidden');
});
navMobile?.addEventListener('click', (e) => {
  const target = e.target;
  if (target && target.closest && target.closest('[data-close]')) {
    navMobile.classList.add('hidden');
    btnMenu?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('overflow-hidden');
  }
});

// --- I18n ---
const translations = {
  pt: {
    'nav.sobre': 'Sobre',
    'nav.habilidades': 'Habilidades',
    'nav.projetos': 'Projetos',
    'nav.experiencia': 'Experiência',
    'nav.contato': 'Contato',
    'hero.hello': 'Olá, sou João Ribeiro',
    'hero.desc': 'Fundador da NeoTech Soluções, sou desenvolvedor full stack com especialização em JavaScript e base em Python. Tenho ampla experiência na criação de interfaces modernas utilizando Tailwind e Bootstrap, sempre com foco em performance, segurança e experiência do usuário (UX). Apaixonado por tecnologia e inovação, busco desenvolver soluções inteligentes que unam eficiência e design.',
    'hero.btn.github': 'GitHub',
    'hero.btn.linkedin': 'LinkedIn',
    'hero.btn.email': 'E-mail',
    'sobre.title': 'Sobre mim',
    'sobre.p1': 'Sou de Bebedouro, São Paulo. Desenvolvedor Full Stack e fundador da NeoTech Soluções, com experiência em desenvolvimento web. Estudei minha vida inteira em Bebedouro, sou graduado em Sistemas de Informação pela Unifafibe e estou finalizando a pós-graduação em Desenvolvimento de Sistemas Web pelo Instituto Federal de Barretos.',
    'sobre.p2': 'Tenho forte conhecimento em scripts JS e BPMs e estou me especializando em Laravel. Na parte de UI, estudo Bootstrap e TypeScript; trabalho com bancos de dados, desenvolvo integrações e possuo sólido conhecimento em inteligência artificial. Em mais de quatro anos de experiência, domino: HTML, CSS, JavaScript, PHP, Laravel, Python, Node, Docker e MySQL.',
    'sobre.techs': 'Tecnologias que utilizo',
    'skills.title': 'Habilidades',
    'skills.fullstack.title': 'Full Stack',
    'skills.fullstack.desc': 'Desenvolvimento ponta a ponta, integrações, APIs, testes e deploy.',
    'skills.frontend.title': 'Front-end',
    'skills.frontend.desc': 'HTML5, CSS3, Tailwind CSS; foco em performance, acessibilidade e UX.',
    'skills.backend.title': 'Back-end',
    'skills.backend.desc': 'Python, FastAPI e PHP; APIs REST, autenticação e boas práticas.',
    'skills.data.title': 'Data',
    'skills.data.desc': 'Bancos de dados, modelagem e MySQL; consultas eficientes e integrações.',
    'skills.ai.title': 'Inteligência Artificial',
    'skills.ai.desc': 'Aplicações com IA e automações; integração de serviços e modelos.',
    'skills.soft.title': 'Soft Skills — Comunicação',
    'skills.soft.desc': 'Demonstro comunicação assertiva e empática, capaz de adaptar a mensagem ao público e ao contexto. Valorizo a colaboração entre equipes multidisciplinares, construindo relações de confiança e promovendo um ambiente de trabalho produtivo e leve. Tenho facilidade em conectar pessoas e alinhar objetivos, transformando ideias em resultados concretos.',
    'projects.title': 'Projetos',
    'projects.view_all': 'ver todos',
    'experience.title': 'Experiência',
    'education.title': 'Formação acadêmica',
    'education.view_certs': 'Ver certificações no LinkedIn',
    'contact.title': 'Contato',
    'contact.desc': 'Fale comigo para novas oportunidades e futuros projetos. Estou sempre à disposição de novos desafios.',
    'contact.email.title': 'Email',
    'contact.email.send': 'Enviar Email',
    'contact.email.copy': 'Copiar e-mail',
    'contact.whatsapp.title': 'WhatsApp',
    'contact.whatsapp.action': 'Conversar',
    'contact.linkedin.title': 'LinkedIn',
    'contact.linkedin.action': 'Conectar',
    'contact.github.title': 'GitHub',
    'contact.github.action': 'Ver Perfil',
    'footer.rights': 'Todos os direitos reservados.',
    'projects.menupro.title': 'MenuPro — Cardápio digital',
    'projects.menupro.desc': 'Menu PRO, cardápio digital para restaurantes, feito em PHP.',
    'projects.memory.title': 'Jogo da Memória — JavaScript',
    'projects.memory.desc': 'Jogo da memória desenvolvido em JavaScript vanilla.',
    'projects.protcc.title': 'Procura pro (tcc)',
    'projects.protcc.desc': 'Repositório do projeto de TCC.',
    'projects.neotech.title': 'NeoTech Soluções — Organização',
    'projects.neotech.desc': 'Acesse os repositórios e iniciativas da NeoTech Soluções.',
    'projects.external_link': 'Link externo',
    'exp.neotech.title': 'Sócio-fundador — NeoTech Soluções',
    'exp.neotech.period': '2025 — atual',
    'exp.neotech.desc': 'Lidero projetos web full stack, definindo arquitetura, padrões de código, segurança (auth, RBAC, OWASP) e CI/CD.',
    'exp.zixbe2.title': 'Analista de Desenvolvimento Júnior II — Zixbe',
    'exp.zixbe2.period': 'mar 2025 — set 2025 · 7 meses',
    'exp.zixbe2.desc': 'Tempo integral. Comunicação, Microsoft Office e mais 21 competências.',
    'exp.zixbe1.title': 'Analista de Desenvolvimento Júnior I — Zixbe',
    'exp.zixbe1.period': 'fev 2024 — mar 2025 · 1 ano 2 meses',
    'exp.zixbe1.desc': 'Remota. GitHub, HTML e mais 10 competências.',
    'exp.sicoob.title': 'Suporte ao usuário — Sicoob Credicitrus (Estágio)',
    'exp.sicoob.period': 'mar 2023 — fev 2024 · 1 ano',
    'exp.sicoob.desc': 'Bebedouro, São Paulo, Brasil · Presencial. Comunicação e Microsoft Office.',
    'exp.linx.title': 'Analista de suporte — Linx',
    'exp.linx.period': 'nov 2022 — mar 2023 · 5 meses',
    'exp.linx.desc': 'Bebedouro, São Paulo, Brasil. Comunicação.',
    'exp.reis.title': 'Infraestrutura e suporte — Reis Advogados (Estágio)',
    'exp.reis.period': 'mai 2022 — nov 2022 · 7 meses',
    'exp.reis.desc': 'Bebedouro, São Paulo, Brasil. Comunicação.',
    'exp.pref.title': 'Suporte de T.I — Prefeitura de Bebedouro (Estágio)',
    'exp.pref.period': 'dez 2021 — mai 2022 · 6 meses',
    'exp.pref.desc': 'São Paulo, Brasil. Comunicação.',
    'edu.ifsp.title': 'Pós-graduação (Lato Sensu) — IFSP',
    'edu.ifsp.period': 'jul 2025 — dez 2026',
    'edu.ifsp.course': 'Desenvolvimento de Sistemas para Internet e Dispositivos Móveis.',
    'edu.ifsp.skills': 'Git, Banco de dados e mais 14 competências',
    'edu.unif.title': 'Bacharelado — UNIFAFIBE',
    'edu.unif.period': 'jan 2021 — dez 2024',
    'edu.unif.course': 'Sistemas de Informação.',
    'edu.cna.title': 'Inglês (Intermediário) — CNA',
    'edu.cna.period': 'Concluído',
    'edu.cna.course': 'Curso de inglês — nível intermediário.',
    'hero.roles': ['Desenvolvedor Full Stack', 'Especialista JavaScript', 'Experiência em BPMs', 'Apaixonado por Tecnologia']
  },
  en: {
    'nav.sobre': 'About',
    'nav.habilidades': 'Skills',
    'nav.projetos': 'Projects',
    'nav.experiencia': 'Experience',
    'nav.contato': 'Contact',
    'hero.hello': "Hi, I'm João Ribeiro",
    'hero.desc': 'Founder of NeoTech Soluções, Full‑stack developer specialized in JavaScript with a strong Python background. Experienced in modern interfaces with Tailwind and Bootstrap, focused on performance, security and UX. Passionate about technology and innovation, I build smart solutions that combine efficiency and design.',
    'hero.btn.github': 'GitHub',
    'hero.btn.linkedin': 'LinkedIn',
    'hero.btn.email': 'Email',
    'sobre.title': 'About me',
    'sobre.p1': 'I am from Bebedouro, São Paulo. Full‑stack developer and founder of NeoTech Soluções, with experience in web development. I studied my whole life in Bebedouro, graduated in Information Systems at UNIFAFIBE and I am finishing a postgraduate degree in Web Systems Development at the Federal Institute of Barretos.',
    'sobre.p2': 'Strong knowledge in JS scripting and BPMs, currently specializing in Laravel. For UI, I study Bootstrap and TypeScript; I work with databases, build integrations and have solid knowledge in artificial intelligence. With over four years of experience, I master: HTML, CSS, JavaScript, PHP, Laravel, Python, Node, Docker and MySQL.',
    'sobre.techs': 'Technologies I use',
    'skills.title': 'Skills',
    'skills.fullstack.title': 'Full‑stack',
    'skills.fullstack.desc': 'End‑to‑end development, integrations, APIs, tests and deploy.',
    'skills.frontend.title': 'Front‑end',
    'skills.frontend.desc': 'HTML5, CSS3, Tailwind CSS; focus on performance, accessibility and UX.',
    'skills.backend.title': 'Back‑end',
    'skills.backend.desc': 'Python, FastAPI and PHP; REST APIs, authentication and best practices.',
    'skills.data.title': 'Data',
    'skills.data.desc': 'Databases, modeling and MySQL; efficient queries and integrations.',
    'skills.ai.title': 'Artificial Intelligence',
    'skills.ai.desc': 'Apps with AI and automations; service and model integrations.',
    'skills.soft.title': 'Soft Skills — Communication',
    'skills.soft.desc': 'Assertive and empathetic communication, adapting messages to audience and context. I value collaboration across multidisciplinary teams, build trustful relationships and foster a productive, light work environment. I connect people and align goals, turning ideas into results.',
    'projects.title': 'Projects',
    'projects.view_all': 'view all',
    'experience.title': 'Experience',
    'education.title': 'Education',
    'education.view_certs': 'View certifications on LinkedIn',
    'contact.title': 'Contact',
    'contact.desc': 'Reach out for new opportunities and projects. I’m always open to new challenges.',
    'contact.email.title': 'Email',
    'contact.email.send': 'Send Email',
    'contact.email.copy': 'Copy email',
    'contact.whatsapp.title': 'WhatsApp',
    'contact.whatsapp.action': 'Chat',
    'contact.linkedin.title': 'LinkedIn',
    'contact.linkedin.action': 'Connect',
    'contact.github.title': 'GitHub',
    'contact.github.action': 'View Profile',
    'footer.rights': 'All rights reserved.',
    'projects.menupro.title': 'MenuPro — Digital menu',
    'projects.menupro.desc': 'Menu PRO, digital menu for restaurants, built in PHP.',
    'projects.memory.title': 'Memory Game — JavaScript',
    'projects.memory.desc': 'Memory game built with vanilla JavaScript.',
    'projects.protcc.title': 'Procura PRO (TCC)',
    'projects.protcc.desc': 'Repository of the TCC project.',
    'projects.neotech.title': 'NeoTech Soluções — Organization',
    'projects.neotech.desc': 'Access NeoTech Soluções repositories and initiatives.',
    'projects.external_link': 'External link',
    'exp.neotech.title': 'Co‑founder — NeoTech Soluções',
    'exp.neotech.period': '2025 — present',
    'exp.neotech.desc': 'I lead full‑stack web projects, defining architecture, code standards, security (auth, RBAC, OWASP) and CI/CD.',
    'exp.zixbe2.title': 'Jr. Development Analyst II — Zixbe',
    'exp.zixbe2.period': 'Mar 2025 — Sep 2025 · 7 months',
    'exp.zixbe2.desc': 'Full‑time. Communication, Microsoft Office and 21+ skills.',
    'exp.zixbe1.title': 'Jr. Development Analyst I — Zixbe',
    'exp.zixbe1.period': 'Feb 2024 — Mar 2025 · 1 yr 2 mo',
    'exp.zixbe1.desc': 'Remote. GitHub, HTML and 10+ skills.',
    'exp.sicoob.title': 'User Support — Sicoob Credicitrus (Internship)',
    'exp.sicoob.period': 'Mar 2023 — Feb 2024 · 1 year',
    'exp.sicoob.desc': 'Bebedouro, São Paulo, Brazil · On‑site. Communication and Microsoft Office.',
    'exp.linx.title': 'Support Analyst — Linx',
    'exp.linx.period': 'Nov 2022 — Mar 2023 · 5 months',
    'exp.linx.desc': 'Bebedouro, São Paulo, Brazil. Communication.',
    'exp.reis.title': 'Infrastructure and Support — Reis Advogados (Internship)',
    'exp.reis.period': 'May 2022 — Nov 2022 · 7 months',
    'exp.reis.desc': 'Bebedouro, São Paulo, Brazil. Communication.',
    'exp.pref.title': 'IT Support — Bebedouro City Hall (Internship)',
    'exp.pref.period': 'Dec 2021 — May 2022 · 6 months',
    'exp.pref.desc': 'São Paulo, Brazil. Communication.',
    'edu.ifsp.title': 'Postgraduate (Lato Sensu) — IFSP',
    'edu.ifsp.period': 'Jul 2025 — Dec 2026',
    'edu.ifsp.course': 'Web Systems Development for Internet and Mobile Devices.',
    'edu.ifsp.skills': 'Git, Databases and 14+ skills',
    'edu.unif.title': 'Bachelor — UNIFAFIBE',
    'edu.unif.period': 'Jan 2021 — Dec 2024',
    'edu.unif.course': 'Information Systems.',
    'edu.cna.title': 'English (Intermediate) — CNA',
    'edu.cna.period': 'Completed',
    'edu.cna.course': 'English course — intermediate level.',
    'hero.roles': ['Full‑stack Developer', 'JavaScript Specialist', 'BPMs Experience', 'UI/UX Enthusiast']
  }
};

const btnLang = document.getElementById('btnLang');
const flagBR = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16" width="20" height="14" aria-hidden="true">
    <rect width="24" height="16" fill="#009B3A"/>
    <polygon points="12,2 22,8 12,14 2,8" fill="#FFDF00"/>
    <circle cx="12" cy="8" r="4" fill="#002776"/>
  </svg>`;
const flagUS = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16" width="20" height="14" aria-hidden="true">
    <rect width="24" height="16" fill="#B22234"/>
    <g fill="#fff">
      <rect y="2" width="24" height="1"/><rect y="4" width="24" height="1"/><rect y="6" width="24" height="1"/>
      <rect y="8" width="24" height="1"/><rect y="10" width="24" height="1"/><rect y="12" width="24" height="1"/>
    </g>
    <rect width="10" height="7" fill="#3C3B6E"/>
  </svg>`;
const getLangIconSVG = (lang) => lang === 'pt' ? flagBR : flagUS;
function renderLangButton(lang){
  if (!btnLang) return;
  const label = lang.toUpperCase();
  btnLang.innerHTML = `${getLangIconSVG(lang)} <span>${label}</span>`;
  btnLang.setAttribute('aria-label', lang === 'pt' ? 'Selecionar idioma: Português' : 'Select language: English');
}
const i18nElements = () => document.querySelectorAll('[data-i18n]');
function applyTranslations(lang){
  i18nElements().forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = translations[lang]?.[key];
    if (typeof val === 'string') el.textContent = val;
  });
  document.documentElement.setAttribute('lang', lang === 'pt' ? 'pt-br' : 'en');
  renderLangButton(lang);
  // update typing roles
  roles = translations[lang]['hero.roles'].slice();
  roleIdx = 0; i = 0; deleting = false; typeEl.setAttribute('aria-label', roles[0]);
}

const savedLang = localStorage.getItem('lang') || 'pt';
renderLangButton(savedLang);
btnLang?.addEventListener('click', () => {
  const next = (localStorage.getItem('lang') || 'pt') === 'pt' ? 'en' : 'pt';
  localStorage.setItem('lang', next);
  applyTranslations(next);
});

// --- Efeito de digitação acessível ---
const typeEl = document.getElementById('typeTarget');
let roles = translations[savedLang]['hero.roles'].slice();
let roleIdx = 0; let i = 0; let deleting = false; let typing;

function typeLoop(){
  const text = roles[roleIdx];
  const current = typeEl.textContent || '';
  if (!deleting) {
    typeEl.textContent = text.slice(0, i++);
    if (i > text.length) { deleting = true; setTimeout(typeLoop, 1200); return; }
  } else {
    typeEl.textContent = text.slice(0, i--);
    if (i < 0) { deleting = false; roleIdx = (roleIdx + 1) % roles.length; i = 0; }
  }
  clearTimeout(typing);
  typing = setTimeout(typeLoop, deleting ? 45 : 70);
}
// Inicializa com rótulo para leitores de tela e i18n
applyTranslations(savedLang);
typeEl.setAttribute('aria-label', roles[0]);
typeLoop();

// Avatar animação/tilt
const avatar = document.getElementById('avatar');
const avatarFrame = document.getElementById('avatarFrame');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
  avatar?.style.setProperty('animation', 'none');
}

avatarFrame?.addEventListener('mousemove', (e) => {
  const rect = avatarFrame.getBoundingClientRect();
  const relX = (e.clientX - rect.left) / rect.width;
  const relY = (e.clientY - rect.top) / rect.height;

  avatarFrame.style.setProperty('--mx', `${relX * 100}%`);
  avatarFrame.style.setProperty('--my', `${relY * 100}%`);

  const tiltX = (0.5 - relY) * 10; // graus
  const tiltY = (relX - 0.5) * 10; // graus
  avatar.style.transform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.06)`;
});

avatarFrame?.addEventListener('mouseleave', () => {
  avatar.style.transform = '';
  avatarFrame.style.removeProperty('--mx');
  avatarFrame.style.removeProperty('--my');
});

// Ano corrente
document.getElementById('year').textContent = new Date().getFullYear();

// Copiar e-mail para área de transferência
const copyEmailBtn = document.getElementById('btnCopyEmail');
copyEmailBtn?.addEventListener('click', (e) => {
  e.preventDefault();
  const emailToCopy = 'joaovitorr0508@gmail.com';
  navigator.clipboard?.writeText(emailToCopy).then(() => {
    const original = copyEmailBtn.textContent;
    copyEmailBtn.textContent = 'Copiado!';
    setTimeout(() => { copyEmailBtn.textContent = original || 'Copiar e-mail'; }, 1500);
  }).catch(() => {
    // Fallback básico
    const textarea = document.createElement('textarea');
    textarea.value = emailToCopy;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    const original = copyEmailBtn.textContent;
    copyEmailBtn.textContent = 'Copiado!';
    setTimeout(() => { copyEmailBtn.textContent = original || 'Copiar e-mail'; }, 1500);
  });
});

// Back to top behavior
const btnTop = document.getElementById('btnTop');
const toggleTopBtn = () => {
  const show = window.scrollY > 300;
  btnTop?.classList.toggle('opacity-0', !show);
  btnTop?.classList.toggle('pointer-events-none', !show);
};
window.addEventListener('scroll', toggleTopBtn, { passive: true });
toggleTopBtn();
btnTop?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


