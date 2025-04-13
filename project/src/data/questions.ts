import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    text: 'Which activity do you enjoy the most?',
    options: [
      'Solving mathematical problems',
      'Creating artistic works',
      'Helping others with health issues',
      'Working with computers'
    ],
    correctAnswer: 0 // This will be used to calculate aptitude for different fields
  },
  {
    id: 2,
    text: 'How do you prefer to learn new things?',
    options: [
      'Through practical experiments',
      'Through visual demonstrations',
      'Through reading and research',
      'Through hands-on experience'
    ],
    correctAnswer: 0
  },
  {
    id: 3,
    text: 'What type of work environment do you prefer?',
    options: [
      'Laboratory or research facility',
      'Creative studio',
      'Hospital or healthcare setting',
      'Office or technical environment'
    ],
    correctAnswer: 0
  },
  {
    id: 4,
    text: 'Which subject interests you the most?',
    options: [
      'Science and Mathematics',
      'Arts and Design',
      'Biology and Health Sciences',
      'Computer Science and Technology'
    ],
    correctAnswer: 0
  },
  {
    id: 5,
    text: 'How do you approach problem-solving?',
    options: [
      'Analytical and systematic',
      'Creative and intuitive',
      'Caring and empathetic',
      'Logical and technical'
    ],
    correctAnswer: 0
  },
  {
    id: 6,
    text: 'What kind of projects excite you?',
    options: [
      'Scientific experiments',
      'Artistic creations',
      'Healthcare initiatives',
      'Technical innovations'
    ],
    correctAnswer: 0
  },
  {
    id: 7,
    text: 'How do you prefer to work?',
    options: [
      'Independently on complex problems',
      'Collaboratively in creative teams',
      'Directly with people helping them',
      'With technical tools and equipment'
    ],
    correctAnswer: 0
  },
  {
    id: 8,
    text: 'What skills would you like to develop?',
    options: [
      'Scientific research and analysis',
      'Creative design and expression',
      'Patient care and medical knowledge',
      'Technical and programming skills'
    ],
    correctAnswer: 0
  },
  {
    id: 9,
    text: 'What kind of impact would you like to make?',
    options: [
      'Advancing scientific knowledge',
      'Inspiring through art and design',
      'Improving healthcare and wellness',
      'Developing technological solutions'
    ],
    correctAnswer: 0
  },
  {
    id: 10,
    text: 'Where do you see yourself in 5 years?',
    options: [
      'Working in a research facility',
      'Running a creative studio',
      'Working in healthcare',
      'Leading technical projects'
    ],
    correctAnswer: 0
  }
];