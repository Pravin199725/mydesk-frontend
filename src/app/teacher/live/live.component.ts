import { Component, Input, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MobileViewService } from 'src/app/services/mobileView/mobile-view.service';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.scss']
})
export class LiveComponent implements OnInit {

  @Input() type: string = 'student';

  public isMobileView;

  public subjectData = [ 
    {
      subjectName: 'Computer',
      class: '10th B',
      teacherName:'M Patil',
      date: '10 dec',
      start: '10:15AM',
      end: '12:15AM'
    },
    {
      subjectName: 'English',
      class: '10th B',
      teacherName:'Mr Kale',
      date: '10 dec',
      start: '10:15AM',
      end: '12:15AM'
    }
  ]
  public upcoming = [
    {
      subjectName: 'Marathi',
      class: '10th B',
      teacherName:'Mr Pravin',
      studenLength: '50',
      subjectCode: 'ASWS32',
      date: '10 dec',
      start: '10:15AM',
      end: '12:15AM'
    },
    {
      subjectName: 'Science',
      class: '10th B',
      teacherName:'Mr arsh',
      date: '10 dec',
      start: '10:15AM',
      end: '12:15AM'
    },
    {
      subjectName: 'History',
      class: '10th B',
      teacherName:'Mr Animesh',
      date: '10 dec',
      start: '10:15AM',
      end: '12:15AM'
    },
    {
      subjectName: 'Geography',
      class: '10th B',
      teacherName:'Mr prashant',
      date: '10 dec',
      start: '10:15AM',
      end: '12:15AM'
      },
    {
      subjectName: 'Hindi',
      class: '10th B',
      teacherName:'Mrs Patil',
      date: '10 dec',
      start: '10:15AM',
      end: '12:15AM'
     }
 ]

  constructor(private router: Router,private responsiveService: MobileViewService, private zone:NgZone) {
  }

  ngOnInit() {
    this.onResize();
    this.responsiveService.checkWidth();
  }

  onResize() {
    this.responsiveService.getMobileStatus().subscribe(isMobile => {
      this.zone.run(() => {this.isMobileView = isMobile});
    });

 }

}
