import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewKlausurComponent } from './view-klausur.component';

describe('ViewKlausurComponent', () => {
  let component: ViewKlausurComponent;
  let fixture: ComponentFixture<ViewKlausurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewKlausurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewKlausurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
