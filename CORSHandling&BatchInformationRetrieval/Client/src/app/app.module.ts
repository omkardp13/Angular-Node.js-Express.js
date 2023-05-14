/*
This is the code for the main AppModule of an Angular application. The NgModule decorator is used to decorate the AppModule class.

*/


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarvellousService } from './marvellous.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({

  //The declarations array contains the list of components, directives and pipes that belong to the current module. In this case, it only has one component, AppComponent.

  declarations: [
    AppComponent
  ],

  //The imports array contains the list of external modules that the current module depends on. In this case, it includes BrowserModule which is needed to run the app in a browser, AppRoutingModule which is the routing module, and HttpClientModule which provides HTTP services.

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule   
  ],

  //providers array is used to declare services that the module uses. Here, MarvellousService is declared as a provider.

  providers: [MarvellousService],   

  //bootstrap is used to declare the component that should be bootstrapped when the app starts, and in this case it is AppComponent.
  bootstrap: [AppComponent]
})
export class AppModule { }
