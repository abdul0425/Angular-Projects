import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  username = '';
  password = '';

  submit() {
    if (this.username == 'admin' && this.password == 'password') {
      this.router.navigate(['/home']);
    } else {
      alert('Invalid Username Or Password Given .');
    }
  }

  ngOnInit(): void {}
}
