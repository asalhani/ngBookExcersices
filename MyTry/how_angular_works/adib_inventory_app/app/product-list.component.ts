
import { Component, EventEmitter } from '@angular/core';
import { Product } from './product';

@Component({
    selector: 'product-list',
    templateUrl: './app/product-list.component.html',
    inputs:['productList'],
    outputs:['onProductSelected']
})
export class ProductListComponent {
    
    // grab input from ProductList (parent) component
    productList:Product[];

    // for passing selected product back to productList componet
    onProductSelected:EventEmitter<Product>; 

    // hold local refrence to current selected product
    currentProduct:Product; 

    constructor(){
        this.onProductSelected = new EventEmitter();
    }

    clicked(product:Product):void{
        this.currentProduct = product;
        this.onProductSelected.emit(product);
    }

    isSelected(product:Product):boolean{
        if(!product || !this.currentProduct){
            return false;
        }
        return product.sku === this.currentProduct.sku;
    }
}