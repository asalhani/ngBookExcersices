import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'simple-http',
    template: `
        <h2>Basic Request</h2>
         <button type="button" (click)="makeRequest()">Make Request</button>
         <div *ngIf="loading">loading...</div>
         <pre>{{data | json}}</pre>
    `
})
export class SimpleHttpRequest implements OnInit {
    
    data:Object;
    loading:boolean;
    requestUrl:string;

    constructor(private http:Http) {

     }

    ngOnInit() { }

    makeRequest(){
        this.requestUrl = 'http://jsonplaceholder.typicode.com/posts/';
        this.loading = true;
        
        this.http.get(this.requestUrl)
            .subscribe((res: Response) =>{
                this.data = res.json();
                this.loading = false;
            });
    }
}