import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { HomeComponent } from './home/home.component';
import { TeacherHeaderComponent } from './teacher-header/teacher-header.component';
import { EventSectionModule } from '../common/common.module';
import { LayoutModule } from '../layout/layout.module';
import { DiscussionsComponent } from './discussions/discussions.component';
import { GradeComponent } from './grade/grade.component';
import { CourseComponent } from './course/course.component';
import { RouterModule } from '@angular/router';
import { MessageComponent } from './message/message.component';
import { RecentComponent } from './recent/recent.component';
import { TimetableComponent } from './timetable/timetable.component';
import { WeekviewComponent } from './timetable/weekview/weekview.component';
import { DayviewComponent } from './timetable/dayview/dayview.component';
import { LiveComponent } from './live/live.component';
import { LectureComponent } from './lecture/lecture.component';
import { CheckComponent } from './check/check.component';


@NgModule({
  declarations: [
    HomeComponent, 
    TeacherHeaderComponent, 
    DiscussionsComponent,
    GradeComponent,
    CourseComponent, 
    MessageComponent,
    DiscussionsComponent, 
    RecentComponent, 
    TimetableComponent, 
    WeekviewComponent, 
    DayviewComponent, LiveComponent, LectureComponent, CheckComponent
  ],
  imports: [
    TeacherRoutingModule,
    LayoutModule,
    EventSectionModule,
    CommonModule,
    RouterModule,
  ]
})
export class TeacherModule { }
