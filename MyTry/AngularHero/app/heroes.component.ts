import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { Hero } from './hero'
import {HeroService} from './hero.service'

@Component({
  selector: 'my-heroes',
  templateUrl: './app/heroes.component.html',
  styleUrls:['./app/heroes.component.css']
})
export class HeroesComponent implements OnInit {
 
  car = '';
  // hero: Hero = { id: 1, name: "windstorm" };
 
  heroes :Hero[];

  selectedHero: Hero;

  constructor(private heroSvc:HeroService, private router:Router){}

  ngOnInit(){
   this.heroSvc.getHeros().then(heroes => this.heroes = heroes);
  }

  
  onSelect(selectedHero: Hero){
    this.selectedHero = selectedHero;
  }

  gotoDetail():void{
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

}
