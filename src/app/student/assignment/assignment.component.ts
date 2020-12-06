import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MobileViewService } from 'src/app/services/mobileView/mobile-view.service';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss']
})
export class AssignmentComponent implements OnInit {
  public isMobileView;

  constructor(private router: Router, private responsiveService: MobileViewService) {
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

  closeGrade() {
    this.router.navigate([`/student/course`])
  }
}
