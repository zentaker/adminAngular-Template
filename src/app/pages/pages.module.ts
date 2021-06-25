import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DasboardComponent } from './dasboard/dasboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module.ts.module';

import { ChartsModule } from 'ng2-charts';
import { AccountSettingsComponent } from './account-settings/account-settings.component';


@NgModule({
  declarations: [
    DasboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    AccountSettingsComponent,
  ],
  exports: [
    DasboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    FormsModule,
    ComponentsModule,
    ChartsModule

  ],
})
export class PagesModule {}
