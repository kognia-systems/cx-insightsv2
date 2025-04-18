import { Injectable } from '@angular/core';
import { UserModel } from 'src/app/modules/users/infrastructure/models/user-model';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private storage = localStorage;
  private key = 'user';

  setUser(user: UserModel): void {
    this.storage.setItem(this.key, JSON.stringify(user));
  }

  getUser(): UserModel | null {
    const raw = this.storage.getItem(this.key);
    return raw ? JSON.parse(raw) : null;
  }

  clearUser(): void {
    this.storage.removeItem(this.key);
  }
}
