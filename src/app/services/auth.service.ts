import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = false;
  private rolesSubject = new BehaviorSubject<string[]>([]);
  public roles$: Observable<string[]> = this.rolesSubject.asObservable();

  constructor() { }

  login(role: string): Observable<boolean> {
    if (role === 'admin') {
      const roles: string[] = ['admin']; 

      this.rolesSubject.next(roles);
      this.loggedIn = true;
      return new Observable(observer => {
        observer.next(true);
        // observer.complete();
      });
    } else {
      this.loggedIn = false;
      return new Observable(observer => {
        observer.next(false);
        // observer.complete();
      });
    }
  }

  logout(): void {
    this.loggedIn = false;
    this.rolesSubject.next([]);
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
