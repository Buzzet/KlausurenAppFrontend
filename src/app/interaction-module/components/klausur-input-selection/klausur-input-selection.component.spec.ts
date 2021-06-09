import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlausurInputSelectionComponent } from './klausur-input-selection.component';

describe('KlausurInputSelectionComponent', () => {
  let component: KlausurInputSelectionComponent;
  let fixture: ComponentFixture<KlausurInputSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KlausurInputSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KlausurInputSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
