import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BusinessModel } from '@business/business-model';
import { environment } from '@environments/environment';
import { LocalStorageService } from '@shared/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class BusinessService {
  private readonly client = inject(HttpClient);

  private readonly customerId;
  private readonly customerName;
  constructor(private readonly localStorageService: LocalStorageService) {
    this.customerId = this.localStorageService.getCustomerId();
    this.customerName = this.localStorageService.getCustomer();
  }

  getBusinessById(id: string) {
    return this.client.get<BusinessModel>(
      `${environment.baseUrl}/business/${this.customerId}`,
      {
        params: {
          id,
        },
      }
    );
  }
}
