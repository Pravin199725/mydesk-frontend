import { Component, OnInit } from '@angular/core';
import { MobileViewService } from 'src/app/services/mobileView/mobile-view.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  public isMobileView;

  public msgView = false;

  constructor(private responsiveService: MobileViewService) {
  }

  ngOnInit() {
    this.onResize();
    this.responsiveService.checkWidth();

  }

  onResize() {
    this.responsiveService.getMobileStatus().subscribe((isMobile) => {
      console.log('isMobile', isMobile)
      this.isMobileView = isMobile;
    });
  }

  openMsg() {
    this.msgView = true
  }

  back() {
    this.msgView = false
  }

}
