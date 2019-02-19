import { Injectable } from '@angular/core';
import { of, throwError, Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { UserModel } from '../models/user.model';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  _isLogged: BehaviorSubject<boolean>;
  users: UserModel[];
  user: number;

  constructor(private router: Router) {

    this._isLogged = new BehaviorSubject<boolean>(false);
    this.users = [
      {
        name: 'a',
        email: 'a@a.com',
        password: 'aaa',
        age: 19,
        gender: 1,
        cellphone: '045346346'
      },
      {
        name: 'b',
        email: 'b@b.com',
        password: 'bbb',
        age: 24,
        gender: 2,
        cellphone: '095346886'
      },
      {
        name: 'c',
        email: 'c@c.com',
        password: 'ccc',
        age: 21,
        gender: 3,
        cellphone: '056786767'
      }
    ];
    this.user = 0;
  }

  login(email: string, password: string): Observable<(string | number)[]> {
    for (let i = 0; i < this.users.length; i++) {
      if (email === this.users[i].email && password === this.users[i].password)
        this.user = this.users[i].gender;
    }
    if (this.user) {
      return of(['1111111111111', this.user]).pipe(
        map(res => {
          this.setToken(res[0]);
          this._isLogged.next(true);
          return res;
        })
      );
    }
    else {
      return throwError('user or password incorrect');
    };
  };

  private setToken(t: string | number) {
    window.localStorage.setItem(environment.tokenKey, t);
  };

  private getToken() {
    return window.localStorage.getItem(environment.tokenKey);
  };

  private deliteToken() {
    window.localStorage.removeItem(environment.tokenKey);
  };

  isLogged(): Observable<boolean> {
    return this._isLogged;
  };

  logout() {
    this._isLogged.next(false);
    this.deliteToken();
    this.router.navigate(["Login"]);
  };

};
