export interface Student {
  name: string;
  email: string;
  phone: string;
  grade: string;
  dob: string;
}

export interface Course {
  id: string;
  name: string;
  category: string;
  subjects: Subject[];
}

export interface Subject {
  id: string;
  name: string;
  description: string;
}

export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
}