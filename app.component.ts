import { Component } from '@angular/core';
import { RestService } from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyect03';
  public robots: Array<any> = []

  constructor(private RestService:RestService){
    this.RestService.getRobots().subscribe((resp:any) => {
      this.robots = resp
    })
  }

}
