import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/users.model';
import { TrendResponse } from '../models/trends.models';

const apiUrl = environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private dataSource = new BehaviorSubject<User[] | null>(null);
  userFavs = this.dataSource.asObservable();


  constructor(private http: HttpClient) { }

  getUsersByName(data: any): Observable<User[]> {
    const route = `/search/`;
    return this.http.get<any>(`${apiUrl}${route}${data.username}`);
  };

  saveQuery(data: any): Observable<User[]> {
    const route = `/trends/`;
    return this.http.post<any>(`${apiUrl}${route}`, { query: data.username });
  };

  getTrends(): Observable<TrendResponse[]> {
    const route = `/trends/`;
    return this.http.get<any>(`${apiUrl}${route}`);
  };

  updatedDataSource(data: User[] | null) {
    this.dataSource.next(data);
  }

  addToFav(user: User) {

    this.dataSource.subscribe(
      {
        next: (favs) => {
          if (!favs) {
            favs = [];
          }

          favs.push(user);

          this.updatedDataSource(favs);

          const parseData =
            JSON.stringify(favs);

          localStorage.setItem(
            "favs",
            parseData
          );

        }
      }
    );

  }

}
