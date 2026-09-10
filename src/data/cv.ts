/** Contenido del CV. La portada se genera a partir de aquí. */

export const contact = {
  email: 'carlos@carlosferreras.com',
  linkedin: 'https://www.linkedin.com/in/carlos-ferreras/',
  github: 'https://github.com/cferreras',
};

export interface Job {
  date: string;
  title: string;
  where: string;
  description: string;
  tags: string[];
  current?: boolean;
}

export const experience: Job[] = [
  {
    current: true,
    date: '2022 — Actualidad',
    title: 'Desarrollo en proyectos propios',
    where: 'Oviedo · por mi cuenta',
    description:
      'Después de TeamEQ he seguido programando por mi cuenta: webs para servidores de Minecraft y para un creador de contenido de TFT, bots de Discord, plugins en Java y, desde 2025, OpinaCraft. Todo con usuarios reales, así que también me ha tocado desplegar, hacer copias de seguridad y arreglar lo que se rompe.',
    tags: ['TypeScript', 'React', 'Next.js', 'Astro', 'Java', 'PostgreSQL', 'Docker'],
  },
  {
    date: 'Julio 2021 — Enero 2022',
    title: 'Frontend Developer',
    where: 'TeamEQ · Gijón',
    description:
      'Desarrollé componentes con Nuxt.js y Tailwind CSS siguiendo Atomic Design, para ordenar la interfaz y no duplicar código. Construí una biblioteca de más de 20 componentes reutilizables que mantenía la interfaz consistente en todo el producto.',
    tags: ['Nuxt.js', 'Vue', 'Tailwind CSS', 'Atomic Design'],
  },
];

export interface Project {
  meta: string;
  title: string;
  description: string;
  tags: string[];
  /** Web del proyecto, si sigue en línea. */
  site?: { url: string; label: string };
  code?: string;
}

export const projects: Project[] = [
  {
    meta: '2025 — Actualidad',
    title: 'OpinaCraft',
    description:
      'Directorio de servidores de Minecraft en español. Puedes compararlos por estado en tiempo real, ping y modalidad, y leer opiniones de gente que ya juega en ellos. Lo hago yo solo, de la base de datos a la interfaz, incluidos los procesos que comprueban si cada servidor está en línea.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Drizzle', 'Docker'],
    site: { url: 'https://opinacraft.com', label: 'opinacraft.com' },
    code: 'https://github.com/cferreras/opinacraft',
  },
  {
    meta: '2026 — Actualidad',
    title: 'Ferreras SMP',
    description:
      'La web del servidor de Minecraft que llevo: una comunidad pequeña, técnica y sin Pay2Win. Ahora estoy haciendo el panel privado con el que gestiono las solicitudes y los miembros.',
    tags: ['Astro', 'TypeScript'],
    site: { url: 'https://mc.ferreras.dev', label: 'mc.ferreras.dev' },
    code: 'https://github.com/cferreras/ferreras-smp',
  },
  {
    meta: '2025 · Para AKAWonder',
    title: 'AKACompos',
    description:
      'Web para AKAWonder, jugador profesional y creador de contenido de Teamfight Tactics, donde publicaba sus composiciones para cada parche. Él gestionaba el contenido desde Strapi sin tocar código. El proyecto se paró cuando dejó de actualizarlo.',
    tags: ['Astro', 'React', 'Tailwind CSS', 'Strapi'],
    code: 'https://github.com/cferreras/akacompos',
  },
];

export const moreProjects = [
  {
    title: 'TFT Aggregator',
    description: 'Buscador de composiciones de TFT que junta varias fuentes, en español e inglés.',
    url: 'https://github.com/cferreras/tft-aggregator',
  },
  {
    title: 'Mapa de webcams de Asturias',
    description: 'Mapa con enlaces a las webcams públicas de Asturias, con buscador y favoritos.',
    url: 'https://github.com/cferreras/mapa-webcams-asturias',
  },
  {
    title: 'Tweet Card Studio',
    description: 'Crea imágenes con forma de tweet y descárgalas en PNG.',
    url: 'https://github.com/cferreras/tweet-card-studio',
  },
];

export const education = [
  {
    year: '2020',
    title: 'Técnico Superior en Desarrollo de Aplicaciones Web',
    school: 'AFA Formación Continua · Oviedo',
  },
  {
    year: '2019',
    title: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma',
    school: 'IES Doctor Fleming · Oviedo',
  },
];

export const skills = {
  main: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'Astro', 'Tailwind CSS', 'PostgreSQL'],
  also: [
    'Nuxt',
    'Angular',
    'Java',
    'Bash',
    'Supabase',
    'Convex',
    'MongoDB',
    'Docker',
    'Kubernetes',
    'NGINX',
    'Caddy',
    'Dokploy',
    'GitHub Actions',
    'GitLab CI',
  ],
};
