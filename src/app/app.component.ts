import { Component } from '@angular/core';
import { AppService } from '../app/app.service';
// import { FirstComponent} from '../app/first/first.component'
// import { SecondComponent} from '../app/second/second.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(private appService: AppService) { }
  title = 'assignment';
  }
