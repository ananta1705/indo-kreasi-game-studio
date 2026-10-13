export interface GameItem {
  id: string;
  title: string;
  subtitle: string;
  genre: string;
  status: 'Released' | 'In Development' | 'Alpha' | 'Beta' | 'Upcoming';
  rarity: 'Legendary' | 'Epic' | 'Rare';
  rating: number;
  releaseDate: string;
  platforms: string[];
  shortDesc: string;
  fullDesc: string;
  accentColor: string;
  coverImage: string;
  trailerUrl?: string;
  features: string[];
  specs: {
    minimum: { os: string; cpu: string; ram: string; gpu: string; storage: string };
    recommended: { os: string; cpu: string; ram: string; gpu: string; storage: string };
  };
  screenshots: string[];
  stats: { metric: string; value: string }[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  rpgClass: 'Cyber Alchemist' | 'Loremaster' | 'Engine Wizard' | 'Pixel Artisan' | 'Sound Sculptor';
  level: number;
  stats: {
    str: number; // Execution Power
    int: number; // Technical Architecture
    cre: number; // Artistic Creativity
  };
  quote: string;
  lore: string;
  avatarSvg: string;
  socials: { github?: string; twitter?: string; linkedin?: string; artstation?: string };
}

export interface QuestJob {
  id: string;
  title: string;
  department: 'Game Engineering' | 'Game Art & 3D' | 'Lore & Narrative' | 'Audio & Music' | 'Product & Ops';
  difficulty: 'EASY' | 'HARD' | 'LEGENDARY';
  location: 'Jakarta Studio (Hybrid)' | 'Remote (Southeast Asia)' | 'Bali Lab';
  type: 'Full-time' | 'Contract';
  xpReward: number;
  perks: string[];
  description: string;
  requirements: string[];
}

export interface BlogArticle {
  id: string;
  title: string;
  category: 'Tech Breakdown' | 'Culture & Lore' | 'Dev Diary' | 'Sound Design';
  readTime: string;
  date: string;
  author: string;
  summary: string;
  content: string;
  codeSnippet?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  gameReferenced: string;
  score: string;
}
