import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero'
import { HeroService } from './hero.service'

@Component({
  selector: 'my-heroes',
  templateUrl: './app/heroes.component.html',
  styleUrls: ['./app/heroes.component.css']
})
export class HeroesComponent implements OnInit {

  car = '';
  // hero: Hero = { id: 1, name: "windstorm" };

  heroes: Hero[];

  selectedHero: Hero;

  constructor(private heroSvc: HeroService, private router: Router) { }

  ngOnInit() {
    this.heroSvc.getHeros().then(heroes => this.heroes = heroes);
  }


  onSelect(selectedHero: Hero) {
    this.selectedHero = selectedHero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroSvc.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: Hero): void {
  this.heroSvc
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
}

}
