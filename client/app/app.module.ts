import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, RequestOptions, XHRBackend } from '@angular/http';
import { RouterModule, Router } from '@angular/router';
import { Ng2PaginationModule } from 'ng2-pagination';
import { ModalModule } from "ngx-modal";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TodoAddComponent } from './todo/todo-add.component';
import { TodoListComponent } from './todo/todo-list.component';
import { TodoDetailComponent } from './todo/todo-detail.component';


import { LoginService } from './login/login.service';
import { RegisterService } from './register/register.service';
import { ToDOService } from './todo/todo.service';

import { AppRouter } from './config/app.routing';
import { AppGuardService } from './config/app.guard';


import { AppHttpService } from './utils/http.service';

import { ItemDateFilter } from './filters/item-date.pipe';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        ModalModule,
        Ng2PaginationModule,
        AppRouter
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        TodoAddComponent,
        TodoListComponent,
        TodoDetailComponent
    ],
    providers: [AppGuardService, LoginService, RegisterService, ToDOService, ItemDateFilter, 
        {
            provide: AppHttpService,
            useFactory: (backend: XHRBackend, options: RequestOptions, router: Router) => {
                return new AppHttpService(backend, options, router);
            },
            deps: [XHRBackend, RequestOptions, Router]
        }],
    bootstrap: [AppComponent]
})
export class AppModule { }
