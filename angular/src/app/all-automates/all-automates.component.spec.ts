import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAutomatesComponent } from './all-automates.component';

describe('AllAutomatesComponent', () => {
  let component: AllAutomatesComponent;
  let fixture: ComponentFixture<AllAutomatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllAutomatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAutomatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
