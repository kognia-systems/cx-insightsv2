import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriteriasListPageComponent } from './criterias-list-page.component';

describe('CriteriasListPageComponent', () => {
  let component: CriteriasListPageComponent;
  let fixture: ComponentFixture<CriteriasListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriteriasListPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriteriasListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
