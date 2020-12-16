import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MobileViewService } from './services/mobileView/mobile-view.service';
import { StorageService } from './services/storage/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyDesk';

  constructor(
    private responsiveService:MobileViewService, 
    private storageService: StorageService,
    private route: Router){
  }

  ngOnInit(){
    this.onResize('');
    if(this.storageService.getData('userData')?.key) {
      this.route.navigate(['/student']);
    }    
  }

  onResize(event){
    this.responsiveService.checkWidth();
  }

}
