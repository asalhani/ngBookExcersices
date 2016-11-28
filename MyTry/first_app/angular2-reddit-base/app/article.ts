export class Article{
    constructor(public title:string,public link:string ,public votes:number){
        votes = votes || 0;
    }

    voteUp():void{
        this.votes++;
    }

    voteDown():void{
        this.votes--;
    }
}