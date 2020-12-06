import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() 
  public type: string = 'student'
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.type)
  }

  public getRoute(route) {
    console.log('route', '/' + this.type + '/' + route)
    return '/' + this.type + '/' + route;
  }

}
