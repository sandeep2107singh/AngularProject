import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  responseData: any;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router,private session:SessionService) { }

  ngOnInit(): void {
    //this.session.isLogin();
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(formAllData: any) {
    this.submitted = true;
    let requestBody: any = {};
    requestBody = JSON.stringify(this.loginForm.value);
    console.log(requestBody);
    if (this.loginForm.valid) {
      this.http.post('http://localhost:8080/user/login', requestBody).subscribe(data => {
        this.responseData = data;
        if (this.responseData.success == true) {
          this.router.navigate(['/dashboard']);
        } else {
          Swal.fire("invalid username & password");
        }
      });
    }
  }






}
