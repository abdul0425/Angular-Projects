import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  reactiveForm: FormGroup;

  constructor(private _service: CustomerService) {
    this.reactiveForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      address: new FormControl(''),
      contact: new FormControl(''),
    });
  }

  ngOnInit(): void {}

  addCustomer() {
    this._service.addCustomer(this.reactiveForm.value).subscribe((data) => {
      console.log(data);
    });
  }
}
