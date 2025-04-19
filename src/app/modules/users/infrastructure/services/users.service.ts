import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly client = inject(HttpClient);


  getUsers(): Observable<UserModel[]> {
    return this.client.get<UserModel[]>(`${environment.baseUrl}/user`);
  }

  getUserById(id: string): Observable<UserModel> {
    return this.client.get<UserModel>(`${environment.baseUrl}/user/${id}`);
  }

  updateUser(id: string, user: any) {
    return this.client.put(`${environment.baseUrl}/user`, user);
  }
}
