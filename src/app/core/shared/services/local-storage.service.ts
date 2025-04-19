import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private storage = localStorage;
  private userId = 'userId';
  private fullName = 'fullName';
  private customer = 'customer';
  private customerId = 'customerId';
  private userRole = 'role';

  setUserId(userId: string): void {
    this.storage.setItem(this.userId, userId);
  }
  getUserId(): string | null {
    return this.storage.getItem(this.userId);
  }

  setFullName(fistName: string, lastName: string): void {
    const fullName = `${fistName} ${lastName}`;
    this.storage.setItem(this.fullName, fullName);
  }
  getFullName(): string | null {
    return this.storage.getItem(this.fullName);
  }

  setCustomer(customer: string): void {
    this.storage.setItem(this.customer, customer);
  }
  getCustomer(): string | null {
    return this.storage.getItem(this.customer);
  }

  setCustomerId(customerId: string): void {
    this.storage.setItem(this.customerId, customerId);
  }
  getCustomerId(): string | null {
    return this.storage.getItem(this.customerId);
  }

  setUserRole(role: string): void {
    this.storage.setItem(this.userRole, role);
  }
  getUserRole(): string | null {
    return this.storage.getItem(this.userRole);
  }

  clearAll(): void {
    this.storage.clear();
  }
}
