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
    description: 'Data-Lead Africa stands at the forefront of data consulting and training in the region. The goal of this project was to translate their complex technical expertise into an accessible, user-friendly digital experience. The new design focuses on establishing authority while ensuring intuitive navigation for businesses seeking consultancy and individuals seeking training.',
    gallery: [
      '/datalead-africa/screen_2.svg',
      '/datalead-africa/screen_3.svg',
      '/datalead-africa/screen_4.svg',
      '/datalead-africa/screen_5.svg',
      '/datalead-africa/screen_6.svg',
      '/datalead-africa/screen_7.svg'
    ]
  },
  '3ter-organic-farm': {
    banner: '/3ter/screen_2.jpg',
    cardImage: '/3ter/screen_1.svg',
    role: 'Brand Identity and Web Design',
    year: '2025',
    client: '3ter Organic Farm',
    description: '3ter Organic Farm is a sustainable agriculture initiative focused on bringing fresh, organic produce directly to consumers. The digital platform was designed to showcase their farming practices, connect with the community, and facilitate direct-to-consumer sales through an intuitive and earthy interface. As a poultry farm specializing in both chicken and turkey, the challenge was to create a cohesive mark that represented both birds while maintaining a clean, modern, and professional aesthetic suitable for packaging and uniforms.',
  }
}
