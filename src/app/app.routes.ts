import { Routes } from '@angular/router';

import { OrderComponent } from './order/order.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    },
    {
        path: 'login', component: LoginComponent
    },

    {
        path: 'home',  component: HomeComponent
    }

];
