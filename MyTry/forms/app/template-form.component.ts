import {Component, OnInit} from '@angular/core';
import {Contact} from './contact';

@Component({
    selector:'two-way-binding-form',
    templateUrl: './app/template-form.component.html'
})
export class TemplateFormComponent implements OnInit{

        newContact:Contact;

        onSubmit():boolean{
            return false;
        }

        ngOnInit():void{
            this.newContact = 
                new Contact('','','',0);
        }

}