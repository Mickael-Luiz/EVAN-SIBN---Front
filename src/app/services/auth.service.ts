import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  logar() {
    localStorage.setItem('tokenEvan', 'logado');
  }

  deslogar() {
    localStorage.removeItem('tokenEvan');
  }

  isLogged = () => !!localStorage.getItem('tokenEvan')
}
