export const NAVIGATION_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS = [
  { name: 'GitHub', href: 'https://github.com', icon: 'Github' },
  { name: 'Facebook', href: 'https://www.facebook.com/kevin.caidic.33', icon: 'Facebook' },
  { name: 'Instagram', href: 'https://instagram.com', icon: 'Instagram' },
];

export const CV_LINK = '#'; // Placeholder for CV

export const SKILLS = [
  { name: 'React / Next.js', level: 95, category: 'Frontend', icon: 'Code2' },
  { name: 'TypeScript', level: 90, category: 'Frontend', icon: 'FileCode' },
  { name: 'Tailwind CSS', level: 98, category: 'Frontend', icon: 'Palette' },
  { name: 'Node.js', level: 85, category: 'Backend', icon: 'Server' },
  { name: 'PostgreSQL', level: 80, category: 'Backend', icon: 'Database' },
  { name: 'Framer Motion', level: 92, category: 'Animation', icon: 'Move' },
  { name: 'Three.js / WebGL', level: 75, category: 'Animation', icon: 'Box' },
  { name: 'UI/UX Design', level: 88, category: 'Design', icon: 'Layout' },
];

export const PROJECTS = [
  {
    title: 'PapayaFresh Web Dashboard',
    description: 'A comprehensive monitoring system for papaya quality control, featuring real-time ripeness analytics and inventory management.',
    image: '/Adminside Papayafresh.png',
    tags: ['React', 'Chart.js', 'Tailwind', 'Firebase'],
    github: '#',
    live: '#',
    category: 'Web App',
    type: 'web',
  },
  {
    title: 'Car Rental System',
    description: 'A premium car rental management dashboard featuring real-time vehicle tracking and booking management.',
    image: '/Car rental.png',
    tags: ['Next.js', 'TypeScript', 'Redux', 'Premium UI'],
    github: '#',
    live: '#',
    category: 'Web App',
    type: 'web',
  },
  {
    title: 'PWD Tulong System',
    description: 'A dedicated platform empowering persons with disabilities through accessible support and volunteer coordination.',
    image: '/PWD tulong.jpg',
    tags: ['Flutter', 'Firebase', 'Mobile', 'Social Impact'],
    github: '#',
    live: '#',
    category: 'Mobile App',
    type: 'mobile',
  },
  {
    title: 'PapayaFresh Mobile App',
    description: 'AI-powered mobile application designed to predict papaya shelf life using smart technology to reduce food waste.',
    image: '/PapayaFresh.jpg',
    tags: ['Flutter', 'Python', 'Firebase', 'Mobile'],
    github: '#',
    live: '#',
    category: 'Mobile App',
    type: 'mobile',
  },
];

export const EXPERIENCES = [
  {
    period: '2025 - PRESENT',
    role: 'Fourth Year IT Student',
    company: 'Modern Full Stack Development',
    description: 'Working with Node.js, React.js, Tailwind CSS, Vue.js, and TypeScript to create scalable and modern web applications.',
  },
  {
    period: '2024 - 2025',
    role: 'Third Year IT Student',
    company: 'Mobile & Python Development',
    description: 'Focused on Python programming and Flutter development to build interactive and cross-platform applications.',
  },
  {
    period: '2023 - 2024',
    role: 'Second Year IT Student',
    company: 'Web Development Journey',
    description: 'Explored backend development using PHP and MySQL while creating database-driven web applications.',
  },
  {
    period: '2022 - 2023',
    role: 'First Year IT Student',
    company: 'Programming Foundations',
    description: 'Started my journey in Information Technology by learning Java programming, problem-solving, and basic application development.',
  },
];

export const CERTIFICATES = [
  {
    title: 'Advanced Seminar Day 1: Journey from Science Practitioner to IT Specialist',
    issuer: 'Davao del Norte State College',
    date: 'Oct 2025',
    image: '/cert1.jpeg',
  },
  {
    title: 'Advanced Seminar Day 2: The Power of Color in Graphic Design',
    issuer: 'Davao del Norte State College',
    date: 'Nov 2025',
    image: '/cert2.jpeg',
  },
  {
    title: 'Getting Started with Cisco Packet Tracer',
    issuer: 'Cisco Networking Academy',
    date: 'Feb 2024',
    image: '/cert3.jpg',
  },
  {
    title: 'Introduction to Packet Tracer',
    issuer: 'Cisco Networking Academy',
    date: 'Feb 2024',
    image: '/cert4.jpg',
  },
];
