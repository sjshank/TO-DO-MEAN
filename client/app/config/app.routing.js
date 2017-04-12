"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("../home/home.component");
var login_component_1 = require("../login/login.component");
var register_component_1 = require("../register/register.component");
var todo_add_component_1 = require("../todo/todo-add.component");
var todo_list_component_1 = require("../todo/todo-list.component");
var app_guard_1 = require("./app.guard");
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'list', component: todo_list_component_1.TodoListComponent, canActivate: [app_guard_1.AppGuardService] },
    { path: 'add', component: todo_add_component_1.TodoAddComponent, canActivate: [app_guard_1.AppGuardService] },
    { path: '**', redirectTo: 'home' }
];
exports.AppRouter = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map