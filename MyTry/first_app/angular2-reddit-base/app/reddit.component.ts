import { Component } from '@angular/core';
import { Article } from './article'

@Component({
    selector: 'reddit',
    templateUrl: './app/reddit.component.html',
})
export class RedditComponent {
    articles: Article[];
    myArticle:Article= new Article("title", "link", 8);

    constructor() {
        this.articles = [
            new Article('Angular 2', 'http://angular.io', 3),
            new Article('Fullstack', 'http://fullstack.io', 2),
            new Article('Angular Homepage', 'http://angular.io', 1),
        ];
    }

    sortedArticles():Article[]{
        return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
    }
    public addArticle(newTitle: HTMLInputElement, newLink: HTMLInputElement): boolean {
        this.articles.push(new Article(newTitle.value, newLink.value,0));
        newTitle.value = '';
        newLink.value = '';
        console.log(newTitle.value + " - " + newLink.value);
        return false;
    }
}

