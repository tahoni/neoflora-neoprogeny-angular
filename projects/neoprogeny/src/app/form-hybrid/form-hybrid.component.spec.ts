import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHybridComponent } from './form-hybrid.component';

describe('DetailCrudComponent', () => {
  let component: FormHybridComponent;
  let fixture: ComponentFixture<FormHybridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormHybridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormHybridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
