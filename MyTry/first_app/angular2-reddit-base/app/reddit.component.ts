import { Component } from '@angular/core';

@Component({
    selector: 'reddit',
    templateUrl: './app/reddit.component.html'
})
export class RedditComponent {
    name: string;
    names: string[];

    constructor() {
        this.name = "adib";
        this.names = ["Ari", "Carlos", "Felipe", "Nate"];
    }

   public addArticle(newTitle: HTMLInputElement, newLink: HTMLInputElement): boolean {
        console.log(newTitle.value + " - " + newLink.value);
        return false;
    }
}

