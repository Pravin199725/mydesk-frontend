import { animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.scss']
})
export class MobileHeaderComponent implements OnInit {
  @Input() type: string = 'student';
  announcements = [
    {
      date: '8',
      month: 'Jan',
      msg: 'School ',
      des:' Annual Function test overflow text with overflow'
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
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  incSize(){
    var x=document.getElementById("p-2");
    x.style.height = "180px", x.style.transition = "1s";

        
    document.getElementById("btn1").style.display = "none";
    document.getElementById("btn2").style.display = "inline";
    }

  
  decSize(){
    var x=document.getElementById("p-2");
    x.style.height = "65px", x.style.transition = "1s";

        
    document.getElementById("btn1").style.display = "inline";
    document.getElementById("btn2").style.display = "none";
    }
    goToLec() {
    
      this.router.navigate([`/student/lecture`]);
    
  }
}
