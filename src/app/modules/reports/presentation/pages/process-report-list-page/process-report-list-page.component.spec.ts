import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessReportListPageComponent } from './process-report-list-page.component';

describe('ProcessReportListPageComponent', () => {
  let component: ProcessReportListPageComponent;
  let fixture: ComponentFixture<ProcessReportListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcessReportListPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessReportListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
