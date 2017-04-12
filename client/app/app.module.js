"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var ng2_pagination_1 = require("ng2-pagination");
var ngx_modal_1 = require("ngx-modal");
var app_component_1 = require("./app.component");
var header_component_1 = require("./header/header.component");
var footer_component_1 = require("./footer/footer.component");
var home_component_1 = require("./home/home.component");
var login_component_1 = require("./login/login.component");
var register_component_1 = require("./register/register.component");
var todo_add_component_1 = require("./todo/todo-add.component");
var todo_list_component_1 = require("./todo/todo-list.component");
var todo_detail_component_1 = require("./todo/todo-detail.component");
var login_service_1 = require("./login/login.service");
var register_service_1 = require("./register/register.service");
var todo_service_1 = require("./todo/todo.service");
var app_routing_1 = require("./config/app.routing");
var app_guard_1 = require("./config/app.guard");
var http_service_1 = require("./utils/http.service");
var item_date_pipe_1 = require("./filters/item-date.pipe");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            router_1.RouterModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            ngx_modal_1.ModalModule,
            ng2_pagination_1.Ng2PaginationModule,
            app_routing_1.AppRouter
        ],
        declarations: [
            app_component_1.AppComponent,
            header_component_1.HeaderComponent,
            footer_component_1.FooterComponent,
            home_component_1.HomeComponent,
            login_component_1.LoginComponent,
            register_component_1.RegisterComponent,
            todo_add_component_1.TodoAddComponent,
            todo_list_component_1.TodoListComponent,
            todo_detail_component_1.TodoDetailComponent
        ],
        providers: [app_guard_1.AppGuardService, login_service_1.LoginService, register_service_1.RegisterService, todo_service_1.ToDOService, item_date_pipe_1.ItemDateFilter,
            {
                provide: http_service_1.AppHttpService,
                useFactory: function (backend, options, router) {
                    return new http_service_1.AppHttpService(backend, options, router);
                },
                deps: [http_1.XHRBackend, http_1.RequestOptions, router_1.Router]
            }],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map