import { AgentModel } from '@agents/agent-model';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { LocalStorageService } from '@shared/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AgentsService {
  private readonly client = inject(HttpClient);

  private readonly customerId;
  private readonly customerName;

  constructor(private readonly localStorageService: LocalStorageService) {
    this.customerId = this.localStorageService.getCustomerId();
    this.customerName = this.localStorageService.getCustomer();
  }

  getAgents() {
    return this.client.get<AgentModel[]>(
      `${environment.baseUrl}/list-advisors/${this.customerId}`
    );
  }
}
