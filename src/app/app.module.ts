import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { SalaryTableComponent } from './components/salary-table/salary-table.component';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { FormComponent } from './components/form/form.component';
import { DialogModule } from 'primeng/dialog';
@NgModule({
  declarations: [AppComponent, SalaryTableComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    HttpClientModule,
    DynamicDialogModule,
  ],
  entryComponents: [FormComponent],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
