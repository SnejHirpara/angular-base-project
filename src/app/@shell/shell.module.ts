import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashScreenComponent } from './ui/splash-screen/splash-screen.component';
import { AuthorizedLayoutComponent } from './ui/authorized-layout/authorized-layout.component';
import { UnauthorizedLayoutComponent } from './ui/unauthorized-layout/unauthorized-layout.component';



@NgModule({
  declarations: [SplashScreenComponent, AuthorizedLayoutComponent, UnauthorizedLayoutComponent],
  imports: [
    CommonModule
  ],
  exports: [SplashScreenComponent, AuthorizedLayoutComponent]
})
export class ShellModule { }
