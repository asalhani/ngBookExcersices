import {
    NgModule,
    Component
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import {RedditComponent} from './reddit.component'


@NgModule({
    declarations: [RedditComponent],
    imports: [BrowserModule],
    bootstrap: [RedditComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);