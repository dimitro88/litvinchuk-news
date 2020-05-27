import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { CreateNewsDialogComponent } from './shared/components/create-news-dialog/create-news-dialog.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {NgxMatSelectSearchModule} from 'ngx-mat-select-search';
import {MaterialModule} from './shared/material/material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    CreateNewsDialogComponent
  ],
  imports: [
    NoopAnimationsModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    NgxMatSelectSearchModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  entryComponents: [
    CreateNewsDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
