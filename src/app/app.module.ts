import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './Components/shared.module';
import { SectionModule } from './Sections/section.module';
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    SectionModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
