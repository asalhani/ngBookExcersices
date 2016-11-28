import {
    NgModule,
    Component
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import {RedditComponent} from './reddit.component';
import {ArticleComponent} from './reddit-article.component';


@NgModule({
    declarations: [RedditComponent, ArticleComponent],
    imports: [BrowserModule],
    bootstrap: [RedditComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);