import { Component, OnInit } from '@angular/core';
import { MobileViewService } from 'src/app/services/mobileView/mobile-view.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  public isMobileView;
  public cousesList : any[] = [1,2,3,4,5,6,7]
  public weekLists: any[] = [{
    id: 1,
    week: '1st - 3rd',
    status: 'done',
    isCurrent: false
  },{
    id:2,
    week: '4th - 10th',
    status: 'active',
    isCurrent: false
  },{
    id:3,
    week: '11th - 17th',
    status: 'inactive',
    isCurrent: true
  },{
    id:4,
    week: '18th - 24th',
    status: 'inactive',
    isCurrent: false
  },{
    id:5,
    week: '25th - 31th',
    status: 'inactive',
    isCurrent: false
  }];

  public currentWeek: { id: number, week: string, status: string} = this.weekLists[2];

  constructor(private responsiveService: MobileViewService) {
    // const scrollFunction = this.scroll.bind(this);
    // window.onscroll = function() {
    //   scrollFunction()
    // };
  }

  ngOnInit() {
    this.onResize();
    this.responsiveService.checkWidth();
   
  }

  onResize() {
    this.responsiveService.getMobileStatus().subscribe(isMobile => {
      this.isMobileView = isMobile;
    });
  }

 scroll() {
  // if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 150) {
  //   document.getElementById("couse-header").classList.add('d-none');
  // } else {
  //   document.getElementById("couse-header").classList.remove('d-none');
  // }
}

  handleWeekChange(direction: string) {
    const currentWeekIndex = this.weekLists.findIndex( v => v.id === this.currentWeek.id);
    if(direction === 'left' && this.weekLists[currentWeekIndex - 1]) {
      this.weekLists[currentWeekIndex].isCurrent = false;
      this.weekLists[currentWeekIndex - 1].isCurrent = true;
      this.currentWeek = this.weekLists[currentWeekIndex - 1];
    } else  if(direction === 'right' && this.weekLists[currentWeekIndex + 1]) {
      this.weekLists[currentWeekIndex].isCurrent = false;
      this.weekLists[currentWeekIndex + 1].isCurrent = true;
      this.currentWeek = this.weekLists[currentWeekIndex + 1];
    }
  }
}
