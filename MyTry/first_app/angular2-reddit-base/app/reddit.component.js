"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var article_1 = require('./article');
var RedditComponent = (function () {
    function RedditComponent() {
        this.myArticle = new article_1.Article("title", "link", 8);
        this.articles = [
            new article_1.Article('Angular 2', 'http://angular.io', 3),
            new article_1.Article('Fullstack', 'http://fullstack.io', 2),
            new article_1.Article('Angular Homepage', 'http://angular.io', 1),
        ];
    }
    RedditComponent.prototype.sortedArticles = function () {
        return this.articles.sort(function (a, b) { return b.votes - a.votes; });
    };
    RedditComponent.prototype.addArticle = function (newTitle, newLink) {
        this.articles.push(new article_1.Article(newTitle.value, newLink.value, 0));
        newTitle.value = '';
        newLink.value = '';
        console.log(newTitle.value + " - " + newLink.value);
        return false;
    };
    RedditComponent = __decorate([
        core_1.Component({
            selector: 'reddit',
            templateUrl: './app/reddit.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], RedditComponent);
    return RedditComponent;
}());
exports.RedditComponent = RedditComponent;
//# sourceMappingURL=reddit.component.js.map