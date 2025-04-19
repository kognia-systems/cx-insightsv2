import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentListPageComponent } from './segment-list-page.component';

describe('SegmentListPageComponent', () => {
  let component: SegmentListPageComponent;
  let fixture: ComponentFixture<SegmentListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SegmentListPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegmentListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
