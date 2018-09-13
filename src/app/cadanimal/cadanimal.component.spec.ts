import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadanimalComponent } from './cadanimal.component';

describe('CadanimalComponent', () => {
  let component: CadanimalComponent;
  let fixture: ComponentFixture<CadanimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadanimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadanimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
