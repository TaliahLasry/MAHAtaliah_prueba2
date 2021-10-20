import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//componentes
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';

//angular material
import { MatSliderModule } from '@angular/material/slider';
// import {MatDatepickerModule, MatNativeDateModule} from '@angular/material'
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatSnackBarModule} from '@angular/material/snack-bar'; 
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatLabelModule}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutComponent,
    FooterComponent,
    LoginComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    // MatDatepickerModule, 
    // MatNativeDateModule,
   MatFormFieldModule,
   MatInputModule,
   MatButtonModule,
   FormsModule, 
   ReactiveFormsModule,
   MatSnackBarModule,
   MatProgressSpinnerModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
