import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { AdminDashComponent } from './Dashboards/admin-dash/admin-dash.component';
import { RetailerDashComponent } from './Dashboards/retailer-dash/retailer-dash.component';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './login-list/admin-login/admin-login.component';
import { LoginComponent } from './login-list/login/login.component';
import { RetailerLoginComponent } from './login-list/retailer-login/retailer-login.component';
import { ProductsComponent } from './products/products.component';
import { RetailerSignupComponent } from './SignUp-list/retailer-signup/retailer-signup.component';
import { SignUpComponent } from './SignUp-list/sign-up/sign-up.component';
import { SingleProductComponent } from './single-product/single-product.component';


const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'home', component: HomeComponent },
  {path:'singleproduct/:id',component:SingleProductComponent},
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'app-retailer-login', component: RetailerLoginComponent },
  { path: 'app-admin-login', component: AdminLoginComponent },
  { path: 'app-sign-up', component: SignUpComponent },
  { path: 'retailer-signup', component: RetailerSignupComponent },
  { path: 'retailer-dash', component: RetailerDashComponent },
  {path:'admin-dash',component:AdminDashComponent},
  {path:'cart',component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
