import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-common-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input() type = '';

  @Input() isMobileView = false;

  public msgView = false;

  constructor() {
  }

  ngOnInit() {


  }


  openMsg() {
    this.msgView = true
  }

  back() {
    this.msgView = false
  }

}
