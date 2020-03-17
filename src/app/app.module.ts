import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IgxNavbarModule, IgxGridModule, IgxDatePickerModule } from 'igniteui-angular';
import { IgniteGridComponent } from './grid/ignite-grid/ignite-grid.component';
import { Hammer } from 'hammerjs/hammer'

@NgModule({
  declarations: [
    AppComponent,
    IgniteGridComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IgxNavbarModule,
    IgxGridModule,
    IgxDatePickerModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
