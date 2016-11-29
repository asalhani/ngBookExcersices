
import { Component, EventEmitter } from '@angular/core';
import { Product } from './product';

@Component({
    selector: 'product-row',
    templateUrl: './app/product-row.component.html',
    host: { 'class': 'item' },
    inputs: ['product']
})
export class ProductRowComponent {

    product: Product;
    
}