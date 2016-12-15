
import { Component, OnInit } from '@angular/core';
import {HeroService} from './hero.service'

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    providers:[HeroService],
    styleUrls:['./app/app.component.css']
})
export class AppComponent implements OnInit {

     title = 'Tour of Heroes';

    constructor() { }

    ngOnInit() { }
}