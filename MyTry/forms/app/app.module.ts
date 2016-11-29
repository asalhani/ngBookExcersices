import {
    NgModule,
    Component
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppComponent } from './app.component';
import { SkuFormComponent } from './sku-form.component';

// demo compoents
import {DemoFormBindingComponent} from './demo-form-binding.component'

@NgModule({
    declarations: [AppComponent, SkuFormComponent, DemoFormBindingComponent],
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);