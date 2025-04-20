import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTileAudioComponent } from './list-tile-audio.component';

describe('ListTileAudioComponent', () => {
  let component: ListTileAudioComponent;
  let fixture: ComponentFixture<ListTileAudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListTileAudioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTileAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
