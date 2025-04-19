import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BlueprintModel } from '@blueprints/blueprint-model';
import { environment } from '@environments/environment';
import { LocalStorageService } from '@shared/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class BlueprintsService {
  private readonly client = inject(HttpClient);

  private readonly customerId;
  private readonly customerName;

  constructor(
    private readonly localStorageService: LocalStorageService,
  ) {
    this.customerId = this.localStorageService.getCustomerId();
    this.customerName = this.localStorageService.getCustomer();
  }

  getAllBlueprints() {
    return this.client.get<BlueprintModel[]>(
      `${environment.baseUrl}/blueprints-list-all/${this.customerId}`
    );
  }

  getBlueprintById(
    business_id: string,
    segment_id: string,
    blueprint_id: string,
  ) {
    return this.client.get<BlueprintModel>(
      `${environment.baseUrl}/blueprints/${this.customerId}`,
      {
        params: {
          business_id,
          segment_id,
          blueprint_id,
        },
      }
    );
  }
}
