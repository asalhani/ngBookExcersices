
import { Component } from '@angular/core';
import { Product } from './product';

@Component({
    selector: 'inventory-app',
    templateUrl: './app/inventory.component.html',
})
export class InventoryComponent {
    products: Product[];

    constructor() {
        this.products = [
            new Product(
                'MYSHOES',
                'Black Running Shoes',
                '/resources/images/products/black-shoes.jpg',
                ['Men', 'Shoes', 'Running Shoes'],
                109.99),
            new Product(
                'NEATOJACKET',
                'Blue Jacket',
                '/resources/images/products/blue-jacket.jpg',
                ['Women', 'Apparel', 'Jackets & Vests'],
                238.99),
            new Product(
                'NICEHAT',
                'A Nice Black Hat',
                'resources/images/products/black-hat.jpg',
                ['Men', 'Accessories', 'Hats'],
                29.99)
        ];
    }

    productWasSelected(product: Product): void {
        console.log('Product clicked:', product);
    }
}

