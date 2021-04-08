import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostKlausurComponent } from './post-klausur.component';

describe('PostKlausurComponent', () => {
  let component: PostKlausurComponent;
  let fixture: ComponentFixture<PostKlausurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostKlausurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostKlausurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
