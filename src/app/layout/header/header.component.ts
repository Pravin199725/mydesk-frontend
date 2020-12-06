import { Component, OnInit } from '@angular/core';
import { MobileViewService } from 'src/app/services/mobileView/mobile-view.service';
import { StorageService } from 'src/app/services/storage/storage.service';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isMobileView;

  username = ''

  constructor(private responsiveService: MobileViewService, private storageService: StorageService) {
  }

  async ngOnInit() {
    this.onResize();
    this.responsiveService.checkWidth();
    let userdata = await this.storageService.getData('userData')
    this.username = await userdata.user.username;

  }

  toggle() {
    $('#sidebar').toggleClass('active');
    $('#content').toggleClass('courseContentActive');
  }

  onResize() {
    this.responsiveService.getMobileStatus().subscribe(isMobile => {
      this.isMobileView = isMobile;
      if (this.isMobileView) {
        document.getElementsByTagName('body')[0].setAttribute('style', 'margin-top:45px; margin-bottom:7rem')
      } else {
        document.getElementsByTagName('body')[0].removeAttribute('style')
      }
    });
  }

}
