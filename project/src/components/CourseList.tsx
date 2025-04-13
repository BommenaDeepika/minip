import React from 'react';
import { Course } from '../types';
import { ExternalLink } from 'lucide-react';

interface CourseListProps {
  courses: Course[];
  recommendedCategory: string;
  onSelectCourse: (course: Course) => void;
}

export function CourseList({ courses, recommendedCategory, onSelectCourse }: CourseListProps) {
  const recommendedCourses = courses.filter(course => course.category === recommendedCategory);
  const otherCourses = courses.filter(course => course.category !== recommendedCategory);

  return (
    <div className="max-w-4xl w-full">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Recommended Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recommendedCourses.map(course => (
            <div
              key={course.id}
              className="bg-white p-6 rounded-lg shadow-md border-2 border-blue-500"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.name}</h3>
              <p className="text-gray-600 mb-4">Category: {course.category}</p>
              <div className="mb-4">
                <h4 className="font-medium text-gray-700 mb-2">Subjects:</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {course.subjects.map(subject => (
                    <li key={subject.id}>{subject.name}</li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => onSelectCourse(course)}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <span>Explore Online Courses</span>
                <ExternalLink className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Other Available Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {otherCourses.map(course => (
            <div
              key={course.id}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.name}</h3>
              <p className="text-gray-600 mb-4">Category: {course.category}</p>
              <div className="mb-4">
                <h4 className="font-medium text-gray-700 mb-2">Subjects:</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {course.subjects.map(subject => (
                    <li key={subject.id}>{subject.name}</li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => onSelectCourse(course)}
                className="w-full border border-blue-600 text-blue-600 py-2 px-4 rounded-md hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
              >
                <span>Explore Online Courses</span>
                <ExternalLink className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}