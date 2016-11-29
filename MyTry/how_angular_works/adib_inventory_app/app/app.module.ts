import {
    NgModule,
    Component
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import {InventoryComponent} from './inventory.component'


@NgModule({
    declarations: [InventoryComponent],
    imports: [BrowserModule],
    bootstrap: [InventoryComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);