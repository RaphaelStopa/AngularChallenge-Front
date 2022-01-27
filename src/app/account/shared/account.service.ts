import { environment } from './../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(private http: HttpClient, private router: Router) { }

  login(user: any){
    let token: string='Token!'
    this.http.post(`${environment.api}/authenticate`, user, {withCredentials: true}).subscribe((json:any) => {
    token = json['id_token'];
    window.localStorage.setItem('token',token);
  }, erro => {
    alert('usuário ou senha não conferem.')
    }
  )
  }

  access() {
    let token: string='Token!'
    let expired;
    try{
      token = window.localStorage.getItem('token');
      expired = this.isTokenExpired(token)
     if(!expired) {
      this.router.navigate(['']);
     }
    } catch(error) {
    }
  }

  async createAccount(account: any) {
    const result = this.http.post<any>(`${environment.api}/register`, account).subscribe(
      resultado => {
        console.log(resultado);
        alert('Cadrastro realizado');
      },
      () => {
          alert('Ocorreu um erro. Favor, conferir se os campos.');
      });
    return result;
  }

  getAuthorizationToken(){
    const token = window.localStorage.getItem('token');
    return token;
  }

  getTokenExpirationDate(token: string): Date {
    const decoded: any = jwtDecode(token);

    if(decoded.exp === undefined) {
      new Date(0);
    }
    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if(!token) {
      return true
    }

    const date = this.getTokenExpirationDate(token);

    if(date === undefined) {
      return false;
    }

    return !(date.valueOf() > new Date().valueOf())
  }

  isUserLoggedIn() {
    const token = this.getAuthorizationToken();
    if(!token) {
      return false;
    } else if (this.isTokenExpired(token)) {
      return false;
    }
    return true;
  }

}


