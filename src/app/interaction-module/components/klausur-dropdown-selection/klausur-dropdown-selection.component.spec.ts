import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlausurDropdownSelectionComponent } from './klausur-dropdown-selection.component';

describe('KlausurDropdownSelectionComponent', () => {
  let component: KlausurDropdownSelectionComponent;
  let fixture: ComponentFixture<KlausurDropdownSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KlausurDropdownSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KlausurDropdownSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
