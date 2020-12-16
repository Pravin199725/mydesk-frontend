import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dayview',
  templateUrl: './dayview.component.html',
  styleUrls: ['./dayview.component.scss']
})
export class DayviewComponent implements OnInit {


  timeTable = [ 
    {
      day:'Mon',
      today:'Monday',
      data: [
        {
          time : '8:30AM-9:30AM	',
          subject:'Maths',
          teacherName:`Teachers's Name`,
          recess : 'false'
        },
        {
          time : '8:30AM-9:30AM	',
          subject:'Maths',
          teacherName:`Teachers's Name`,
          recess : 'false'
        },
        {
          time : '8:30AM-9:30AM	',
          subject:'Maths',
          teacherName:`Teachers's Name`,
          recess : 'false'
        },
        {
          time : '8:30AM-9:30AM	',
          subject:'Maths',
          teacherName:`Teachers's Name`,
          recess : 'false'
        },
        {
          time : '8:30AM-9:30AM	',
          recess : 'true'
        },
        {
          time : '8:30AM-9:30AM	',
          subject:'Maths',
          teacherName:`Teachers's Name`,
          recess : 'false'
        },
        {
          time : '8:30AM-9:30AM	',
          subject:'Maths',
          teacherName:`Teachers's Name`,
          recess : 'false'
        }

      ],
    },
    {
      day:'Tue',
      today:'Tuesday',
      data: [
        {
          time : '8:30AM-9:30AM	',
          subject:'Maths',
          teacherName:`Teachers's Name`,
          recess : 'false'
        },
        {
          time : '8:30AM-9:30AM	',
          subject:'Maths',
          teacherName:`Teachers's Name`,
          recess : 'false'
        },
        {
          time : '8:30AM-9:30AM	',
          subject:'Maths',
          teacherName:`Teachers's Name`,
          recess : 'false'
        },
        {
          time : '8:30AM-9:30AM	',
          subject:'Maths',
          teacherName:`Teachers's Name`,
          recess : 'false'
        },
        {
          time : '8:30AM-9:30AM	',
          recess : 'true'
        },
        {
          time : '8:30AM-9:30AM	',
          subject:'Maths',
          teacherName:`Teachers's Name`,
          recess : 'false'
        },
        {
          time : '8:30AM-9:30AM	',
          subject:'Maths',
          teacherName:`Teachers's Name`,
          recess : 'false'
        }

      ],
    },
    {
      day:'Wed',
      today:'Wednesday',
      data: [
        {
          time : '8:30AM-9:30AM	',
          subject:'Maths',
          teacherName:`Teachers's Name`,
          recess : 'false'
        },
        {
          time : '8:30AM-9:30AM	',
          subject:'Maths',
          teacherName:`Teachers's Name`,
          recess : 'false'
        },
        {
          time : '8:30AM-9:30AM	',
          subject:'Maths',
          teacherName:`Teachers's Name`,
          recess : 'false'
        },
        {
          time : '8:30AM-9:30AM	',
          subject:'Maths',
          teacherName:`Teachers's Name`,
          recess : 'false'
        },
        {
          time : '8:30AM-9:30AM	',
          recess : 'true'
        },
        {
          time : '8:30AM-9:30AM	',
          subject:'Maths',
          teacherName:`Teachers's Name`,
          recess : 'false'
        },
        {
          time : '8:30AM-9:30AM	',
          subject:'Maths',
          teacherName:`Teachers's Name`,
          recess : 'false'
        }

      ],
    },
    {
      day:'Thu',
      today:'Thursday',
      data: [
        {
          
          time : '8:30AM-9:30AM	',
          subject:'Maths',
          teacherName:`Teachers's Name`,
          recess : 'false'
        },
        {
          time : '8:30AM-9:30AM	',
          subject:'Maths',
          teacherName:`Teachers's Name`,
          recess : 'false'
        },
        {
          time : '8:30AM-9:30AM	',
          subject:'Maths',
          teacherName:`Teachers's Name`,
          recess : 'false'
        },
        {
          time : '8:30AM-9:30AM	',
          subject:'Maths',
          teacherName:`Teachers's Name`,
          recess : 'false'
        },
        {
          time : '8:30AM-9:30AM	',
          recess : 'true'
        },
        {
          time : '8:30AM-9:30AM	',
          subject:'Maths',
          teacherName:`Teachers's Name`,
          recess : 'false'
        },
        {
          time : '8:30AM-9:30AM	',
          subject:'Maths',
          teacherName:`Teachers's Name`,
          recess : 'false'
        }

      ],
    },
    {
      day:'Fri',
      today:'Friday',
      data: [
        {
          time : '8:30AM-9:30AM	',
          subject:'Maths',
          teacherName:`Teachers's Name`,
          recess : 'false'
        },
        {
          time : '8:30AM-9:30AM	',
          subject:'Maths',
          teacherName:`Teachers's Name`,
          recess : 'false'
        },
        {
          time : '8:30AM-9:30AM	',
          subject:'Maths',
          teacherName:`Teachers's Name`,
          recess : 'false'
        },
        {
          time : '8:30AM-9:30AM	',
          subject:'Maths',
          teacherName:`Teachers's Name`,
          recess : 'false'
        },
        {
          time : '8:30AM-9:30AM	',
          recess : 'true'
        },
        {
          time : '8:30AM-9:30AM	',
          subject:'Maths',
          teacherName:`Teachers's Name`,
          recess : 'false'
        },
        {
          time : '8:30AM-9:30AM	',
          subject:'Maths',
          teacherName:`Teachers's Name`,
          recess : 'false'
        }

      ],
    },
    {
      day:'Sat',
      today:'saturday',
      data: [
        {
          time : '8:30AM-9:30AM	',
          subject:'Maths',
          teacherName:`Teachers's Name`,
          recess : 'false'
        },
        {
          time : '8:30AM-9:30AM	',
          subject:'Maths',
          teacherName:`Teachers's Name`,
          recess : 'false'
        },
        {
          time : '8:30AM-9:30AM	',
          subject:'Maths',
          teacherName:`Teachers's Name`,
          recess : 'false'
        },
        {
          time : '8:30AM-9:30AM	',
          subject:'Maths',
          teacherName:`Teachers's Name`,
          recess : 'false'
        },
        {
          time : '8:30AM-9:30AM	',
          recess : 'true'
        },
        {
          time : '8:30AM-9:30AM	',
          subject:'Maths',
          teacherName:`Teachers's Name`,
          recess : 'false'
        },
        {
          time : '8:30AM-9:30AM	',
          subject:'Maths',
          teacherName:`Teachers's Name`,
          recess : 'false'
        }

      ],
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
