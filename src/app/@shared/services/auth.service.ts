import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn$ = new Subject<boolean>();

  constructor() { }

  login(): void { }

  logout(): void { }
}
