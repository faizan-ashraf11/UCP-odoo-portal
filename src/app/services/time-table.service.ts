import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeTableService {

  constructor() { }

  getTimeTable(){
    return [
        {startTime: 8 , endTime: 9 , period: 'AM' , color: '#bfdbfe' , border: '#2563eb' , child : [
          { day: 'Monday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
          { day: 'Tuesday' , isClass: true , subject: 'Data Structures and Algorithms - Lab' , roomNo: 'CL - 203' , teacher: 'Lalaen Sultan' },
          { day: 'Wednesday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
          { day: 'Thursday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
          { day: 'Friday' , isClass: true , subject: 'English III' , roomNo: 'C-307 ' , teacher: 'Nadia Urooj' },
          { day: 'Saturday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
          { day: 'Sunday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
        ]},
        {startTime: 9 , endTime: 10 , period: 'AM' , color: '#bfdbfe' , border: '#2563eb' , child : [
          { day: 'Monday' , isClass: true , subject: 'Web Engineering' , roomNo: 'IT401 ' , teacher: 'Aasma Abdul Waheed' },
          { day: 'Tuesday' , isClass: true , subject: 'Data Structures and Algorithms - Lab' , roomNo: 'CL - 203' , teacher: 'Lalaen Sultan' },
          { day: 'Wednesday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
          { day: 'Thursday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
          { day: 'Friday' , isClass: true , subject: 'English III' , roomNo: 'C-307 ' , teacher: 'Nadia Urooj' },
          { day: 'Saturday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
          { day: 'Sunday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
        ]},
        {startTime: 10 , endTime: 11 , period: 'AM' , color: '#bfdbfe' , border: '#2563eb' , child : [
          { day: 'Monday' , isClass: true , subject: 'Web Engineering' , roomNo: 'IT401 ' , teacher: 'Aasma Abdul Waheed' },
          { day: 'Tuesday' , isClass: true , subject: 'Data Structures and Algorithms - Lab' , roomNo: 'CL - 203' , teacher: 'Lalaen Sultan' },
          { day: 'Wednesday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
          { day: 'Thursday' , isClass: true , subject: 'Probability and Statistics' , roomNo: 'C-311 ' , teacher: 'Aurooj Butt' },
          { day: 'Friday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
          { day: 'Saturday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
          { day: 'Sunday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
        ]},
        {startTime: 11 , endTime: 12 , period: 'AM' , color: '#bfdbfe' , border: '#2563eb' , child : [
          { day: 'Monday' , isClass: true , subject: 'Probability and Statistics' , roomNo: 'C-311 ' , teacher: 'Aurooj Butt' },
          { day: 'Tuesday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
          { day: 'Wednesday' , isClass: true , subject: 'Data Structures and Algorithms' , roomNo: 'A-102 ' , teacher: 'Dr Nabeel Sabir Khan' },
          { day: 'Thursday' , isClass: true , subject: 'Web Engineering' , roomNo: 'CL203 ' , teacher: 'Aasma Abdul Waheed' },
          { day: 'Friday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
          { day: 'Saturday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
          { day: 'Sunday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
        ]},
        {startTime: 12 , endTime: 1 , period: 'AM' , color: '#d9f99d' , border: '#65a30d' , child : [
          { day: 'Monday' , isClass: true , subject: 'Probability and Statistics' , roomNo: 'C-311 ' , teacher: 'Aurooj Butt' },
          { day: 'Tuesday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
          { day: 'Wednesday' , isClass: true , subject: 'Data Structures and Algorithms' , roomNo: 'A-102 ' , teacher: 'Dr Nabeel Sabir Khan' },
          { day: 'Thursday' , isClass: true , subject: 'English III' , roomNo: 'C-310 ' , teacher: 'Nadia Urooj' },
          { day: 'Friday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
          { day: 'Saturday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
          { day: 'Sunday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
        ]},
        {startTime: 1 , endTime: 2 , period: 'PM' , color: '#d9f99d' , border: '#65a30d' , child : [
          { day: 'Monday' , isClass: true , subject: 'Data Structures and Algorithms' , roomNo: 'A-114 ' , teacher: 'Dr Nabeel Sabir Khan' },
          { day: 'Tuesday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
          { day: 'Wednesday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
          { day: 'Thursday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
          { day: 'Friday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
          { day: 'Saturday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
          { day: 'Sunday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
        ]},
        {startTime: 2 , endTime: 3 , period: 'PM' , color: '#d9f99d' , border: '#65a30d' , child : [
          { day: 'Monday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
          { day: 'Tuesday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
          { day: 'Wednesday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
          { day: 'Thursday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
          { day: 'Friday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
          { day: 'Saturday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
          { day: 'Sunday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
        ]},
        {startTime: 3 , endTime: 4 , period: 'PM' , color: '#d9f99d' , border: '#65a30d' , child : [
          { day: 'Monday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
          { day: 'Tuesday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
          { day: 'Wednesday' , isClass: true , subject: 'Software Requirement Engineering' , roomNo: 'C-311 ' , teacher: 'Saira Latif' },
          { day: 'Thursday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
          { day: 'Friday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
          { day: 'Saturday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
          { day: 'Sunday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
        ]},
        {startTime: 4 , endTime: 5 , period: 'PM' , color: '#d9f99d' , border: '#65a30d' , child : [
          { day: 'Monday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
          { day: 'Tuesday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
          { day: 'Wednesday' , isClass: true , subject: 'Software Requirement Engineering' , roomNo: 'C-311 ' , teacher: 'Saira Latif' },
          { day: 'Thursday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
          { day: 'Friday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
          { day: 'Saturday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
          { day: 'Sunday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
        ]},
        {startTime: 5 , endTime: 6 , period: 'PM' , color: '#e9d5ff' , border: '#7e22ce' , child : [
          { day: 'Monday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
          { day: 'Tuesday' , isClass: true , subject: 'Software Requirement Engineering' , roomNo: 'C-301 ' , teacher: 'Saira Latif' },
          { day: 'Wednesday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
          { day: 'Thursday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
          { day: 'Friday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
          { day: 'Saturday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
          { day: 'Sunday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
        ]},
        {startTime: 6 , endTime: 7 , period: 'PM' , color: '#e9d5ff' , border: '#7e22ce' , child : [
          { day: 'Monday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
          { day: 'Tuesday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
          { day: 'Wednesday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
          { day: 'Thursday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
          { day: 'Friday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
          { day: 'Saturday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
          { day: 'Sunday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
        ]},
        {startTime: 7 , endTime: 8 , period: 'PM' , color: '#e9d5ff' , border: '#7e22ce' , child : [
          { day: 'Monday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
          { day: 'Tuesday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
          { day: 'Wednesday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
          { day: 'Thursday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
          { day: 'Friday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
          { day: 'Saturday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
          { day: 'Sunday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
        ]},
        {startTime: 8 , endTime: 9 , period: 'PM' , color: '#e9d5ff' , border: '#7e22ce' , child : [
          { day: 'Monday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
          { day: 'Tuesday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
          { day: 'Wednesday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
          { day: 'Thursday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
          { day: 'Friday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
          { day: 'Saturday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
          { day: 'Sunday' , isClass: false , subject: '' , roomNo: '' , teacher: '' },
        ]},
    ];
  }
}
