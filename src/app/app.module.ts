import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';
import {PanelModule} from 'primeng/panel';
import { FuelFormComponent } from './fuel-form/fuel-form.component';
import { GeneralFormComponent } from './general-form/general-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FuelFormComponent,
    GeneralFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    PanelModule,
    TableModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    FuelFormComponent
  ],
})
export class AppModule { }
