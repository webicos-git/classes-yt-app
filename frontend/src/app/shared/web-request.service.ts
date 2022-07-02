import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {
  readonly ROOT_URL;

  constructor(
    private http: HttpClient
  ) {
    this.ROOT_URL = 'https://localhost:3000';
  }

  login(username: string, password: string) {
    return this.http.post(`${this.ROOT_URL}/users/login`, {
      username,
      password
    }, {
      observe: 'response'
    });
  }

  signup(name: string, username: string, email: string, contact: string, standard: string, password: string) {
    return this.http.post(`${this.ROOT_URL}/users`, {
      username,
      password
    }, {
      observe: 'response'
    });
  }

}
