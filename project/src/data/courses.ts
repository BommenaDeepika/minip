import { Course } from '../types';

export const courses: Course[] = [
  {
    id: '1',
    name: 'Intermediate Science',
    category: 'intermediate',
    subjects: [
      { id: '1-1', name: 'Physics', description: 'Study of matter and energy' },
      { id: '1-2', name: 'Chemistry', description: 'Study of substances and their interactions' },
      { id: '1-3', name: 'Biology', description: 'Study of living organisms' },
    ],
  },
  {
    id: '2',
    name: 'Diploma in Computer Science',
    category: 'diploma',
    subjects: [
      { id: '2-1', name: 'Programming', description: 'Fundamentals of coding' },
      { id: '2-2', name: 'Database Management', description: 'Data organization and retrieval' },
      { id: '2-3', name: 'Networking', description: 'Computer network fundamentals' },
    ],
  },
  {
    id: '3',
    name: 'Fine Arts',
    category: 'arts',
    subjects: [
      { id: '3-1', name: 'Drawing', description: 'Fundamentals of sketching and drawing' },
      { id: '3-2', name: 'Painting', description: 'Color theory and painting techniques' },
      { id: '3-3', name: 'Art History', description: 'Study of art through ages' },
    ],
  },
  {
    id: '4',
    name: 'ITI Electrical',
    category: 'iti',
    subjects: [
      { id: '4-1', name: 'Basic Electricity', description: 'Fundamentals of electricity' },
      { id: '4-2', name: 'Circuit Theory', description: 'Electrical circuit analysis' },
      { id: '4-3', name: 'Power Systems', description: 'Power generation and distribution' },
    ],
  },
  {
    id: '5',
    name: 'UI/UX Design',
    category: 'designing',
    subjects: [
      { id: '5-1', name: 'User Interface Design', description: 'Visual design principles' },
      { id: '5-2', name: 'User Experience', description: 'Creating optimal user experiences' },
      { id: '5-3', name: 'Prototyping', description: 'Creating interactive prototypes' },
    ],
  },
  {
    id: '6',
    name: 'Medical Laboratory Technology',
    category: 'medical',
    subjects: [
      { id: '6-1', name: 'Clinical Chemistry', description: 'Analysis of body fluids' },
      { id: '6-2', name: 'Microbiology', description: 'Study of microorganisms' },
      { id: '6-3', name: 'Hematology', description: 'Study of blood and blood diseases' },
    ],
  },
];