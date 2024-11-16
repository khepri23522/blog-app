import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private cookieService: CookieService) {}

  // registerUser(newUser: any): Observable<any> {
  //   newUser.id = '';
  //   return this.http.post<any>(this.apiUrl + '/user/register', newUser);
  // }

  login(data: any): Observable<any> {
    const user = {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka',
    };
    return this.http.post('https://reqres.in/api/login', data);
  }

  setToken(token: string) {
    this.cookieService.set('authToken', token);
  }

  deleteToken() {
    this.cookieService.delete('authToken');
  }
  getToken() {
    return this.cookieService.get('authToken');
  }

  public isAuthenticated(): boolean {
    const token = this.cookieService.get('authToken');
    return token ? true : false;
  }
}
