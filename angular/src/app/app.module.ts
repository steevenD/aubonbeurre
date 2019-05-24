import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatGridListModule, MatSelectModule, MatSliderModule, MatTabsModule} from "@angular/material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { LinearGraphAutomateComponent } from './linear-graph-automate/linear-graph-automate.component';
import {NgxChartsModule} from "@swimlane/ngx-charts";
import { LinearGraphComponent } from './linear-graph/linear-graph.component';
import {AllAutomatesComponent} from "./all-automates/all-automates.component";
import {UnitGraphComponent} from "./unit-graph/unit-graph.component";

@NgModule({
  declarations: [
    AppComponent,
    LinearGraphAutomateComponent,
    LinearGraphComponent,
    AllAutomatesComponent,
    UnitGraphComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSelectModule, MatGridListModule, MatTabsModule,
    FormsModule, ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxChartsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
