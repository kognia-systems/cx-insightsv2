import { Component } from '@angular/core';
import { NavbarTitleService } from '../../../../../core/shared/services/navbar-title.service';
import { BlueprintsService } from '@blueprints/blueprints.service';
import { ActivatedRoute } from '@angular/router';
import { BlueprintModel } from '@blueprints/blueprint-model';
import { CommonModule } from '@angular/common';
import { BusinessService } from '../../../../business/infrastructure/services/business.service';
import { SegmentsService } from '@segments/segments.service';
import { BlueprintSectionCardComponent } from "../../../../../core/shared/components/blueprint-section-card/blueprint-section-card.component";

@Component({
  selector: 'app-audit-blueprint-details-page',
  standalone: true,
  imports: [CommonModule, BlueprintSectionCardComponent],
  templateUrl: './audit-blueprint-details-page.component.html',
  styleUrl: './audit-blueprint-details-page.component.scss',
})
export class AuditBlueprintDetailsPageComponent {
  blueprint: BlueprintModel | null = null;
  businessName: string | null = null;
  segmentName: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private titleService: NavbarTitleService,
    private blueprintService: BlueprintsService,
    private businessService: BusinessService,
    private segmentsService: SegmentsService
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Auditoría');
    this.route.queryParams.subscribe((params) => {
      const blueprint_id = params['blueprint_id'];
      const businessId = params['business_id'];
      const segmentId = params['segment_id'];

      this.businessService.getBusinessById(businessId).subscribe((business) => {
        this.businessName = business.name;
      });

      this.segmentsService
      .getSegmentById(businessId, segmentId)
        .subscribe((segment) => {
          this.segmentName = segment.name;
        });

        this.blueprintService
        .getBlueprintById(businessId, segmentId, blueprint_id)
        .subscribe((blueprint) => {
          this.blueprint = blueprint;
        });
      });
    }

    goTo(route: string) {
      throw new Error('Method not implemented.');
    }

}
