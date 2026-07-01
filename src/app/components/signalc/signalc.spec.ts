import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Signalc } from './signalc';

describe('Signalc', () => {
  let component: Signalc;
  let fixture: ComponentFixture<Signalc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Signalc],
    }).compileComponents();

    fixture = TestBed.createComponent(Signalc);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
