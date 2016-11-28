import {Component} from '@angular/core'

@Component({
    selector: "reddit-article",
    templateUrl: "./app/reddit-article.component.html",
    
    //This tells Angular that on the host element 
    //(the reddit-article tag) we want to set the class attribute to have “row”.
    host:{class:"row"}
})
export class ArticleComponent{
    votes:number;
    title:string;
    link:string;

    constructor(){
        this.title = "Angular 2";
        this.link = "http://angular.io";
        this.votes = 10;
    }

    voteUp():boolean{
        this.votes++;    
        return false;
    }

    voteDown():boolean{
        this.votes--;
         return false;
    }
}