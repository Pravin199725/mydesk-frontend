import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MobileViewService } from 'src/app/services/mobileView/mobile-view.service';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public isMobileView;

  constructor(private router: Router, private responsiveService: MobileViewService) {
  }

  ngOnInit() {
    this.onResize();
    this.responsiveService.checkWidth();
  }

  toggle() {
    $('#sidebar').toggleClass('active');
  }

  onResize() {
    this.responsiveService.getMobileStatus().subscribe(isMobile => {
      this.isMobileView = isMobile;
    });
  }
}
