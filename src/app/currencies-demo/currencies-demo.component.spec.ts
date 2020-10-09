import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrenciesDemoComponent } from './currencies-demo.component';

describe('CurrenciesDemoComponent', () => {
  let component: CurrenciesDemoComponent;
  let fixture: ComponentFixture<CurrenciesDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrenciesDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrenciesDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
