import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { AppService } from '../app.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

// Interface Binding for the MatDataSource
export interface PeriodicElement {
  employee_name: string;
  employee_salary: number;
  employee_age: number;
}

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.scss']
})
export class FirstCompComponent implements OnInit {
  // ViewChild Ref for Pagination and Sorting
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  // Service Ref
  constructor(private appService: AppService) { }

  // Table Column Names
  displayedColumns: string[] = ['employee_name', 'employee_salary', 'employee_age'];

  // DataSource References
  dataSource = new MatTableDataSource(null);
  integrationData: PeriodicElement[];


  ngOnInit(): void {
    // Making Api Generic and enhancable for ServerSidePagination or sorting.
    this.firstApiData();
  }

  ngAfterViewInit() {
  }

  firstApiData() {
    // Fetching data from the Api and binding to the datasource and to pagination and sort object afterwards.
    this.appService.getFirstApi().subscribe((response: any) => {
      this.integrationData = response.allEmployees;
      this.dataSource = new MatTableDataSource(this.integrationData);
      console.log(this.integrationData);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  // Function For the filters
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // Changing DataSource acc to the filter results.
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
