import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from './model/user';
import { UserLogin } from './model/user-login';
import { environment } from 'src/environments/environment';


const CACHE_KEY_TOKEN = 'TOKEN';
const TOKEN_ENDPOINT = `${environment.api}/user/login`;

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  public redirectUrl: string;
  private _user: User;

  constructor(private http: HttpClient) {}

  requestToken(user: UserLogin): Observable<HttpResponse<User>> {
    return this.http.post<User>(
      TOKEN_ENDPOINT,
      {
        userName: user.userName,
        password: user.password,
      },
      { observe: 'response' }
    );
  }

  login(user: UserLogin): Observable<object | User> {
    const loginSubject = new Subject<User>();
    this.requestToken(user).subscribe(
      (response: HttpResponse<User>) => {
        const { body: loggedUser } = response;
        loggedUser.token = response.headers.get('x-access-token');
        this.saveUserInfo(loggedUser);
        loginSubject.next(loggedUser);
      },
      (error) => {
        loginSubject.error(error);
      }
    );
    return loginSubject.asObservable();
  }

  saveUserInfo(user: User) {
    this._user = user;
    this.setUser(this._user);
  }

  /**
   * Efetua o logout do usuário autenticado.
   */
  logout(): void {
    this._user = undefined;
    this.removeUser();
  }

  private setUser(user: User): void {
    sessionStorage.setItem(CACHE_KEY_TOKEN, JSON.stringify(user));
  }

  private removeUser(): void {
    sessionStorage.removeItem(CACHE_KEY_TOKEN);
  }

  getAuthenticatedUser(): User {
    return this._user || JSON.parse(sessionStorage.getItem(CACHE_KEY_TOKEN));
  }

  isUserAuthenticated(): boolean {
    return this.getAuthenticatedUser() !== null;
  }
}
