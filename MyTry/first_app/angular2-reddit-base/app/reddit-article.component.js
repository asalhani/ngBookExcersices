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
var ArticleComponent = (function () {
    function ArticleComponent() {
        // this.article = new Article("Angular 1", "http://angular.io", 10);
    }
    ArticleComponent.prototype.voteUp = function () {
        this.article.voteUp();
        return false;
    };
    ArticleComponent.prototype.voteDown = function () {
        this.article.voteDown();
        return false;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', article_1.Article)
    ], ArticleComponent.prototype, "article", void 0);
    ArticleComponent = __decorate([
        core_1.Component({
            selector: "reddit-article",
            templateUrl: "./app/reddit-article.component.html",
            // inputs:['article'],
            //This tells Angular that on the host element 
            //(the reddit-article tag) we want to set the class attribute to have “row”.
            host: { class: "row" }
        }), 
        __metadata('design:paramtypes', [])
    ], ArticleComponent);
    return ArticleComponent;
}());
exports.ArticleComponent = ArticleComponent;
//# sourceMappingURL=reddit-article.component.js.map