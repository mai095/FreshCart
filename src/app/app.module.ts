import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { CategoryComponent } from './category/category.component';
import { FooterComponent } from './footer/footer.component';
import { LogInComponent } from './log-in/log-in.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { LimitTextPipe } from './limit-text.pipe';
import { SearchPipe } from './search.pipe';
import { CheckoutComponent } from './checkout/checkout.component';
import { AllordersComponent } from './allorders/allorders.component';
import { AddheaderInterceptor } from './cart/addheader.interceptor';
import { LoaderComponent } from './loader/loader.component';
import { SwalComponent, SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { WishlistComponent } from './wishlist/wishlist.component';
import Swal from 'sweetalert2'
import { ToastrModule } from 'ngx-toastr';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    CategoryComponent,
    FooterComponent,
    LogInComponent,
    NotFoundComponent,

    SignUpComponent,
    ProductdetailsComponent,
    MainSliderComponent,
    LimitTextPipe,
    SearchPipe,
    CheckoutComponent,
    AllordersComponent,
    LoaderComponent,
    WishlistComponent,
    ForgetpasswordComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    CarouselModule,
    FormsModule,
    SweetAlert2Module.forRoot(),
    ToastrModule.forRoot()

  ],
  providers: [

    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddheaderInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
