import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberDisplayComponentComponent } from './number-display-component.component';

describe('NumberDisplayComponentComponent', () => {
  let component: NumberDisplayComponentComponent;
  let fixture: ComponentFixture<NumberDisplayComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumberDisplayComponentComponent]
    });
    fixture = TestBed.createComponent(NumberDisplayComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
