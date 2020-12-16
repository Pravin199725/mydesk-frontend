import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-section',
  templateUrl: './event-section.component.html',
  styleUrls: ['./event-section.component.scss']
})
export class EventSectionComponent implements OnInit {


  announcements = [
    {
      date: '8',
      month: 'Jan',
      msg: 'School ',
      des:' Annual Function'
    },
    {
      date: '26',
      month: 'Jan',
      msg: 'School ',
      des:' Republic Day'
    },
    {
      date: '2',
      month: 'Feb',
      msg: 'School ',
      des:' 25 Anniversary of school this was testing'
    },
    {
      date: '8',
      month: 'Jan',
      msg: 'School ',
      des:' Annual Function'
    }
  ]

  upcomings = [
    {
      date: '9',
      month: 'Jan',
      msg: 'Math ',
      type: 'Assignment',
      endtime: '7:00 pm',
      des:' Quadratic Equation'
    },
    {
      date: '10',
      month: 'Jan',
      msg: 'Marathi ',
      type: 'Assignment',
      endtime: '7:00 pm',
      des:' Assignment 2'
    },
    {
      date: '12',
      month: 'Jan',
      msg: 'Hindi ',
      type: 'Test',
      endtime: '7:00 pm',
      des:' Chapter 3'
    },
    {
      date: '18',
      month: 'Jan',
      msg: 'Math ',
      type: 'Assignment',
      endtime: '10:00 pm',
      des:' Quadratic Equation'
    }
  ]

  overdues = [
    {
      date: '7',
      month: 'Jan',
      msg: 'Math ',
      type: 'Assignment',
      endtime: '7:00 pm',
      des:' Quadratic Equation'
    },
    {
      date: '6',
      month: 'Jan',
      msg: 'Science ',
      type: 'Assignment',
      endtime: '7:00 pm',
      des:' Assignment 1'
    },
    {
      date: '6',
      month: 'Jan',
      msg: 'Marathi ',
      type: 'Assignment',
      endtime: '7:00 pm',
      des:' Assignment 1'
    },
    {
      date: '5',
      month: 'Jan',
      msg: 'Math ',
      type: 'Assignment',
      endtime: '7:00 pm',
      des:' Quadratic Equation '
    }
  ]

  constructor(private router: Router) { }

  ngOnInit() {

  }
  goToLec(){
    this.router.navigate([`/student/lecture`]);
  }

}
