import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HybridFormComponent } from './hybrid-form.component';

describe('DetailCrudComponent', () => {
  let component: HybridFormComponent;
  let fixture: ComponentFixture<HybridFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HybridFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HybridFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
