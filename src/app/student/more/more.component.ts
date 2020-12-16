import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MobileViewService } from 'src/app/services/mobileView/mobile-view.service';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.scss']
})
export class MoreComponent implements OnInit {
  public isMobileView;
  constructor(private router: Router,private responsiveService: MobileViewService, private zone:NgZone) { }

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
