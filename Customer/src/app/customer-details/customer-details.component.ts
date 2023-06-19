import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css'],
})
export class CustomerDetailsComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'address',
    'email',
    'contact',
    'action',
  ];
  dataSource: any;

  constructor(private _service: CustomerService) {}

  ngOnInit(): void {
    this.customerDetails();
  }

  customerDetails() {
    this._service.getCustomerList().subscribe((data) => {
      this.dataSource = data;
    });
  }

  editCustomer(id: number) {
    this.dataSource.forEach((newdata: any) => {
      if (newdata.id == id) {
        this._service.editCustomer(id, newdata).subscribe((data) => {
          console.log(data);
          alert('Customer Update !');
          this.customerDetails();
        });
      }
    });
  }

  deleteCustomer(id: number) {
    this._service.deleteCustomer(id).subscribe((data) => {
      console.log(data);
      alert('Customer Deleted Successfully !');
      this.customerDetails();
    });
  }
}
