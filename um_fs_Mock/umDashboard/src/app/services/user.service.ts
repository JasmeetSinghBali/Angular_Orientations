import { Injectable } from '@angular/core';
import {HttpClient,HttpClientModule,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../components/users/users.component';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedUser: Users;
  users: Users[];
  
  readonly baseUrl = 'http://localhost:5000/api';
  // let headers = new HttpHeaders().set('Content-Type','application/json');
  // headers = headers.set('authorization','Bearer '+ token);
  
  constructor(private http: HttpClient){ }
  // getUsers(): Observable<UsersList[]>{
  //   return this.http.get<UsersList[]>(this.apiUrl);
  // }  
}

