import {
    NgModule,
    Component
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { InventoryComponent } from './inventory.component';
import { ProductListComponent } from './product-list.component';
import { ProductRowComponent } from './product-row.component';
import { ProductImageComponent } from './product-image.component';
import {ProductDepartmentComponent} from './product-department.component';
import {ProductPriceDispalyComponent} from './product-price-dispaly.component'


@NgModule({
    declarations: [InventoryComponent,
        ProductListComponent,
        ProductRowComponent,
        ProductImageComponent,
        ProductDepartmentComponent,
        ProductPriceDispalyComponent],
    imports: [BrowserModule],
    bootstrap: [InventoryComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);