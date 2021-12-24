import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { IUser } from './user.types';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  fetchUsers(): Observable<IUser[]> {
    return this.http.get('http://localhost:3000/usersDB') as Observable<
      IUser[]
    >;
  }
}
