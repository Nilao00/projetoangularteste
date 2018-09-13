import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadfichaComponent } from './cadficha.component';

describe('CadfichaComponent', () => {
  let component: CadfichaComponent;
  let fixture: ComponentFixture<CadfichaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadfichaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadfichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
