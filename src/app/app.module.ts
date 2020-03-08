import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IgxNavbarModule, IgxGridModule, IgxDatePickerModule } from 'igniteui-angular';
import { IgniteGridComponent } from './grid/ignite-grid/ignite-grid.component';
import { ParentGridComponent } from './grid/parent-grid/parent-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    IgniteGridComponent,
    ParentGridComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IgxNavbarModule,
    IgxGridModule,
    IgxDatePickerModule,
    BrowserAnimationsModule,
    HammerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
