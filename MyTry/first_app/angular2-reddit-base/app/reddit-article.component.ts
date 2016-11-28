import { Component, Input } from '@angular/core'
import {Article} from './article'

@Component({
    selector: "reddit-article",
    templateUrl: "./app/reddit-article.component.html",
    // inputs:['article'],
    //This tells Angular that on the host element 
    //(the reddit-article tag) we want to set the class attribute to have “row”.
    host: { class: "row"}
})
export class ArticleComponent {
   @Input() article:Article;

    constructor() {
        // this.article = new Article("Angular 1", "http://angular.io", 10);
    }

    voteUp(): boolean {
        this.article.voteUp();
        return false;
    }

    voteDown(): boolean {
        this.article.voteDown();    
        return false;
    }
}