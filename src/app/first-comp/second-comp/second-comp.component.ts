import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-second-comp',
  templateUrl: './second-comp.component.html',
  styleUrls: ['./second-comp.component.scss']
})
export class SecondCompComponent implements OnInit {
  response: any;
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    // Second Api Call
    this.appService.getSecondApi().subscribe((res: any) => {
      // Since Api Was Failing from the server so i binded everything to response and displaying the same in Json Format at second component.
      this.response = res.data;
    }, err => {
      this.response = 'Api Failed';
    });
  }
}
