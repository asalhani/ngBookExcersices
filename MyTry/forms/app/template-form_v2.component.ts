import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';
import { User } from './user'

@Component({
    selector: 'two-way-binding-form-v2',
    templateUrl: './app/template-form_v2.component.html'
})
export class TemplateFormV2Component {
    user: User = {
        name: 'adib',
        account: {
            email: '',
            confirm: ''
        }
    };

    /*
        Here we’re using Object destructuring to fetch the value and valid properties from 
        that #f reference we exported and passed into onSubmit.
    */
    submitUser({ value, valid }: { value: User, valid: boolean }) {
    console.log(value, valid);
  }
}