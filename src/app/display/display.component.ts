import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private http:HttpClient) { }
  showdata:any;
  ngOnInit(): void {
    this.displayData();
  }
 displayData(){
   this.http.get('http://localhost:8080/crud/fetch').subscribe(data =>{
      this.showdata=data;
      console.log(this.showdata);
   });
 }

}
