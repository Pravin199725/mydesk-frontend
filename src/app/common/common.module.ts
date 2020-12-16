import { NgModule } from '@angular/core';
import { EventSectionComponent } from './event-section/event-section.component';
import { HomeCommonComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { MobileHeaderComponent } from './mobile-header/mobile-header.component';
import { DotProgressBarComponent } from './dot-progress-bar/dot-progress-bar.component';
import { MessageComponent } from './message/message.component';


@NgModule({
  declarations: [EventSectionComponent, HomeCommonComponent, MobileHeaderComponent, DotProgressBarComponent, MessageComponent, ],
  imports: [
    CommonModule
  ],
  exports: [EventSectionComponent,HomeCommonComponent,MobileHeaderComponent, DotProgressBarComponent,MessageComponent]
})
export class EventSectionModule { }
