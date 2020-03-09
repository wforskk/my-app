import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IgxNavbarModule, IgxGridModule, IgxDatePickerModule } from 'igniteui-angular';
import { IgniteGridComponent } from './grid/ignite-grid/ignite-grid.component';
import { ParentGridComponent } from './grid/parent-grid/parent-grid.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { Test1Component } from './parent/test1/test1.component';
import { Test2Component } from './parent/test2/test2.component';
import { Test3Component } from './parent/test3/test3.component';

@NgModule({
  declarations: [
    AppComponent,
    IgniteGridComponent,
    ParentGridComponent,
    ParentComponent,
    ChildComponent,
    Test1Component,
    Test2Component,
    Test3Component,
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
