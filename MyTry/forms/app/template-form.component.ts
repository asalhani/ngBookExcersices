import {Component, OnInit} from '@angular/core';
import {Contact} from './contact';

@Component({
    selector:'two-way-binding-form',
    templateUrl: './app/template-form.component.html'
})
export class TemplateFormComponent implements OnInit{

        newContact:Contact;
        formValue:any;

        firstName:string;
        lastName:string;

        submitContact(value:any):void{
            console.log("fistName value from Component: " + this.firstName);
            this.formValue = value;
            console.log(value);
        }

        onSubmit():boolean{
            return false;
        }

        ngOnInit():void{
            this.newContact = 
                new Contact('','','',0);
        }

}