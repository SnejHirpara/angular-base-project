import { Component, OnInit } from '@angular/core';
import { SplashScreenService } from './@shared/services/splash-screen.service';
import { BaseComponent } from './@shared/utils/base.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent extends BaseComponent implements OnInit {
  constructor(private splashScreenService: SplashScreenService) {
    super();
  }

  ngOnInit(): void {
    this.initializeSplashScreen();
  }

  initializeSplashScreen(): void {
    // the outer setTimeout is for temporary purpose until the routes are setted up (after creation of Auth API)
    setTimeout(() => {
      this.splashScreenService.hide();
      window.scrollTo(0, 0);
      setTimeout(() => {
        document.body.classList.add('page-loaded');
      }, this.constants.splashScreenTimeout);
    }, 0);
  }
}
