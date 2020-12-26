import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() 
  public type: string = 'student'
 
  constructor() { }

  ngOnInit(): void {
    console.log(this.type)
  }

  public getRoute(route) {
    return '/' + this.type + '/' + route;
  }

}
