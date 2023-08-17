import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomNumberComponentComponent } from './random-number-component.component';

describe('RandomNumberComponentComponent', () => {
  let component: RandomNumberComponentComponent;
  let fixture: ComponentFixture<RandomNumberComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RandomNumberComponentComponent]
    });
    fixture = TestBed.createComponent(RandomNumberComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
