import { Component, OnInit } from '@angular/core';
import { MobileViewService } from 'src/app/services/mobileView/mobile-view.service';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.scss']
})
export class GradeComponent implements OnInit {
  public isMobileView;
  public cousesList: any[] = [ 
    {
      title: 'Assignment - Maths',
      msg: 'This is short description of Lecture.....',
      uploaded: '5th June ',
      type: 'Assignment',
      tag: 'Upcoming',
      marks: '--',
    },
    {
      title: 'Assignment - Maths',
      msg: 'This is short description of Lecture.....',
      uploaded: '3rd June ',
      type: 'Assignment', 
      tag: 'Submitted',
      marks: '8/10',
    },
    {
      title: 'Quiz - Quadratic Equation',
      msg: 'This is short description of Lecture.....',
      uploaded: '4th June ',
      type: 'Quiz',
      tag: 'Overdue',
      marks: '--',
    }
  ]

  public openGradeView = false;

  constructor(private responsiveService: MobileViewService) {
  }

  ngOnInit(): void {
    this.onResize();
    this.responsiveService.checkWidth();

  }

  onResize(): void {
    this.responsiveService.getMobileStatus().subscribe(isMobile => {
      this.isMobileView = isMobile;
    });
  }

  openGrade() {
    this.openGradeView = true;
  }

  closeGrade() {
    this.openGradeView = false;
  }

}
