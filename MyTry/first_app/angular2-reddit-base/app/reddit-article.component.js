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
var ArticleComponent = (function () {
    function ArticleComponent() {
        this.title = "Angular 2";
        this.link = "http://angular.io";
        this.votes = 10;
    }
    ArticleComponent.prototype.voteUp = function () {
        this.votes++;
        return false;
    };
    ArticleComponent.prototype.voteDown = function () {
        this.votes--;
        return false;
    };
    ArticleComponent = __decorate([
        core_1.Component({
            selector: "reddit-article",
            templateUrl: "./app/reddit-article.component.html",
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