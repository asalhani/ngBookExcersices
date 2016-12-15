import { Component } from '@angular/core';
import { Hero } from './hero'

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls:['./app/app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  car = '';
  // hero: Hero = { id: 1, name: "windstorm" };
  HEROES: Hero[] = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];
  heroes = this.HEROES;

  selectedHero = new Hero(-1, "");

  onSelect(selectedHero: Hero){
    this.selectedHero = selectedHero;
  }

}
