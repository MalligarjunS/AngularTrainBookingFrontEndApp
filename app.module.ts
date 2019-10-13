import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule,
   MatInputModule, 
   MatCardModule,
   MatButtonModule,
   MatToolbarModule,
   MatNativeDateModule,
   MatTableModule,
   MatSortModule,
   MatPaginatorModule,
   MatTooltipModule,
   MatIconModule,
   MatOptionModule,
   MatSelectModule} from '@angular/material';
 import {MatRadioModule} from '@angular/material/radio';
 import {MatDatepickerModule} from '@angular/material/datepicker';
import { LoginComponent} from './login/login.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { SignupModule} from './signup/signup.module';
import { SignupComponent } from './signup/signup.component';
import { TrainComponent } from './train/train.component';
import { PassengerComponent } from './passenger/passenger.component';
import { PaymentComponent } from './payment/payment.component';
import { SetupComponent } from './adminsetup/setup/setup.component';
import { AdminsetupService } from './adminsetup/setup/adminsetup.service';
import { SearchPageComponent } from './adminsetup/search-page/search-page.component';

@NgModule({
  declarations: [
    AppComponent,LoginComponent, HeaderComponent, FooterComponent,  TrainComponent, PassengerComponent, PaymentComponent,SignupComponent, SetupComponent, SearchPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    FormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatSortModule,
    MatPaginatorModule,
    MatTableModule,
    MatTooltipModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule
  ],
  providers: [MatDatepickerModule,AdminsetupService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
