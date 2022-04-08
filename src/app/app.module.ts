import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


//componentes
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';




//angular material
import { MatSliderModule } from '@angular/material/slider';
// import {MatDatepickerModule, MatNativeDateModule} from '@angular/material'
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule, MatSelectionList } from '@angular/material/list';
import {MatDatepickerModule, MatDateSelectionModel} from '@angular/material/datepicker';
import { MatOptionModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NgChartsModule } from 'ng2-charts';

//import {MatLabelModule}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent,
    SidenavComponent
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
   MatProgressSpinnerModule,
   MatIconModule,
   LayoutModule,
   MatToolbarModule,
   MatListModule,
   MatDatepickerModule, //no funciona
   MatOptionModule,
   MatSelectModule,
   MatSidenavModule,
   NgChartsModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
