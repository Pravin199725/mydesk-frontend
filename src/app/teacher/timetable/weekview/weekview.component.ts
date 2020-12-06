import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weekview',
  templateUrl: './weekview.component.html',
  styleUrls: ['./weekview.component.scss']
})
export class WeekviewComponent implements OnInit {

  timeTable = {
    columns: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    data: [
      {
        time: '8:30AM-9:30AM',
        recess:false,
        data: [{
          day: 'Monday',
          subject: 'Maths',
          teacherName: `Teachers's Name`,
          recess: 'false'
        },
        {
          day: 'Tuesday',
          subject: 'Maths',
          teacherName: `Teachers's Name`,
          recess: 'false'
        },
        {
          day: 'Wednesday',
          subject: 'Maths',
          teacherName: `Teachers's Name`,
          recess: 'false'
        },
        {
          day: 'Thursday',
          subject: 'Maths',
          teacherName: `Teachers's Name`,
          recess: 'false'
        },
        {
          day: 'Friday',
          subject: 'Maths',
          teacherName: `Teachers's Name`,
          recess: 'false'
        }]
      },
      {
        time: '9:30AM-10:30AM',
        recess:false,
        data: [{
          day: 'Monday',
          subject: 'Maths',
          teacherName: `Teachers's Name`,
          recess: 'false'
        },
        {
          day: 'Tuesday',
          subject: 'Maths',
          teacherName: `Teachers's Name`,
          recess: 'false'
        },
        {
          day: 'Wednesday',
          subject: 'Maths',
          teacherName: `Teachers's Name`,
          recess: 'false'
        },
        {
          day: 'Thursday',
          subject: 'Maths',
          teacherName: `Teachers's Name`,
          recess: 'false'
        },
        {
          day: 'Friday',
          subject: 'Maths',
          teacherName: `Teachers's Name`,
          recess: 'false'
        }]
      },
      {
        time: '10:30AM-11:30AM',
        recess:false,
        data: [{
          day: 'Monday',
          subject: 'Maths',
          teacherName: `Teachers's Name`,
          recess: 'false'
        },
        {
          day: 'Tuesday',
          subject: 'Maths',
          teacherName: `Teachers's Name`,
          recess: 'false'
        },
        {
          day: 'Wednesday',
          subject: 'Maths',
          teacherName: `Teachers's Name`,
          recess: 'false'
        },
        {
          day: 'Thursday',
          subject: 'Maths',
          teacherName: `Teachers's Name`,
          recess: 'false'
        },
        {
          day: 'Friday',
          subject: 'Maths',
          teacherName: `Teachers's Name`,
          recess: 'false'
        }]
      },
      {
        time: '11:30AM-12:30AM',
        recess:false,
        data: [{
          day: 'Monday',
          subject: 'Maths',
          teacherName: `Teachers's Name`,
          recess: 'false'
        },
        {
          day: 'Tuesday',
          subject: 'Maths',
          teacherName: `Teachers's Name`,
          recess: 'false'
        },
        {
          day: 'Wednesday',
          subject: 'Maths',
          teacherName: `Teachers's Name`,
          recess: 'false'
        },
        {
          day: 'Thursday',
          subject: 'Maths',
          teacherName: `Teachers's Name`,
          recess: 'false'
        },
        {
          day: 'Friday',
          subject: 'Maths',
          teacherName: `Teachers's Name`,
          recess: 'false'
        }]
      },
      {
        time: '12:30AM-1:30AM',
        recess: true,
        data: []
      },
      {
        time: '1:30AM-2:30AM',
        recess:false,
        data: [{
          day: 'Monday',
          subject: 'Maths',
          teacherName: `Teachers's Name`,
          recess: 'false'
        },
        {
          day: 'Tuesday',
          subject: 'Maths',
          teacherName: `Teachers's Name`,
          recess: 'false'
        },
        {
          day: 'Wednesday',
          subject: 'Maths',
          teacherName: `Teachers's Name`,
          recess: 'false'
        },
        {
          day: 'Thursday',
          subject: 'Maths',
          teacherName: `Teachers's Name`,
          recess: 'false'
        },
        {
          day: 'Friday',
          subject: 'Maths',
          teacherName: `Teachers's Name`,
          recess: 'false'
        }]
      },
      {
        time: '2:30AM-3:30AM',
        recess:false,
        data: [{
          day: 'Monday',
          subject: 'Maths',
          teacherName: `Teachers's Name`,
          recess: 'false'
        },
        {
          day: 'Tuesday',
          subject: 'Maths',
          teacherName: `Teachers's Name`,
          recess: 'false'
        },
        {
          day: 'Wednesday',
          subject: 'Maths',
          teacherName: `Teachers's Name`,
          recess: 'false'
        },
        {
          day: 'Thursday',
          subject: 'Maths',
          teacherName: `Teachers's Name`,
          recess: 'false'
        },
        {
          day: 'Friday',
          subject: 'Maths',
          teacherName: `Teachers's Name`,
          recess: 'false'
        }]
      },
      {
        time: '3:30AM-4:30AM',
        recess:false,data: [{
          day: 'Monday',
          subject: 'Maths',
          teacherName: `Teachers's Name`,
          recess: 'false'
        },
        {
          day: 'Tuesday',
          subject: 'Maths',
          teacherName: `Teachers's Name`,
          recess: 'false'
        },
        {
          day: 'Wednesday',
          subject: 'Maths',
          teacherName: `Teachers's Name`,
          recess: 'false'
        },
        {
          day: 'Thursday',
          subject: 'Maths',
          teacherName: `Teachers's Name`,
          recess: 'false'
        },
        {
          day: 'Friday',
          subject: 'Maths',
          teacherName: `Teachers's Name`,
          recess: 'false'
        }]     }
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
