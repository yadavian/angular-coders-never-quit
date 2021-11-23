import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';
import { HighlightDirective } from './directives/highlight.directive';
import { CcPipe } from './pipes/cc.pipe';
import { JokeComponent } from './joke/joke.component';

import { HttpClientModule } from '@angular/common/http';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { ComponentB1Component } from './component-b1/component-b1.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {  ReactiveFormsModule,FormsModule} from "@angular/forms";
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing-module';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    UsersComponent,
    HighlightDirective,
    CcPipe,
    JokeComponent,
    ComponentAComponent,
    ComponentBComponent,
    ComponentB1Component,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    ProductsComponent,
    HomeComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
