import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MobileViewService } from 'src/app/services/mobileView/mobile-view.service';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.scss']
})
export class CheckComponent implements OnInit {

  public isMobileView;

  constructor(private router: Router, private responsiveService: MobileViewService) {
  }

  ngOnInit() {
    this.onResize();
    this.responsiveService.checkWidth();
  }

  goBack() {
    window.history.back();
  }
  onResize() {
    this.responsiveService.getMobileStatus().subscribe(isMobile => {
      this.isMobileView = isMobile;
    });
  }

}
