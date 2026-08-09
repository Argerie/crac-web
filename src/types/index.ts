export interface Animal {
  id: string;
  name: string;
  species: string;
  rescueDate: string;
  status: 'rehabilitating' | 'ready-to-release' | 'permanent-resident';
  story: string;
  imageUrl: string;
}

export interface TeamGroup {
  id: string;
  name: string;
  role: string;
  photoUrl: string;
  memberCount: number;
}

export interface Testimonial {
  id: string;
  name: string;
  country: string;
  quote: string;
  photoUrl: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
