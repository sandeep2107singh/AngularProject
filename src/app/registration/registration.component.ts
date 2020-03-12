import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm:FormGroup;
  submitted=false;
  responseData:any;
  constructor(private formBuilder:FormBuilder, private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.registrationForm=this.formBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required],
      email_id:['',Validators.required],
      mobile:['',Validators.required],
      status:['',Validators.required],
    })
  }
  onSubmit(){
    this.submitted=true;
    let requestBody={};
    requestBody=JSON.stringify(this.registrationForm.value)
    if(this.registrationForm.valid){
     this.http.post('http://localhost:8080/user/registration',requestBody).subscribe(data=>{
      this.responseData=data;
      if(this.responseData.success==true){
        this.router.navigate(['../']);
      }else{
        Swal.fire("Someting went wrong")
      }

     })
    }

    console.log(this.registrationForm.value);
  }

}
