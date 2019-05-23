import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinearGraphAutomateComponent } from './linear-graph-automate.component';

describe('LinearGraphAutomateComponent', () => {
  let component: LinearGraphAutomateComponent;
  let fixture: ComponentFixture<LinearGraphAutomateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinearGraphAutomateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinearGraphAutomateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
