import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailInputComponent } from './email-input.component';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('EmailInputComponent', () => {
  let component: EmailInputComponent;
  let fixture: ComponentFixture<EmailInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailInputComponent, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(EmailInputComponent);
    component = fixture.componentInstance;

    // 👇 Importante: asigna el FormControl antes de detectChanges
    component.control = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);

    fixture.detectChanges();
  });

  it('should render component', () => {
    const input = fixture.debugElement.query(By.css('input'));
    expect(input).toBeTruthy();
    expect(input.nativeElement.type).toBe('email');
  });

  it('should render an error if field has been touched and invalid', () => {
    component.control.markAsTouched();
    component.control.setValue('correo-invalido');
    fixture.detectChanges();

    const errorMsg = fixture.debugElement.query(By.css('.invalid-feedback'));
    expect(errorMsg).toBeTruthy();
    expect(errorMsg.nativeElement.textContent).toContain(
      'Ingresa un correo válido'
    );
  });

  it('should render an error if field is empty', () => {
    component.control.setValue('');
    component.control.markAsTouched();
    fixture.detectChanges();

    const errorMsg = fixture.debugElement.query(By.css('.invalid-feedback'));
    expect(errorMsg).toBeTruthy();
    expect(errorMsg.nativeElement.textContent).toContain(
      '* El correo es obligatorio'
    );
  });

  it('should not render errors if field is valid', () => {
    component.control.setValue('usuario@correo.com');
    component.control.markAsTouched();
    fixture.detectChanges();

    const errorMsg = fixture.debugElement.query(By.css('.invalid-feedback'));
    expect(errorMsg).toBeNull();
  });
});
