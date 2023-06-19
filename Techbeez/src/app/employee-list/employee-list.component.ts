import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
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
    'action',
  ];
  dataSource: any;

  constructor(private _empService: EmployeeService) {}
  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees() {
    this._empService.getEmployeeList().subscribe((data) => {
      this.dataSource = data;
    });
  }
  onClickUpdateEmployee(id: number) {
    this._empService.updateEmployee(id).subscribe(data=>{
      
    })
  }


  onClickDeleteEmployee(id: number) {
    this._empService.deleteEmployee(id).subscribe({
      next: (val) => {
        alert('Employee Deleted Successfullu !');
        this.getAllEmployees();
      },
    });
  }
}
