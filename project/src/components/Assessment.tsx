import React, { useState } from 'react';
import { Question } from '../types';
import { analyzeResponses } from '../utils/assessmentScoring';

interface AssessmentProps {
  questions: Question[];
  onComplete: (category: string) => void;
}

export function Assessment({ questions, onComplete }: AssessmentProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers, optionIndex];
    if (newAnswers.length === questions.length) {
      const recommendedCategory = analyzeResponses(questions, newAnswers);
      onComplete(recommendedCategory);
    } else {
      setAnswers(newAnswers);
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="max-w-2xl w-full bg-white rounded-lg shadow-md p-8">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Assessment</h2>
          <span className="text-gray-600">
            Question {currentQuestion + 1} of {questions.length}
          </span>
        </div>
        <div className="h-2 bg-gray-200 rounded">
          <div
            className="h-full bg-blue-600 rounded transition-all duration-300 ease-in-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      <div className="mb-8">
        <h3 className="text-xl font-medium text-gray-800 mb-4">{question.text}</h3>
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              className="w-full text-left p-4 rounded-md border border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-colors"
              onClick={() => handleAnswer(index)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}