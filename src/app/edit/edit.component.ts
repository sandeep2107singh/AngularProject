import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editForm:FormGroup;
  constructor(private formBuilder:FormBuilder, private router:Router,private http:HttpClient) { }
  
  ngOnInit(): void {
    this.editForm=this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      fatherName: ['', Validators.required],
      cource: ['', Validators.required],
      rollno: ['', Validators.required],
      CollegeName: ['', Validators.required],
      mobile: ['', Validators.required]
    })
  }

 
  onSubmit(){
    let requestBody:any={};
    requestBody=JSON.stringify(this.editForm.value)
    this.http.put('http://localhost:8080/crud/update',requestBody).subscribe(data =>{
      alert("ok");
    });

  }

}
