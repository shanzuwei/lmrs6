import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegyyComponent } from './regyy.component';

describe('RegyyComponent', () => {
  let component: RegyyComponent;
  let fixture: ComponentFixture<RegyyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegyyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegyyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
