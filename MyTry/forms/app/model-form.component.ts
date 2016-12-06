import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'model-form',
    templateUrl: './app/model-form.component.html'
})

export class ModelFormComponent implements OnInit {

    myForm: FormGroup;
    public submitted: boolean;
    public events: any[] = [];

    constructor(private _fb: FormBuilder) {

    }

    ngOnInit() {
        // 1st way to inilize form-model. This is Logn way
        /*
        this.myForm = new FormGroup({
            name: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)]),
            address: new FormGroup({
                street: new FormControl('', <any>Validators.required),
                postcode: new FormControl('8000')
            })
        });
        */
        
        // 2nd way to inilize form-model. This is Shorter way
        this.myForm = this._fb.group({
            name: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
            address: this._fb.group({
                street: ['', [<any>Validators.required, <any>Validators.maxLength(4)]],
                postcode: ['8000']
            })
        });
    }

    save(model: User, isValid: boolean) {
        this.submitted = true;

        // check if model is valid
        // if valid, call API to save customer
        console.log(model, isValid);
    }
}