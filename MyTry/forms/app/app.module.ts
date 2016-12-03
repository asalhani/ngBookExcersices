import {
    NgModule,
    Component
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppComponent } from './app.component';

// demo compoents
import {TemplateFormComponent} from './template-form.component'
import {TemplateFormV2Component} from './template-form_v2.component'

import {ModelFormComponent} from './model-form.component'

@NgModule({
    declarations: [AppComponent, TemplateFormComponent, TemplateFormV2Component, ModelFormComponent],
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);