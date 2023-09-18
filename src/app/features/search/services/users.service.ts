import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/users.model';

const apiUrl = environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsersByName(data: any): Observable<User[]> {
    const route = `/search/`;
    return this.http.get<any>(`${apiUrl}${route}${data.username}`);
  };

}
