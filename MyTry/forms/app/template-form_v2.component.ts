import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { Contact } from './contact';
import { User } from './user'

@Component({
    selector: 'two-way-binding-form-v2',
    templateUrl: './app/template-form_v2.component.html'
})
export class TemplateFormV2Component {
    user: User = {
        name: '',
        account: {
            email: '',
            confirm: ''
        }
    };
    submitUser(form:NgForm){
        console.log(form.value, form.valid);
    }
}