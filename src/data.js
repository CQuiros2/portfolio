export const content = {
  en: {
    nav: {
      about: 'About',
      stack: 'Stack',
      projects: 'Projects',
      blog: 'Blog',
      contact: 'Contact',
    },
    hero: {
      tag: '🇨🇷 San José, Costa Rica · Available for work · Remote worldwide',
      title1: 'Full Stack',
      title2: 'Developer',
      desc: "Software Engineering student in my final year at Universidad Latina de Costa Rica. I build and deploy real production systems — from backend APIs to full web applications.",
      cta1: 'View Projects',
      cta2: 'Download CV',
    },
    about: {
      label: 'About',
      title: 'Who I am',
      p1: "I'm Cristian Quirós, a Software Engineering student at Universidad Latina de Costa Rica (San Pedro). I serve as IT Lead & Web Developer at Tubertico, where I own the full technology stack — from infrastructure and deployment to web development.",
      p2: "I build end-to-end: database design, REST APIs, containerized deployments. Currently expanding into TypeScript, modern React patterns, and system design. <mark>Actively looking for junior roles, internships, and remote opportunities worldwide.</mark>",
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
      blog: 'Blog',
      contact: 'Contacto',
    },
    hero: {
      tag: '🇨🇷 San José, Costa Rica · Disponible para trabajar · Remoto a cualquier parte del mundo',
      title1: 'Desarrollador',
      title2: 'Full Stack',
      desc: "Estudiante de Ingeniería del Software en mi último año en la Universidad Latina de Costa Rica. Construyo y despliego sistemas reales en producción — desde APIs backend hasta aplicaciones web completas.",
      cta1: 'Ver Proyectos',
      cta2: 'Descargar CV',
    },
    about: {
      label: 'Sobre mí',
      title: 'Quién soy',
      p1: "Soy Cristian Quirós, estudiante de Ingeniería del Software en la Universidad Latina de Costa Rica (Sede San Pedro). Me desempeño como IT Lead & Web Developer en Tubertico, donde soy dueño del stack tecnológico completo — desde la infraestructura y el despliegue hasta el desarrollo web.",
      p2: "Construyo de punta a punta: diseño de base de datos, APIs REST, despliegues con Docker. Actualmente ampliando mis habilidades en TypeScript, React moderno y diseño de sistemas. <mark>En búsqueda activa de roles junior, prácticas y trabajo remoto en cualquier parte del mundo.</mark>",
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

export const techStack = {
  backend: ['Java', 'Spring Boot', 'Node.js', 'Express'],
  frontend: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'Thymeleaf'],
  infra: ['PostgreSQL', 'MySQL', 'Docker', 'DigitalOcean'],
  tools: ['Git', 'GitHub', 'Workbench'],
}
