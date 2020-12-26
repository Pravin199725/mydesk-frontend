import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecentComponent } from './recent/recent.component';
import { TimetableComponent } from './timetable/timetable.component';
import { CourseComponent } from './course/course.component';
import { DiscussionsComponent } from './discussions/discussions.component';
import { GradeComponent } from './grade/grade.component';
import { HomeComponent } from './home/home.component';
import { MessageComponent } from './message/message.component';
import { LiveComponent } from '../student/live/live.component';
import { LectureComponent } from '../student/lecture/lecture.component';
import { CheckComponent } from './check/check.component';


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
    path: 'schedule',
    component: TimetableComponent
  },
  {
    path: 'message',
    component: MessageComponent
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
    path: 'course',
    component: CourseComponent
  },
  {
    path: 'message',
    component: MessageComponent
  },
  {
    path: 'live',
    component: LiveComponent
  },
  {
    path: 'lecture',
    component: LectureComponent
  },
  {
    path: 'check',
    component: CheckComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
