import { Component, OnInit } from '@angular/core';
import { MobileViewService } from 'src/app/services/mobileView/mobile-view.service';

@Component({
  selector: 'app-discussions',
  templateUrl: './discussions.component.html',
  styleUrls: ['./discussions.component.scss']
})
export class DiscussionsComponent implements OnInit {

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
