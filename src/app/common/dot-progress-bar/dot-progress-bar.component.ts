import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dot-progress-bar',
  templateUrl: './dot-progress-bar.component.html',
  styleUrls: ['./dot-progress-bar.component.scss']
})
export class DotProgressBarComponent implements OnInit {

  @Input()
  public weekLists = [];
  constructor() { }

  ngOnInit(): void {
    console.log(this.weekLists);
  }

}
