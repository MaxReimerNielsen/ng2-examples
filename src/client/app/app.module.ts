import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { HttpRequestsModule } from './+http-requests/http-requests.module';
import { DownloadsModule } from './+downloads/downloads.module';

@NgModule({
  imports: [BrowserModule, HttpModule, routing, HttpRequestsModule, DownloadsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }
