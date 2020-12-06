import { Component, OnInit, Input, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { MobileViewService } from 'src/app/services/mobileView/mobile-view.service';

@Component({
  selector: 'app-common-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeCommonComponent implements OnInit {

  @Input() type: string = 'student';

  public isMobileView;

  public subjectData = [ 
    {
      subjectName: 'Computer',
      class: '10th B',
      teacherName:'M Patil',
    },
    {
      subjectName: 'English',
      class: '10th B',
      teacherName:'Mr Kale',
    },
    {
      subjectName: 'Marathi',
      class: '10th B',
      teacherName:'Mr Pravin',
      studenLength: '50',
      subjectCode: 'ASWS32'
    },
    {
      subjectName: 'Science',
      class: '10th B',
      teacherName:'Mr arsh',
    },
    {
      subjectName: 'History',
      class: '10th B',
      teacherName:'Mr Animesh',
    },
    {
      subjectName: 'Geography',
      class: '10th B',
      teacherName:'Mr prashant',
      },
    {
      subjectName: 'Hindi',
      class: '10th B',
      teacherName:'Mrs Patil',
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

  goToCourse() {
    this.router.navigate([`/${this.type}/course`])
  }

}
