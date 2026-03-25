export const content = {
  en: {
    nav: {
      about: 'About',
      stack: 'Stack',
      projects: 'Projects',
      education: 'Education',
      blog: 'Blog',
      contact: 'Contact',
    },
    hero: {
      tag: 'San José, Costa Rica · Open to remote work worldwide',
      title1: 'Full Stack Developer',
      title2: 'I ship production systems',
      desc: "I design, build, and deploy full-stack systems that run in production — REST APIs, cloud infrastructure, Docker deployments, and complete web applications. Currently the sole developer leading a full ERP build at Tubertico. Finishing my Software Engineering degree at Universidad Latina de Costa Rica in 2026.",
      cta1: 'View Projects',
      cta2: 'Download CV',
    },
    about: {
      label: 'About',
      title: 'Who I am',
      p1: "I'm Cristian Quirós — Full Stack Developer based in San José, Costa Rica. At Tubertico I own the entire tech stack: I built and shipped the company website (tubertico.com) solo, from architecture to production on DigitalOcean, and I'm currently leading the development of a full internal ERP system covering inventory, purchasing, and reporting.",
      p2: "My stack: Java, Spring Boot, React 19, TypeScript, Express, PostgreSQL, Docker. I write raw SQL, design relational schemas, build REST APIs, manage Linux servers, and configure CI/CD pipelines — all independently. Final year of Software Engineering at Universidad Latina de Costa Rica. <span style='color:#6AB42D'>Actively looking for remote junior to mid-level Full Stack or Backend roles anywhere in the world.</span>",
    },
    stack: {
      label: 'Stack',
      title: 'Technologies',
      backend: 'Backend',
      frontend: 'Frontend',
      infra: 'Database & Infrastructure',
      tools: 'Tools',
    },
    projects: {
      label: 'Projects',
      title: 'Featured work',
      live: 'Live',
      wip: 'In progress',
      items: [
        {
          title: 'tubertico.com',
          status: 'live',
          desc: 'Full company website — built, deployed and maintained in production. Handles the official web presence of Tubertico with server-side rendering.',
          tags: ['Java', 'Spring Boot', 'Thymeleaf', 'MySQL', 'Docker', 'DigitalOcean'],
          link: 'https://tubertico.com',
        },
        {
          title: 'Tubertico ERP',
          status: 'wip',
          desc: 'Internal ERP system with inventory management, purchase orders, and reporting modules. Full stack monorepo with feature branch workflow.',
          tags: ['React 19', 'TypeScript', 'Express', 'PostgreSQL', 'Tailwind', 'Vite'],
          link: null,
        },
      ],
    },
    blog: {
      label: 'Blog',
      title: 'Thoughts & notes',
      subtitle: 'I write about things I build, learn, and find interesting in tech.',
      empty: "No posts yet — coming soon.",
      items: [
        {
          date: 'Coming soon',
          title: 'Building a production ERP with React 19 and Express',
          desc: 'What I learned deploying a full stack monorepo from scratch — architecture decisions, SQL without ORM, and React 19 concurrent mode in practice.',
          tags: ['React', 'TypeScript', 'Architecture'],
        },
        {
          date: 'Coming soon',
          title: 'Docker + DigitalOcean: deploying a Spring Boot app end to end',
          desc: 'A practical walkthrough of containerizing a Java web app and deploying it to a VPS — from Dockerfile to domain pointing.',
          tags: ['Java', 'Docker', 'DevOps'],
        },
      ],
    },
    contact: {
      label: 'Contact',
      title: 'Get in touch',
      desc: "I'm open to work — junior roles, internships, freelance, or just a chat about tech. Reach out anytime.",
    },
  },
  es: {
    nav: {
      about: 'Sobre mí',
      stack: 'Stack',
      projects: 'Proyectos',
      education: 'Educación',
      blog: 'Blog',
      contact: 'Contacto',
    },
    hero: {
      tag: 'San José, Costa Rica · Disponible para trabajo remoto en cualquier parte del mundo',
      title1: 'Desarrollador Full Stack',
      title2: 'Construyo sistemas en producción',
      desc: "Diseño, construyo y despliego sistemas completos que corren en producción — APIs REST, infraestructura cloud, despliegues con Docker y aplicaciones web de punta a punta. Actualmente soy el único desarrollador liderando la construcción de un ERP completo en Tubertico. Terminando Ingeniería del Software en la Universidad Latina de Costa Rica en 2026.",
      cta1: 'Ver Proyectos',
      cta2: 'Descargar CV',
    },
    about: {
      label: 'Sobre mí',
      title: 'Quién soy',
      p1: "Soy Cristian Quirós — Desarrollador Full Stack en San José, Costa Rica. En Tubertico soy dueño del stack tecnológico completo: construí y desplegué el sitio oficial de la empresa (tubertico.com) solo, desde la arquitectura hasta producción en DigitalOcean, y actualmente lidero el desarrollo de un ERP interno completo con módulos de inventario, compras y reportes.",
      p2: "Mi stack: Java, Spring Boot, React 19, TypeScript, Express, PostgreSQL, Docker. Escribo SQL directo, diseño esquemas relacionales, construyo APIs REST, administro servidores Linux y configuro pipelines de CI/CD — todo de forma independiente. Último año de Ingeniería del Software en la Universidad Latina de Costa Rica. <span style='color:#6AB42D'>En búsqueda activa de roles remotos junior o mid-level como Desarrollador Full Stack o Backend en cualquier parte del mundo.</span>",
    },
    stack: {
      label: 'Stack',
      title: 'Tecnologías',
      backend: 'Backend',
      frontend: 'Frontend',
      infra: 'Base de datos e Infraestructura',
      tools: 'Herramientas',
    },
    projects: {
      label: 'Proyectos',
      title: 'Trabajo destacado',
      live: 'En producción',
      wip: 'En progreso',
      items: [
        {
          title: 'tubertico.com',
          status: 'live',
          desc: 'Sitio web completo de la empresa — construido, desplegado y mantenido en producción. Maneja la presencia web oficial de Tubertico con renderizado del lado del servidor.',
          tags: ['Java', 'Spring Boot', 'Thymeleaf', 'MySQL', 'Docker', 'DigitalOcean'],
          link: 'https://tubertico.com',
        },
        {
          title: 'Tubertico ERP',
          status: 'wip',
          desc: 'Sistema ERP interno con gestión de inventario, órdenes de compra y módulos de reportes. Monorepo full stack con flujo de feature branches.',
          tags: ['React 19', 'TypeScript', 'Express', 'PostgreSQL', 'Tailwind', 'Vite'],
          link: null,
        },
      ],
    },
    blog: {
      label: 'Blog',
      title: 'Notas y pensamientos',
      subtitle: 'Escribo sobre cosas que construyo, aprendo y encuentro interesantes en tecnología.',
      empty: 'Aún no hay posts — próximamente.',
      items: [
        {
          date: 'Próximamente',
          title: 'Construyendo un ERP en producción con React 19 y Express',
          desc: 'Lo que aprendí desplegando un monorepo full stack desde cero — decisiones de arquitectura, SQL sin ORM y concurrent mode de React 19 en la práctica.',
          tags: ['React', 'TypeScript', 'Arquitectura'],
        },
        {
          date: 'Próximamente',
          title: 'Docker + DigitalOcean: desplegando una app Spring Boot de punta a punta',
          desc: 'Una guía práctica para contenerizar una app Java y desplegarla en un VPS — desde el Dockerfile hasta apuntar el dominio.',
          tags: ['Java', 'Docker', 'DevOps'],
        },
      ],
    },
    contact: {
      label: 'Contacto',
      title: 'Hablemos',
      desc: "Estoy disponible para trabajar — roles junior, prácticas, freelance, o simplemente una charla sobre tecnología. Escribime cuando quieras.",
    },
  },
}

export const education = {
  en: {
    label: 'Education',
    title: 'Academic background',
    items: [
      {
        institution: 'Universidad Latina de Costa Rica',
        degree: "Bachelor's Degree in Software Engineering",
        location: 'San Pedro Campus, San José, CR',
        period: '2020 – 2026 (Expected)',
        status: 'Final year — graduating 2026',
        logo: '/logo_ulatina_.png',
      },
      {
        institution: 'Linux Professional Institute (LPI)',
        degree: 'Linux Essentials Certification',
        location: null,
        period: '2024',
        status: 'Certified',
        logo: '/lpi-linux-essentials.png',
      },
    ],
  },
  es: {
    label: 'Educación',
    title: 'Formación académica',
    items: [
      {
        institution: 'Universidad Latina de Costa Rica',
        degree: 'Licenciatura en Ingeniería del Software',
        location: 'Sede San Pedro, San José, CR',
        period: '2020 – 2026 (Esperado)',
        status: 'Último año — graduación 2026',
        logo: '/logo_ulatina_.png',
      },
      {
        institution: 'Linux Professional Institute (LPI)',
        degree: 'Certificación Linux Essentials',
        location: null,
        period: '2024',
        status: 'Certificado',
        logo: '/lpi-linux-essentials.png',
      },
    ],
  },
}

export const techStack = {
  backend: ['Java', 'Spring Boot', 'Node.js', 'Express'],
  frontend: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'Thymeleaf'],
  infra: ['PostgreSQL', 'MySQL', 'Docker', 'DigitalOcean'],
  tools: ['Git', 'GitHub', 'Workbench'],
}
