import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MobileViewService } from 'src/app/services/mobileView/mobile-view.service';

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.scss']
})
export class RecentComponent implements OnInit {

  public isMobileView;
  @Input() type: string = 'student';
  overdues = [
    {
      date: '7',
      month: 'Jan',
      msg: 'Math ',
      type: 'Live',
      endtime: '7:00 pm',
      title:' Quadratic Equation'
    },
    {
      date: '7',
      month: 'Jan',
      msg: 'Math ',
      type: 'Quiz',
      endtime: '7:00 pm',
      title:' Quadratic Equation'
    },
    {
      date: '7',
      month: 'Jan',
      msg: 'Math ',
      type: 'Lecture',
      endtime: '7:00 pm',
      title:' Quadratic Equation'
    },
    {
      date: '7',
      month: 'Jan',
      msg: 'Math ',
      type: 'Assignment',
      endtime: '7:00 pm',
      title:' Quadratic Equation'
    }
  ]

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

}
