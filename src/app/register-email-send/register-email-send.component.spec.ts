import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterEmailSendComponent } from './register-email-send.component';

describe('RegisterEmailSendComponent', () => {
  let component: RegisterEmailSendComponent;
  let fixture: ComponentFixture<RegisterEmailSendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterEmailSendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterEmailSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
