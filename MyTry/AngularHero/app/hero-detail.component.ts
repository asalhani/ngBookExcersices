import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { HeroService } from './hero.service';
import { Hero } from './hero';
@Component({
    selector: "my-hero-detail",
    templateUrl: "./app/hero-detail.component.html",
    styleUrls:['./app/hero-detail.component.css']
})
export class HeroDetailsComponent implements OnInit {
    @Input() hero: Hero;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location) { }

    ngOnInit(): void {
        /*
        get the passed hero ID from querystring
        
        Note how the switchMap operator maps the id in the observable route parameters
         to a new Observable, the result of the HeroService.getHero method.

         If the user re-navigates to this component while a getHero request is still 
         inflight, switchMap cancels that old request before calling HeroService.getHero
        again.

        The hero id is a number. Route parameters are always strings. So we convert 
        the route parameter value to a number with the JavaScript (+) operator.
        */

        this.route.params
            .switchMap((params :Params) => this.heroService.getHero(+params['id']))
            .subscribe(hero => this.hero = hero);
    }

    goBack():void{
        this.location.back();
    }
};