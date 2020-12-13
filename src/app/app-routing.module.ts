import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { HomeComponent } from './home/home.component';
import { ListRestaurantComponent } from './list-restaurant/list-restaurant.component';
import { LoginRestaurantComponent } from './login-restaurant/login-restaurant.component';
import { RegisterRestaurantComponent } from './register-restaurant/register-restaurant.component';
import { UpdateRestaurantComponent } from './update-restaurant/update-restaurant.component';


const routes: Routes = [
  {component: HomeComponent,path:''},
  {component: AddRestaurantComponent,path:'add'},
  {component: ListRestaurantComponent,path:'list'},
  {component: LoginRestaurantComponent,path:'login'},
  {component: UpdateRestaurantComponent,path:'update/:'},
  {component: RegisterRestaurantComponent,path:'register'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
