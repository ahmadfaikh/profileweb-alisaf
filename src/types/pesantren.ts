export interface EducationUnit {
  id: string;
  name: string;
  arabicName: string;
  category: 'formal' | 'diniyah' | 'tahfizh' | 'bahasa';
  level: string;
  description: string;
  curriculum: string[];
  features: string[];
  headmaster: string;
  accreditation?: string;
  iconName: string;
}

export interface SantriSchedule {
  time: string;
  activity: string;
  arabicTitle: string;
  description: string;
  category: 'ibadah' | 'diniyah' | 'formal' | 'istirahat' | 'kemandirian';
  location: string;
}

export interface Facility {
  id: string;
  name: string;
  category: 'ibadah' | 'asrama' | 'akademik' | 'penunjang';
  description: string;
  features: string[];
  image: string;
  capacity?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: 'Warta Pesantren' | 'Prestasi' | 'Tausiyah' | 'Agenda';
  excerpt: string;
  author: string;
  readTime: string;
  image: string;
}

export interface Achievement {
  id: string;
  year: string;
  title: string;
  level: 'Kabupaten' | 'Provinsi' | 'Nasional' | 'Internasional';
  organizer: string;
  winner: string;
  badgeColor: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'psb' | 'keseharian' | 'biaya' | 'akademik';
}

export interface RegistrationFormData {
  fullName: string;
  gender: 'L' | 'P';
  nik: string;
  birthPlace: string;
  birthDate: string;
  parentName: string;
  parentPhone: string;
  address: string;
  city: string;
  previousSchool: string;
  chosenProgram: string;
  needsDormitory: boolean;
  notes?: string;
}

export interface Educator {
  id: string;
  name: string;
  arabicTitle?: string;
  role: string;
  category: 'masyayikh' | 'diniyah' | 'tahfizh' | 'formal' | 'asatidzah';
  expertise: string[]; // bidang keahlian
  photo: string;
  education: string;
  bio: string; // biografi singkat
  experienceYears?: number;
  taughtSubjects?: string[]; // kitab atau mata pelajaran yang diampu
}

export interface MediaItem {
  id: string;
  type: 'photo' | 'video';
  title: string;
  category: 'kegiatan' | 'fasilitas' | 'acara';
  categoryLabel: string;
  thumbnail: string;
  videoEmbedUrl?: string; // url embed YouTube/video
  date?: string;
  duration?: string;
  description: string;
}

