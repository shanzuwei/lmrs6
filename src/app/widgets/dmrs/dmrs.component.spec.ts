import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DmrsComponent } from './dmrs.component';

describe('DmrsComponent', () => {
  let component: DmrsComponent;
  let fixture: ComponentFixture<DmrsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmrsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
