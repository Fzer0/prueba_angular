import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class Roles {

  URL_API = 'http://localhost:8080/api/roles'; // 🔴 CAMBIADO A ROLES

  constructor(private http: HttpClient) {}

  getRoles() {
    return this.http.get(this.URL_API);
  }

}