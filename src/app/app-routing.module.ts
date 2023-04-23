import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './public/landing-page/landing-page.component';
import { EscolhaAccaoComponent } from './public/escolha-accao/escolha-accao.component';
import { HomePageComponent } from './public/home-page/home-page.component';
import { LoginComponent } from './public/login/login.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'escolha-accao', component: EscolhaAccaoComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'login', component:LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
