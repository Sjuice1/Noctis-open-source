import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { register } from 'swiper/element/bundle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavigationComponent } from './navigation/navigation.component';
import { MainModule } from './main/main.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
register();

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
