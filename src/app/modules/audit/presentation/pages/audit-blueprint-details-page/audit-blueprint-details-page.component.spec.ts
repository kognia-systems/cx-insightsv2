import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditBlueprintDetailsPageComponent } from './audit-blueprint-details-page.component';

describe('AuditBlueprintDetailsPageComponent', () => {
  let component: AuditBlueprintDetailsPageComponent;
  let fixture: ComponentFixture<AuditBlueprintDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuditBlueprintDetailsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditBlueprintDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
