import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient) { }

  addForm: FormGroup;
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      fatherName: ['', Validators.required],
      cource: ['', Validators.required],
      rollno: ['', Validators.required],
      CollegeName: ['', Validators.required],
      mobile: ['', Validators.required]
    });
  }

  onSubmit() {
    let requestBody: any = {};
    requestBody = JSON.stringify(this.addForm.value);
    console.log(requestBody);
    this.http.post('http://localhost:8080/crud/create', requestBody).subscribe(data => {
      alert('ok');
    });
  }

}
