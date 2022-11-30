import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from '../../header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from '../../login/login.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule],
  declarations: [AppComponent, HeaderComponent, LoginComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
