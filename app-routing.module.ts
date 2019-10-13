import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes} from '@angular/router'
import {TrainComponent} from './train/train.component'
import { PassengerComponent} from './passenger/passenger.component'
import { PaymentComponent} from './payment/payment.component'
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SetupComponent} from './adminsetup/setup/setup.component';
import { SearchPageComponent } from './adminsetup/search-page/search-page.component';

const routes: Routes =[
  {path :"",redirectTo : "/login",pathMatch : "full"},
  {path : "login",component:LoginComponent},
  {path : "signup",component: SignupComponent},
  {path :"train",component:TrainComponent},
  {path :"passenger",component:PassengerComponent},
  {path :"payment",component:PaymentComponent},
  {path :"setup",component:SetupComponent},
  {path : "search",component:SearchPageComponent}
  //{path :"**",redirectTo : "/login",pathMatch : "full"}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports :[RouterModule]
})
export class AppRoutingModule { }
