import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dayview',
  templateUrl: './dayview.component.html',
  styleUrls: ['./dayview.component.scss']
})
export class DayviewComponent implements OnInit {


  timeTable = [ 
    {
      day:'Monday',
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
      day:'Tuesday',
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
      day:'Wednesday',
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
      day:'Thursday',
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
      day:'Friday',
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
      day:'Saturday',
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
