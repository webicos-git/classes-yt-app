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
    this.ROOT_URL = 'http://localhost:3000';
  }

  login(username: string, password: string) {
    return this.http.post(`${this.ROOT_URL}/users/login`, {
      username,
      password
    }, {
      observe: 'response'
    });
  }

  signup(name: string, password: string,username: string,contact: string,email: string,standard:string) {
    // console.log("Data,",data)
    return this.http.post(`${this.ROOT_URL}/users`,{name,password,username,contact,email,standard}, {
      observe: 'response'
    });
  }

  getUsers() {
    return this.http.get(`${this.ROOT_URL}/users`)
  }

}