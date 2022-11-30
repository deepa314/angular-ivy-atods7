import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  showOtpBox = false;
  hide = true;
  loginForm: FormGroup;
  otpResponse: any;
  time = 60;
  refreshIntervalId;
  isVerify = false;
  constructor(
    private router: Router,

    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(?!.{41})[a-zA-Z0-9]+(\\.[_a-zA-Z0-9]+)*@[a-zA-Z0-9-]{2,50}([.][a-zA-Z]{2,3}|[.][a-zA-z-]{2,3}[.][a-zA-Z]{2})$'
          ),
        ],
      ],
      otp: ['', Validators.required],
    });
  }

  submit() {
    this.router.navigate(['dashboard']);
  }
}
