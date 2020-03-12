import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn:'root',
})

export class SessionService {
    constructor(private router:Router){}

    validToken:any;

    // public checkLogin(){
    //     this.validToken=localStorage.getItem('token');
    //      alert(this.validToken);
    //     if(this.validToken=='' || this.validToken==null){
    //         this.router.navigate(['../']);
    //     }
    // }

    public logOut(){
        localStorage.clear();
        this.router.navigate(['../']);
    }

    // public isLogin(){
    //     this.validToken=localStorage.getItem('token');
    //     if(this.validToken!=null){
    //         this.router.navigate(['/dashboard']);
    //     }
    // }

}
