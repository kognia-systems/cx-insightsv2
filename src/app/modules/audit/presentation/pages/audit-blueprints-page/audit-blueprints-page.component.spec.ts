import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditBlueprintsPageComponent } from './audit-blueprints-page.component';

describe('AuditBlueprintsPageComponent', () => {
  let component: AuditBlueprintsPageComponent;
  let fixture: ComponentFixture<AuditBlueprintsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuditBlueprintsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditBlueprintsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
