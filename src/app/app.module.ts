import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components';

import { DataSharing } from './services/data-sharing.service';
import { GentlemanState } from './state-management/models/gentleman-state-manager';
import { SourceOfTruth } from './state-management/store/store';

export const DataSharingState = new DataSharing();
export const GentlemanStateManager = new GentlemanState(SourceOfTruth);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToolbarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
