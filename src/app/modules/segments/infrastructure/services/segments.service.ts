import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { SegmentModel } from '@segments/segment-model';
import { LocalStorageService } from '@shared/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class SegmentsService {
  private readonly client = inject(HttpClient);

  private readonly customerId;
  private readonly customerName;
  constructor(private readonly localStorageService: LocalStorageService) {
    this.customerId = this.localStorageService.getCustomerId();
    this.customerName = this.localStorageService.getCustomer();
  }

  getSegmentById(business_id: string, segment_id: string) {
    return this.client.get<SegmentModel>(
      `${environment.baseUrl}/segment/${this.customerId}`,
      {
        params: {
          business_id,
          segment_id,
        },
      }
    );
  }
}
