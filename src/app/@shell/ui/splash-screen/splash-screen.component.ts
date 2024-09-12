import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SplashScreenService } from '../../../@shared/services/splash-screen.service';
import { BaseComponent } from '../../../@shared/utils/base.component';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrl: './splash-screen.component.scss'
})
export class SplashScreenComponent extends BaseComponent implements OnInit {
  @ViewChild('splashScreen', { static: true }) splashScreenEl!: ElementRef;

  constructor(private splashScreenService: SplashScreenService) {
    super();
  }

  ngOnInit(): void {
    this.splashScreenService.init(this.splashScreenEl);
  }
}
