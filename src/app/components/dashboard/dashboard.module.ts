import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
//import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { MatFormField } from '@angular/material/form-field';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatFormField
    // SharedModule
  ]
})
export class DashboardModule { }
