import { Component, OnInit } from '@angular/core';
import { MobileViewService } from 'src/app/services/mobileView/mobile-view.service';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss']
})
export class TimetableComponent implements OnInit {
  public calenderView: 'weekview' | 'dayview' = 'weekview'

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

  showCalenderView(view: 'weekview' | 'dayview'): void {
    this.calenderView = view;
  }
}
