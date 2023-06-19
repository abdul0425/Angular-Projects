import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private _http: HttpClient) {}

  addCustomer(customer: FormGroup): Observable<FormGroup> {
    return this._http.post<FormGroup>(
      'http://localhost:3000/customer',
      customer
    );
  }

  getCustomerList() {
    return this._http.get('http://localhost:3000/customer');
  }

  deleteCustomer(id: number) {
    return this._http.delete(`http://localhost:3000/customer/${id}`);
  }

  editCustomer(id: number, customer: any) {
    // console.log(id);
    // console.log(customer);
    return this._http.put(`http://localhost:3000/customer/${id}`, customer);
  }
}
