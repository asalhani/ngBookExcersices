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
var forms_1 = require('@angular/forms');
var ModelFormComponent = (function () {
    function ModelFormComponent(_fb) {
        this._fb = _fb;
        this.events = [];
    }
    ModelFormComponent.prototype.ngOnInit = function () {
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
            name: ['', [forms_1.Validators.required, forms_1.Validators.minLength(5)]],
            address: this._fb.group({
                street: ['', [forms_1.Validators.required, forms_1.Validators.maxLength(4)]],
                postcode: ['8000']
            })
        });
    };
    ModelFormComponent.prototype.save = function (model, isValid) {
        this.submitted = true;
        // check if model is valid
        // if valid, call API to save customer
        console.log(model, isValid);
    };
    ModelFormComponent = __decorate([
        core_1.Component({
            selector: 'model-form',
            templateUrl: './app/model-form.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], ModelFormComponent);
    return ModelFormComponent;
}());
exports.ModelFormComponent = ModelFormComponent;
//# sourceMappingURL=model-form.component.js.map