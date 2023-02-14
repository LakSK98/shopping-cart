import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:"full"},
  {path:'home',component :HomepageComponent},
  {path:'home/:id',component :HomepageComponent},
  {path:'login', component: RegistrationComponent},
  {path:'search/:id', component:SearchResultsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
