import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { HomeComponent } from './home/home.component';
import { LayoutModule } from '../layout/layout.module';
import { StudentHeaderComponent } from './student-header/student-header.component';
import { DiscussionsComponent } from './discussions/discussions.component';
import { RecentComponent } from './recent/recent.component';
import { GradeComponent } from './grade/grade.component';
import { RouterModule } from '@angular/router';

import { CourseComponent } from './course/course.component';
import { EventSectionModule } from '../common/common.module';
import { TimetableComponent } from './timetable/timetable.component';
import { WeekviewComponent } from './timetable/weekview/weekview.component';
import { DayviewComponent } from './timetable/dayview/dayview.component';
import { MessageComponent } from './message/message.component';
import { LectureComponent } from './lecture/lecture.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { QuizComponent } from './quiz/quiz.component';
import { LiveComponent } from './live/live.component';
import { MoreComponent } from './more/more.component';


@NgModule({
  declarations: [HomeComponent, StudentHeaderComponent,
    DiscussionsComponent, RecentComponent,
    GradeComponent, MessageComponent, CourseComponent, TimetableComponent, WeekviewComponent, DayviewComponent, LectureComponent, AssignmentComponent, QuizComponent, LiveComponent, MoreComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    RouterModule,
    LayoutModule,
    EventSectionModule
  ]
})
export class StudentModule { }
