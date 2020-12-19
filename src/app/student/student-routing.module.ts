import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DiscussionsComponent } from './discussions/discussions.component';
import { RecentComponent } from './recent/recent.component';
import { GradeComponent } from './grade/grade.component';
import { CourseComponent } from './course/course.component';
import { TimetableComponent } from './timetable/timetable.component';
import { MessageComponent } from './message/message.component';
import { LectureComponent } from './lecture/lecture.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { LiveComponent } from './live/live.component';
import { MoreComponent } from './more/more.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'discussions',
    component: DiscussionsComponent
  },
  {
    path: 'recent',
    component: RecentComponent
  },
  {
    path: 'grade',
    component: GradeComponent
  },
  {
    path: 'schedule',
    component: TimetableComponent
  },
  {
    path: 'message',
    component: MessageComponent
  },
  {
    path: 'lecture',
    component: LectureComponent
  },
  {
    path: 'assignment',
    component: AssignmentComponent
  },
  {
    path: 'course',
    component: CourseComponent
  },
  {
    path: 'live',
    component: LiveComponent
  },
  {
    path: 'more',
    component: MoreComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
