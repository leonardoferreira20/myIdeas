import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { RegisterPageComponent } from './auth/register-page/register-page.component';
import { StarterPageComponent } from './starter-page/starter-page.component';

const routes: Routes = [
   { path: '', component: StarterPageComponent },
   { path: 'login', component: LoginPageComponent },
   { path: 'register', component: RegisterPageComponent },
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule { }
