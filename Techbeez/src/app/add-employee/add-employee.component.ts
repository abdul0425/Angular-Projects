import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from '../service/employee.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  empForm: FormGroup;

  constructor(
    private _empService: EmployeeService,
    private _dialogRef: MatDialogRef<EmployeeService>
  ) {
    this.empForm = new FormGroup({
      firstName: new FormControl(),
      middleName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      dob: new FormControl(),
      gender: new FormControl(),
      company: new FormControl(),
      education: new FormControl(),
      experience: new FormControl(),
      package: new FormControl(),
    });
  }

  onSubmitForm() {
    if (this.empForm.valid) {
      this._empService.addEmployee(this.empForm.value).subscribe({
        next: (val: any) => {
          alert('Employee Added Sussefully !');
          this._dialogRef.close();
        },
      });
    }
  }

  public education: string[] = [
    'Matric',
    'Intermediate',
    'Graduation',
    'Post Graduation',
  ];

  ngOnInit(): void {}
}
