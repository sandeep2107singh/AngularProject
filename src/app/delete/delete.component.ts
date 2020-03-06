import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  noteId: any;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {
    this.noteId = this.route.snapshot.params.id;

  }

  ngOnInit(): void {
    this.onSubmit();
  }


  onSubmit() {


    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this data !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {

        const options = {
          headers: new HttpHeaders({
            'Content-type': 'application/json',
          }),
          body: {
            mobile: this.noteId
          },
        };
        this.http.delete('http://localhost:8080/crud/delete', options).subscribe(data => {
          console.log(data);
          this.router.navigate(['/display']);
        });

        Swal.fire(
          'Deleted!',
          'Your data has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',  
          'Your data is safe :)',
          'error'
        )
        this.router.navigate(['/display'])
      }
    })



  }

}
