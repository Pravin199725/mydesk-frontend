import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { MobileViewService } from 'src/app/services/mobileView/mobile-view.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  isMobileView: any;
  constructor( private responsiveService: MobileViewService) {
    // const scrollFunction = this.scroll.bind(this);
    // window.onscroll = function() {
    //   scrollFunction()
    // };
  }
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: 'New Year Eve', date: '2020-12-31' },
      { title: 'Christmas', date: '2020-12-25' }
    ]
  };
  ngOnInit(){
    this.onResize();
    this.responsiveService.checkWidth();
  };
  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
  }

  onResize() {
    this.responsiveService.getMobileStatus().subscribe(isMobile => {
      this.isMobileView = isMobile;
    });
  }

  

}
