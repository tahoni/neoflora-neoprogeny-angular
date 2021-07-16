import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HybridEditComponent } from './hybrid-edit.component';

describe('DetailComponent', () => {
  let component: HybridEditComponent;
  let fixture: ComponentFixture<HybridEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HybridEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HybridEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
