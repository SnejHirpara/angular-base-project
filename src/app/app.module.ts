import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ShellModule } from './@shell/shell.module';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from './@shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './pages/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ShellModule,
    ButtonModule,
    SharedModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
