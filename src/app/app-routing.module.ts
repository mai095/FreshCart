import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CategoryComponent } from './category/category.component';
import { LogInComponent } from './log-in/log-in.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { authGuard } from './service/auth.guard';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AllordersComponent } from './allorders/allorders.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { CurrencyPipe } from '@angular/common';





const routes: Routes = [ 
  { path: '', redirectTo: "home", pathMatch: 'full' },
  { path: 'home', canActivate: [authGuard], component: HomeComponent },
  { path: 'about', canActivate: [authGuard], component: AboutComponent },
  { path: 'category', canActivate: [authGuard], component: CategoryComponent },
  { path: 'productDetails/:id', canActivate: [authGuard], component: ProductdetailsComponent },
  { path: 'wishlist', canActivate: [authGuard], component: WishlistComponent },
  { path: 'checkout/:cartId', canActivate: [authGuard], component: CheckoutComponent },
  { path: 'login', component: LogInComponent },
  { path: 'allorders', component: AllordersComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'forgetpassword', component: ForgetpasswordComponent },
  { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
  { path: 'brand', loadChildren: () => import('./brand/brand.module').then(m => m.BrandModule) },

  { path: '**', component: NotFoundComponent }
];

// param =>Mandatory
// queryParam=> Optional




@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers:[CurrencyPipe]
})
export class AppRoutingModule { }
