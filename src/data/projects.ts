export const projects: Record<string, {
  banner: string;
  cardImage: string;
  role: string;
  year: string;
  client: string;
  description: string;
  gallery?: string[];
}> = {
  'datalead-africa': {
    banner: '/datalead-africa/screen.jpg',
    cardImage: '/datalead-africa/screen_1.svg',
    role: 'Strategy and Website Design',
    year: '2025',
    client: 'DataLead Africa',
    description: 'Research and consulting firm providing world-class data analytics and strategic consulting services.',
    gallery: [
      '/datalead-africa/screen_2.svg',
      '/datalead-africa/screen_1.svg',
      '/datalead-africa/screen_3.svg',
      '/datalead-africa/screen_4.svg',
      '/datalead-africa/screen_5.svg',
      '/datalead-africa/screen_7.svg',
      '/datalead-africa/screen_6.svg'
    ]
  },
  '3ter-organic-farm': {
    banner: '/3ter/project_banner.jpg',
    cardImage: '/3ter/project_card.jpg',
    role: 'Brand Identity Design',
    year: '2025',
    client: '3ter Organic Farm',
    description: 'A poultry farm specializing in the rearing and production of chickens and turkeys for fresh, high-quality meat.',
    gallery: [
      '/3ter/screen_2.jpg',
      '/3ter/screen_1.jpg',
      '/3ter/screen_3.jpg',
      '/3ter/screen_4.jpg',
      '/3ter/screen_5.jpg',
      '/3ter/screen_7.jpg',
      '/3ter/screen_6.jpg'
    ]
  },
  'outpost': {
    banner: '/poster.jpg',
    cardImage: '/outpost/project_card.jpg',
    role: 'Brand Identity and Web Design',
    year: '2025',
    client: 'Outpost',
    description: 'Coming Soon',
  },
  'nexusflow': {
    banner: '/poster.jpg',
    cardImage: '/nexusflow/projects_card.jpg',
    role: 'Product Design',
    year: '2025',
    client: 'Nexusflow',
    description: 'Coming Soon',
  }
}
