import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
@Component({
    moduleId: module.id,
    template:`
        <h1>Http</h1>
    `
})
export class Completed implements OnInit {
    
    public something;
    constructor(private http: Http) { }

    ngOnInit() {  this.getSomething();}
    
    getSomething() {
    this.http.get('http://localhost:8082//client/form1/1.0.0/index.html?PatientFullName=aviwazzir&PatientID=20000008&DateOfBirth=473378400000&Gender=m')
      .map((res:Response) => res.json())
      .subscribe(
        data => { this.something = data},
        err => console.error(err),
        () => console.log('done')
      );
  }

}