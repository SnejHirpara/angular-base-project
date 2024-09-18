import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashScreenComponent } from './ui/splash-screen/splash-screen.component';
import { AuthorizedLayoutComponent } from './ui/authorized-layout/authorized-layout.component';
import { UnauthorizedLayoutComponent } from './ui/unauthorized-layout/unauthorized-layout.component';
import { FooterComponent } from './ui/footer/footer.component';
import { SharedModule } from '../@shared/shared.module';



@NgModule({
  declarations: [SplashScreenComponent, AuthorizedLayoutComponent, UnauthorizedLayoutComponent, FooterComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [SplashScreenComponent, AuthorizedLayoutComponent, UnauthorizedLayoutComponent, FooterComponent]
})
export class ShellModule { }
