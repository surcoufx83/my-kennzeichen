import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './routes/home/home';
import { Login } from './routes/login/login';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: Home },
  { path: 'login', pathMatch: 'full', component: Login },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
