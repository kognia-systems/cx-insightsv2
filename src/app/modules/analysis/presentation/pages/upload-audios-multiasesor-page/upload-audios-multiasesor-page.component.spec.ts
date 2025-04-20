import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadAudiosMultiasesorPageComponent } from './upload-audios-multiasesor-page.component';

describe('UploadAudiosMultiasesorPageComponent', () => {
  let component: UploadAudiosMultiasesorPageComponent;
  let fixture: ComponentFixture<UploadAudiosMultiasesorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadAudiosMultiasesorPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadAudiosMultiasesorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
