import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PagesRoutingModule } from './pages/pages-routing.module';

const routes: Routes = [
  //path '/dashboard' PagesRoutingModule
  //path '/auth' AuthRoutingModule
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent }];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
