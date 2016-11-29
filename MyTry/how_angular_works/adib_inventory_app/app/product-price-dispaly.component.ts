
import { Component, EventEmitter } from '@angular/core';

@Component({
    selector: 'price-display',
    inputs: ['price'],
    template:`<div class="price-display">\${{ price }}</div>`
})
export class ProductPriceDispalyComponent {

    price: number;
    
}