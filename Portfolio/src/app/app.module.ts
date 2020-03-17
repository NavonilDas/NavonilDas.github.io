import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ExperienceComponent } from './experience/experience.component';
// import { LazyLoadImageModule, scrollPreset } from 'ng-lazyload-image';


@NgModule({
  declarations: [
    AppComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
