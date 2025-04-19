import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueprintListPageComponent } from './blueprint-list-page.component';

describe('BlueprintListPageComponent', () => {
  let component: BlueprintListPageComponent;
  let fixture: ComponentFixture<BlueprintListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlueprintListPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlueprintListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
