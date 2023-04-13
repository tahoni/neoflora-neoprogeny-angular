import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HybridFormComponent } from './hybrid-form.component';

describe('HybridFormComponent', () => {
  let component: HybridFormComponent;
  let fixture: ComponentFixture<HybridFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HybridFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HybridFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
