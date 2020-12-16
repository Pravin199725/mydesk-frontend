import { Component, OnInit } from '@angular/core';
import { MobileViewService } from 'src/app/services/mobileView/mobile-view.service';

@Component({
  selector: 'app-teacher-header',
  templateUrl: './teacher-header.component.html',
  styleUrls: ['./teacher-header.component.scss']
})
export class TeacherHeaderComponent implements OnInit {

  public isMobileView ;

  constructor(private responsiveService: MobileViewService) { 

  }
  ngOnInit() {
    this.onResize();
    this.responsiveService.checkWidth();
   
  }

  onResize() {
    this.responsiveService.getMobileStatus().subscribe(isMobile => {
      this.isMobileView = isMobile;
    });
  }

}
