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
var platform_browser_1 = require('@angular/platform-browser');
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var inventory_component_1 = require('./inventory.component');
var product_list_component_1 = require('./product-list.component');
var product_row_component_1 = require('./product-row.component');
var product_image_component_1 = require('./product-image.component');
var product_department_component_1 = require('./product-department.component');
var product_price_dispaly_component_1 = require('./product-price-dispaly.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [inventory_component_1.InventoryComponent,
                product_list_component_1.ProductListComponent,
                product_row_component_1.ProductRowComponent,
                product_image_component_1.ProductImageComponent,
                product_department_component_1.ProductDepartmentComponent,
                product_price_dispaly_component_1.ProductPriceDispalyComponent],
            imports: [platform_browser_1.BrowserModule],
            bootstrap: [inventory_component_1.InventoryComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=app.module.js.map