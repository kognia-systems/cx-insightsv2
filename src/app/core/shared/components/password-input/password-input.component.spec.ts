import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { PasswordInputComponent } from './password-input.component';

describe('PasswordInputComponent', () => {
  let component: PasswordInputComponent;
  let fixture: ComponentFixture<PasswordInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordInputComponent, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PasswordInputComponent);
    component = fixture.componentInstance;

    // 👇 Importante: asigna el FormControl antes de detectChanges
    component.control = new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]);

    fixture.detectChanges();
  });

  it('should render component', () => {
    const input = fixture.debugElement.query(By.css('input'));
    expect(input).toBeTruthy();
    expect(input.nativeElement.type).toBe('password');
  });

  it('should render an error if field has been touched and invalid', () => {
    component.control.markAsTouched();
    component.control.setValue('1234');
    fixture.detectChanges();

    const errorMsg = fixture.debugElement.query(By.css('.invalid-feedback'));
    expect(errorMsg).toBeTruthy();
    expect(errorMsg.nativeElement.textContent).toContain(
      'La contraseña es muy corta'
    );
  });

  it('should render an error if field is empty', () => {
    component.control.setValue('');
    component.control.markAsTouched();
    fixture.detectChanges();

    const errorMsg = fixture.debugElement.query(By.css('.invalid-feedback'));
    expect(errorMsg).toBeTruthy();
    expect(errorMsg.nativeElement.textContent).toContain(
      '* La contraseña es obligatoria'
    );
  });

  it('should not render errors if field is valid', () => {
    component.control.setValue('123456');
    component.control.markAsTouched();
    fixture.detectChanges();

    const errorMsg = fixture.debugElement.query(By.css('.invalid-feedback'));
    expect(errorMsg).toBeNull();
  });
});
