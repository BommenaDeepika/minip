import { Question } from '../types';

const questionTemplates = {
  mathematics: [
    'Which mathematical concept interests you the most?',
    'How do you approach solving complex math problems?',
    'What type of mathematical applications excite you?',
    'How comfortable are you with advanced mathematics?'
  ],
  science: [
    'Which science subject do you enjoy studying?',
    'How do you feel about laboratory experiments?',
    'What scientific theory fascinates you the most?',
    'How do you approach scientific problem-solving?'
  ],
  languages: [
    'How do you approach learning new languages?',
    'What aspects of literature interest you?',
    'How do you express yourself in writing?',
    'What type of reading material do you prefer?'
  ],
  social_studies: [
    'Which historical period interests you most?',
    'How do you view social changes in society?',
    'What aspects of geography fascinate you?',
    'How do you analyze social issues?'
  ],
  computer_science: [
    'How do you feel about learning programming?',
    'What interests you about technology?',
    'How do you approach logical problem-solving?',
    'What aspect of computers fascinates you?'
  ]
};

const optionTemplates = {
  mathematics: [
    ['Algebra and Functions', 'Geometry and Shapes', 'Statistics and Probability', 'Calculus and Analysis'],
    ['Step-by-step approach', 'Visual representation', 'Formula-based solving', 'Conceptual understanding'],
    ['Pure Mathematics', 'Applied Mathematics', 'Mathematical Modeling', 'Statistical Analysis']
  ],
  science: [
    ['Physics and Energy', 'Chemistry and Reactions', 'Biology and Life', 'Environmental Science'],
    ['Theoretical Study', 'Practical Experiments', 'Research Projects', 'Field Studies'],
    ['Modern Physics', 'Organic Chemistry', 'Molecular Biology', 'Earth Science']
  ],
  languages: [
    ['Creative Writing', 'Literature Analysis', 'Grammar and Structure', 'Communication Skills'],
    ['Classical Literature', 'Modern Writing', 'Poetry and Verse', 'Technical Writing'],
    ['Reading Comprehension', 'Writing Expression', 'Verbal Communication', 'Language Structure']
  ],
  social_studies: [
    ['Ancient History', 'Modern Politics', 'Cultural Studies', 'Economic Systems'],
    ['Social Analysis', 'Historical Research', 'Geographic Studies', 'Civic Engagement'],
    ['World History', 'Current Affairs', 'Social Sciences', 'Political Systems']
  ],
  computer_science: [
    ['Programming', 'Web Development', 'Data Analysis', 'Cybersecurity'],
    ['Problem Solving', 'Creative Design', 'Technical Analysis', 'System Architecture'],
    ['Software Development', 'Network Systems', 'Database Management', 'AI and Machine Learning']
  ]
};

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function generateQuestions(): Question[] {
  const categories = Object.keys(questionTemplates);
  const questions: Question[] = [];

  // Generate 2 questions from each category
  categories.forEach(category => {
    const categoryQuestions = (questionTemplates as any)[category];
    const categoryOptions = (optionTemplates as any)[category];
    
    const shuffledQuestions = shuffleArray(categoryQuestions);
    const shuffledOptions = shuffleArray(categoryOptions);

    for (let i = 0; i < 2; i++) {
      if (shuffledQuestions[i] && shuffledOptions[i]) {
        questions.push({
          id: questions.length + 1,
          text: shuffledQuestions[i],
          options: shuffleArray(shuffledOptions[i]),
          correctAnswer: 0
        });
      }
    }
  });

  return shuffleArray(questions).slice(0, 10);
}