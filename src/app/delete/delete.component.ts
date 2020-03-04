import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  noteId: any;
  
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute){
    this.noteId = this.route.snapshot.params.id;

  }
  
  ngOnInit(): void {
    this.onSubmit();
  }

  onSubmit(){
   let requestBody:any={};
   requestBody=this.noteId;
   console.log(requestBody);
    this.http.delete('http://localhost:8080/crud/delete',requestBody).subscribe(data =>{
      alert("ok");
    });

  }

}
