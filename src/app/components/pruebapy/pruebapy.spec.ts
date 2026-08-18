import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pruebapy } from './pruebapy';

describe('Pruebapy', () => {
  let component: Pruebapy;
  let fixture: ComponentFixture<Pruebapy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pruebapy],
    }).compileComponents();

    fixture = TestBed.createComponent(Pruebapy);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
