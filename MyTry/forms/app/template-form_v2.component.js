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
var TemplateFormV2Component = (function () {
    function TemplateFormV2Component() {
        this.user = {
            name: 'adib',
            account: {
                email: '',
                confirm: ''
            }
        };
    }
    /*
        Here we’re using Object destructuring to fetch the value and valid properties from
        that #f reference we exported and passed into onSubmit.
    */
    TemplateFormV2Component.prototype.submitUser = function (_a) {
        var value = _a.value, valid = _a.valid;
        console.log(value, valid);
    };
    TemplateFormV2Component = __decorate([
        core_1.Component({
            selector: 'two-way-binding-form-v2',
            templateUrl: './app/template-form_v2.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], TemplateFormV2Component);
    return TemplateFormV2Component;
}());
exports.TemplateFormV2Component = TemplateFormV2Component;
//# sourceMappingURL=template-form_v2.component.js.map