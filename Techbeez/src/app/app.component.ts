import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeService } from './service/employee.service';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Techbeez Software Technologies';

  displayedColumns: string[] = [
    'firstName',
    'middleName',
    'lastName',
    'email',
    'dob',
    'gender',
    'education',
    'company',
    'experience',
    'package',
  ];
  dataSource: any;

  constructor(
    private _dialogue: MatDialog,
    private _empService: EmployeeService
  ) {}
  ngOnInit(): void {
    this.getAllEmployees();
  }

  goToAddEmployee() {
    this._dialogue.open(AddEmployeeComponent);
  }
  getAllEmployees() {
    this._empService.getEmployeeList().subscribe((data) => {
      this.dataSource = data;
    });
  }
}
