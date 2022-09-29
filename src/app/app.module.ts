import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatTabsModule} from '@angular/material/tabs';
imports: [    RouterModule,  ]
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopProductsComponent } from './home/top-products/top-products.component';

import {ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login-list/login/login.component';
import { RetailerLoginComponent } from './login-list/retailer-login/retailer-login.component';
import { AdminLoginComponent } from './login-list/admin-login/admin-login.component';
import { SignUpComponent } from './SignUp-list/sign-up/sign-up.component';
import { RetailerSignupComponent } from './SignUp-list/retailer-signup/retailer-signup.component';
import { RetailerDashComponent } from './Dashboards/retailer-dash/retailer-dash.component';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminDashComponent } from './Dashboards/admin-dash/admin-dash.component';
import { CartComponent } from './cart/cart.component';
import { SingleProductComponent } from './single-product/single-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopProductsComponent,
    LoginComponent,
    RetailerLoginComponent,
    AdminLoginComponent,
    SignUpComponent,
    RetailerSignupComponent,
    RetailerDashComponent,
    ProductsComponent,
    AdminDashComponent,
    CartComponent,
    SingleProductComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatTabsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
