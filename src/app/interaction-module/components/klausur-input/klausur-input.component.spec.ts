import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlausurInputComponent } from './klausur-input.component';

describe('KlausurInputComponent', () => {
  let component: KlausurInputComponent;
  let fixture: ComponentFixture<KlausurInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KlausurInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KlausurInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
