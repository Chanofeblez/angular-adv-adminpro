import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PagesModule } from './pages/pages.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';




@NgModule({
  declarations: [
    AppComponent,    
    NopagefoundComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
