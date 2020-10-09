import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetDemoComponent } from './greet-demo.component';

describe('GreetDemoComponent', () => {
  let component: GreetDemoComponent;
  let fixture: ComponentFixture<GreetDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreetDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreetDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
