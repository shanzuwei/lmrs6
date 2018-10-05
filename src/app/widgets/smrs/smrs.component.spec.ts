import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmrsComponent } from './smrs.component';

describe('SmrsComponent', () => {
  let component: SmrsComponent;
  let fixture: ComponentFixture<SmrsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmrsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
