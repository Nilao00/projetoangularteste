import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditfichaComponent } from './editficha.component';

describe('EditfichaComponent', () => {
  let component: EditfichaComponent;
  let fixture: ComponentFixture<EditfichaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditfichaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditfichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
