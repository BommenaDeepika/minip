import { Question } from '../types';

export interface CategoryScore {
  category: string;
  score: number;
}

const categoryMapping = {
  mathematics: ['intermediate', 'diploma'],
  science: ['intermediate', 'medical'],
  computer_science: ['diploma', 'designing'],
  languages: ['arts', 'intermediate'],
  social_studies: ['arts', 'iti']
};

const optionWeights = {
  mathematics: {
    'Algebra and Functions': ['diploma', 'intermediate'],
    'Geometry and Shapes': ['designing', 'intermediate'],
    'Statistics and Probability': ['medical', 'diploma'],
    'Calculus and Analysis': ['intermediate', 'medical'],
    'Step-by-step approach': ['diploma', 'iti'],
    'Visual representation': ['designing', 'arts'],
    'Formula-based solving': ['intermediate', 'medical'],
    'Conceptual understanding': ['diploma', 'intermediate'],
    'Pure Mathematics': ['intermediate', 'diploma'],
    'Applied Mathematics': ['medical', 'diploma'],
    'Mathematical Modeling': ['diploma', 'designing'],
    'Statistical Analysis': ['medical', 'diploma']
  },
  science: {
    'Physics and Energy': ['intermediate', 'iti'],
    'Chemistry and Reactions': ['medical', 'intermediate'],
    'Biology and Life': ['medical', 'intermediate'],
    'Environmental Science': ['intermediate', 'iti'],
    'Theoretical Study': ['intermediate', 'diploma'],
    'Practical Experiments': ['medical', 'iti'],
    'Research Projects': ['medical', 'diploma'],
    'Field Studies': ['iti', 'intermediate'],
    'Modern Physics': ['intermediate', 'diploma'],
    'Organic Chemistry': ['medical', 'intermediate'],
    'Molecular Biology': ['medical', 'intermediate'],
    'Earth Science': ['intermediate', 'iti']
  },
  computer_science: {
    'Programming': ['diploma', 'designing'],
    'Web Development': ['designing', 'diploma'],
    'Data Analysis': ['diploma', 'medical'],
    'Cybersecurity': ['diploma', 'intermediate'],
    'Problem Solving': ['diploma', 'intermediate'],
    'Creative Design': ['designing', 'arts'],
    'Technical Analysis': ['diploma', 'intermediate'],
    'System Architecture': ['diploma', 'iti'],
    'Software Development': ['diploma', 'designing'],
    'Network Systems': ['diploma', 'iti'],
    'Database Management': ['diploma', 'intermediate'],
    'AI and Machine Learning': ['diploma', 'designing']
  },
  languages: {
    'Creative Writing': ['arts', 'designing'],
    'Literature Analysis': ['arts', 'intermediate'],
    'Grammar and Structure': ['intermediate', 'diploma'],
    'Communication Skills': ['arts', 'designing'],
    'Classical Literature': ['arts', 'intermediate'],
    'Modern Writing': ['arts', 'designing'],
    'Poetry and Verse': ['arts', 'designing'],
    'Technical Writing': ['diploma', 'intermediate'],
    'Reading Comprehension': ['intermediate', 'arts'],
    'Writing Expression': ['arts', 'designing'],
    'Verbal Communication': ['arts', 'designing'],
    'Language Structure': ['intermediate', 'diploma']
  },
  social_studies: {
    'Ancient History': ['arts', 'intermediate'],
    'Modern Politics': ['arts', 'intermediate'],
    'Cultural Studies': ['arts', 'designing'],
    'Economic Systems': ['intermediate', 'diploma'],
    'Social Analysis': ['arts', 'intermediate'],
    'Historical Research': ['arts', 'intermediate'],
    'Geographic Studies': ['intermediate', 'iti'],
    'Civic Engagement': ['arts', 'iti'],
    'World History': ['arts', 'intermediate'],
    'Current Affairs': ['arts', 'intermediate'],
    'Social Sciences': ['arts', 'intermediate'],
    'Political Systems': ['arts', 'intermediate']
  }
};

export function analyzeResponses(questions: Question[], answers: number[]): string {
  const categoryScores: { [key: string]: number } = {
    intermediate: 0,
    diploma: 0,
    arts: 0,
    iti: 0,
    designing: 0,
    medical: 0
  };

  questions.forEach((question, index) => {
    const selectedOption = question.options[answers[index]];
    const category = Object.keys(questionTemplates).find(cat => 
      questionTemplates[cat as keyof typeof questionTemplates].includes(question.text)
    );

    if (category && optionWeights[category as keyof typeof optionWeights][selectedOption]) {
      const recommendedCategories = optionWeights[category as keyof typeof optionWeights][selectedOption];
      recommendedCategories.forEach((cat, idx) => {
        categoryScores[cat] += idx === 0 ? 2 : 1; // Primary choice gets 2 points, secondary gets 1
      });
    }
  });

  // Find the category with the highest score
  const sortedCategories = Object.entries(categoryScores)
    .sort(([, a], [, b]) => b - a);

  return sortedCategories[0][0];
}