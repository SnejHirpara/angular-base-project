import { animate, AnimationBuilder, style } from '@angular/animations';
import { ElementRef, Injectable } from '@angular/core';
import { Constants } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class SplashScreenService {
  private splashScreenEl!: ElementRef;
  private animationTime = 500;
  stopped = false;

  constructor(private animationBuilder: AnimationBuilder) { }

  init(element: ElementRef): void {
    this.splashScreenEl = element;
  }

  hide(): void {
    if (this.stopped) {
      return;
    }

    const player = this.animationBuilder.build([
      style({ 'opacity': 1 }),
      animate(this.animationTime, style({
        'opacity': 0
      }))
    ]).create(this.splashScreenEl.nativeElement);

    player.onDone(() => {
      this.splashScreenEl.nativeElement.remove();
      this.stopped = true;
    });

    setTimeout(() => player.play(), Constants.splashScreenTimeout)
  }
}
