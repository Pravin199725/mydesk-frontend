import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.scss']
})
export class MobileHeaderComponent implements OnInit {
  
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
      des:' 25 Anniversary of school'
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
      des:' Quadratic Equation'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  incSize(){
    var maxHeight = 180;
    if(+$("#p-2").height() < maxHeight) {

        $("#p-2").stop().animate({ height: 180}, 'slow');
        $('#btn1').hide();
        $('#btn2').show();
    }

  }
  decSize(){
    var maxHeight = 60;
    if(+$("#p-2").height() > maxHeight) {

        $("#p-2").stop().animate({ height: 60}, 'slow');
        $('#btn2').hide();
        $('#btn1').show();
    }

  }
}
