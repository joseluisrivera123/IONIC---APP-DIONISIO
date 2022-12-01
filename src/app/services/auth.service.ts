import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginDto } from '../dtos/login.dto';
import { environment } from 'src/environments/environment';
import { PersonaDto } from '../dtos/persona.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { 
  }

  auth(login: LoginDto){
    return this.http.post<PersonaDto[]>(`${environment.apiUrl}/auth/login`, login);
  }

  setSession(persona: PersonaDto){
    localStorage.setItem('usuario', JSON.stringify(persona));
  }

  getSession(): PersonaDto{
    const user = localStorage.getItem('usuario');
    return JSON.parse(user ? user : "");
  }

  deleteSession(){
    localStorage.removeItem('usuario');
  }
}
