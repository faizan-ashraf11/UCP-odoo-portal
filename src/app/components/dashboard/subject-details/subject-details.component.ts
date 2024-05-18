import { NzIconModule } from 'ng-zorro-antd/icon';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SubjectTeacherService } from '../../../services/subject-teacher.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-subject-details',
  standalone: true,
  imports: [NzIconModule , RouterModule , FormsModule , CommonModule , NzTableModule],
  templateUrl: './subject-details.component.html',
  styleUrl: './subject-details.component.scss'
})
export class SubjectDetailsComponent implements OnInit{

  teacherId: any = '';
  subjectId: any = '';
  subjectName: any = '';
  tabs : any[] = [
    {tabName: 'Announcement' , tab : 1},
    {tabName: 'Course Outline' , tab : 2},
    {tabName: 'Course Material' , tab : 3},
    {tabName: 'Assessments' , tab : 4},
    {tabName: 'Submission' , tab : 5},
    {tabName: 'Grade Book' , tab : 6},
    {tabName: 'Attendance' , tab : 7},
  ]
  selectedTab: any = 1;
  announcementData: any[] = [
    {subjectName: 'On Leave' , date: new Date() , description: 'None'}
  ];
  courseMaterialData: any[] = [
    {fileName: 'Link List Paractice' , fileDescription: 'None' , fileLink: 'None'}
  ];
  courseOutline: any = {
    requirement: `Prerequisites:  Reasonable programming skills with proven track in ITC, PF and OOP courses`,
    objective: ['Understand the properties of various data structures.' , 'Identify the strengths and weaknesses of different data structures.' , 'Design and employ appropriate data structures for solving computing problems' , 'Possess the knowledge of various existing algorithms.' , 'Analyze and compare the efficiency of algorithms.'],
    methodology: 'Interactive Lecturing',
    learningOutcome: ['Describe the characteristics and use cases of various data structures.' , 'Examine the time and space complexity of different data structures and algorithms.' , ' Implement a range of data structures and algorithms. '],
    textBooks: [ {bookTitle: 'Data Structures and Algorithms' , bookAuthor: 'D. S. Malik' , bookEdition: '5th' , bookPublisher: 'Text Publishers' , bookYear: '2021' , bookDescription: 'None'}],
    refBooks: [ {bookTitle: 'Data Structures and Algorithms' , bookAuthor: 'D. S. Malik' , bookEdition: '5th' , bookPublisher: 'Text Publishers' , bookYear: '2021' , bookDescription: 'None'}],
    assessmentEvaluation: [
      {title: 'Assignments' , value: '15'},
      {title: 'Quiz' , value: '10'},
      {title: 'Mid Term' , value: '20'},
      {title: 'Class Participation' , value: '10'},
      {title: 'Final Term' , value: '45'},
    ],
    calendarActivities: [
      {
        weekContents: `Introduction to the Course (Course Outline and RoadMap)
        Real Applications of Data Structures
        Time and Space Complexity Introduction` ,
        weekActivity: ''
      },
      {
        weekContents: `Time and Space Complexity Analysis
        How to calculate time complexity of given algorithm
        Abstract Data Types, Template Classes` ,
        weekActivity: ''
      },
      {
        weekContents: `Introduction to Arrays as an ADT
        List ADT` ,
        weekActivity: ''
      },
      {
        weekContents: `Linked Lists : Singly linked lists
        Doubly linked lists
        (Code  + Analysis and its applications)` ,
        weekActivity: 'Assignment 1 & Quiz 1'
      },
      {
        weekContents: `Circular lists
        Code  + Analysis and its applications
        Discuss Joseph Problem
        Skip Lists` ,
        weekActivity: ''
      },
      {
        weekContents: `Recursion: what, why and where we use recursions, how to implement-two parts of a recursive function. Factorial, Fibonacci, reverse a number and its logic and memory model and stack trace.
        Back track Link lists using recursion` ,
        weekActivity: ''
      },
      {
        weekContents: `Introduction to Stack ADT
        Applications of Stack e.g., Polish notations, Arithmetic Expression evaluation
        Queues ADT – circular and non-circular implementation` ,
        weekActivity: 'Assignment 2 & Quiz 2'
      },
      {
        weekContents: `Revision` ,
        weekActivity: ''
      },
      {
        weekContents: `Trees: Tree Data Structure Definition and Basic terminologies and its types
        Binary Tree and types
        Full/ proper/ strict Binary tree
        Complete Binary tree
        Perfect Binary tree
        Degenerate Binary tree
        Balanced Binary tree` ,
        weekActivity: ''
      },
      {
        weekContents: `Tree Traversal, Expression trees
        InOrder, PreOrder, PostOrder Traversals
        Binary Search Trees | Insertion, Searching` ,
        weekActivity: ''
      },
      {
        weekContents: `Binary Search Trees | Deletion and Sorting
        Balance factor of tree
        Skewed binary tree
        Left skewed binary tree
        Right skewed binary tree
        Time complexity analysis` ,
        weekActivity: 'Assignment 3 & Quiz 3	'
      },
      {
        weekContents: `Self-balanced binary search trees
        AVL Tree
        How to calculate balance factor
        Introduction to rotations
        AVL Insertion
        Iterative implementation
        Recursive implementation` ,
        weekActivity: ''
      },
      {
        weekContents: `AVL deletion and updating record
        HashTable/HashMap
        Key-value pair
        Hash function
        Collision and Chaining` ,
        weekActivity: ''
      },
      {
        weekContents: `Heaps: Heap Data Structure, Max and Min Heaps
        Priority Queues and Heap Sort
        Huffman Encoding/Decoding` ,
        weekActivity: 'Assignment 4 & Quiz 4	'
      },
      {
        weekContents: `Graphs: Definition and its types and examples
        Storage Mechanism
        MST (Minimum Spanning Tree)
        Dijkstra Alghorithm` ,
        weekActivity: ''
      },
      {
        weekContents: `Revision` ,
        weekActivity: ''
      },
    ],
  }
  columns: any = {
    announcementColumn: [
      {label: 'Sr.' , variable: 'Sr.' , width: '50px',class:'text-center'},
      {label: 'Subject' , variable: 'subjectName' },
      {label: 'Date' , variable: 'date' ,class:'text-center'},
      {label: 'Description' , variable: 'description' },
      {label: 'Attachment' , variable: 'attachmentFile' , width:'100px' , class:'text-center'},
    ],
    recommendedColumns: [
      {label: 'Sr.' , variable: 'Sr.' , width: '50px',class:'text-center'},
      {label: 'Title' , variable: 'bookTitle' },
      {label: 'Author' , variable: 'bookAuthor'},
      {label: 'Edition' , variable: 'bookEdition' },
      {label: 'Publisher' , variable: 'bookPublisher' },
      {label: 'Year' , variable: 'bookYear' },
      {label: 'Description' , variable: 'bookDescription' },
    ],
    activitiesColumn: [
      {label: 'Week No.' , variable: 'Week No.' , width: '100px',class:'text-center'},
      {label: 'Week Contents' , variable: 'weekContents' },
      {label: 'Activity' , variable: 'weekActivity' , width: '200px' ,class:'text-center'},
    ],
    courseMaterialColumn: [
      {label: 'Sr.' , variable: 'Sr.' , width: '50px',class:'text-center'},
      {label: 'File Name' , variable: 'fileName' , width: '200px' , class: 'font-semibold' },
      {label: 'Description' , variable: 'fileDescription'},
      {label: 'Download' , variable: 'fileLink' , width: '100px' , class: 'text-center' },
    ],
    assessmentColumn: [
      {label: 'Sr.' , variable: 'Sr.' , width: '50px',class:'text-center'},
      {label: 'Assessment Name' , variable: 'assessmentName' , width: '200px' , class: 'font-semibold' },
      {label: 'Description' , variable: 'assessmentDescription'},
      {label: 'Date' , variable: 'assessmentDate' , width: '150px'},
      {label: 'Due Date' , variable: 'dueDate' , width: '150px'},
      {label: 'Upload' , variable: 'uploadLink' , width: '80px' , class: 'text-center' },
      {label: 'Attachments' , variable: 'downloadLink' , width: '100px' , class: 'text-center' },
    ]
  };
  assessmentData: any[] = [
    { assessmentName: 'CP-01' , assessmentDescription: 'None' , assessmentDate: new Date() , dueDate: new Date() , uploadLink: 'None' , downloadLink: 'None' }
  ];
  constructor(
    private activatedRoute: ActivatedRoute,
    private subjectTeacherService: SubjectTeacherService
  ){
    this.activatedRoute.params.subscribe(param=>{
      if(param['subjectId']){
        this.subjectId = param['subjectId'];
      }
      if(param['teacherId']){
        this.teacherId = param['teacherId'];
      }
    })
  }
  ngOnInit(): void {
    this.subjectName = this.subjectTeacherService.getSubjectsDetail().filter((r : any)=> r.subjectId == this.subjectId)[0].name;
  }
}
