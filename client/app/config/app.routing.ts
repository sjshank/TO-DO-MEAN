import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { TodoAddComponent } from '../todo/todo-add.component';
import { TodoListComponent } from '../todo/todo-list.component';
import { TodoDetailComponent } from '../todo/todo-detail.component';

import { AppGuardService } from './app.guard';

const appRoutes: Routes = [
    { path: '',  component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'list', component: TodoListComponent, canActivate: [AppGuardService] },
    { path: 'add', component: TodoAddComponent, canActivate: [AppGuardService] },
    { path: '**', redirectTo: 'home' }
];

export const AppRouter = RouterModule.forRoot(appRoutes);