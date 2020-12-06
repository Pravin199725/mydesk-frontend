import { Component, OnInit } from '@angular/core';
import { MobileViewService } from 'src/app/services/mobileView/mobile-view.service';

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.scss']
})
export class RecentComponent implements OnInit {

  public isMobileView;

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
