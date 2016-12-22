import { Component } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'my-app',
  template: `<h1>Simple Http Request:</h1>
              <simple-http></simple-http>
            `,
})
export class AppComponent  { 
  
  constructor(private http:Http){}
  
  name = 'Angular'; 
}
