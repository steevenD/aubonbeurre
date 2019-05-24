import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitGraphComponent } from './unit-graph.component';

describe('UnitGraphComponent', () => {
  let component: UnitGraphComponent;
  let fixture: ComponentFixture<UnitGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
