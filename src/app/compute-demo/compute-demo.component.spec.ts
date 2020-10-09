import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputeDemoComponent } from './compute-demo.component';

describe('ComputeDemoComponent', () => {
  let component: ComputeDemoComponent;
  let fixture: ComponentFixture<ComputeDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputeDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
