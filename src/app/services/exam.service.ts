import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  constructor() { }

  getPreviousCourses() {
    return [
      {
        batchYear: 'Fall 2022' ,
        gradePoints: 60.34 ,
        CGPA: 3.77 ,
        SGPA: 3.77,
        totalCreditHours: 16 ,
        subjectCreditHours: 16 ,
        courses: [
          { courseName: 'Introduction to Psychology' , courseCreditHours: 3 , courseGradePoints: 9.99 , courseFinalGrade: 'B+' },
          { courseName: 'Basic Electronics' , courseCreditHours: 3 , courseGradePoints: 12 , courseFinalGrade: 'A' },
          { courseName: 'Introduction to Computing' , courseCreditHours: 3 , courseGradePoints: 12 , courseFinalGrade: 'A' },
          { courseName: 'Pakistan Studies' , courseCreditHours: 2 , courseGradePoints: 7.34 , courseFinalGrade: 'A-' },
          { courseName: 'Introduction to Computing - Lab' , courseCreditHours: 1 , courseGradePoints: 4 , courseFinalGrade: 'A' },
          { courseName: 'Fundamentals of Entrepreneurship' , courseCreditHours: 1 , courseGradePoints: 4 , courseFinalGrade: 'A' },
          { courseName: 'English I' , courseCreditHours: 3 , courseGradePoints: 11.01 , courseFinalGrade: 'A-' },
        ]
      },
      {
        batchYear: 'Fall 2023' ,
        gradePoints: 61.69 ,
        CGPA: 3.81 ,
        SGPA: 3.86 ,
        totalCreditHours: 32 ,
        subjectCreditHours: 16 ,
        courses: [
          { courseName: 'Calculus and Analytical Geometry' , courseCreditHours: 3 , courseGradePoints: 12 , courseFinalGrade: 'A' },
          { courseName: 'Programming Fundamentals - Lab' , courseCreditHours: 1 , courseGradePoints: 3.67 , courseFinalGrade: 'A-' },
          { courseName: 'Software Engineering' , courseCreditHours: 3 , courseGradePoints: 11.01 , courseFinalGrade: 'A-' },
          { courseName: 'English – II' , courseCreditHours: 3 , courseGradePoints: 12 , courseFinalGrade: 'A' },
          { courseName: 'Discrete Structures' , courseCreditHours: 3 , courseGradePoints: 12 , courseFinalGrade: 'A' },
          { courseName: 'Programming Fundamentals' , courseCreditHours: 3 , courseGradePoints: 11.01 , courseFinalGrade: 'A-' },
        ]
      },
    ]
  }
}
