"use strict";
var Article = (function () {
    function Article(title, link, votes) {
        this.title = title;
        this.link = link;
        this.votes = votes;
        votes = votes || 0;
    }
    Article.prototype.voteUp = function () {
        this.votes++;
    };
    Article.prototype.voteDown = function () {
        this.votes--;
    };
    return Article;
}());
exports.Article = Article;
//# sourceMappingURL=article.js.map