import React, { useState } from 'react';
import { Student, Course } from './types';
import { StudentForm } from './components/StudentForm';
import { Assessment } from './components/Assessment';
import { CourseList } from './components/CourseList';
import { generateQuestions } from './utils/questionGenerator';
import { courses } from './data/courses';
import { GraduationCap } from 'lucide-react';

function App() {
  const [student, setStudent] = useState<Student | null>(null);
  const [showAssessment, setShowAssessment] = useState(false);
  const [assessmentComplete, setAssessmentComplete] = useState(false);
  const [recommendedCategory, setRecommendedCategory] = useState<string>('');
  const [questions, setQuestions] = useState<any[]>([]);

  const handleStudentSubmit = (studentData: Student) => {
    setStudent(studentData);
    setQuestions(generateQuestions());
  };

  const handleStartAssessment = () => {
    setShowAssessment(true);
  };

  const handleAssessmentComplete = (category: string) => {
    setRecommendedCategory(category);
    setAssessmentComplete(true);
  };

  const handleCourseSelect = (course: Course) => {
    const courseLinks: { [key: string]: string[] } = {
      intermediate: [
        'https://www.khanacademy.org/math',
        'https://byjus.com/class-11-12/',
        'https://www.vedantu.com/class-11-12'
      ],
      diploma: [
        'https://swayam.gov.in/diploma',
        'https://onlinecourses.nptel.ac.in',
        'https://www.aicte-india.org/education/vocational-education'
      ],
      arts: [
        'https://www.skillshare.com/browse/fine-art',
        'https://www.studentartguide.com',
        'https://www.artstation.com/learning'
      ],
      iti: [
        'https://bharatskills.gov.in',
        'https://www.ncs.gov.in/training-courses',
        'https://dgt.gov.in/cts_details'
      ],
      designing: [
        'https://www.behance.net/galleries',
        'https://www.interaction-design.org',
        'https://www.domestika.org/en/design'
      ],
      medical: [
        'https://www.neet.nta.nic.in',
        'https://www.medicaldirectory.in/education',
        'https://www.mohfw.gov.in/medical-education'
      ]
    };

    const links = courseLinks[course.category] || [];
    links.forEach(link => window.open(link, '_blank'));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Student Career Assessment</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          {!student && (
            <StudentForm onSubmit={handleStudentSubmit} />
          )}

          {student && !showAssessment && !assessmentComplete && (
            <div className="max-w-2xl w-full bg-white rounded-lg shadow-md p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome, {student.name}!</h2>
              <p className="text-gray-600 mb-6">
                We've prepared a personalized assessment based on high school subjects to help guide you towards the best career path.
                The assessment consists of 10 questions and will take approximately 15 minutes to complete.
              </p>
              <button
                onClick={handleStartAssessment}
                className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors text-lg font-semibold"
              >
                Start Assessment
              </button>
            </div>
          )}

          {showAssessment && !assessmentComplete && (
            <>
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Career Assessment</h2>
                <p className="text-gray-600">Answer these questions to help us recommend the best courses for you.</p>
              </div>
              <Assessment
                questions={questions}
                onComplete={handleAssessmentComplete}
              />
            </>
          )}

          {assessmentComplete && (
            <>
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Course Recommendations</h2>
                <p className="text-gray-600">Based on your assessment, here are some courses that match your interests and aptitude.</p>
              </div>
              <CourseList
                courses={courses}
                recommendedCategory={recommendedCategory}
                onSelectCourse={handleCourseSelect}
              />
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;